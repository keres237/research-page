// Function to position the subnav below the hero section
function positionSubnav() {
    // Get the hero section and subnav elements
    const heroSection = document.getElementById('heroSection');
    const subnav = document.getElementById('subnav');

    // Calculate the height of the hero section
    const heroHeight = heroSection.offsetHeight;

    // Position the subnav below the hero section
    subnav.style.marginTop = `${heroHeight}px`;
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', positionSubnav);

// Optionally, call the function on window resize to adjust positioning dynamically
window.addEventListener('resize', positionSubnav);
