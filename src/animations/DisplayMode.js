const toggleDisplayMode = (mode) => {
    document.body.setAttribute('data-mode', mode); // Set data-mode attribute to 'dark' or 'light'

    if (mode === 'light') {
        showAlert();
    }
};

const showAlert = () => {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'warning-message';
    alertDiv.textContent = 'THIS MODE IS UNDER CONSTRUCTION - GO BACK!!!!!!!!!!!!!!!!!!!!!!!!!';
    document.body.appendChild(alertDiv);

    // Add blur effect to the home page content
    document.querySelector('.home-container').classList.add('blurred');

    setTimeout(() => {
        document.body.removeChild(alertDiv);
        // Remove blur effect from the home page content
        document.querySelector('.home-container').classList.remove('blurred');
    }, 3000); // Hide the warning after 3 seconds
};

// Initial setup
document.body.setAttribute('data-mode', 'light'); // Default to light mode

export default toggleDisplayMode;