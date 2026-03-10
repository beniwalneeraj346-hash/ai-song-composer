// script.js

// Handle form submission
const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const response = await fetch('/api/song', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        const data = await response.json();
        playAudio(data.audioUrl);
    } else {
        console.error('Form submission failed.');
    }
});

// Function to play audio
function playAudio(url) {
    const audio = new Audio(url);
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
}