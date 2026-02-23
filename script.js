// Configuration
const CONFIG = {
    contractAddress: "YOUR_CONTRACT_ADDRESS_HERE",
    vnttTokenAddress: "YOUR_VNTT_TOKEN_ADDRESS",
    usdtTokenAddress: "YOUR_USDT_TOKEN_ADDRESS",
    vntTokenAddress: "YOUR_VNT_TOKEN_ADDRESS",
    feeWallet: "YOUR_FEE_WALLET_ADDRESS",
    networkId: 56, // BSC Mainnet: 56, Testnet: 97
    rpcUrl: "https://bsc-dataseed.binance.org/" // BSC RPC
};

// Contract ABI (simplified - include full ABI from compiled contract)
const CONTRACT_ABI = [
    // Include all functions from the smart contract
    // This is a minimal ABI - replace with full ABI from compilation
    {
        "inputs": [{"name": "_referrer", "type": "address"}],
        "name": "activate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "claimDailyReward",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"name": "_feeType", "type": "string"}],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
    // Add all other functions...
];

// State variables
let web3;
let contract;
let userAccount;
let userData = {
    isActivated: false,
    virtualBalance: '0',
    totalReferrals: 0,
    referralEarnings: '0'
};

// Initialize Web3
async function initWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await web3.eth.getAccounts();
            userAccount = accounts[0];
            
            // Initialize contract
            contract = new web3.eth.Contract(CONTRACT_ABI, CONFIG.contractAddress);
            
            // Update UI
            updateWalletUI();
            await checkUserStatus();
            startDataRefresh();
            
            // Listen for account changes
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', () => window.location.reload());
            
        } catch (error) {
            showToast('Error connecting to wallet', 'error');
            console.error(error);
        }
    } else {
        showToast('Please install MetaMask!', 'error');
    }
}

// Update Wallet UI
function updateWalletUI() {
    if (userAccount) {
        document.getElementById('connectWallet').classList.add('hidden');
        document.getElementById('walletInfo').classList.remove('hidden');
        document.querySelector('.wallet-address').textContent = 
            `${userAccount.slice(0, 6)}...${userAccount.slice(-4)}`;
    } else {
        document.getElementById('connectWallet').classList.remove('hidden');
        document.getElementById('walletInfo').classList.add('hidden');
    }
}

// Check User Status
async function checkUserStatus() {
    if (!contract || !userAccount) return;
    
    try {
        // Check if user is activated
        const user = await contract.methods.users(userAccount).call();
        userData.isActivated = user.isActivated;
        
        if (userData.isActivated) {
            // Show user dashboard, hide activation card
            document.getElementById('activationCard').classList.add('hidden');
            document.getElementById('userDashboard').classList.remove('hidden');
            
            // Update user data
            await updateUserData();
            
            // Check if project ended
            await checkProjectEnded();
        } else {
            document.getElementById('activationCard').classList.remove('hidden');
            document.getElementById('userDashboard').classList.add('hidden');
        }
    } catch (error) {
        console.error('Error checking user status:', error);
    }
}

// Update User Data
async function updateUserData() {
    if (!contract || !userAccount) return;
    
    try {
        // Get virtual balance
        const virtualBalance = await contract.methods.getUserVirtualBalance(userAccount).call();
        document.getElementById('virtualBalance').textContent = 
            `${web3.utils.fromWei(virtualBalance, 'ether')} VNTT`;
        
        // Check if can claim today
        const canClaim = await contract.methods.canClaimToday(userAccount).call();
        document.getElementById('claimDailyBtn').disabled = !canClaim;
        
        // Get referral counts for each level
        let totalReferrals = 0;
        for (let i = 0; i < 10; i++) {
            const count = await contract.methods.getReferralCount(userAccount, i).call();
            document.getElementById(`level${i+1}Count`).textContent = count;
            totalReferrals += parseInt(count);
            
            // Get referral earnings for each level (you'll need to calculate this)
            // This is simplified - you might want to track earnings per level separately
        }
        
        document.getElementById('totalReferrals').textContent = totalReferrals;
        
        // Get total referral earnings
        const referralEarnings = await contract.methods.getTotalReferralEarnings(userAccount).call();
        document.getElementById('referralEarnings').textContent = 
            `${web3.utils.fromWei(referralEarnings, 'ether')} VNTT`;
        
    } catch (error) {
        console.error('Error updating user data:', error);
    }
}

// Check if Project Ended
async function checkProjectEnded() {
    if (!contract) return;
    
    const projectEndTime = await contract.methods.projectEndTime().call();
    const currentTime = Math.floor(Date.now() / 1000);
    
    if (currentTime >= projectEndTime) {
        document.getElementById('withdrawalSection').classList.remove('hidden');
        
        // Get withdrawal fees
        const feeUSDT = await contract.methods.withdrawalFeeUSDT().call();
        const feeVNT = await contract.methods.withdrawalFeeVNT().call();
        
        document.getElementById('withdrawalFeeUSDT').textContent = 
            web3.utils.fromWei(feeUSDT, 'ether');
        document.getElementById('withdrawalFeeVNT').textContent = 
            web3.utils.fromWei(feeVNT, 'ether');
    }
}

