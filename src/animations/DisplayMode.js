const toggleDisplayMode = () => {
    const body = document.body;
    const currentMode = body.dataset.mode;

    if (currentMode === 'dark') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        body.dataset.mode = 'light';
    } else {
        body.style.backgroundColor = 'darkviolet';
        body.style.color = 'neonyellow';
        body.dataset.mode = 'dark';
    }
};

// Initial setup
document.body.dataset.mode = 'light';
document.body.style.backgroundColor = 'white';
document.body.style.color = 'black';

// Example button to toggle display mode
const button = document.createElement('button');
button.textContent = 'Toggle Display Mode';
button.onclick = toggleDisplayMode;
document.body.appendChild(button);