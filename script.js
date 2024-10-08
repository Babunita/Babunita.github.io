// Handle the "Yes" button click with smooth fade-out transition
document.querySelector('.smooth-link').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior

    // Start the fade-out effect
    document.body.classList.add('fade-out');

    // After the fade-out transition (500ms), navigate to the new page
    setTimeout(() => {
        window.location.href = e.target.closest('a').href; // Navigate to the target href
    }, 500); // Match timeout with the CSS transition duration
});

// Prevent the "No go away" button from doing anything for now
document.querySelector('.no-go').addEventListener('click', function(e) {
    e.preventDefault(); // Do nothing for now
});
