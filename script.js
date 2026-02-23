// Configuration
const CONFIG = {
    contractAddress: "0x482134487d6b69F44BADD92CB6a1103c260FA55b",
    vnttTokenAddress: "0x6033849Dc89eC1DB364EFcd8A6cf9Bc095cD3e41",
    usdtTokenAddress: "0x55d398326f99059fF775485246999027B3197955",
    vntTokenAddress: "0xD379Fd70C5C334bb31208122A6781ADB032D176f",
    feeWallet: "0x0142f7473B3dce0A5154A2DA5D076D865c1560d7",
    networkId: 56, // BSC Mainnet: 56, Testnet: 97
    rpcUrl: "https://bsc-dataseed.binance.org/" // BSC RPC
};

// Contract ABI (simplified - include full ABI from compiled contract)
const CONTRACT_ABI = [{"inputs":[{"internalType":"address","name":"_vnttToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"},{"internalType":"uint96","name":"_activationFee","type":"uint96"},{"internalType":"uint96","name":"_withdrawalFeeUSDT","type":"uint96"},{"internalType":"uint96","name":"_withdrawalFeeVNT","type":"uint96"},{"internalType":"uint32","name":"_durationDays","type":"uint32"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyClaimed","type":"error"},{"inputs":[],"name":"AlreadyRegistered","type":"error"},{"inputs":[],"name":"AlreadyWithdrawn","type":"error"},{"inputs":[],"name":"Blacklisted","type":"error"},{"inputs":[],"name":"InsufficientAllowance","type":"error"},{"inputs":[],"name":"InsufficientBalance","type":"error"},{"inputs":[],"name":"InvalidAddress","type":"error"},{"inputs":[],"name":"InvalidFeeType","type":"error"},{"inputs":[],"name":"InvalidReferrer","type":"error"},{"inputs":[],"name":"LevelOutOfBounds","type":"error"},{"inputs":[],"name":"NoBalance","type":"error"},{"inputs":[],"name":"NotActivated","type":"error"},{"inputs":[],"name":"ProjectEnded","type":"error"},{"inputs":[],"name":"ProjectNotEnded","type":"error"},{"inputs":[],"name":"ReferrerNotActivated","type":"error"},{"inputs":[],"name":"RewardTooLarge","type":"error"},{"inputs":[],"name":"SelfReferral","type":"error"},{"inputs":[],"name":"TransferFailed","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"BlacklistUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DailyRewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint96","name":"newActivationFee","type":"uint96"},{"indexed":false,"internalType":"uint96","name":"newWithdrawalFeeUSDT","type":"uint96"},{"indexed":false,"internalType":"uint96","name":"newWithdrawalFeeVNT","type":"uint96"}],"name":"FeesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"dataId","type":"uint256"}],"name":"ManualDataStored","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newEndTime","type":"uint256"}],"name":"ProjectDurationUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"ProjectEndedEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"UserActivated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"feeType","type":"uint8"}],"name":"Withdrawal","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"}],"name":"activate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"activationFee","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"canClaimToday","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimDailyReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getActivationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getLastClaimTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dataId","type":"uint256"}],"name":"getManualData","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"getReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTimeRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTotalReferralEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserRealBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserVirtualBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isUserActivated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"manualData","outputs":[{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"},{"internalType":"uint40","name":"timestamp","type":"uint40"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manualDataCount","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerAutoActivated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectEndTime","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectStartTime","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"registeredUsers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_key","type":"string"},{"internalType":"string","name":"_value","type":"string"}],"name":"storeManualData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bool","name":"_status","type":"bool"}],"name":"updateBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newFeeWallet","type":"address"}],"name":"updateFeeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint96","name":"_newActivationFee","type":"uint96"},{"internalType":"uint96","name":"_newWithdrawalFeeUSDT","type":"uint96"},{"internalType":"uint96","name":"_newWithdrawalFeeVNT","type":"uint96"}],"name":"updateFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"_newEndTime","type":"uint128"}],"name":"updateProjectDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[10]","name":"_newRewards","type":"uint256[10]"}],"name":"updateReferralRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint96","name":"virtualBalance","type":"uint96"},{"internalType":"uint96","name":"realBalance","type":"uint96"},{"internalType":"uint96","name":"totalReferralEarnings","type":"uint96"},{"internalType":"uint32","name":"activationTime","type":"uint32"},{"internalType":"uint32","name":"lastClaimTime","type":"uint32"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"bool","name":"isActivated","type":"bool"},{"internalType":"bool","name":"hasWithdrawn","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnttToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_feeType","type":"uint8"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawalFeeUSDT","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawalFeeVNT","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

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
        }
        
        document.getElementById('totalReferrals').textContent = totalReferrals;
        
        // Get total referral earnings
        const referralEarnings = await contract.methods.getTotalReferralEarnings(userAccount).call();
        document.getElementById('referralEarnings').textContent = 
            `${web3.utils.fromWei(referralEarnings, 'ether')} VNTT`;
        
        // ✅ NEW LINE: Update referral link when user data updates
        updateReferralLink();
        
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

