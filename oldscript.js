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
const navTabs = document.querySelectorAll('.nav-tab');
const tasksContainer = document.getElementById('all-tasks');
const instructionsModal = document.getElementById('instructionsModal');
const closeInstructionsModal = document.getElementById('closeInstructionsModal');
const confirmCompleteBtn = document.getElementById('confirmCompleteBtn');

// Platform mapping
const PLATFORM_CONFIG = {
    0: {
        name: "Facebook",
        color: "#3b5998",
        icon: "fab fa-facebook-f",
        container: "facebook-tasks-container",
        statsAvailable: "facebook-available",
        statsRewards: "facebook-rewards",
        progressBar: "facebook-progress",
        completedCount: "facebook-completed"
    },
    1: {
        name: "Twitter",
        color: "#1da1f2",
        icon: "fab fa-twitter",
        container: "twitter-tasks-container",
        statsAvailable: "twitter-available",
        statsRewards: "twitter-rewards",
        progressBar: "twitter-progress",
        completedCount: "twitter-completed"
    },
    2: {
        name: "Instagram",
        color: "#e1306c",
        icon: "fab fa-instagram",
        container: "instagram-tasks-container",
        statsAvailable: "instagram-available",
        statsRewards: "instagram-rewards",
        progressBar: "instagram-progress",
        completedCount: "instagram-completed"
    },
    3: {
        name: "YouTube",
        color: "#ff0000",
        icon: "fab fa-youtube",
        container: "youtube-tasks-container",
        statsAvailable: "youtube-available",
        statsRewards: "youtube-rewards",
        progressBar: "youtube-progress",
        completedCount: "youtube-completed"
    },
    4: {
        name: "Telegram",
        color: "#0088cc",
        icon: "fab fa-telegram",
        container: "telegram-tasks-container",
        statsAvailable: "telegram-available",
        statsRewards: "telegram-rewards",
        progressBar: "telegram-progress",
        completedCount: "telegram-completed"
    }
};

const TASK_TYPE_CONFIG = {
    0: { name: "Follow/Subscribe", class: "follow" },
    1: { name: "Like", class: "like" },
    2: { name: "Share", class: "share" },
    3: { name: "Comment", class: "comment" },
    4: { name: "Join/Subscribe", class: "join" }
};

let currentTaskId = null;

