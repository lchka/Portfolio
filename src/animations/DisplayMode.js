const toggleDisplayMode = (mode) => {
    document.body.setAttribute('data-mode', mode); // Set data-mode attribute to 'dark' or 'light'

    if (mode === 'light') {
        showAlert();
    }
};

const showAlert = () => {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'warning-message';
    alertDiv.textContent = 'THIS IS UNDER CONSTRUCTION --- GO BACK TO THE DARK SIDE';
    document.body.appendChild(alertDiv);

    const homeContainer = document.querySelector('.home-container');
    if (homeContainer) {
        homeContainer.classList.add('blurred');
    }

    setTimeout(() => {
        document.body.removeChild(alertDiv);
        if (homeContainer) {
            homeContainer.classList.remove('blurred');
        }
    }, 3000); // Hide the warning after 3 seconds
};

// Initial setup
document.body.setAttribute('data-mode', 'light'); // Default to light mode

export default toggleDisplayMode;