async function showLevelDetails(level) {
    if (!contract || !userAccount) return;
    
    const modal = document.getElementById('levelModal');
    document.getElementById('modalLevelTitle').querySelector('span').textContent = level;
    
    // Sirf count दिखाएं, addresses नहीं
    const count = await contract.methods.getReferralCount(userAccount, level - 1).call();
    
    const membersList = document.getElementById('levelMembersList');
    membersList.innerHTML = `<p class="info-message">Total <strong>${count}</strong> members in Level ${level}</p>
                             <p class="note-message">Address list coming soon!</p>`;
    
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

function updateReferralLink() {
    if (!userAccount) {
        const linkInput = document.getElementById('referralLink');
        if (linkInput) {
            linkInput.value = 'Connect wallet to see referral link';
        }
        return;
    }
    
    const baseUrl = window.location.origin + window.location.pathname;
    // Clean URL - remove existing query params
    const cleanUrl = baseUrl.split('?')[0];
    const referralLink = `${cleanUrl}?ref=${userAccount}`;
    
    const linkInput = document.getElementById('referralLink');
    if (linkInput) {
        linkInput.value = referralLink;
    }
}

// Copy Referral Link
function copyReferralLink() {
    const linkInput = document.getElementById('referralLink');
    if (!linkInput || !linkInput.value || linkInput.value.includes('Connect wallet')) {
        showToast('No referral link available', 'error');
        return;
    }
    
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); // For mobile
    
    try {
        // Modern way
        navigator.clipboard.writeText(linkInput.value).then(() => {
            showToast('✅ Referral link copied! Share with friends', 'success');
        }).catch(() => {
            // Fallback
            document.execCommand('copy');
            showToast('✅ Referral link copied! Share with friends', 'success');
        });
    } catch (err) {
        // Fallback for older browsers
        document.execCommand('copy');
        showToast('✅ Referral link copied! Share with friends', 'success');
    }
}

// Auto-fill referrer from URL
function getReferrerFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = urlParams.get('ref');
    
    if (referrer && window.web3 && window.web3.utils && window.web3.utils.isAddress(referrer)) {
        const referrerInput = document.getElementById('referrerAddress');
        if (referrerInput) {
            referrerInput.value = referrer;
            referrerInput.style.border = '2px solid #00ff00';
            showToast('✨ Referrer address auto-filled!', 'info');
            
            // Remove highlight after 3 seconds
            setTimeout(() => {
                referrerInput.style.border = '';
            }, 3000);
        }
    }
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
    const connectBtn = document.getElementById('connectWallet');
    if (connectBtn) {
        connectBtn.addEventListener('click', initWeb3);
    }
    
    // Activate
    const activateBtn = document.getElementById('activateBtn');
    if (activateBtn) {
        activateBtn.addEventListener('click', activateUser);
    }
    
    // Claim Daily
    const claimBtn = document.getElementById('claimDailyBtn');
    if (claimBtn) {
        claimBtn.addEventListener('click', claimDailyReward);
    }
    
    // Withdraw Buttons
    const withdrawUSDTBtn = document.getElementById('withdrawUSDTBtn');
    if (withdrawUSDTBtn) {
        withdrawUSDTBtn.addEventListener('click', () => withdraw('USDT'));
    }
    
    const withdrawVNTBtn = document.getElementById('withdrawVNTBtn');
    if (withdrawVNTBtn) {
        withdrawVNTBtn.addEventListener('click', () => withdraw('VNT'));
    }
    
    // Modal Close
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            const modal = document.getElementById('levelModal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Copy button event listener
    const copyBtn = document.getElementById('copyLinkBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', copyReferralLink);
    }
    
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        // Auto-connect if previously connected
        window.ethereum.request({ method: 'eth_accounts' })
            .then(accounts => {
                if (accounts.length > 0) {
                    initWeb3();
                }
                // Get referrer from URL even if not connected
                if (typeof getReferrerFromUrl === 'function') {
                    getReferrerFromUrl();
                }
            })
            .catch(error => {
                console.error('Error checking accounts:', error);
                if (typeof getReferrerFromUrl === 'function') {
                    getReferrerFromUrl();
                }
            });
    } else {
        // Try to get referrer from URL anyway
        if (typeof getReferrerFromUrl === 'function') {
            getReferrerFromUrl();
        }
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
