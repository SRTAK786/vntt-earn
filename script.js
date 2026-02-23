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

// ========== INITIALIZATION ==========
async function initWeb3() {
    console.log('🚀 Initializing Web3...');
    
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await web3.eth.getAccounts();
            userAccount = accounts[0];
            console.log('✅ Connected account:', userAccount);
            
            contract = new web3.eth.Contract(CONTRACT_ABI, CONFIG.contractAddress);
            console.log('✅ Contract initialized');
            
            updateWalletUI();
            await checkUserStatus();
            startDataRefresh();
            
            // Check for referrer in URL after Web3 is initialized
            setTimeout(() => {
                console.log('🔍 Checking URL for referrer after Web3 init...');
                getReferrerFromUrl();
            }, 1000);
            
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', () => window.location.reload());
            
        } catch (error) {
            console.error('❌ Error:', error);
            showToast('Error connecting to wallet', 'error');
            document.getElementById('activationCard').classList.remove('hidden');
            document.getElementById('userDashboard').classList.add('hidden');
        }
    } else {
        showToast('Please install MetaMask!', 'error');
        document.getElementById('activationCard').classList.remove('hidden');
        document.getElementById('userDashboard').classList.add('hidden');
    }
}

// ========== UI UPDATES ==========
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

// ========== CHECK USER STATUS ==========
async function checkUserStatus() {
    if (!contract || !userAccount) {
        console.log('No wallet - showing activation card');
        document.getElementById('activationCard').classList.remove('hidden');
        document.getElementById('userDashboard').classList.add('hidden');
        return;
    }
    
    try {
        console.log('Checking user status...');
        const user = await contract.methods.users(userAccount).call();
        console.log('User data:', user);
        
        userData.isActivated = user.isActivated;
        
        if (userData.isActivated) {
            console.log('User activated - showing dashboard');
            document.getElementById('activationCard').classList.add('hidden');
            document.getElementById('userDashboard').classList.remove('hidden');
            
            // ✅ FIX: Daily claim button ko visible करें
            const claimBtn = document.getElementById('claimDailyBtn');
            if (claimBtn) {
                claimBtn.style.display = 'block';
                claimBtn.disabled = false;
                console.log('✅ Claim button enabled');
            }
            
            await updateUserData();
            await checkProjectEnded();
        } else {
            console.log('User NOT activated - showing activation card');
            document.getElementById('activationCard').classList.remove('hidden');
            document.getElementById('userDashboard').classList.add('hidden');
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('activationCard').classList.remove('hidden');
        document.getElementById('userDashboard').classList.add('hidden');
    }
}

// ========== UPDATE USER DATA ==========
async function updateUserData() {
    if (!contract || !userAccount) return;
    
    try {
        const virtualBalance = await contract.methods.getUserVirtualBalance(userAccount).call();
        document.getElementById('virtualBalance').textContent = 
            `${web3.utils.fromWei(virtualBalance, 'ether')} VNTT`;
        
        const canClaim = await contract.methods.canClaimToday(userAccount).call();
        document.getElementById('claimDailyBtn').disabled = !canClaim;
        
        let totalReferrals = 0;
        for (let i = 0; i < 10; i++) {
            const count = await contract.methods.getReferralCount(userAccount, i).call();
            document.getElementById(`level${i+1}Count`).textContent = count;
            totalReferrals += parseInt(count);
        }
        
        document.getElementById('totalReferrals').textContent = totalReferrals;
        
        const referralEarnings = await contract.methods.getTotalReferralEarnings(userAccount).call();
        document.getElementById('referralEarnings').textContent = 
            `${web3.utils.fromWei(referralEarnings, 'ether')} VNTT`;
        
        updateReferralLink();
        
    } catch (error) {
        console.error('Error updating user data:', error);
    }
}

// ========== CHECK PROJECT ENDED ==========
async function checkProjectEnded() {
    if (!contract) return;
    
    const projectEndTime = await contract.methods.projectEndTime().call();
    const currentTime = Math.floor(Date.now() / 1000);
    
    if (currentTime >= projectEndTime) {
        document.getElementById('withdrawalSection').classList.remove('hidden');
        
        const feeUSDT = await contract.methods.withdrawalFeeUSDT().call();
        const feeVNT = await contract.methods.withdrawalFeeVNT().call();
        
        document.getElementById('withdrawalFeeUSDT').textContent = 
            web3.utils.fromWei(feeUSDT, 'ether');
        document.getElementById('withdrawalFeeVNT').textContent = 
            web3.utils.fromWei(feeVNT, 'ether');
    }
}

// ========== ACTIVATE USER ==========
async function activateUser() {
    console.log('🚀 Activate button clicked!');
    
    if (!contract) {
        showToast('❌ Contract not initialized', 'error');
        return;
    }
    
    if (!userAccount) {
        showToast('❌ Please connect wallet first', 'error');
        return;
    }
    
    const referrerAddress = document.getElementById('referrerAddress').value;
    console.log('Referrer address:', referrerAddress);
    
    if (!web3.utils.isAddress(referrerAddress)) {
        showToast('❌ Invalid referrer address', 'error');
        return;
    }
    
    const activateBtn = document.getElementById('activateBtn');
    const originalText = activateBtn.innerHTML;
    activateBtn.disabled = true;
    activateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    try {
        const activationFee = await contract.methods.activationFee().call();
        console.log('Activation fee:', activationFee.toString());
        
        const usdtContract = new web3.eth.Contract(ERC20_ABI, CONFIG.usdtTokenAddress);
        
        await usdtContract.methods.approve(CONFIG.contractAddress, activationFee)
            .send({ from: userAccount })
            .on('transactionHash', (hash) => {
                console.log('Approve TX:', hash);
                showToast('⏳ Approving USDT...', 'info');
            });
        
        showToast('✅ USDT Approved!', 'success');
        
        await contract.methods.activate(referrerAddress)
            .send({ from: userAccount })
            .on('transactionHash', (hash) => {
                console.log('Activate TX:', hash);
                showToast('⏳ Activating account...', 'info');
            });
        
        console.log('✅ Activation successful!');
        showToast('🎉 Account activated successfully!', 'success');
        await checkUserStatus();
        
    } catch (error) {
        console.error('❌ Error:', error);
        
        if (error.message.includes('user rejected')) {
            showToast('❌ Transaction rejected', 'error');
        } else if (error.message.includes('AlreadyRegistered')) {
            showToast('❌ Already registered!', 'error');
        } else if (error.message.includes('ReferrerNotActivated')) {
            showToast('❌ Referrer not activated!', 'error');
        } else {
            showToast('❌ Error: ' + error.message.slice(0, 50), 'error');
        }
    } finally {
        activateBtn.disabled = false;
        activateBtn.innerHTML = originalText;
    }
}

// ========== CLAIM DAILY REWARD ==========
async function claimDailyReward() {
    console.log('🚀 Claim button clicked!');
    
    // Check if web3 is initialized
    if (!window.web3 || !window.ethereum) {
        showToast('❌ Please install MetaMask first!', 'error');
        return;
    }
    
    if (!contract) {
        showToast('❌ Contract not initialized. Please connect wallet first.', 'error');
        return;
    }
    
    if (!userAccount) {
        showToast('❌ Please connect wallet first', 'error');
        return;
    }
    
    // Check if user is activated
    if (!userData.isActivated) {
        showToast('❌ Please activate your account first', 'error');
        return;
    }
    
    const claimBtn = document.getElementById('claimDailyBtn');
    const originalText = claimBtn.innerHTML;
    
    // Disable button and show loading
    claimBtn.disabled = true;
    claimBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Claiming...';
    
    try {
        console.log('Claiming daily reward for:', userAccount);
        
        // First check if can claim
        const canClaim = await contract.methods.canClaimToday(userAccount).call();
        if (!canClaim) {
            showToast('❌ You have already claimed today!', 'error');
            claimBtn.disabled = false;
            claimBtn.innerHTML = originalText;
            return;
        }
        
        // Send transaction
        await contract.methods.claimDailyReward()
            .send({ from: userAccount })
            .on('transactionHash', (hash) => {
                console.log('Claim TX:', hash);
                showToast('⏳ Claiming reward... Transaction: ' + hash.slice(0, 10) + '...', 'info');
            })
            .on('receipt', (receipt) => {
                console.log('✅ Claim successful:', receipt);
                showToast('✅ Daily reward claimed successfully!', 'success');
            })
            .on('error', (error) => {
                console.error('Transaction error:', error);
                throw error;
            });
        
        // Wait a moment for blockchain to update
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Update user data
        await updateUserData();
        
        // Check if can claim again
        const canClaimNow = await contract.methods.canClaimToday(userAccount).call();
        claimBtn.disabled = !canClaimNow;
        
    } catch (error) {
        console.error('❌ Claim error:', error);
        
        // Handle specific errors
        if (error.message.includes('AlreadyClaimed')) {
            showToast('❌ You have already claimed today!', 'error');
        } else if (error.message.includes('user rejected')) {
            showToast('❌ Transaction was rejected', 'error');
        } else if (error.message.includes('NotActivated')) {
            showToast('❌ Your account is not activated!', 'error');
        } else if (error.message.includes('insufficient funds')) {
            showToast('❌ Insufficient BNB for gas', 'error');
        } else {
            showToast('❌ Error: ' + (error.message || 'Unknown error').slice(0, 50), 'error');
        }
        
        // Check current claim status
        try {
            const canClaimNow = await contract.methods.canClaimToday(userAccount).call();
            claimBtn.disabled = !canClaimNow;
        } catch {
            claimBtn.disabled = false;
        }
    } finally {
        claimBtn.innerHTML = originalText;
    }
}

// ========== WITHDRAW ==========
async function withdraw(feeType) {
    if (!contract || !userAccount) return;
    
    try {
        if (feeType === 'USDT') {
            const usdtContract = new web3.eth.Contract(ERC20_ABI, CONFIG.usdtTokenAddress);
            const fee = await contract.methods.withdrawalFeeUSDT().call();
            await usdtContract.methods.approve(CONFIG.contractAddress, fee)
                .send({ from: userAccount });
            await contract.methods.withdraw(1).send({ from: userAccount });
        } else if (feeType === 'VNT') {
            const vntContract = new web3.eth.Contract(ERC20_ABI, CONFIG.vntTokenAddress);
            const fee = await contract.methods.withdrawalFeeVNT().call();
            await vntContract.methods.approve(CONFIG.contractAddress, fee)
                .send({ from: userAccount });
            await contract.methods.withdraw(2).send({ from: userAccount });
        }
        
        showToast('✅ Withdrawal successful!', 'success');
        await updateUserData();
        
    } catch (error) {
        console.error('Error:', error);
        showToast('❌ Withdrawal failed', 'error');
    }
}

// ========== REFERRAL LINK FUNCTIONS ==========
function updateReferralLink() {
    if (!userAccount) {
        const linkInput = document.getElementById('referralLink');
        if (linkInput) {
            linkInput.value = 'Connect wallet to see referral link';
        }
        return;
    }
    
    const baseUrl = window.location.origin + window.location.pathname;
    const cleanUrl = baseUrl.split('?')[0];
    const referralLink = `${cleanUrl}?ref=${userAccount}`;
    
    const linkInput = document.getElementById('referralLink');
    if (linkInput) {
        linkInput.value = referralLink;
    }
}

function copyReferralLink() {
    const linkInput = document.getElementById('referralLink');
    if (!linkInput || !linkInput.value || linkInput.value.includes('Connect wallet')) {
        showToast('No referral link available', 'error');
        return;
    }
    
    linkInput.select();
    navigator.clipboard.writeText(linkInput.value).then(() => {
        showToast('✅ Referral link copied!', 'success');
    }).catch(() => {
        document.execCommand('copy');
        showToast('✅ Referral link copied!', 'success');
    });
}

// ========== GET REFERRER FROM URL ==========
function getReferrerFromUrl() {
    console.log('🔍 Checking URL for referrer...');
    
    try {
        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const referrer = urlParams.get('ref');
        
        console.log('📌 Raw referrer from URL:', referrer);
        
        if (!referrer) {
            console.log('📭 No referrer in URL');
            return;
        }
        
        // Check if web3 is available
        if (typeof window.web3 !== 'undefined' && window.web3 && window.web3.utils) {
            // Validate address
            if (window.web3.utils.isAddress(referrer)) {
                console.log('✅ Valid address found:', referrer);
                fillReferrerAddress(referrer);
            } else {
                console.log('❌ Invalid address format:', referrer);
                showToast('⚠️ Invalid referral address in URL', 'error');
            }
        } else {
            console.log('⏳ Web3 not ready, waiting...');
            // Try again after Web3 is loaded
            const checkWeb3Interval = setInterval(() => {
                if (typeof window.web3 !== 'undefined' && window.web3 && window.web3.utils) {
                    clearInterval(checkWeb3Interval);
                    if (window.web3.utils.isAddress(referrer)) {
                        console.log('✅ Web3 loaded, valid address found:', referrer);
                        fillReferrerAddress(referrer);
                    }
                }
            }, 500);
            
            // Stop checking after 10 seconds
            setTimeout(() => clearInterval(checkWeb3Interval), 10000);
        }
    } catch (error) {
        console.error('Error in getReferrerFromUrl:', error);
    }
}

// Helper function to fill referrer address
function fillReferrerAddress(referrer) {
    const referrerInput = document.getElementById('referrerAddress');
    if (!referrerInput) {
        console.log('❌ Referrer input not found');
        return;
    }
    
    // Set the value
    referrerInput.value = referrer;
    
    // Highlight the input
    referrerInput.style.border = '2px solid #00ff00';
    referrerInput.style.boxShadow = '0 0 20px #00ff00';
    referrerInput.style.transition = 'all 0.3s ease';
    
    // Show success message
    showToast('✨ Referrer address auto-filled!', 'success');
    
    // Enable activate button if wallet is connected
    const activateBtn = document.getElementById('activateBtn');
    if (activateBtn && userAccount) {
        activateBtn.disabled = false;
    }
    
    // Remove highlight after 3 seconds
    setTimeout(() => {
        referrerInput.style.border = '';
        referrerInput.style.boxShadow = '';
    }, 3000);
    
    console.log('✅ Referrer address filled successfully');
}

// Also add this function to check Web3 initialization
function waitForWeb3(callback, maxAttempts = 20) {
    let attempts = 0;
    const checkInterval = setInterval(() => {
        attempts++;
        if (typeof window.web3 !== 'undefined' && window.web3 && window.web3.utils) {
            clearInterval(checkInterval);
            callback(true);
        } else if (attempts >= maxAttempts) {
            clearInterval(checkInterval);
            console.log('⏰ Web3 initialization timeout');
            callback(false);
        }
    }, 500);
}

// ========== SHOW LEVEL DETAILS ==========
async function showLevelDetails(level) {
    if (!contract || !userAccount) {
        showToast('Please connect wallet first', 'info');
        return;
    }
    
    const modal = document.getElementById('levelModal');
    document.getElementById('modalLevelTitle').querySelector('span').textContent = level;
    
    const count = await contract.methods.getReferralCount(userAccount, level - 1).call();
    
    const membersList = document.getElementById('levelMembersList');
    membersList.innerHTML = `<p class="info-message">📊 Total <strong>${count}</strong> members in Level ${level}</p>`;
    
    modal.style.display = 'flex';
}

// ========== UPDATE TIMER ==========
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

// ========== SHOW TOAST ==========
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    
    if (type === 'success') toast.style.borderColor = '#00ff00';
    else if (type === 'error') toast.style.borderColor = '#ff0000';
    else toast.style.borderColor = '#00ffff';
    
    setTimeout(() => toast.classList.add('hidden'), 5000);
}

