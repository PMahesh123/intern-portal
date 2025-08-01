// Mock backend data
const mockUserData = {
    name: "Alex Johnson",
    referralCode: "alex2025",
    donationsRaised: 375
};

const mockLeaderboardData = [
    { rank: 1, name: "Sam Wilson", referralCode: "sam2025", amount: 1250 },
    { rank: 2, name: "Taylor Smith", referralCode: "taylor2025", amount: 980 },
    { rank: 3, name: "Jordan Lee", referralCode: "jordan2025", amount: 875 },
    { rank: 4, name: "Alex Johnson", referralCode: "alex2025", amount: 375 },
    { rank: 5, name: "Casey Kim", referralCode: "casey2025", amount: 250 }
];

// DOM Elements
const authForm = document.getElementById('authForm');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');
const dashboard = document.getElementById('dashboard');
const leaderboard = document.getElementById('leaderboard');
const logoutBtn = document.getElementById('logoutBtn');
const showLeaderboard = document.getElementById('showLeaderboard');
const backToDashboard = document.getElementById('backToDashboard');

// User data elements
const internName = document.getElementById('internName');
const referralCode = document.getElementById('referralCode');
const donationAmount = document.getElementById('donationAmount');
const leaderboardBody = document.getElementById('leaderboardBody');

// Event Listeners
showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real app, you would authenticate here
    // For this demo, we'll just show the dashboard
    showDashboard();
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real app, you would create a new user here
    // For this demo, we'll just show the dashboard
    showDashboard();
});

logoutBtn.addEventListener('click', () => {
    authForm.style.display = 'block';
    dashboard.style.display = 'none';
    leaderboard.style.display = 'none';
});

showLeaderboard.addEventListener('click', (e) => {
    e.preventDefault();
    dashboard.style.display = 'none';
    leaderboard.style.display = 'block';
    populateLeaderboard();
});

backToDashboard.addEventListener('click', () => {
    leaderboard.style.display = 'none';
    dashboard.style.display = 'block';
});

// Functions
function showDashboard() {
    authForm.style.display = 'none';
    dashboard.style.display = 'block';
    
    // Populate with mock data
    internName.textContent = mockUserData.name;
    referralCode.textContent = mockUserData.referralCode;
    donationAmount.textContent = mockUserData.donationsRaised;
    
    // Update reward buttons based on donations
    updateRewards();
}

function updateRewards() {
    const donations = mockUserData.donationsRaised;
    const rewardButtons = document.querySelectorAll('.reward-card button');
    
    // Bronze badge (always unlocked in this demo)
    rewardButtons[0].disabled = true;
    rewardButtons[0].textContent = "Unlocked";
    
    // Silver badge
    if (donations >= 500) {
        rewardButtons[1].disabled = true;
        rewardButtons[1].textContent = "Unlocked";
    } else {
        rewardButtons[1].disabled = false;
        rewardButtons[1].textContent = "Locked";
    }
    
    // Gold badge
    if (donations >= 1000) {
        rewardButtons[2].disabled = true;
        rewardButtons[2].textContent = "Unlocked";
    } else {
        rewardButtons[2].disabled = false;
        rewardButtons[2].textContent = "Locked";
    }
}

function populateLeaderboard() {
    leaderboardBody.innerHTML = '';
    
    mockLeaderboardData.forEach(user => {
        const row = document.createElement('tr');
        
        // Highlight current user
        if (user.referralCode === mockUserData.referralCode) {
            row.style.backgroundColor = '#e3f2fd';
        }
        
        row.innerHTML = `
            <td>${user.rank}</td>
            <td>${user.name}</td>
            <td>${user.referralCode}</td>
            <td>$${user.amount}</td>
        `;
        
        leaderboardBody.appendChild(row);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // For demo purposes, you could automatically log in by uncommenting:
    // showDashboard();
});