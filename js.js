// ALL J.S. CODES ARE UN USED AND ALL IMP CODES IN HTML AND CSS
// // Select all project buttons
// const projectButtons = document.querySelectorAll('.project-button');

// // Add event listener to each project button
// projectButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Get the project title and description
//     const projectTitle = button.parentElement.querySelector('h2').innerText;
//     const projectDescription = button.parentElement.querySelector('p').innerText;

//     // Create a modal window to display project details
//     const modal = document.createElement('div');
//     modal.classList.add('modal');
//     modal.innerHTML = `
//       <h2>${projectTitle}</h2>
//       <p>${projectDescription}</p>
//       <button class="close-modal">Close</button>
//     `;

//     // Add modal to the page
//     document.body.appendChild(modal);

//     // Add event listener to close modal
//     const closeModalButton = modal.querySelector('.close-modal');
//     closeModalButton.addEventListener('click', () => {
//       modal.remove();
//     });

//     // Animate modal appearance
//     modal.classList.add('animate-in');

//     // Alert user with project title
//     alert(`You clicked on ${projectTitle}`);
//   });
// });

// // Add some attractive elements to the page
// const attractives = document.querySelectorAll('.attractive');
// attractives.forEach(attractive => {
//   attractive.addEventListener('mouseover', () => {
//     attractive.classList.add('highlight');
//   });
//   attractive.addEventListener('mouseout', () => {
//     attractive.classList.remove('highlight');
//   });
// });