// ========== HANDLE ACCOUNT CHANGE ==========
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        userAccount = null;
        document.getElementById('activationCard').classList.remove('hidden');
        document.getElementById('userDashboard').classList.add('hidden');
    } else {
        userAccount = accounts[0];
        checkUserStatus();
    }
    updateWalletUI();
}

// ========== START DATA REFRESH ==========
function startDataRefresh() {
    setInterval(updateUserData, 30000);
    setInterval(updateTimer, 1000);
}

// ========== EVENT LISTENERS ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('📱 DOM loaded - setting up event listeners...');
    
    // Connect Wallet
    const connectBtn = document.getElementById('connectWallet');
    if (connectBtn) {
        connectBtn.addEventListener('click', initWeb3);
        console.log('✅ Connect wallet listener added');
    }
    
    // Activate button
    const activateBtn = document.getElementById('activateBtn');
    const referrerInput = document.getElementById('referrerAddress');
    
    if (activateBtn && referrerInput) {
        // Input listener
        referrerInput.addEventListener('input', function() {
            if (window.web3 && window.web3.utils && window.web3.utils.isAddress(this.value) && userAccount) {
                activateBtn.disabled = false;
                console.log('✅ Activate button enabled');
            } else {
                activateBtn.disabled = true;
                console.log('❌ Activate button disabled');
            }
        });
        
        // Click listener
        activateBtn.addEventListener('click', activateUser);
        console.log('✅ Activate button listener added');
    }
    
    // Claim Daily button - FIXED VERSION
    const claimBtn = document.getElementById('claimDailyBtn');
    if (claimBtn) {
        // Remove any existing listeners
        const newClaimBtn = claimBtn.cloneNode(true);
        claimBtn.parentNode.replaceChild(newClaimBtn, claimBtn);
        
        // Add new listener
        newClaimBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Claim button clicked from new listener');
            claimDailyReward();
        });
        console.log('✅ Claim button listener added (fixed version)');
    } else {
        console.log('❌ Claim button not found in DOM');
        // Try to find it again after a short delay
        setTimeout(() => {
            const btn = document.getElementById('claimDailyBtn');
            if (btn) {
                btn.addEventListener('click', claimDailyReward);
                console.log('✅ Claim button found and listener added (delayed)');
            }
        }, 1000);
    }
    
    // Withdraw Buttons
    const withdrawUSDTBtn = document.getElementById('withdrawUSDTBtn');
    if (withdrawUSDTBtn) {
        withdrawUSDTBtn.addEventListener('click', () => withdraw('USDT'));
        console.log('✅ Withdraw USDT listener added');
    }
    
    const withdrawVNTBtn = document.getElementById('withdrawVNTBtn');
    if (withdrawVNTBtn) {
        withdrawVNTBtn.addEventListener('click', () => withdraw('VNT'));
        console.log('✅ Withdraw VNT listener added');
    }
    
    // Modal Close
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            document.getElementById('levelModal').style.display = 'none';
        });
    }
    
    // Copy button
    const copyBtn = document.getElementById('copyLinkBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', copyReferralLink);
        console.log('✅ Copy button listener added');
    }
    
    // Check for referrer in URL
    setTimeout(() => {
        console.log('🔍 Checking URL for referrer...');
        if (typeof getReferrerFromUrl === 'function') {
            getReferrerFromUrl();
        }
    }, 1500);
    
    // Auto-connect if previously connected
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_accounts' })
            .then(accounts => {
                if (accounts.length > 0) {
                    console.log('🔄 Auto-connecting...');
                    initWeb3();
                }
            })
            .catch(error => {
                console.error('Error checking accounts:', error);
            });
    }
});
