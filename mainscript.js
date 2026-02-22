// VNetworkMain Contract Configuration
const CONTRACT_ADDRESS = "0x660251F2CFcE9c0f9aED1e4f7aa75EF9f0618c8c"; // Replace with your contract address
const CONTRACT_ABI = [{"inputs":[{"internalType":"address","name":"_vnttToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"locked","type":"bool"}],"name":"ContractLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DailyClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"paused","type":"bool"}],"name":"EmergencyPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newWallet","type":"address"}],"name":"FeeWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"websiteUrl","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"telegramUrl","type":"bytes32"},{"indexed":false,"internalType":"address","name":"updatedBy","type":"address"}],"name":"FrontendDataUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"platform","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"bonus","type":"uint256"}],"name":"PlatformBonusClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockedUntil","type":"uint256"}],"name":"ReserveFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReserveUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"maxWithdrawalPerTx","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maxDailyWithdrawal","type":"uint256"}],"name":"SecurityParametersUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"taskId","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"platform","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"taskType","type":"uint8"},{"indexed":false,"internalType":"bytes32","name":"taskName","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"SocialTaskAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"taskId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"platform","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"taskType","type":"uint8"}],"name":"SocialTaskCompleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newSupply","type":"uint256"}],"name":"TokenSupplyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Unblacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"UserActivated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"upline","type":"address"}],"name":"UserRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"bool","name":"paidWithVNT","type":"bool"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"activate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"activationBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activationFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activeUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"platform","type":"uint8"},{"internalType":"uint8","name":"taskType","type":"uint8"},{"internalType":"bytes32","name":"taskName","type":"bytes32"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"name":"addSocialTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"addToBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"addToWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"platform","type":"uint8"}],"name":"claimPlatformBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"completeSocialTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dailyClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"dailyClaims","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dailyReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"dailyWithdrawalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"pause","type":"bool"}],"name":"emergencyPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyPauseTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdrawBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"followSubscribeReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"forceActivate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"forceCompleteTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"frontendData","outputs":[{"internalType":"bytes32","name":"websiteUrl","type":"bytes32"},{"internalType":"bytes32","name":"telegramUrl","type":"bytes32"},{"internalType":"bytes32","name":"twitterUrl","type":"bytes32"},{"internalType":"uint256","name":"lastUpdated","type":"uint256"},{"internalType":"address","name":"updatedBy","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fundReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getAvailableWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProjectStats","outputs":[{"internalType":"uint256","name":"_totalUsers","type":"uint256"},{"internalType":"uint256","name":"_activeUsers","type":"uint256"},{"internalType":"uint256","name":"_totalVolume","type":"uint256"},{"internalType":"uint256","name":"_totalWithdrawals","type":"uint256"},{"internalType":"uint256","name":"_totalTokensDistributed","type":"uint256"},{"internalType":"uint256","name":"_totalTokensAvailable","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserveInfo","outputs":[{"internalType":"bool","name":"funded","type":"bool"},{"internalType":"uint256","name":"lockedUntil","type":"uint256"},{"internalType":"uint256","name":"initialAmount","type":"uint256"},{"internalType":"uint256","name":"currentAvailable","type":"uint256"},{"internalType":"uint256","name":"distributed","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"getSocialTask","outputs":[{"internalType":"uint8","name":"platform","type":"uint8"},{"internalType":"uint8","name":"taskType","type":"uint8"},{"internalType":"bytes32","name":"taskName","type":"bytes32"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSocialTasksCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserAdvancedInfo","outputs":[{"internalType":"uint256","name":"lockedTokens","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"},{"internalType":"uint256","name":"directReferrals","type":"uint256"},{"internalType":"bool","name":"hasPaidActivation","type":"bool"},{"internalType":"uint256","name":"userTasksCompleted","type":"uint256"},{"internalType":"uint256","name":"claimedToday","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserBasicInfo","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"uint256","name":"joinTime","type":"uint256"},{"internalType":"uint256","name":"activationTime","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserBonuses","outputs":[{"internalType":"uint256","name":"totalPlatformBonuses","type":"uint256"},{"internalType":"uint256","name":"totalReferralEarnings","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialReserveAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"isTaskCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastActivityTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastWithdrawalTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"likeShareCommentReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxDailyClaims","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDailyWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWithdrawalPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minTimeBetweenActions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"upline","type":"address"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeFromBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeFromWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveFunded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reserveLockedUntil","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"socialTasks","outputs":[{"internalType":"uint8","name":"platform","type":"uint8"},{"internalType":"uint8","name":"taskType","type":"uint8"},{"internalType":"bytes32","name":"taskName","type":"bytes32"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleProjectStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalTasksCompletedGlobal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokenSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensReserved","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalVolume","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalWithdrawnByUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlockContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_activationBonus","type":"uint256"}],"name":"updateActivationBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"updateActivationFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dailyReward","type":"uint256"}],"name":"updateDailyReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newFeeWallet","type":"address"}],"name":"updateFeeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"websiteUrl","type":"bytes32"},{"internalType":"bytes32","name":"telegramUrl","type":"bytes32"},{"internalType":"bytes32","name":"twitterUrl","type":"bytes32"}],"name":"updateFrontendData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_followSubscribeReward","type":"uint256"},{"internalType":"uint256","name":"_likeShareCommentReward","type":"uint256"}],"name":"updateGlobalTaskRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"updateProjectDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"rewards","type":"uint256[]"}],"name":"updateReferralRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxWithdrawalPerTx","type":"uint256"},{"internalType":"uint256","name":"_maxDailyWithdrawal","type":"uint256"}],"name":"updateSecurityParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"updateTaskReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"name":"updateTaskStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vnttToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"}],"name":"updateTokenAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newSupply","type":"uint256"}],"name":"updateTotalTokenSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"updateWithdrawalFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"usersMain","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"uint256","name":"joinTime","type":"uint256"},{"internalType":"uint256","name":"activationTime","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"lockedTokens","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"usersStats","outputs":[{"internalType":"uint256","name":"directReferrals","type":"uint256"},{"internalType":"bool","name":"hasPaidActivation","type":"bool"},{"internalType":"uint256","name":"lastWithdrawalTime","type":"uint256"},{"internalType":"uint256","name":"userTasksCompleted","type":"uint256"},{"internalType":"uint256","name":"claimedToday","type":"uint256"},{"internalType":"uint256","name":"lastActionTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnttToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"payWithVNT","type":"bool"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawUnusedReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
// Global Variables
let web3 = null;
let contract = null;
let userAccount = null;
let userInfo = null;
let isDemoMode = false;
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

// Network Status
const networkStatus = document.getElementById('networkStatus');
const statusDot = document.getElementById('statusDot');
const statusText = document.getElementById('statusText');

// Loading Overlay
const loadingOverlay = document.getElementById('loadingOverlay');
const loadingText = document.getElementById('loadingText');

// Platform Configuration
const PLATFORM_CONFIG = {
    0: { name: "Facebook", color: "#3b5998", icon: "fab fa-facebook-f", container: "facebookTasks" },
    1: { name: "Twitter", color: "#1da1f2", icon: "fab fa-twitter", container: "twitterTasks" },
    2: { name: "Instagram", color: "#e1306c", icon: "fab fa-instagram", container: "instagramTasks" },
    3: { name: "YouTube", color: "#ff0000", icon: "fab fa-youtube", container: "youtubeTasks" },
    4: { name: "Telegram", color: "#0088cc", icon: "fab fa-telegram", container: "telegramTasks" }
};

const TASK_TYPE_CONFIG = {
    0: { name: "Follow/Subscribe", class: "follow", verb: "Follow" },
    1: { name: "Like", class: "like", verb: "Like" },
    2: { name: "Share", class: "share", verb: "Share" },
    3: { name: "Comment", class: "comment", verb: "Comment on" },
    4: { name: "Join/Subscribe", class: "join", verb: "Join" }
};

// Mock Tasks Data
const MOCK_TASKS = [
    // Facebook (4 tasks)
    { id: 0, platform: 0, taskType: 0, name: "Follow Facebook Page", reward: "100", completed: false },
    { id: 1, platform: 0, taskType: 1, name: "Like Facebook Post", reward: "50", completed: false },
    { id: 2, platform: 0, taskType: 2, name: "Share Facebook Post", reward: "50", completed: false },
    { id: 3, platform: 0, taskType: 3, name: "Comment on Facebook Post", reward: "50", completed: false },
    
    // Twitter (4 tasks)
    { id: 4, platform: 1, taskType: 0, name: "Follow Twitter Account", reward: "100", completed: false },
    { id: 5, platform: 1, taskType: 1, name: "Like Tweet", reward: "50", completed: false },
    { id: 6, platform: 1, taskType: 2, name: "Retweet", reward: "50", completed: false },
    { id: 7, platform: 1, taskType: 3, name: "Comment on Tweet", reward: "50", completed: false },
    
    // Instagram (4 tasks)
    { id: 8, platform: 2, taskType: 0, name: "Follow Instagram Account", reward: "100", completed: false },
    { id: 9, platform: 2, taskType: 1, name: "Like Instagram Post", reward: "50", completed: false },
    { id: 10, platform: 2, taskType: 2, name: "Share Instagram Post", reward: "50", completed: false },
    { id: 11, platform: 2, taskType: 3, name: "Comment on Instagram Post", reward: "50", completed: false },
    
    // YouTube (4 tasks)
    { id: 12, platform: 3, taskType: 4, name: "Subscribe YouTube Channel", reward: "100", completed: false },
    { id: 13, platform: 3, taskType: 1, name: "Like YouTube Video", reward: "50", completed: false },
    { id: 14, platform: 3, taskType: 2, name: "Share YouTube Video", reward: "50", completed: false },
    { id: 15, platform: 3, taskType: 3, name: "Comment on YouTube Video", reward: "50", completed: false },
    
    // Telegram (4 tasks)
    { id: 16, platform: 4, taskType: 0, name: "Join Telegram Channel", reward: "100", completed: false },
    { id: 17, platform: 4, taskType: 0, name: "Join Telegram Group", reward: "100", completed: false },
    { id: 18, platform: 4, taskType: 2, name: "Share Telegram Post", reward: "50", completed: false },
    { id: 19, platform: 4, taskType: 3, name: "Comment in Telegram Group", reward: "50", completed: false }
];

let currentTaskId = null;

// Initialize Application
async function initApp() {
    try {
        showLoading("Initializing...");
        
        // Check if Web3 is available
        if (typeof window.ethereum !== 'undefined') {
            web3 = new Web3(window.ethereum);
            updateNetworkStatus("MetaMask detected", false);
            
            // Setup event listeners
            setupEventListeners();
            
            // Check if already connected
            try {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                    userAccount = accounts[0];
                    updateNetworkStatus(`Connected: ${shortAddress(userAccount)}`, true);
                    await loadContract();
                    await updateUI();
                }
            } catch (error) {
                console.log("No previous connection found");
            }
            
        } else {
            // No Web3 provider found
            web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'));
            updateNetworkStatus("Demo Mode - No Wallet", false);
            showToast("Info", "MetaMask not detected. Using demo mode.", "info");
            setupEventListeners();
            enableDemoMode();
        }
        
        isInitialized = true;
        hideLoading();
        
    } catch (error) {
        console.error("Error initializing app:", error);
        updateNetworkStatus("Initialization failed", false);
        showToast("Error", "Failed to initialize application", "error");
        enableDemoMode();
        hideLoading();
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Connect Wallet Button
    connectWalletBtn.addEventListener('click', connectWallet);
    
    // Registration
    registerBtn.addEventListener('click', showRegisterModal);
    document.getElementById('closeRegisterModal').addEventListener('click', () => registerModal.classList.remove('active'));
    document.getElementById('registerForm').addEventListener('submit', handleRegister);
    
    // Activation
    activateBtn.addEventListener('click', showActivateModal);
    document.getElementById('closeActivateModal').addEventListener('click', () => activateModal.classList.remove('active'));
    document.getElementById('submitActivateBtn').addEventListener('click', handleActivate);
    
    // Daily Claim
    dailyClaimBtn.addEventListener('click', claimDailyReward);
    
    // Withdrawal
    withdrawBtn.addEventListener('click', showWithdrawModal);
    document.getElementById('closeWithdrawModal').addEventListener('click', () => withdrawModal.classList.remove('active'));
    document.getElementById('withdrawForm').addEventListener('submit', handleWithdraw);
    
    // Task Modal
    document.getElementById('closeTaskModal').addEventListener('click', () => taskModal.classList.remove('active'));
    document.getElementById('completeTaskBtn').addEventListener('click', completeCurrentTask);
    
    // Close modals when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('active');
        }
    });
    
    // MetaMask events
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', () => window.location.reload());
        window.ethereum.on('disconnect', handleDisconnect);
    }
}

// Connect Wallet Function
async function connectWallet() {
    try {
        if (!window.ethereum) {
            showToast("Error", "Please install MetaMask to connect wallet", "error");
            return;
        }
        
        showLoading("Connecting to wallet...");
        
        const accounts = await window.ethereum.request({ 
            method: 'eth_requestAccounts' 
        });
        
        userAccount = accounts[0];
        updateNetworkStatus(`Connected: ${shortAddress(userAccount)}`, true);
        
        await loadContract();
        await updateUI();
        
        showToast("Success", "Wallet connected successfully", "success");
        
    } catch (error) {
        console.error("Error connecting wallet:", error);
        
        if (error.code === 4001) {
            showToast("Cancelled", "Wallet connection was cancelled", "warning");
        } else {
            showToast("Error", "Failed to connect wallet", "error");
            enableDemoMode();
        }
        
    } finally {
        hideLoading();
    }
}

// Load Contract
async function loadContract() {
    try {
        if (!web3 || !CONTRACT_ADDRESS || CONTRACT_ADDRESS === "0xYourContractAddressHere") {
            throw new Error("Contract address not configured");
        }
        
        if (!web3.utils.isAddress(CONTRACT_ADDRESS)) {
            throw new Error("Invalid contract address");
        }
        
        // Check network
        const chainId = await web3.eth.getChainId();
        if (chainId !== 56 && chainId !== 97) { // BSC Mainnet & Testnet
            showToast("Warning", "Please switch to BSC network", "warning");
        }
        
        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        console.log("Contract loaded successfully");
        isDemoMode = false;
        
    } catch (error) {
        console.error("Error loading contract:", error);
        showToast("Info", "Using demo mode - Contract not available", "info");
        isDemoMode = true;
        contract = null;
    }
}

// Update UI
async function updateUI() {
    try {
        if (!userAccount) {
            resetUI();
            return;
        }
        
        // Update wallet address display
        document.getElementById('walletAddress').textContent = shortAddress(userAccount);
        
        if (isDemoMode || !contract) {
            // Use demo data
            updateUIDemo();
        } else {
            // Try to get real data
            try {
                await updateUIReal();
            } catch (error) {
                console.error("Error updating real UI:", error);
                showToast("Warning", "Using demo data - Could not fetch from contract", "warning");
                updateUIDemo();
            }
        }
        
    } catch (error) {
        console.error("Error updating UI:", error);
        updateUIDemo();
    }
}

// Update UI with Real Contract Data
async function updateUIReal() {
    try {
        showLoading("Loading user data...");
        
        // Get user basic info
        userInfo = await contract.methods.getUserBasicInfo(userAccount).call();
        
        // Get user advanced info
        const userAdvanced = await contract.methods.getUserAdvancedInfo(userAccount).call();
        
        // Update user stats
        document.getElementById('totalEarned').textContent = formatNumber(userInfo.totalEarned);
        document.getElementById('lockedTokens').textContent = formatNumber(userAdvanced.lockedTokens);
        document.getElementById('tasksCompleted').textContent = userAdvanced.userTasksCompleted;
        document.getElementById('directReferrals').textContent = userAdvanced.directReferrals;
        
        // Update available balance
        document.getElementById('availableBalance').textContent = formatNumber(userAdvanced.lockedTokens);
        
        // Update button states
        updateButtonStates(userInfo.isActive, userAdvanced.hasPaidActivation);
        
        // Get project stats
        try {
            const projectStats = await contract.methods.getProjectStats().call();
            document.getElementById('totalUsers').textContent = projectStats._totalUsers;
            document.getElementById('activeUsers').textContent = projectStats._activeUsers;
            document.getElementById('totalVolume').textContent = formatNumber(projectStats._totalVolume);
            document.getElementById('totalWithdrawals').textContent = formatNumber(projectStats._totalWithdrawals);
        } catch (error) {
            console.log("Could not load project stats");
        }
        
        // Load tasks from contract
        await loadTasksReal();
        
        hideLoading();
        
    } catch (error) {
        throw error;
    }
}

// Update UI with Demo Data
function updateUIDemo() {
    // Update demo stats
    document.getElementById('totalEarned').textContent = "1,250";
    document.getElementById('lockedTokens').textContent = "2,500";
    document.getElementById('tasksCompleted').textContent = "8";
    document.getElementById('directReferrals').textContent = "3";
    document.getElementById('availableBalance').textContent = "2,500";
    
    // Update project stats
    document.getElementById('totalUsers').textContent = "1,245";
    document.getElementById('activeUsers').textContent = "892";
    document.getElementById('totalVolume').textContent = "45,230";
    document.getElementById('totalWithdrawals').textContent = "12,450";
    
    // Update button states for demo
    if (userAccount) {
        // Demo user is registered but not activated
        registerBtn.disabled = true;
        activateBtn.disabled = false;
        dailyClaimBtn.disabled = true;
        withdrawBtn.disabled = true;
    } else {
        // No user connected
        registerBtn.disabled = true;
        activateBtn.disabled = true;
        dailyClaimBtn.disabled = true;
        withdrawBtn.disabled = true;
    }
    
    // Load demo tasks
    loadTasksDemo();
}

// Reset UI
function resetUI() {
    document.getElementById('walletAddress').textContent = "Not Connected";
    document.getElementById('totalEarned').textContent = "0";
    document.getElementById('lockedTokens').textContent = "0";
    document.getElementById('tasksCompleted').textContent = "0";
    document.getElementById('directReferrals').textContent = "0";
    document.getElementById('availableBalance').textContent = "0";
    
    // Reset project stats
    document.getElementById('totalUsers').textContent = "0";
    document.getElementById('activeUsers').textContent = "0";
    document.getElementById('totalVolume').textContent = "0";
    document.getElementById('totalWithdrawals').textContent = "0";
    
    // Clear tasks
    Object.values(PLATFORM_CONFIG).forEach(platform => {
        const container = document.getElementById(platform.container);
        if (container) container.innerHTML = "";
    });
    
    // Reset buttons
    registerBtn.disabled = true;
    activateBtn.disabled = true;
    dailyClaimBtn.disabled = true;
    withdrawBtn.disabled = true;
    
    // Show demo if no wallet
    if (!userAccount) {
        loadTasksDemo();
    }
}

// Update Button States
function updateButtonStates(isActive, hasPaidActivation) {
    if (!userAccount) {
        registerBtn.disabled = true;
        activateBtn.disabled = true;
        dailyClaimBtn.disabled = true;
        withdrawBtn.disabled = true;
        return;
    }
    
    // In demo mode or if no user info
    if (!userInfo || isDemoMode) {
        registerBtn.disabled = true; // Already registered in demo
        activateBtn.disabled = false; // Can activate
        dailyClaimBtn.disabled = true; // Not activated
        withdrawBtn.disabled = true; // Not activated
        return;
    }
    
    // Real mode with user info
    const isRegistered = userInfo.joinTime > 0;
    
    registerBtn.disabled = isRegistered;
    activateBtn.disabled = !(isRegistered && !isActive && !hasPaidActivation);
    dailyClaimBtn.disabled = !isActive;
    withdrawBtn.disabled = !isActive;
}

// Load Real Tasks from Contract
async function loadTasksReal() {
    try {
        // Clear all task containers
        Object.values(PLATFORM_CONFIG).forEach(platform => {
            const container = document.getElementById(platform.container);
            if (container) container.innerHTML = "";
        });
        
        // Note: Since we don't have the exact task functions in ABI,
        // we'll use demo tasks for now
        loadTasksDemo();
        
    } catch (error) {
        console.error("Error loading real tasks:", error);
        loadTasksDemo();
    }
}

// Load Demo Tasks
function loadTasksDemo() {
    // Clear all task containers
    Object.values(PLATFORM_CONFIG).forEach(platform => {
        const container = document.getElementById(platform.container);
        if (container) container.innerHTML = "";
    });
    
    // Create demo tasks
    MOCK_TASKS.forEach(task => {
        createTaskCard(task);
    });
}

// Create Task Card
function createTaskCard(taskData) {
    const platform = PLATFORM_CONFIG[taskData.platform];
    if (!platform) return;
    
    const taskType = TASK_TYPE_CONFIG[taskData.taskType] || { name: "Task", class: "follow", verb: "Complete" };
    const isCompleted = taskData.completed;
    
    const taskCard = document.createElement('div');
    taskCard.className = `task-card ${platform.name.toLowerCase()}-card ${isCompleted ? 'completed' : ''}`;
    taskCard.dataset.taskId = taskData.id;
    
    taskCard.innerHTML = `
        <div class="task-type ${taskType.class}">${taskType.name}</div>
        <h3 class="task-name">${taskData.name}</h3>
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
                <span>${taskData.reward} VNTT</span>
            </div>
            <button class="task-btn ${isCompleted ? 'completed-btn' : 'complete-btn'}" 
                    ${isCompleted ? 'disabled' : ''}>
                <i class="fas ${isCompleted ? 'fa-check' : 'fa-play'}"></i> 
                ${isCompleted ? 'Completed' : 'Start Task'}
            </button>
        </div>
    `;
    
    document.getElementById(platform.container).appendChild(taskCard);
    
    // Add event listener
    if (!isCompleted) {
        const button = taskCard.querySelector('.task-btn');
        button.addEventListener('click', () => showTaskInstructions(taskData, platform, taskType));
    }
}

// Show Task Instructions Modal
function showTaskInstructions(taskData, platform, taskType) {
    currentTaskId = taskData.id;
    
    // Update modal content
    document.getElementById('taskModalTitle').textContent = taskData.name;
    document.getElementById('taskModalName').textContent = taskData.name;
    document.getElementById('taskModalType').textContent = `${platform.name} - ${taskType.name}`;
    document.getElementById('taskModalReward').textContent = taskData.reward;
    
    // Update platform icon
    const platformIcon = document.getElementById('taskModalPlatform');
    platformIcon.className = `platform-icon ${platform.name.toLowerCase()}-bg`;
    platformIcon.innerHTML = `<i class="${platform.icon}"></i>`;
    
    // Generate instructions
    const instructions = generateInstructions(platform.name, taskType.verb);
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

// Generate Instructions
function generateInstructions(platform, verb) {
    const instructions = [];
    
    switch(platform) {
        case "Facebook":
            if (verb === "Follow") {
                instructions.push("Visit our Facebook page");
                instructions.push("Click the 'Follow' button");
                instructions.push("Make sure you're following the page");
            } else if (verb === "Like") {
                instructions.push("Go to our Facebook post");
                instructions.push("Click the 'Like' button");
                instructions.push("Wait for confirmation");
            } else if (verb === "Share") {
                instructions.push("Find our Facebook post");
                instructions.push("Click 'Share' button");
                instructions.push("Share to your timeline");
            } else if (verb === "Comment on") {
                instructions.push("Go to our Facebook post");
                instructions.push("Write a comment");
                instructions.push("Post your comment");
            }
            break;
            
        case "Twitter":
            if (verb === "Follow") {
                instructions.push("Visit our Twitter profile");
                instructions.push("Click 'Follow' button");
                instructions.push("Confirm you're following");
            } else if (verb === "Like") {
                instructions.push("Find our tweet");
                instructions.push("Click the heart icon");
                instructions.push("Wait for confirmation");
            } else if (verb === "Share") {
                instructions.push("Find our tweet");
                instructions.push("Click 'Retweet'");
                instructions.push("Confirm retweet");
            } else if (verb === "Comment on") {
                instructions.push("Go to our tweet");
                instructions.push("Write a reply");
                instructions.push("Post your reply");
            }
            break;
            
        case "Instagram":
            if (verb === "Follow") {
                instructions.push("Visit our Instagram profile");
                instructions.push("Tap 'Follow'");
                instructions.push("Confirm following");
            } else if (verb === "Like") {
                instructions.push("Go to our Instagram post");
                instructions.push("Double-tap to like");
                instructions.push("Wait for confirmation");
            } else if (verb === "Share") {
                instructions.push("Find our Instagram post");
                instructions.push("Tap share icon");
                instructions.push("Share to story");
            } else if (verb === "Comment on") {
                instructions.push("Go to our Instagram post");
                instructions.push("Write a comment");
                instructions.push("Post comment");
            }
            break;
            
        case "YouTube":
            if (verb === "Subscribe") {
                instructions.push("Go to our YouTube channel");
                instructions.push("Click 'Subscribe'");
                instructions.push("Confirm subscription");
            } else if (verb === "Like") {
                instructions.push("Watch our video");
                instructions.push("Click thumbs up");
                instructions.push("Wait for confirmation");
            } else if (verb === "Share") {
                instructions.push("Find our video");
                instructions.push("Click 'Share'");
                instructions.push("Share link");
            } else if (verb === "Comment on") {
                instructions.push("Go to video comments");
                instructions.push("Write comment");
                instructions.push("Post comment");
            }
            break;
            
        case "Telegram":
            if (verb === "Join") {
                instructions.push("Click Telegram link");
                instructions.push("Join channel/group");
                instructions.push("Confirm membership");
            } else if (verb === "Share") {
                instructions.push("Find our post");
                instructions.push("Forward to others");
                instructions.push("Share with friends");
            } else if (verb === "Comment on") {
                instructions.push("Go to group");
                instructions.push("Write message");
                instructions.push("Send message");
            }
            break;
    }
    
    instructions.push("Return here to claim reward");
    instructions.push("Click 'Mark as Completed'");
    
    return instructions;
}

// Show Register Modal
function showRegisterModal() {
    if (!userAccount) {
        showToast("Error", "Please connect wallet first", "error");
        return;
    }
    registerModal.classList.add('active');
}

// Handle Registration
async function handleRegister(e) {
    e.preventDefault();
    
    if (!userAccount) {
        showToast("Error", "Wallet not connected", "error");
        return;
    }
    
    const uplineAddress = document.getElementById('uplineAddress').value.trim();
    
    if (!isValidAddress(uplineAddress)) {
        showToast("Error", "Invalid upline address", "error");
        return;
    }
    
    try {
        showLoading("Registering account...");
        
        if (isDemoMode || !contract) {
            // Demo registration
            await new Promise(resolve => setTimeout(resolve, 1500));
            userInfo = {
                joinTime: Math.floor(Date.now() / 1000),
                isActive: false,
                hasPaidActivation: false
            };
            showToast("Success", "Account registered (Demo)", "success");
        } else {
            // Real registration
            await contract.methods.register(uplineAddress).send({ from: userAccount });
            showToast("Success", "Account registered successfully", "success");
        }
        
        registerModal.classList.remove('active');
        document.getElementById('registerForm').reset();
        await updateUI();
        
    } catch (error) {
        console.error("Registration error:", error);
        showToast("Error", error.message || "Registration failed", "error");
    } finally {
        hideLoading();
    }
}

// Show Activate Modal
function showActivateModal() {
    if (!userAccount) {
        showToast("Error", "Please connect wallet first", "error");
        return;
    }
    
    if (!userInfo || userInfo.joinTime === 0) {
        showToast("Error", "Please register first", "error");
        return;
    }
    
    activateModal.classList.add('active');
}

// Handle Activation
async function handleActivate() {
    if (!userAccount) {
        showToast("Error", "Wallet not connected", "error");
        return;
    }
    
    try {
        showLoading("Activating account...");
        
        if (isDemoMode || !contract) {
            // Demo activation
            await new Promise(resolve => setTimeout(resolve, 1500));
            userInfo.isActive = true;
            userInfo.hasPaidActivation = true;
            showToast("Success", "Account activated (Demo)", "success");
        } else {
            // Real activation
            await contract.methods.activate().send({ from: userAccount });
            showToast("Success", "Account activated successfully", "success");
        }
        
        activateModal.classList.remove('active');
        await updateUI();
        
    } catch (error) {
        console.error("Activation error:", error);
        showToast("Error", error.message || "Activation failed", "error");
    } finally {
        hideLoading();
    }
}

// Claim Daily Reward
async function claimDailyReward() {
    if (!userAccount) {
        showToast("Error", "Wallet not connected", "error");
        return;
    }
    
    if (!userInfo || !userInfo.isActive) {
        showToast("Error", "Account not activated", "error");
        return;
    }
    
    try {
        showLoading("Claiming daily reward...");
        
        if (isDemoMode || !contract) {
            // Demo claim
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            const currentEarned = parseInt(document.getElementById('totalEarned').textContent.replace(/,/g, ''));
            const currentLocked = parseInt(document.getElementById('lockedTokens').textContent.replace(/,/g, ''));
            
            document.getElementById('totalEarned').textContent = formatNumber(currentEarned + 100);
            document.getElementById('lockedTokens').textContent = formatNumber(currentLocked + 100);
            
            showToast("Success", "Daily reward claimed (Demo)", "success");
        } else {
            // Real claim
            await contract.methods.dailyClaim().send({ from: userAccount });
            showToast("Success", "Daily reward claimed", "success");
            await updateUI();
        }
        
    } catch (error) {
        console.error("Daily claim error:", error);
        showToast("Error", error.message || "Failed to claim", "error");
    } finally {
        hideLoading();
    }
}

// Show Withdraw Modal
function showWithdrawModal() {
    if (!userAccount) {
        showToast("Error", "Please connect wallet first", "error");
        return;
    }
    
    if (!userInfo || !userInfo.isActive) {
        showToast("Error", "Account not activated", "error");
        return;
    }
    
    withdrawModal.classList.add('active');
}

// Handle Withdrawal
async function handleWithdraw(e) {
    e.preventDefault();
    
    if (!userAccount) {
        showToast("Error", "Wallet not connected", "error");
        return;
    }
    
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    const feeMethod = document.querySelector('input[name="feeMethod"]:checked').value;
    
    if (!amount || amount < 11) {
        showToast("Error", "Minimum withdrawal: 11 VNTT", "error");
        return;
    }
    
    try {
        showLoading("Processing withdrawal...");
        
        if (isDemoMode || !contract) {
            // Demo withdrawal
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            const currentLocked = parseInt(document.getElementById('lockedTokens').textContent.replace(/,/g, ''));
            if (amount > currentLocked) {
                throw new Error("Insufficient balance");
            }
            
            document.getElementById('lockedTokens').textContent = formatNumber(currentLocked - amount);
            showToast("Success", `Withdrawn ${amount} VNTT (Demo)`, "success");
        } else {
            // Real withdrawal
            const amountInWei = web3.utils.toWei(amount.toString(), 'ether');
            const payWithVNT = feeMethod === 'vnt';
            
            await contract.methods.withdraw(amountInWei, payWithVNT).send({ from: userAccount });
            showToast("Success", "Withdrawal successful", "success");
            await updateUI();
        }
        
        withdrawModal.classList.remove('active');
        document.getElementById('withdrawForm').reset();
        
    } catch (error) {
        console.error("Withdrawal error:", error);
        showToast("Error", error.message || "Withdrawal failed", "error");
    } finally {
        hideLoading();
    }
}

// Complete Current Task
async function completeCurrentTask() {
    if (currentTaskId === null || !userAccount) {
        showToast("Error", "No task selected", "error");
        return;
    }
    
    if (!userInfo || !userInfo.isActive) {
        showToast("Error", "Account not activated", "error");
        return;
    }
    
    try {
        showLoading("Completing task...");
        
        if (isDemoMode || !contract) {
            // Demo task completion
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Update task card
            const taskCard = document.querySelector(`[data-task-id="${currentTaskId}"]`);
            if (taskCard) {
                taskCard.classList.add('completed');
                const button = taskCard.querySelector('.task-btn');
                button.innerHTML = '<i class="fas fa-check"></i> Completed';
                button.className = 'task-btn completed-btn';
                button.disabled = true;
            }
            
            // Update stats
            const currentEarned = parseInt(document.getElementById('totalEarned').textContent.replace(/,/g, ''));
            const currentTasks = parseInt(document.getElementById('tasksCompleted').textContent);
            
            document.getElementById('totalEarned').textContent = formatNumber(currentEarned + 100);
            document.getElementById('tasksCompleted').textContent = currentTasks + 1;
            
            showToast("Success", "Task completed (Demo)", "success");
        } else {
            // Real task completion
            await contract.methods.completeSocialTask(currentTaskId).send({ from: userAccount });
            showToast("Success", "Task completed", "success");
            await updateUI();
        }
        
        taskModal.classList.remove('active');
        currentTaskId = null;
        
    } catch (error) {
        console.error("Task completion error:", error);
        showToast("Error", error.message || "Task failed", "error");
    } finally {
        hideLoading();
    }
}

// Event Handlers
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        userAccount = null;
        updateNetworkStatus("Disconnected", false);
        resetUI();
    } else if (accounts[0] !== userAccount) {
        userAccount = accounts[0];
        updateNetworkStatus(`Connected: ${shortAddress(userAccount)}`, true);
        updateUI();
    }
}

function handleDisconnect(error) {
    console.log("MetaMask disconnected:", error);
    userAccount = null;
    updateNetworkStatus("Disconnected", false);
    resetUI();
}

// Enable Demo Mode
function enableDemoMode() {
    isDemoMode = true;
    contract = null;
    updateUIDemo();
}

// Helper Functions
function showToast(title, message, type = "info") {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toastTitle');
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = document.getElementById('toastIcon');
    
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    
    // Set icon and color
    const icons = {
        success: "fa-check-circle",
        error: "fa-exclamation-circle",
        warning: "fa-exclamation-triangle",
        info: "fa-info-circle"
    };
    
    toastIcon.className = `fas ${icons[type] || icons.info}`;
    toastIcon.style.color = `var(--${type}-color)`;
    toast.className = `toast ${type}`;
    
    // Show toast
    toast.classList.add('show');
    
    // Hide after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

function showLoading(message = "Loading...") {
    loadingText.textContent = message;
    loadingOverlay.classList.add('active');
}

function hideLoading() {
    loadingOverlay.classList.remove('active');
}

function updateNetworkStatus(text, isConnected) {
    statusText.textContent = text;
    statusDot.className = `status-dot ${isConnected ? 'connected' : ''}`;
    networkStatus.style.display = 'flex';
}

function shortAddress(address) {
    if (!address) return "Not Connected";
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

function isValidAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
}

function formatNumber(num) {
    if (typeof num === 'string') {
        num = parseFloat(num);
    }
    
    if (isNaN(num)) return "0";
    
    // Convert from wei if needed
    if (num > 10**18) {
        num = num / 10**18;
    }
    
    if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(2) + 'K';
    } else if (num >= 1) {
        return num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    } else {
        return num.toFixed(4);
    }
}

// Initialize app when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
        initApp();
    }
});
