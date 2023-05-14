// Toggle navigation menu on mobile devices
const toggleMenu = () => {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
  }
  
  // Add click event listener to navigation toggle button
  const toggleBtn = document.querySelector('.toggle-btn');
  toggleBtn.addEventListener('click', toggleMenu);
  