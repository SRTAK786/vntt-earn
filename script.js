// Contract ABI (simplified for example - you'll need the full ABI)
const CONTRACT_ABI = [{"inputs":[{"internalType":"address","name":"_vnttToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"locked","type":"bool"}],"name":"ContractLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DailyClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"paused","type":"bool"}],"name":"EmergencyPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newWallet","type":"address"}],"name":"FeeWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"websiteUrl","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"telegramUrl","type":"bytes32"},{"indexed":false,"internalType":"address","name":"updatedBy","type":"address"}],"name":"FrontendDataUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"platform","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"bonus","type":"uint256"}],"name":"PlatformBonusClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockedUntil","type":"uint256"}],"name":"ReserveFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReserveUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"maxWithdrawalPerTx","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maxDailyWithdrawal","type":"uint256"}],"name":"SecurityParametersUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"taskId","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"platform","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"taskType","type":"uint8"},{"indexed":false,"internalType":"bytes32","name":"taskName","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"SocialTaskAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"taskId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"platform","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"taskType","type":"uint8"}],"name":"SocialTaskCompleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newSupply","type":"uint256"}],"name":"TokenSupplyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Unblacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"UserActivated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"upline","type":"address"}],"name":"UserRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"bool","name":"paidWithVNT","type":"bool"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"activate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"activationBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activationFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activeUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"platform","type":"uint8"},{"internalType":"uint8","name":"taskType","type":"uint8"},{"internalType":"bytes32","name":"taskName","type":"bytes32"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"name":"addSocialTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"addToBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"addToWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"platform","type":"uint8"}],"name":"claimPlatformBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"completeSocialTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dailyClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"dailyClaims","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dailyReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"dailyWithdrawalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"pause","type":"bool"}],"name":"emergencyPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyPauseTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdrawBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"followSubscribeReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"forceActivate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"forceCompleteTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"frontendData","outputs":[{"internalType":"bytes32","name":"websiteUrl","type":"bytes32"},{"internalType":"bytes32","name":"telegramUrl","type":"bytes32"},{"internalType":"bytes32","name":"twitterUrl","type":"bytes32"},{"internalType":"uint256","name":"lastUpdated","type":"uint256"},{"internalType":"address","name":"updatedBy","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fundReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getAvailableWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProjectStats","outputs":[{"internalType":"uint256","name":"_totalUsers","type":"uint256"},{"internalType":"uint256","name":"_activeUsers","type":"uint256"},{"internalType":"uint256","name":"_totalVolume","type":"uint256"},{"internalType":"uint256","name":"_totalWithdrawals","type":"uint256"},{"internalType":"uint256","name":"_totalTokensDistributed","type":"uint256"},{"internalType":"uint256","name":"_totalTokensAvailable","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserveInfo","outputs":[{"internalType":"bool","name":"funded","type":"bool"},{"internalType":"uint256","name":"lockedUntil","type":"uint256"},{"internalType":"uint256","name":"initialAmount","type":"uint256"},{"internalType":"uint256","name":"currentAvailable","type":"uint256"},{"internalType":"uint256","name":"distributed","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"getSocialTask","outputs":[{"internalType":"uint8","name":"platform","type":"uint8"},{"internalType":"uint8","name":"taskType","type":"uint8"},{"internalType":"bytes32","name":"taskName","type":"bytes32"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSocialTasksCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserAdvancedInfo","outputs":[{"internalType":"uint256","name":"lockedTokens","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"},{"internalType":"uint256","name":"directReferrals","type":"uint256"},{"internalType":"bool","name":"hasPaidActivation","type":"bool"},{"internalType":"uint256","name":"userTasksCompleted","type":"uint256"},{"internalType":"uint256","name":"claimedToday","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserBasicInfo","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"uint256","name":"joinTime","type":"uint256"},{"internalType":"uint256","name":"activationTime","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserBonuses","outputs":[{"internalType":"uint256","name":"totalPlatformBonuses","type":"uint256"},{"internalType":"uint256","name":"totalReferralEarnings","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialReserveAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"isTaskCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastActivityTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastWithdrawalTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"likeShareCommentReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxDailyClaims","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDailyWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWithdrawalPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minTimeBetweenActions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"upline","type":"address"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeFromBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeFromWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveFunded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reserveLockedUntil","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"socialTasks","outputs":[{"internalType":"uint8","name":"platform","type":"uint8"},{"internalType":"uint8","name":"taskType","type":"uint8"},{"internalType":"bytes32","name":"taskName","type":"bytes32"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleProjectStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalTasksCompletedGlobal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokenSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensReserved","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalVolume","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalWithdrawnByUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlockContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_activationBonus","type":"uint256"}],"name":"updateActivationBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"updateActivationFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dailyReward","type":"uint256"}],"name":"updateDailyReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newFeeWallet","type":"address"}],"name":"updateFeeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"websiteUrl","type":"bytes32"},{"internalType":"bytes32","name":"telegramUrl","type":"bytes32"},{"internalType":"bytes32","name":"twitterUrl","type":"bytes32"}],"name":"updateFrontendData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_followSubscribeReward","type":"uint256"},{"internalType":"uint256","name":"_likeShareCommentReward","type":"uint256"}],"name":"updateGlobalTaskRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"updateProjectDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"rewards","type":"uint256[]"}],"name":"updateReferralRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxWithdrawalPerTx","type":"uint256"},{"internalType":"uint256","name":"_maxDailyWithdrawal","type":"uint256"}],"name":"updateSecurityParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"updateTaskReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"name":"updateTaskStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vnttToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"}],"name":"updateTokenAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newSupply","type":"uint256"}],"name":"updateTotalTokenSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"updateWithdrawalFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"usersMain","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"uint256","name":"joinTime","type":"uint256"},{"internalType":"uint256","name":"activationTime","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"lockedTokens","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"usersStats","outputs":[{"internalType":"uint256","name":"directReferrals","type":"uint256"},{"internalType":"bool","name":"hasPaidActivation","type":"bool"},{"internalType":"uint256","name":"lastWithdrawalTime","type":"uint256"},{"internalType":"uint256","name":"userTasksCompleted","type":"uint256"},{"internalType":"uint256","name":"claimedToday","type":"uint256"},{"internalType":"uint256","name":"lastActionTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnttToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"payWithVNT","type":"bool"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawUnusedReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

// Contract address (replace with your deployed contract address)
const CONTRACT_ADDRESS = "0x660251F2CFcE9c0f9aED1e4f7aa75EF9f0618c8c"; // Add your contract address here

// Global variables
let web3;
let contract;
let userAccount;

// DOM Elements
const connectWalletBtn = document.getElementById('connectWallet');
const dailyClaimBtn = document.getElementById('dailyClaimBtn');
const activateBtn = document.getElementById('activateBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const registerBtn = document.getElementById('registerBtn');
const tasksContainer = document.getElementById('tasksContainer');
const taskFilterBtns = document.querySelectorAll('.filter-btn');

// Modal elements
const registerModal = document.getElementById('registerModal');
const withdrawModal = document.getElementById('withdrawModal');
const closeRegisterModal = document.getElementById('closeRegisterModal');
const closeWithdrawModal = document.getElementById('closeWithdrawModal');
const registerForm = document.getElementById('registerForm');
const withdrawForm = document.getElementById('withdrawForm');

// Platform mapping
const PLATFORM_NAMES = {
    0: "Facebook",
    1: "Twitter", 
    2: "Instagram",
    3: "YouTube",
    4: "Telegram"
};

const PLATFORM_CLASSES = {
    0: "platform-facebook",
    1: "platform-twitter",
    2: "platform-instagram",
    3: "platform-youtube",
    4: "platform-telegram"
};

const TASK_TYPE_NAMES = {
    0: "Follow/Subscribe",
    1: "Like",
    2: "Share/Retweet",
    3: "Comment",
    4: "Join/Subscribe"
};

// Initialize application
async function initApp() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            setupEventListeners();
            await loadContract();
            await updateUI();
        } catch (error) {
            console.error("User denied account access", error);
        }
    } else {
        alert('Please install MetaMask to use this dApp!');
    }
}

// Setup event listeners
function setupEventListeners() {
    connectWalletBtn.addEventListener('click', connectWallet);
    dailyClaimBtn.addEventListener('click', claimDailyReward);
    activateBtn.addEventListener('click', activateAccount);
    withdrawBtn.addEventListener('click', () => withdrawModal.classList.add('active'));
    registerBtn.addEventListener('click', () => registerModal.classList.add('active'));
    
    // Close modals
    closeRegisterModal.addEventListener('click', () => registerModal.classList.remove('active'));
    closeWithdrawModal.addEventListener('click', () => withdrawModal.classList.remove('active'));
    
    // Form submissions
    registerForm.addEventListener('submit', handleRegister);
    withdrawForm.addEventListener('submit', handleWithdraw);
    
    // Task filter buttons
    taskFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            taskFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterTasks(btn.dataset.filter);
        });
    });
    
    // Listen for account changes
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
            userAccount = accounts[0];
            updateUI();
        });
    }
}

