const toggleDisplayMode = (mode) => {
    document.body.setAttribute('data-mode', mode); // Set data-mode attribute to 'dark' or 'light'
};

// Initial setup
document.body.setAttribute('data-mode', 'light'); // Default to light mode

export default toggleDisplayMode;