// Initialize application
async function initApp() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
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
    
    // Navigation tabs
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show selected tab content
            const tabId = tab.dataset.tab;
            document.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = 'none';
            });
            
            if (tabId === 'all-tasks') {
                document.getElementById('all-tasks').style.display = 'block';
            } else if (tabId === 'my-stats') {
                document.getElementById('my-stats').style.display = 'block';
                updateStatsTab();
            } else {
                // Show platform-specific section
                document.getElementById('all-tasks').style.display = 'block';
                const platformSection = document.getElementById(tabId.replace('-tasks', '-section'));
                if (platformSection) {
                    window.scrollTo({
                        top: platformSection.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Modal close button
    closeInstructionsModal.addEventListener('click', () => {
        instructionsModal.classList.remove('active');
    });
    
    // Confirm task completion
    confirmCompleteBtn.addEventListener('click', completeCurrentTask);
    
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
        document.getElementById('userAddress').textContent = userAccount.substring(0, 10) + '...';
        document.getElementById('uplineAddress').textContent = userInfo.upline ? userInfo.upline.substring(0, 8) + '...' : 'None';
        document.getElementById('accountStatus').textContent = userInfo.isActive ? 'Active' : 'Inactive';
        document.getElementById('accountStatus').style.color = userInfo.isActive ? 'var(--accent-color)' : 'var(--danger-color)';
        
        if (userInfo.joinTime > 0) {
            const joinDate = new Date(userInfo.joinTime * 1000);
            document.getElementById('joinDate').textContent = joinDate.toLocaleDateString();
        }
        
        // Get advanced info
        const userAdvanced = await contract.methods.getUserAdvancedInfo(userAccount).call();
        document.getElementById('lockedTokens').textContent = formatTokenAmount(userAdvanced.lockedTokens);
        document.getElementById('directReferrals').textContent = userAdvanced.directReferrals;
        document.getElementById('tasksCompleted').textContent = `${userAdvanced.userTasksCompleted}/20`;
        document.getElementById('dailyClaims').textContent = `${userAdvanced.claimedToday}/1`;
        
        // Update stats tab
        document.getElementById('statsTotalEarned').textContent = formatTokenAmount(userInfo.totalEarned) + ' VNTT';
        document.getElementById('statsLockedTokens').textContent = formatTokenAmount(userAdvanced.lockedTokens) + ' VNTT';
        document.getElementById('statsTotalWithdrawn').textContent = formatTokenAmount(userInfo.totalWithdrawn) + ' VNTT';
        document.getElementById('statsDirectReferrals').textContent = userAdvanced.directReferrals;
        
        // Calculate available to withdraw
        const available = userAdvanced.lockedTokens;
        document.getElementById('statsAvailableWithdraw').textContent = formatTokenAmount(available) + ' VNTT';
        
        // Load tasks
        await loadAllTasks();
        
        // Update project stats
        const projectStats = await contract.methods.getProjectStats().call();
        
        // Update platform progress
        updatePlatformProgress();
        
    } catch (error) {
        console.error("Error updating UI:", error);
    }
}

// Load all tasks from contract
async function loadAllTasks() {
    if (!contract) return;
    
    try {
        const taskCount = await contract.methods.getSocialTasksCount().call();
        
        // Clear all task containers
        Object.values(PLATFORM_CONFIG).forEach(platform => {
            document.getElementById(platform.container).innerHTML = '';
        });
        
        // Platform stats
        const platformStats = {
            0: { count: 0, totalReward: 0, completed: 0 },
            1: { count: 0, totalReward: 0, completed: 0 },
            2: { count: 0, totalReward: 0, completed: 0 },
            3: { count: 0, totalReward: 0, completed: 0 },
            4: { count: 0, totalReward: 0, completed: 0 }
        };
        
        for (let i = 0; i < Math.min(taskCount, 20); i++) {
            const task = await contract.methods.getSocialTask(i).call();
            const isCompleted = await contract.methods.isTaskCompleted(userAccount, i).call();
            
            // Update platform stats
            const platform = task.platform;
            platformStats[platform].count++;
            platformStats[platform].totalReward += parseInt(task.reward);
            if (isCompleted) {
                platformStats[platform].completed++;
            }
            
            // Create task card
            createTaskCard(i, task, isCompleted);
        }
        
        // Update platform statistics
        Object.keys(platformStats).forEach(platformId => {
            const stats = platformStats[platformId];
            const platform = PLATFORM_CONFIG[platformId];
            
            if (platform) {
                document.getElementById(platform.statsAvailable).textContent = stats.count;
                document.getElementById(platform.statsRewards).textContent = formatTokenAmount(stats.totalReward) + ' VNTT';
                document.getElementById(platform.completedCount).textContent = stats.completed;
                
                // Update progress bar
                const progressBar = document.getElementById(platform.progressBar);
                if (progressBar) {
                    const percentage = stats.count > 0 ? (stats.completed / stats.count) * 100 : 0;
                    progressBar.style.width = percentage + '%';
                }
            }
        });
        
    } catch (error) {
        console.error("Error loading tasks:", error);
    }
}

// Create individual task card
function createTaskCard(taskId, task, isCompleted) {
    const platform = PLATFORM_CONFIG[task.platform];
    if (!platform) return;
    
    const taskType = TASK_TYPE_CONFIG[task.taskType] || { name: "Task", class: "follow" };
    
    // Convert bytes32 task name to string
    let taskName = "Social Task";
    if (task.taskName !== "0x0000000000000000000000000000000000000000000000000000000000000000") {
        taskName = web3.utils.hexToUtf8(task.taskName);
    }
    
    const taskCard = document.createElement('div');
    taskCard.className = `task-card ${platform.name.toLowerCase()}-card ${isCompleted ? 'completed' : ''}`;
    
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
        <div class="task-reward">
            <div class="reward-amount">
                <i class="fas fa-gem"></i>
                <span>${formatTokenAmount(task.reward)} VNTT</span>
            </div>
            <button class="complete-btn ${isCompleted ? 'completed' : ''}" 
                    data-task-id="${taskId}"
                    ${isCompleted ? 'disabled' : ''}>
                ${isCompleted ? '<i class="fas fa-check"></i> Completed' : '<i class="fas fa-play"></i> Start Task'}
            </button>
        </div>
    `;
    
    document.getElementById(platform.container).appendChild(taskCard);
    
    // Add event listener to complete button
    if (!isCompleted) {
        const completeBtn = taskCard.querySelector('.complete-btn');
        completeBtn.addEventListener('click', () => showTaskInstructions(taskId, task, taskName));
    }
}

// Show task instructions modal
function showTaskInstructions(taskId, task, taskName) {
    const platform = PLATFORM_CONFIG[task.platform];
    const taskType = TASK_TYPE_CONFIG[task.taskType];
    
    if (!platform || !taskType) return;
    
    currentTaskId = taskId;
    
    // Update modal content
    document.getElementById('modalTaskName').textContent = taskName;
    document.getElementById('modalTaskReward').textContent = formatTokenAmount(task.reward);
    
    // Generate instructions based on platform and task type
    const instructions = generateInstructions(platform.name, taskType.name);
    
    document.getElementById('step1').textContent = instructions.step1;
    document.getElementById('step2').textContent = instructions.step2;
    document.getElementById('step3').textContent = instructions.step3;
    
    // Show modal
    instructionsModal.classList.add('active');
}

// Generate task instructions
function generateInstructions(platform, taskType) {
    const instructions = {
        step1: "",
        step2: "",
        step3: ""
    };
    
    switch(taskType) {
        case "Follow/Subscribe":
        case "Join/Subscribe":
            instructions.step1 = `Visit our official ${platform} page`;
            instructions.step2 = `Click the Follow/Subscribe button`;
            instructions.step3 = `Wait for the transaction to be confirmed`;
            break;
            
        case "Like":
            instructions.step1 = `Go to our latest post on ${platform}`;
            instructions.step2 = `Click the Like button`;
            instructions.step3 = `Confirm the transaction to claim your reward`;
            break;
            
        case "Share":
            instructions.step1 = `Find our post on ${platform}`;
            instructions.step2 = `Click the Share/Retweet button`;
            instructions.step3 = `Share with your friends and confirm`;
            break;
            
        case "Comment":
            instructions.step1 = `Go to our ${platform} post`;
            instructions.step2 = `Leave a meaningful comment`;
            instructions.step3 = `Submit and confirm your participation`;
            break;
            
        default:
            instructions.step1 = "Visit the task page";
            instructions.step2 = "Complete the required actions";
            instructions.step3 = "Confirm completion to claim reward";
    }
    
    return instructions;
}

// Complete the current task
async function completeCurrentTask() {
    if (currentTaskId === null || !contract || !userAccount) return;
    
    try {
        instructionsModal.classList.remove('active');
        
        // Show loading state
        confirmCompleteBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        confirmCompleteBtn.disabled = true;
        
        await contract.methods.completeSocialTask(currentTaskId).send({ from: userAccount });
        
        alert('Task completed successfully! Reward has been added to your account.');
        await updateUI();
        
    } catch (error) {
        console.error("Error completing task:", error);
        alert('Task completion failed: ' + error.message);
    } finally {
        confirmCompleteBtn.innerHTML = '<i class="fas fa-check-circle"></i> I Have Completed This Task';
        confirmCompleteBtn.disabled = false;
        currentTaskId = null;
    }
}

// Update platform progress
function updatePlatformProgress() {
    // This function would update the progress bars for each platform
    // based on completed tasks vs total tasks
}

// Update stats tab
async function updateStatsTab() {
    if (!contract || !userAccount) return;
    
    try {
        // Additional stats would be loaded here
        console.log("Updating stats tab...");
    } catch (error) {
        console.error("Error updating stats:", error);
    }
}

// Helper function to format token amounts
function formatTokenAmount(amount) {
    if (!amount) return "0";
    
    try {
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
    } catch (error) {
        return "0";
    }
}

// Initialize the app when page loads
window.addEventListener('DOMContentLoaded', initApp);