// Connect wallet
async function connectWallet() {
    if (!window.ethereum) {
        alert('Please install MetaMask!');
        return;
    }
    
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        userAccount = accounts[0];
        connectWalletBtn.innerHTML = `<i class="fas fa-wallet"></i> ${userAccount.substring(0, 6)}...${userAccount.substring(38)}`;
        await loadContract();
        await updateUI();
    } catch (error) {
        console.error("Error connecting wallet:", error);
    }
}

// Load contract
async function loadContract() {
    if (!web3 || !CONTRACT_ADDRESS) return;
    
    try {
        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        console.log("Contract loaded successfully");
    } catch (error) {
        console.error("Error loading contract:", error);
    }
}

// Update UI with user data
async function updateUI() {
    if (!contract || !userAccount) return;
    
    try {
        // Get user basic info
        const userInfo = await contract.methods.getUserBasicInfo(userAccount).call();
        
        // Update user stats
        document.getElementById('totalEarned').textContent = formatTokenAmount(userInfo.totalEarned);
        document.getElementById('lockedTokens').textContent = formatTokenAmount(userInfo.lockedTokens);
        
        // Get advanced info (simulated for this example)
        // In a real implementation, you'd call getUserAdvancedInfo
        
        // Update project stats
        const projectStats = await contract.methods.getProjectStats().call();
        document.getElementById('totalUsers').textContent = projectStats._totalUsers;
        document.getElementById('activeUsers').textContent = projectStats._activeUsers;
        document.getElementById('totalVolume').textContent = formatTokenAmount(projectStats._totalVolume);
        document.getElementById('totalWithdrawals').textContent = formatTokenAmount(projectStats._totalWithdrawals);
        
        // Load tasks
        await loadTasks();
        
        // Update button states based on user status
        updateButtonStates(userInfo.isActive);
        
    } catch (error) {
        console.error("Error updating UI:", error);
    }
}

