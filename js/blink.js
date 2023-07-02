// JavaScript for the click functionality

// Get the arrow element
const arrow = document.querySelector('.uil-arrow-down');

// Get the sign-up section
const signUpSection = document.querySelector('section');

// Add a click event listener to the arrow
arrow.addEventListener('click', () => {
  // Add the 'active' class to the arrow
  arrow.classList.add('active');
  
  // Scroll to the sign-up section
  signUpSection.scrollIntoView({ behavior: 'smooth' });
});
