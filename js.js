document.querySelectorAll('.project-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('You clicked on ' + button.parentElement.querySelector('h2').innerText);
    });
});