// Load tasks from contract
async function loadTasks() {
    if (!contract) return;
    
    try {
        const taskCount = await contract.methods.getSocialTasksCount().call();
        tasksContainer.innerHTML = '';
        
        for (let i = 0; i < Math.min(taskCount, 20); i++) {
            const task = await contract.methods.getSocialTask(i).call();
            const isCompleted = await contract.methods.isTaskCompleted(userAccount, i).call();
            
            // Convert bytes32 task name to string
            const taskNameHex = task.taskName;
            let taskName = "Social Task";
            if (taskNameHex !== "0x0000000000000000000000000000000000000000000000000000000000000000") {
                taskName = web3.utils.hexToUtf8(taskNameHex);
            }
            
            createTaskCard(i, task, taskName, isCompleted);
        }
    } catch (error) {
        console.error("Error loading tasks:", error);
    }
}

// Create task card
function createTaskCard(taskId, task, taskName, isCompleted) {
    const taskCard = document.createElement('div');
    taskCard.className = `task-card ${isCompleted ? 'completed' : ''}`;
    taskCard.dataset.platform = PLATFORM_NAMES[task.platform].toLowerCase();
    
    const platformClass = PLATFORM_CLASSES[task.platform] || 'platform-facebook';
    const platformName = PLATFORM_NAMES[task.platform] || 'Unknown';
    const taskType = TASK_TYPE_NAMES[task.taskType] || 'Task';
    
    taskCard.innerHTML = `
        <div class="task-platform ${platformClass}">${platformName}</div>
        <h3 class="task-name">${taskName}</h3>
        <div class="task-reward">
            <i class="fas fa-gem"></i>
            <span>${formatTokenAmount(task.reward)} VNTT</span>
        </div>
        <div class="task-actions">
            <button class="complete-btn ${isCompleted ? 'completed' : ''}" 
                    data-task-id="${taskId}"
                    ${isCompleted ? 'disabled' : ''}>
                ${isCompleted ? '<i class="fas fa-check"></i> Completed' : '<i class="fas fa-play"></i> Complete Task'}
            </button>
            <div class="task-status ${isCompleted ? 'completed' : ''}">
                ${isCompleted ? 'Completed' : 'Available'}
            </div>
        </div>
    `;
    
    tasksContainer.appendChild(taskCard);
    
    // Add event listener to complete button
    if (!isCompleted) {
        const completeBtn = taskCard.querySelector('.complete-btn');
        completeBtn.addEventListener('click', () => completeTask(taskId));
    }
}

