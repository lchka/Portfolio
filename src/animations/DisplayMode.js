const toggleDisplayMode = (mode) => {
    const body = document.body;
    if (mode === 'dark') {
        body.style.backgroundColor = '#0D0313'; // Dark background color
        body.style.color = '#FFFF33'; // Neon yellow text color (more vibrant neon yellow)
        body.dataset.mode = 'dark';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        body.dataset.mode = 'light';
    }
};

// Initial setup
document.body.dataset.mode = 'light';
document.body.style.backgroundColor = 'white';
document.body.style.color = 'black';

export default toggleDisplayMode;