// Activate User
async function activateUser() {
    if (!contract || !userAccount) {
        showToast('Please connect wallet first', 'error');
        return;
    }
    
    const referrerAddress = document.getElementById('referrerAddress').value;
    if (!web3.utils.isAddress(referrerAddress)) {
        showToast('Invalid referrer address', 'error');
        return;
    }
    
    try {
        // First approve USDT transfer
        const usdtContract = new web3.eth.Contract(ERC20_ABI, CONFIG.usdtTokenAddress);
        const activationFee = await contract.methods.activationFee().call();
        
        await usdtContract.methods.approve(CONFIG.contractAddress, activationFee)
            .send({ from: userAccount });
        
        // Activate user
        await contract.methods.activate(referrerAddress)
            .send({ from: userAccount })
            .on('transactionHash', (hash) => {
                showToast('Transaction submitted: ' + hash.slice(0, 10) + '...', 'info');
            })
            .on('receipt', () => {
                showToast('Account activated successfully!', 'success');
                checkUserStatus();
            });
        
    } catch (error) {
        console.error('Activation error:', error);
        showToast(error.message, 'error');
    }
}

// Claim Daily Reward
async function claimDailyReward() {
    if (!contract || !userAccount) return;
    
    try {
        await contract.methods.claimDailyReward()
            .send({ from: userAccount })
            .on('receipt', () => {
                showToast('Daily reward claimed!', 'success');
                updateUserData();
            });
    } catch (error) {
        console.error('Claim error:', error);
        showToast(error.message, 'error');
    }
}

async function withdraw(feeType) {
    if (!contract || !userAccount) return;
    
    try {
        if (feeType === 'USDT') {
            const usdtContract = new web3.eth.Contract(ERC20_ABI, CONFIG.usdtTokenAddress);
            const fee = await contract.methods.withdrawalFeeUSDT().call();
            await usdtContract.methods.approve(CONFIG.contractAddress, fee)
                .send({ from: userAccount });
            
            // 1 for USDT
            await contract.methods.withdraw(1)
                .send({ from: userAccount })
                .on('receipt', () => {
                    showToast('Withdrawal successful!', 'success');
                    updateUserData();
                });
                
        } else if (feeType === 'VNT') {
            const vntContract = new web3.eth.Contract(ERC20_ABI, CONFIG.vntTokenAddress);
            const fee = await contract.methods.withdrawalFeeVNT().call();
            await vntContract.methods.approve(CONFIG.contractAddress, fee)
                .send({ from: userAccount });
            
            // 2 for VNT
            await contract.methods.withdraw(2)
                .send({ from: userAccount })
                .on('receipt', () => {
                    showToast('Withdrawal successful!', 'success');
                    updateUserData();
                });
        }
        
    } catch (error) {
        console.error('Withdrawal error:', error);
        showToast(error.message, 'error');
    }
}

// Show Level Details
async function showLevelDetails(level) {
    if (!contract || !userAccount) return;
    
    const modal = document.getElementById('levelModal');
    document.getElementById('modalLevelTitle').querySelector('span').textContent = level;
    
    // Get referral addresses for this level
    const addresses = await contract.methods.getReferralAddresses(userAccount, level - 1).call();
    
    const membersList = document.getElementById('levelMembersList');
    membersList.innerHTML = '';
    
    addresses.forEach((addr, index) => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member-item';
        memberDiv.innerHTML = `
            <span>${index + 1}. ${addr.slice(0, 6)}...${addr.slice(-4)}</span>
            <span class="member-reward">+10 VNTT</span>
        `;
        membersList.appendChild(memberDiv);
    });
    
    modal.style.display = 'flex';
}

// Update Project Timer
async function updateTimer() {
    if (!contract) return;
    
    const endTime = await contract.methods.projectEndTime().call();
    const currentTime = Math.floor(Date.now() / 1000);
    
    if (currentTime < endTime) {
        const remaining = endTime - currentTime;
        const days = Math.floor(remaining / 86400);
        const hours = Math.floor((remaining % 86400) / 3600);
        const minutes = Math.floor((remaining % 3600) / 60);
        
        document.getElementById('timeRemaining').textContent = 
            `${days}d ${hours}h ${minutes}m`;
    } else {
        document.getElementById('timeRemaining').textContent = 'Project Ended';
    }
}

// Show Toast
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    
    if (type === 'success') {
        toast.style.borderColor = '#00ff00';
    } else if (type === 'error') {
        toast.style.borderColor = '#ff0000';
    }
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 5000);
}

// Handle Account Change
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        userAccount = null;
    } else {
        userAccount = accounts[0];
    }
    updateWalletUI();
    checkUserStatus();
}

// Start Data Refresh
function startDataRefresh() {
    // Update user data every 30 seconds
    setInterval(updateUserData, 30000);
    // Update timer every second
    setInterval(updateTimer, 1000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Connect Wallet
    document.getElementById('connectWallet').addEventListener('click', initWeb3);
    
    // Activate
    document.getElementById('activateBtn').addEventListener('click', activateUser);
    
    // Claim Daily
    document.getElementById('claimDailyBtn').addEventListener('click', claimDailyReward);
    
    // Withdraw Buttons
    document.getElementById('withdrawUSDTBtn').addEventListener('click', () => withdraw('USDT'));
    document.getElementById('withdrawVNTBtn').addEventListener('click', () => withdraw('VNT'));
    
    // Modal Close
    document.querySelector('.close-modal').addEventListener('click', () => {
        document.getElementById('levelModal').style.display = 'none';
    });
    
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        // Auto-connect if previously connected
        window.ethereum.request({ method: 'eth_accounts' })
            .then(accounts => {
                if (accounts.length > 0) {
                    initWeb3();
                }
            });
    }
});

// ERC20 ABI (minimal for approve)
const ERC20_ABI = [
    {
        "constant": false,
        "inputs": [
            {"name": "spender", "type": "address"},
            {"name": "amount", "type": "uint256"}
        ],
        "name": "approve",
        "outputs": [{"name": "", "type": "bool"}],
        "type": "function"
    }
];