// Filter tasks by platform
function filterTasks(filter) {
    const taskCards = document.querySelectorAll('.task-card');
    
    taskCards.forEach(card => {
        if (filter === 'all' || card.dataset.platform === filter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Update button states based on user status
function updateButtonStates(isActive) {
    if (isActive) {
        activateBtn.style.display = 'none';
        dailyClaimBtn.disabled = false;
        withdrawBtn.disabled = false;
    } else {
        activateBtn.style.display = 'inline-block';
        dailyClaimBtn.disabled = true;
        withdrawBtn.disabled = true;
    }
}

// Handle user registration
async function handleRegister(e) {
    e.preventDefault();
    const uplineAddress = document.getElementById('uplineAddress').value;
    
    if (!contract || !userAccount) {
        alert('Please connect your wallet first!');
        return;
    }
    
    if (!web3.utils.isAddress(uplineAddress)) {
        alert('Please enter a valid Ethereum address!');
        return;
    }
    
    try {
        await contract.methods.register(uplineAddress).send({ from: userAccount });
        alert('Registration successful!');
        registerModal.classList.remove('active');
        await updateUI();
    } catch (error) {
        console.error("Error registering:", error);
        alert('Registration failed: ' + error.message);
    }
}

// Activate account
async function activateAccount() {
    if (!contract || !userAccount) {
        alert('Please connect your wallet first!');
        return;
    }
    
    try {
        await contract.methods.activate().send({ from: userAccount });
        alert('Account activated successfully!');
        await updateUI();
    } catch (error) {
        console.error("Error activating account:", error);
        alert('Activation failed: ' + error.message);
    }
}

// Claim daily reward
async function claimDailyReward() {
    if (!contract || !userAccount) {
        alert('Please connect your wallet first!');
        return;
    }
    
    try {
        await contract.methods.dailyClaim().send({ from: userAccount });
        alert('Daily reward claimed successfully!');
        await updateUI();
    } catch (error) {
        console.error("Error claiming daily reward:", error);
        alert('Claim failed: ' + error.message);
    }
}

// Complete a task
async function completeTask(taskId) {
    if (!contract || !userAccount) {
        alert('Please connect your wallet first!');
        return;
    }
    
    try {
        await contract.methods.completeSocialTask(taskId).send({ from: userAccount });
        alert('Task completed successfully!');
        await updateUI();
    } catch (error) {
        console.error("Error completing task:", error);
        alert('Task completion failed: ' + error.message);
    }
}

// Handle withdrawal
async function handleWithdraw(e) {
    e.preventDefault();
    const amount = document.getElementById('withdrawAmount').value;
    const payWithVNT = document.getElementById('payWithVNT').checked;
    
    if (!contract || !userAccount) {
        alert('Please connect your wallet first!');
        return;
    }
    
    if (!amount || amount <= 0) {
        alert('Please enter a valid amount!');
        return;
    }
    
    // Convert to wei (assuming 18 decimals)
    const amountInWei = web3.utils.toWei(amount, 'ether');
    
    try {
        await contract.methods.withdraw(amountInWei, payWithVNT).send({ from: userAccount });
        alert('Withdrawal successful!');
        withdrawModal.classList.remove('active');
        withdrawForm.reset();
        await updateUI();
    } catch (error) {
        console.error("Error withdrawing:", error);
        alert('Withdrawal failed: ' + error.message);
    }
}

// Helper function to format token amounts
function formatTokenAmount(amount) {
    if (!amount) return "0";
    
    // Convert from wei (18 decimals)
    const etherAmount = web3 ? web3.utils.fromWei(amount, 'ether') : (amount / 10**18).toString();
    
    // Format with commas
    const num = parseFloat(etherAmount);
    if (num >= 1000) {
        return num.toLocaleString('en-US', { maximumFractionDigits: 0 });
    } else if (num >= 1) {
        return num.toLocaleString('en-US', { maximumFractionDigits: 2 });
    } else {
        return num.toLocaleString('en-US', { maximumFractionDigits: 4 });
    }
}

// Initialize the app when page loads
window.addEventListener('DOMContentLoaded', initApp);
