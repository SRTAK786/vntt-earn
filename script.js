// Contract ABI (Abhi dummy ABI hai - aapko apna contract ka ABI yahan add karna hoga)
// Yeh ABI sirf demonstration ke liye hai
const CONTRACT_ABI = [{"inputs":[{"internalType":"address","name":"_vnttToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"locked","type":"bool"}],"name":"ContractLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DailyClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"paused","type":"bool"}],"name":"EmergencyPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newWallet","type":"address"}],"name":"FeeWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"websiteUrl","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"telegramUrl","type":"bytes32"},{"indexed":false,"internalType":"address","name":"updatedBy","type":"address"}],"name":"FrontendDataUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"platform","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"bonus","type":"uint256"}],"name":"PlatformBonusClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockedUntil","type":"uint256"}],"name":"ReserveFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReserveUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"maxWithdrawalPerTx","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maxDailyWithdrawal","type":"uint256"}],"name":"SecurityParametersUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"taskId","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"platform","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"taskType","type":"uint8"},{"indexed":false,"internalType":"bytes32","name":"taskName","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"SocialTaskAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"taskId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"platform","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"taskType","type":"uint8"}],"name":"SocialTaskCompleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newSupply","type":"uint256"}],"name":"TokenSupplyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Unblacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"UserActivated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"upline","type":"address"}],"name":"UserRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"bool","name":"paidWithVNT","type":"bool"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"activate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"activationBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activationFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activeUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"platform","type":"uint8"},{"internalType":"uint8","name":"taskType","type":"uint8"},{"internalType":"bytes32","name":"taskName","type":"bytes32"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"name":"addSocialTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"addToBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"addToWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"platform","type":"uint8"}],"name":"claimPlatformBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"completeSocialTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dailyClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"dailyClaims","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dailyReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"dailyWithdrawalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"pause","type":"bool"}],"name":"emergencyPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyPauseTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdrawBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"followSubscribeReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"forceActivate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"forceCompleteTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"frontendData","outputs":[{"internalType":"bytes32","name":"websiteUrl","type":"bytes32"},{"internalType":"bytes32","name":"telegramUrl","type":"bytes32"},{"internalType":"bytes32","name":"twitterUrl","type":"bytes32"},{"internalType":"uint256","name":"lastUpdated","type":"uint256"},{"internalType":"address","name":"updatedBy","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fundReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getAvailableWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProjectStats","outputs":[{"internalType":"uint256","name":"_totalUsers","type":"uint256"},{"internalType":"uint256","name":"_activeUsers","type":"uint256"},{"internalType":"uint256","name":"_totalVolume","type":"uint256"},{"internalType":"uint256","name":"_totalWithdrawals","type":"uint256"},{"internalType":"uint256","name":"_totalTokensDistributed","type":"uint256"},{"internalType":"uint256","name":"_totalTokensAvailable","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserveInfo","outputs":[{"internalType":"bool","name":"funded","type":"bool"},{"internalType":"uint256","name":"lockedUntil","type":"uint256"},{"internalType":"uint256","name":"initialAmount","type":"uint256"},{"internalType":"uint256","name":"currentAvailable","type":"uint256"},{"internalType":"uint256","name":"distributed","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"getSocialTask","outputs":[{"internalType":"uint8","name":"platform","type":"uint8"},{"internalType":"uint8","name":"taskType","type":"uint8"},{"internalType":"bytes32","name":"taskName","type":"bytes32"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSocialTasksCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserAdvancedInfo","outputs":[{"internalType":"uint256","name":"lockedTokens","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"},{"internalType":"uint256","name":"directReferrals","type":"uint256"},{"internalType":"bool","name":"hasPaidActivation","type":"bool"},{"internalType":"uint256","name":"userTasksCompleted","type":"uint256"},{"internalType":"uint256","name":"claimedToday","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserBasicInfo","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"uint256","name":"joinTime","type":"uint256"},{"internalType":"uint256","name":"activationTime","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserBonuses","outputs":[{"internalType":"uint256","name":"totalPlatformBonuses","type":"uint256"},{"internalType":"uint256","name":"totalReferralEarnings","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialReserveAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"isTaskCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastActivityTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastWithdrawalTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"likeShareCommentReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxDailyClaims","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDailyWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWithdrawalPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minTimeBetweenActions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"upline","type":"address"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeFromBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeFromWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveFunded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reserveLockedUntil","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"socialTasks","outputs":[{"internalType":"uint8","name":"platform","type":"uint8"},{"internalType":"uint8","name":"taskType","type":"uint8"},{"internalType":"bytes32","name":"taskName","type":"bytes32"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleProjectStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalTasksCompletedGlobal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokenSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensReserved","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalVolume","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalWithdrawnByUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlockContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_activationBonus","type":"uint256"}],"name":"updateActivationBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"updateActivationFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dailyReward","type":"uint256"}],"name":"updateDailyReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newFeeWallet","type":"address"}],"name":"updateFeeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"websiteUrl","type":"bytes32"},{"internalType":"bytes32","name":"telegramUrl","type":"bytes32"},{"internalType":"bytes32","name":"twitterUrl","type":"bytes32"}],"name":"updateFrontendData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_followSubscribeReward","type":"uint256"},{"internalType":"uint256","name":"_likeShareCommentReward","type":"uint256"}],"name":"updateGlobalTaskRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"updateProjectDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"rewards","type":"uint256[]"}],"name":"updateReferralRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxWithdrawalPerTx","type":"uint256"},{"internalType":"uint256","name":"_maxDailyWithdrawal","type":"uint256"}],"name":"updateSecurityParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"updateTaskReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"name":"updateTaskStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vnttToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"}],"name":"updateTokenAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newSupply","type":"uint256"}],"name":"updateTotalTokenSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"updateWithdrawalFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"usersMain","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"uint256","name":"joinTime","type":"uint256"},{"internalType":"uint256","name":"activationTime","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"lockedTokens","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"usersStats","outputs":[{"internalType":"uint256","name":"directReferrals","type":"uint256"},{"internalType":"bool","name":"hasPaidActivation","type":"bool"},{"internalType":"uint256","name":"lastWithdrawalTime","type":"uint256"},{"internalType":"uint256","name":"userTasksCompleted","type":"uint256"},{"internalType":"uint256","name":"claimedToday","type":"uint256"},{"internalType":"uint256","name":"lastActionTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnttToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"payWithVNT","type":"bool"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawUnusedReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

// Contract address - APNA CONTRACT ADDRESS YAHAN DALIYE
const CONTRACT_ADDRESS = "0x660251F2CFcE9c0f9aED1e4f7aa75EF9f0618c8c"; // Yeh replace karna hoga

// Global variables
let web3;
let contract;
let userAccount = null;
let userInfo = null;
let isInitialized = false;

// DOM Elements
const connectWalletBtn = document.getElementById('connectWallet');
const registerBtn = document.getElementById('registerBtn');
const activateBtn = document.getElementById('activateBtn');
const dailyClaimBtn = document.getElementById('dailyClaimBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

// Modals
const registerModal = document.getElementById('registerModal');
const activateModal = document.getElementById('activateModal');
const taskModal = document.getElementById('taskModal');
const withdrawModal = document.getElementById('withdrawModal');

// Close buttons
const closeRegisterModal = document.getElementById('closeRegisterModal');
const closeActivateModal = document.getElementById('closeActivateModal');
const closeTaskModal = document.getElementById('closeTaskModal');
const closeWithdrawModal = document.getElementById('closeWithdrawModal');

// Forms
const registerForm = document.getElementById('registerForm');
const withdrawForm = document.getElementById('withdrawForm');

// Submit buttons
const submitRegisterBtn = document.getElementById('submitRegisterBtn');
const submitActivateBtn = document.getElementById('submitActivateBtn');
const completeTaskBtn = document.getElementById('completeTaskBtn');
const submitWithdrawBtn = document.getElementById('submitWithdrawBtn');

// Toast
const toast = document.getElementById('toast');
const toastTitle = document.getElementById('toastTitle');
const toastMessage = document.getElementById('toastMessage');
const toastIcon = document.getElementById('toastIcon');

// Platform configuration
const PLATFORM_CONFIG = {
    0: {
        name: "Facebook",
        color: "#3b5998",
        icon: "fab fa-facebook-f",
        container: "facebookTasks",
        tasks: []
    },
    1: {
        name: "Twitter",
        color: "#1da1f2",
        icon: "fab fa-twitter",
        container: "twitterTasks",
        tasks: []
    },
    2: {
        name: "Instagram",
        color: "#e1306c",
        icon: "fab fa-instagram",
        container: "instagramTasks",
        tasks: []
    },
    3: {
        name: "YouTube",
        color: "#ff0000",
        icon: "fab fa-youtube",
        container: "youtubeTasks",
        tasks: []
    },
    4: {
        name: "Telegram",
        color: "#0088cc",
        icon: "fab fa-telegram",
        container: "telegramTasks",
        tasks: []
    }
};

const TASK_TYPE_CONFIG = {
    0: { name: "Follow/Subscribe", class: "follow", verb: "Follow" },
    1: { name: "Like", class: "like", verb: "Like" },
    2: { name: "Share", class: "share", verb: "Share" },
    3: { name: "Comment", class: "comment", verb: "Comment on" },
    4: { name: "Join/Subscribe", class: "join", verb: "Join" }
};

// Mock tasks data - jab tak contract se tasks load nahi ho rahe
const MOCK_TASKS = [
    // Facebook Tasks (4)
    { id: 0, platform: 0, taskType: 0, name: "Follow Facebook Page", reward: "100", isActive: true },
    { id: 1, platform: 0, taskType: 1, name: "Like Facebook Post", reward: "50", isActive: true },
    { id: 2, platform: 0, taskType: 2, name: "Share Facebook Post", reward: "50", isActive: true },
    { id: 3, platform: 0, taskType: 3, name: "Comment on Facebook Post", reward: "50", isActive: true },
    
    // Twitter Tasks (4)
    { id: 4, platform: 1, taskType: 0, name: "Follow Twitter Account", reward: "100", isActive: true },
    { id: 5, platform: 1, taskType: 1, name: "Like Tweet", reward: "50", isActive: true },
    { id: 6, platform: 1, taskType: 2, name: "Retweet", reward: "50", isActive: true },
    { id: 7, platform: 1, taskType: 3, name: "Comment on Tweet", reward: "50", isActive: true },
    
    // Instagram Tasks (4)
    { id: 8, platform: 2, taskType: 0, name: "Follow Instagram Account", reward: "100", isActive: true },
    { id: 9, platform: 2, taskType: 1, name: "Like Instagram Post", reward: "50", isActive: true },
    { id: 10, platform: 2, taskType: 2, name: "Share Instagram Post", reward: "50", isActive: true },
    { id: 11, platform: 2, taskType: 3, name: "Comment on Instagram Post", reward: "50", isActive: true },
    
    // YouTube Tasks (4)
    { id: 12, platform: 3, taskType: 4, name: "Subscribe YouTube Channel", reward: "100", isActive: true },
    { id: 13, platform: 3, taskType: 1, name: "Like YouTube Video", reward: "50", isActive: true },
    { id: 14, platform: 3, taskType: 2, name: "Share YouTube Video", reward: "50", isActive: true },
    { id: 15, platform: 3, taskType: 3, name: "Comment on YouTube Video", reward: "50", isActive: true },
    
    // Telegram Tasks (4)
    { id: 16, platform: 4, taskType: 0, name: "Join Telegram Channel", reward: "100", isActive: true },
    { id: 17, platform: 4, taskType: 0, name: "Join Telegram Group", reward: "100", isActive: true },
    { id: 18, platform: 4, taskType: 2, name: "Share Telegram Post", reward: "50", isActive: true },
    { id: 19, platform: 4, taskType: 3, name: "Comment in Telegram Group", reward: "50", isActive: true }
];

let currentTaskId = null;

// Initialize application
async function initApp() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        
        // Setup event listeners first
        setupEventListeners();
        
        // Try to connect if already connected before
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                userAccount = accounts[0];
                await loadContract();
                await updateUI();
            }
        } catch (error) {
            console.log("No previous connection found");
        }
        
        isInitialized = true;
    } else {
        showToast("Install MetaMask", "Please install MetaMask to use this dApp!", "error");
        // Show mock data for demo
        showMockData();
    }
}

// Setup event listeners
function setupEventListeners() {
    // Connect wallet button
    connectWalletBtn.addEventListener('click', connectWallet);
    
    // Action buttons
    registerBtn.addEventListener('click', () => registerModal.classList.add('active'));
    activateBtn.addEventListener('click', () => activateModal.classList.add('active'));
    dailyClaimBtn.addEventListener('click', claimDailyReward);
    withdrawBtn.addEventListener('click', () => withdrawModal.classList.add('active'));
    
    // Close modals
    closeRegisterModal.addEventListener('click', () => registerModal.classList.remove('active'));
    closeActivateModal.addEventListener('click', () => activateModal.classList.remove('active'));
    closeTaskModal.addEventListener('click', () => taskModal.classList.remove('active'));
    closeWithdrawModal.addEventListener('click', () => withdrawModal.classList.remove('active'));
    
    // Form submissions
    registerForm.addEventListener('submit', handleRegister);
    submitActivateBtn.addEventListener('click', handleActivate);
    completeTaskBtn.addEventListener('click', completeCurrentTask);
    withdrawForm.addEventListener('submit', handleWithdraw);
    
    // Listen for account changes
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
            userAccount = accounts[0] || null;
            updateUI();
        });
        
        // Use 'disconnect' instead of 'close' (EIP-1193 compliance)
        window.ethereum.on('disconnect', (error) => {
            console.log("MetaMask disconnected:", error);
            userAccount = null;
            resetUI();
        });
    }
}

// Connect wallet
async function connectWallet() {
    if (!window.ethereum) {
        showToast("Install MetaMask", "Please install MetaMask to use this dApp!", "error");
        return;
    }
    
    try {
        const accounts = await window.ethereum.request({ 
            method: 'eth_requestAccounts',
            params: [] // EIP-1193 compliance
        });
        
        userAccount = accounts[0];
        await loadContract();
        await updateUI();
        
        showToast("Wallet Connected", `Connected: ${userAccount.substring(0, 6)}...${userAccount.substring(38)}`, "success");
    } catch (error) {
        console.error("Error connecting wallet:", error);
        if (error.code === 4001) {
            showToast("Connection Cancelled", "User rejected the connection request.", "error");
        } else {
            showToast("Connection Failed", "Failed to connect wallet. Please try again.", "error");
        }
    }
}

// Load contract
async function loadContract() {
    if (!web3) {
        console.error("Web3 not initialized");
        return;
    }
    
    // Check if contract address is set
    if (!CONTRACT_ADDRESS || CONTRACT_ADDRESS === "YOUR_CONTRACT_ADDRESS_HERE") {
        console.warn("Contract address not set. Using mock data.");
        showToast("Info", "Contract address not configured. Using demo mode.", "info");
        return;
    }
    
    try {
        // Validate contract address
        if (!web3.utils.isAddress(CONTRACT_ADDRESS)) {
            throw new Error("Invalid contract address");
        }
        
        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        console.log("Contract loaded successfully");
    } catch (error) {
        console.error("Error loading contract:", error);
        showToast("Contract Error", "Failed to load contract. Check contract address and ABI.", "error");
    }
}

// Update UI with user data
async function updateUI() {
    if (!userAccount) {
        resetUI();
        return;
    }
    
    // Update wallet address display
    document.getElementById('walletAddress').textContent = `${userAccount.substring(0, 10)}...${userAccount.substring(38)}`;
    
    // If contract is loaded, try to get real data
    if (contract) {
        try {
            await updateRealData();
        } catch (error) {
            console.error("Error updating real data:", error);
            showToast("Network Error", "Failed to fetch data from contract. Using demo mode.", "warning");
            showMockData();
        }
    } else {
        // Use mock data if contract not loaded
        showMockData();
    }
}

// Update real data from contract
async function updateRealData() {
    try {
        // Get user basic info
        userInfo = await contract.methods.getUserBasicInfo(userAccount).call();
        
        // Get user advanced info
        const userAdvanced = await contract.methods.getUserAdvancedInfo(userAccount).call();
        
        // Update user stats
        document.getElementById('totalEarned').textContent = formatTokenAmount(userInfo.totalEarned);
        document.getElementById('lockedTokens').textContent = formatTokenAmount(userAdvanced.lockedTokens);
        document.getElementById('tasksCompleted').textContent = userAdvanced.userTasksCompleted;
        document.getElementById('directReferrals').textContent = userAdvanced.directReferrals;
        
        // Update button states
        updateButtonStates(userInfo.isActive, userAdvanced.hasPaidActivation);
        
        // Update project stats
        const projectStats = await contract.methods.getProjectStats().call();
        document.getElementById('totalUsers').textContent = projectStats._totalUsers;
        document.getElementById('activeUsers').textContent = projectStats._activeUsers;
        document.getElementById('totalVolume').textContent = formatTokenAmount(projectStats._totalVolume);
        document.getElementById('totalWithdrawals').textContent = formatTokenAmount(projectStats._totalWithdrawals);
        
        // Update available balance for withdrawal
        document.getElementById('availableBalance').textContent = formatTokenAmount(userAdvanced.lockedTokens);
        
        // Load tasks from contract
        await loadTasksFromContract();
        
    } catch (error) {
        console.error("Error in updateRealData:", error);
        throw error;
    }
}

// Show mock data for demo
function showMockData() {
    // Set mock user stats
    document.getElementById('totalEarned').textContent = "1,250";
    document.getElementById('lockedTokens').textContent = "2,500";
    document.getElementById('tasksCompleted').textContent = "8";
    document.getElementById('directReferrals').textContent = "3";
    
    // Set mock project stats
    document.getElementById('totalUsers').textContent = "1,245";
    document.getElementById('activeUsers').textContent = "892";
    document.getElementById('totalVolume').textContent = "45,230";
    document.getElementById('totalWithdrawals').textContent = "12,450";
    
    // Update available balance
    document.getElementById('availableBalance').textContent = "2,500";
    
    // Update button states for demo
    if (userAccount) {
        // Demo mode - assume user is registered but not activated
        registerBtn.disabled = true;
        activateBtn.disabled = false;
        dailyClaimBtn.disabled = true;
        withdrawBtn.disabled = true;
    } else {
        // No wallet connected
        registerBtn.disabled = true;
        activateBtn.disabled = true;
        dailyClaimBtn.disabled = true;
        withdrawBtn.disabled = true;
    }
    
    // Load mock tasks
    loadMockTasks();
}

// Reset UI when no wallet is connected
function resetUI() {
    document.getElementById('walletAddress').textContent = "Not Connected";
    document.getElementById('totalEarned').textContent = "0";
    document.getElementById('lockedTokens').textContent = "0";
    document.getElementById('tasksCompleted').textContent = "0";
    document.getElementById('directReferrals').textContent = "0";
    
    // Reset project stats
    document.getElementById('totalUsers').textContent = "0";
    document.getElementById('activeUsers').textContent = "0";
    document.getElementById('totalVolume').textContent = "0";
    document.getElementById('totalWithdrawals').textContent = "0";
    
    // Clear tasks
    Object.values(PLATFORM_CONFIG).forEach(platform => {
        document.getElementById(platform.container).innerHTML = "";
    });
    
    // Reset button states
    registerBtn.disabled = true;
    activateBtn.disabled = true;
    dailyClaimBtn.disabled = true;
    withdrawBtn.disabled = true;
    
    // Show demo tasks if no wallet connected
    if (!userAccount) {
        loadMockTasks();
    }
}

// Update button states based on user status
function updateButtonStates(isActive, hasPaidActivation) {
    // Connect wallet button always enabled
    connectWalletBtn.disabled = false;
    
    // Register button - only if user not registered
    registerBtn.disabled = userInfo && userInfo.joinTime > 0;
    
    // Activate button - only if registered but not activated
    activateBtn.disabled = !(userInfo && userInfo.joinTime > 0 && !isActive && hasPaidActivation === false);
    
    // Daily claim button - only if activated
    dailyClaimBtn.disabled = !isActive;
    
    // Withdraw button - only if activated
    withdrawBtn.disabled = !isActive;
}

// Load tasks from contract
async function loadTasksFromContract() {
    if (!contract) {
        loadMockTasks();
        return;
    }
    
    try {
        // Clear all task containers
        Object.values(PLATFORM_CONFIG).forEach(platform => {
            document.getElementById(platform.container).innerHTML = "";
            platform.tasks = [];
        });
        
        // Try to get tasks count - if function exists
        let taskCount = 0;
        try {
            taskCount = await contract.methods.getSocialTasksCount().call();
        } catch (e) {
            console.log("getSocialTasksCount not available, using mock tasks");
            loadMockTasks();
            return;
        }
        
        // Load tasks
        for (let i = 0; i < Math.min(taskCount, 20); i++) {
            try {
                const task = await contract.methods.getSocialTask(i).call();
                
                // Safe hex to string conversion
                let taskName = "Social Task";
                try {
                    if (task.taskName && task.taskName !== "0x0000000000000000000000000000000000000000000000000000000000000000") {
                        taskName = web3.utils.hexToUtf8(task.taskName);
                    }
                } catch (e) {
                    console.warn("Could not convert task name hex to string:", e);
                }
                
                // Check if task is completed
                let isCompleted = false;
                try {
                    isCompleted = await contract.methods.isTaskCompleted(userAccount, i).call();
                } catch (e) {
                    console.log("isTaskCompleted not available");
                }
                
                // Store task data
                const platform = PLATFORM_CONFIG[task.platform];
                if (platform) {
                    platform.tasks.push({ 
                        id: i, 
                        task: task, 
                        completed: isCompleted,
                        name: taskName
                    });
                    createTaskCard(i, task, taskName, isCompleted);
                }
            } catch (error) {
                console.error(`Error loading task ${i}:`, error);
            }
        }
        
    } catch (error) {
        console.error("Error loading tasks from contract:", error);
        showToast("Tasks Error", "Failed to load tasks from contract. Using demo tasks.", "warning");
        loadMockTasks();
    }
}

// Load mock tasks
function loadMockTasks() {
    // Clear all task containers
    Object.values(PLATFORM_CONFIG).forEach(platform => {
        document.getElementById(platform.container).innerHTML = "";
        platform.tasks = [];
    });
    
    // Create mock tasks
    MOCK_TASKS.forEach(taskData => {
        const platform = PLATFORM_CONFIG[taskData.platform];
        if (platform) {
            const mockTask = {
                platform: taskData.platform,
                taskType: taskData.taskType,
                taskName: web3 ? web3.utils.asciiToHex(taskData.name) : "0x0",
                reward: web3 ? web3.utils.toWei(taskData.reward, 'ether') : (taskData.reward * 10**18).toString(),
                isActive: taskData.isActive
            };
            
            // Mock completion status (random for demo)
            const isCompleted = Math.random() > 0.7;
            
            platform.tasks.push({ 
                id: taskData.id, 
                task: mockTask, 
                completed: isCompleted,
                name: taskData.name
            });
            
            createTaskCard(taskData.id, mockTask, taskData.name, isCompleted);
        }
    });
}

// Create individual task card
function createTaskCard(taskId, taskData, taskName, isCompleted) {
    const platform = PLATFORM_CONFIG[taskData.platform];
    if (!platform) return;
    
    const taskType = TASK_TYPE_CONFIG[taskData.taskType] || { name: "Task", class: "follow", verb: "Complete" };
    
    // Button text based on completion status
    let buttonText = isCompleted ? 'Completed' : 'Start Task';
    let buttonIcon = isCompleted ? 'fa-check' : 'fa-play';
    let buttonClass = isCompleted ? 'completed-btn' : 'complete-btn';
    
    const taskCard = document.createElement('div');
    taskCard.className = `task-card ${platform.name.toLowerCase()}-card ${isCompleted ? 'completed' : ''}`;
    
    // Format reward amount
    let rewardAmount = "0";
    try {
        if (web3 && taskData.reward) {
            rewardAmount = formatTokenAmount(taskData.reward);
        } else if (taskData.reward) {
            // Fallback for mock data
            rewardAmount = taskData.reward.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    } catch (e) {
        rewardAmount = "100";
    }
    
    taskCard.innerHTML = `
        <div class="task-type ${taskType.class}">${taskType.name}</div>
        <h3 class="task-name">${taskName}</h3>
        <div class="task-details">
            <div class="task-detail-item">
                <i class="fas fa-layer-group"></i>
                <span>Platform: <strong>${platform.name}</strong></span>
            </div>
            <div class="task-detail-item">
                <i class="fas fa-tasks"></i>
                <span>Type: <strong>${taskType.name}</strong></span>
            </div>
            <div class="task-detail-item">
                <i class="fas fa-clock"></i>
                <span>Status: <strong style="color: ${isCompleted ? 'var(--accent-color)' : 'var(--warning-color)'}">${isCompleted ? 'Completed' : 'Available'}</strong></span>
            </div>
        </div>
        <div class="task-actions">
            <div class="reward-amount">
                <i class="fas fa-gem"></i>
                <span>${rewardAmount} VNTT</span>
            </div>
            <button class="task-btn ${buttonClass}" 
                    data-task-id="${taskId}"
                    ${isCompleted ? 'disabled' : ''}>
                <i class="fas ${buttonIcon}"></i> ${buttonText}
            </button>
        </div>
    `;
    
    document.getElementById(platform.container).appendChild(taskCard);
    
    // Add event listener to complete button
    if (!isCompleted) {
        const completeBtn = taskCard.querySelector('.task-btn');
        completeBtn.addEventListener('click', () => showTaskInstructions(taskId, taskData, taskName, taskType, platform));
    }
}

// Show task instructions modal
function showTaskInstructions(taskId, taskData, taskName, taskType, platform) {
    currentTaskId = taskId;
    
    // Update modal content
    document.getElementById('taskModalTitle').textContent = taskName;
    document.getElementById('taskModalName').textContent = taskName;
    document.getElementById('taskModalType').textContent = `${platform.name} - ${taskType.name}`;
    
    // Format reward amount
    let rewardAmount = "0";
    try {
        if (web3 && taskData.reward) {
            rewardAmount = formatTokenAmount(taskData.reward);
        } else {
            rewardAmount = "100";
        }
    } catch (e) {
        rewardAmount = "100";
    }
    
    document.getElementById('taskModalReward').textContent = rewardAmount;
    
    // Update platform icon
    const platformIcon = document.getElementById('taskModalPlatform');
    platformIcon.className = `platform-icon ${platform.name.toLowerCase()}-bg`;
    platformIcon.innerHTML = `<i class="${platform.icon}"></i>`;
    
    // Generate and display instructions
    const instructions = generateTaskInstructions(platform.name, taskType.verb, taskName);
    const instructionsContainer = document.getElementById('taskInstructions');
    instructionsContainer.innerHTML = '';
    
    instructions.forEach((instruction, index) => {
        const instructionItem = document.createElement('div');
        instructionItem.className = 'instruction-item';
        instructionItem.innerHTML = `
            <div class="instruction-number">${index + 1}</div>
            <div class="instruction-text">${instruction}</div>
        `;
        instructionsContainer.appendChild(instructionItem);
    });
    
    // Show modal
    taskModal.classList.add('active');
}

// Generate task instructions
function generateTaskInstructions(platform, verb, taskName) {
    const instructions = [];
    
    switch(platform) {
        case "Facebook":
            if (verb === "Follow") {
                instructions.push("Go to our official Facebook page");
                instructions.push("Click the 'Follow' button on the page");
                instructions.push("Make sure you're following the page");
            } else if (verb === "Like") {
                instructions.push("Go to our latest Facebook post");
                instructions.push("Click the 'Like' button (thumbs up)");
                instructions.push("Wait for the like to be registered");
            } else if (verb === "Share") {
                instructions.push("Find our Facebook post");
                instructions.push("Click the 'Share' button");
                instructions.push("Share to your timeline or with friends");
            } else if (verb === "Comment on") {
                instructions.push("Go to our Facebook post");
                instructions.push("Write a meaningful comment");
                instructions.push("Post your comment");
            }
            break;
            
        case "Twitter":
            if (verb === "Follow") {
                instructions.push("Visit our Twitter profile");
                instructions.push("Click the 'Follow' button");
                instructions.push("Make sure you're following our account");
            } else if (verb === "Like") {
                instructions.push("Find our latest tweet");
                instructions.push("Click the 'Like' button (heart icon)");
                instructions.push("Wait for the like to be registered");
            } else if (verb === "Share") {
                instructions.push("Find our tweet");
                instructions.push("Click the 'Retweet' button");
                instructions.push("Confirm the retweet");
            } else if (verb === "Comment on") {
                instructions.push("Go to our tweet");
                instructions.push("Write a reply to the tweet");
                instructions.push("Post your reply");
            }
            break;
            
        case "Instagram":
            if (verb === "Follow") {
                instructions.push("Visit our Instagram profile");
                instructions.push("Click the 'Follow' button");
                instructions.push("Make sure you're following our account");
            } else if (verb === "Like") {
                instructions.push("Go to our latest Instagram post");
                instructions.push("Double-tap to like the post");
                instructions.push("Wait for the like to be registered");
            } else if (verb === "Share") {
                instructions.push("Find our Instagram post");
                instructions.push("Click the paper airplane icon");
                instructions.push("Share to your story or with friends");
            } else if (verb === "Comment on") {
                instructions.push("Go to our Instagram post");
                instructions.push("Write a comment");
                instructions.push("Post your comment");
            }
            break;
            
        case "YouTube":
            if (verb === "Subscribe") {
                instructions.push("Go to our YouTube channel");
                instructions.push("Click the 'Subscribe' button");
                instructions.push("Make sure you've subscribed");
            } else if (verb === "Like") {
                instructions.push("Watch our YouTube video");
                instructions.push("Click the 'Like' button (thumbs up)");
                instructions.push("Wait for the like to be registered");
            } else if (verb === "Share") {
                instructions.push("Find our YouTube video");
                instructions.push("Click the 'Share' button");
                instructions.push("Share the video link");
            } else if (verb === "Comment on") {
                instructions.push("Go to our YouTube video");
                instructions.push("Write a comment in the comments section");
                instructions.push("Post your comment");
            }
            break;
            
        case "Telegram":
            if (verb === "Join") {
                instructions.push("Click the Telegram channel/group link");
                instructions.push("Join the channel/group");
                instructions.push("Make sure you're a member");
            } else if (verb === "Share") {
                instructions.push("Find our Telegram post");
                instructions.push("Forward the post to other groups");
                instructions.push("Share with your friends");
            } else if (verb === "Comment on") {
                instructions.push("Go to our Telegram group");
                instructions.push("Write a message in the group");
                instructions.push("Send your message");
            }
            break;
    }
    
    // Add verification step
    instructions.push("Return here and click 'Mark as Completed'");
    instructions.push("Wait for transaction confirmation");
    
    return instructions;
}

// Handle user registration
async function handleRegister(e) {
    e.preventDefault();
    
    if (!userAccount) {
        showToast("Wallet Required", "Please connect your wallet first!", "error");
        return;
    }
    
    const uplineAddress = document.getElementById('uplineAddress').value.trim();
    
    if (!web3.utils.isAddress(uplineAddress)) {
        showToast("Invalid Address", "Please enter a valid Ethereum address!", "error");
        return;
    }
    
    if (!contract) {
        showToast("Demo Mode", "Contract not connected. This is a demo.", "info");
        registerModal.classList.remove('active');
        registerForm.reset();
        
        // In demo mode, simulate registration
        userInfo = {
            joinTime: Math.floor(Date.now() / 1000),
            isActive: false,
            hasPaidActivation: false
        };
        
        updateButtonStates(false, false);
        showToast("Demo Registration", "Account registered (demo mode)", "success");
        return;
    }
    
    try {
        submitRegisterBtn.innerHTML = '<span class="spinner"></span> Processing...';
        submitRegisterBtn.disabled = true;
        
        await contract.methods.register(uplineAddress).send({ from: userAccount });
        
        showToast("Registration Successful", "Your account has been registered successfully!", "success");
        registerModal.classList.remove('active');
        registerForm.reset();
        
        await updateUI();
        
    } catch (error) {
        console.error("Error registering:", error);
        showToast("Registration Failed", error.message || "Registration failed. Please try again.", "error");
    } finally {
        submitRegisterBtn.innerHTML = 'Register Account';
        submitRegisterBtn.disabled = false;
    }
}

// Handle account activation
async function handleActivate() {
    if (!userAccount) {
        showToast("Wallet Required", "Please connect your wallet first!", "error");
        return;
    }
    
    if (!contract) {
        showToast("Demo Mode", "Contract not connected. This is a demo.", "info");
        activateModal.classList.remove('active');
        
        // In demo mode, simulate activation
        if (userInfo) {
            userInfo.isActive = true;
            userInfo.hasPaidActivation = true;
        }
        
        updateButtonStates(true, true);
        showToast("Demo Activation", "Account activated (demo mode)", "success");
        return;
    }
    
    try {
        submitActivateBtn.innerHTML = '<span class="spinner"></span> Processing...';
        submitActivateBtn.disabled = true;
        
        await contract.methods.activate().send({ from: userAccount });
        
        showToast("Activation Successful", "Your account has been activated! You can now start earning.", "success");
        activateModal.classList.remove('active');
        
        await updateUI();
        
    } catch (error) {
        console.error("Error activating account:", error);
        showToast("Activation Failed", error.message || "Activation failed. Please try again.", "error");
    } finally {
        submitActivateBtn.innerHTML = '<i class="fas fa-bolt"></i> Pay & Activate Account';
        submitActivateBtn.disabled = false;
    }
}

// Claim daily reward
async function claimDailyReward() {
    if (!userAccount) {
        showToast("Wallet Required", "Please connect your wallet first!", "error");
        return;
    }
    
    if (!contract) {
        showToast("Demo Mode", "Daily reward claimed (demo mode)", "success");
        
        // Update demo stats
        const currentEarned = parseInt(document.getElementById('totalEarned').textContent.replace(/,/g, ''));
        document.getElementById('totalEarned').textContent = formatNumber(currentEarned + 100);
        
        const currentLocked = parseInt(document.getElementById('lockedTokens').textContent.replace(/,/g, ''));
        document.getElementById('lockedTokens').textContent = formatNumber(currentLocked + 100);
        
        showToast("Demo Reward", "100 VNTT claimed (demo mode)", "success");
        return;
    }
    
    try {
        const originalText = dailyClaimBtn.innerHTML;
        dailyClaimBtn.innerHTML = '<span class="spinner"></span> Claiming...';
        dailyClaimBtn.disabled = true;
        
        await contract.methods.dailyClaim().send({ from: userAccount });
        
        showToast("Daily Reward Claimed", "100 VNTT has been added to your account!", "success");
        await updateUI();
        
    } catch (error) {
        console.error("Error claiming daily reward:", error);
        showToast("Claim Failed", error.message || "Failed to claim daily reward. Please try again.", "error");
    } finally {
        dailyClaimBtn.innerHTML = originalText;
        dailyClaimBtn.disabled = false;
    }
}

// Complete current task
async function completeCurrentTask() {
    if (currentTaskId === null || !userAccount) {
        showToast("Error", "No task selected or wallet not connected!", "error");
        return;
    }
    
    if (!contract) {
        showToast("Demo Mode", "Task completed (demo mode)", "success");
        taskModal.classList.remove('active');
        
        // Update demo stats
        const currentEarned = parseInt(document.getElementById('totalEarned').textContent.replace(/,/g, ''));
        const currentTasks = parseInt(document.getElementById('tasksCompleted').textContent);
        
        document.getElementById('totalEarned').textContent = formatNumber(currentEarned + 100);
        document.getElementById('tasksCompleted').textContent = currentTasks + 1;
        
        // Mark task as completed in UI
        const taskCards = document.querySelectorAll('.task-card');
        taskCards.forEach(card => {
            const btn = card.querySelector('.task-btn');
            if (btn && btn.dataset.taskId == currentTaskId) {
                btn.innerHTML = '<i class="fas fa-check"></i> Completed';
                btn.className = 'task-btn completed-btn';
                btn.disabled = true;
                card.classList.add('completed');
            }
        });
        
        showToast("Demo Task", "Task completed successfully (demo mode)!", "success");
        currentTaskId = null;
        return;
    }
    
    try {
        completeTaskBtn.innerHTML = '<span class="spinner"></span> Processing...';
        completeTaskBtn.disabled = true;
        
        await contract.methods.completeSocialTask(currentTaskId).send({ from: userAccount });
        
        showToast("Task Completed", "Task completed successfully! Reward has been added to your account.", "success");
        taskModal.classList.remove('active');
        
        await updateUI();
        
    } catch (error) {
        console.error("Error completing task:", error);
        showToast("Task Failed", error.message || "Failed to complete task. Please try again.", "error");
    } finally {
        completeTaskBtn.innerHTML = '<i class="fas fa-check-circle"></i> Mark as Completed';
        completeTaskBtn.disabled = false;
        currentTaskId = null;
    }
}

// Handle withdrawal
async function handleWithdraw(e) {
    e.preventDefault();
    
    if (!userAccount) {
        showToast("Wallet Required", "Please connect your wallet first!", "error");
        return;
    }
    
    const amount = document.getElementById('withdrawAmount').value;
    const feeMethod = document.querySelector('input[name="feeMethod"]:checked').value;
    
    if (!amount || amount <= 0) {
        showToast("Invalid Amount", "Please enter a valid amount!", "error");
        return;
    }
    
    if (amount <= 10) {
        showToast("Amount Too Small", "Withdrawal amount must be greater than 10 VNTT (fee)", "error");
        return;
    }
    
    if (!contract) {
        showToast("Demo Mode", "Withdrawal processed (demo mode)", "success");
        withdrawModal.classList.remove('active');
        withdrawForm.reset();
        
        // Update demo stats
        const currentLocked = parseInt(document.getElementById('lockedTokens').textContent.replace(/,/g, ''));
        const newLocked = Math.max(0, currentLocked - amount);
        document.getElementById('lockedTokens').textContent = formatNumber(newLocked);
        
        showToast("Demo Withdrawal", `${amount} VNTT withdrawn (demo mode)`, "success");
        return;
    }
    
    try {
        submitWithdrawBtn.innerHTML = '<span class="spinner"></span> Processing...';
        submitWithdrawBtn.disabled = true;
        
        const amountInWei = web3.utils.toWei(amount.toString(), 'ether');
        const payWithVNT = feeMethod === 'vnt';
        
        await contract.methods.withdraw(amountInWei, payWithVNT).send({ from: userAccount });
        
        showToast("Withdrawal Successful", "Tokens have been withdrawn successfully!", "success");
        withdrawModal.classList.remove('active');
        withdrawForm.reset();
        
        await updateUI();
        
    } catch (error) {
        console.error("Error withdrawing:", error);
        showToast("Withdrawal Failed", error.message || "Withdrawal failed. Please try again.", "error");
    } finally {
        submitWithdrawBtn.innerHTML = '<i class="fas fa-download"></i> Withdraw Tokens';
        submitWithdrawBtn.disabled = false;
    }
}

// Helper function to format token amounts
function formatTokenAmount(amount) {
    if (!amount) return "0";
    
    try {
        if (web3) {
            const etherAmount = web3.utils.fromWei(amount.toString(), 'ether');
            return formatNumber(parseFloat(etherAmount));
        } else {
            // For mock data
            const num = typeof amount === 'string' ? parseFloat(amount) / 10**18 : amount / 10**18;
            return formatNumber(num);
        }
    } catch (error) {
        return "0";
    }
}

// Format number with commas
function formatNumber(num) {
    if (!num && num !== 0) return "0";
    
    const n = typeof num === 'string' ? parseFloat(num) : num;
    
    if (n >= 1000) {
        return n.toLocaleString('en-US', { maximumFractionDigits: 0 });
    } else if (n >= 1) {
        return n.toLocaleString('en-US', { maximumFractionDigits: 2 });
    } else {
        return n.toLocaleString('en-US', { maximumFractionDigits: 4 });
    }
}

// Show toast notification
function showToast(title, message, type = "info") {
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    
    // Set icon based on type
    if (type === "success") {
        toastIcon.className = "fas fa-check-circle";
        toastIcon.style.color = "var(--accent-color)";
        toast.className = "toast success";
    } else if (type === "error") {
        toastIcon.className = "fas fa-exclamation-circle";
        toastIcon.style.color = "var(--danger-color)";
        toast.className = "toast error";
    } else {
        toastIcon.className = "fas fa-info-circle";
        toastIcon.style.color = "var(--primary-color)";
        toast.className = "toast info";
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Hide after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Initialize the app when page loads
window.addEventListener('DOMContentLoaded', () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        initApp();
    } else {
        // MetaMask not installed, show demo mode
        showToast("MetaMask Required", "Please install MetaMask to connect to the blockchain.", "error");
        showMockData();
    }
});
