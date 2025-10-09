// Log a message to the console
console.log(`${Date()} :: This is a starter template for a simple web app.`);

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('menu');
    const menuOverlay = document.getElementById('menu-overlay');
    
    // Check if elements exist (for pages that might not have mobile menu)
    if (hamburgerBtn && mobileMenu && menuOverlay) {
        
        // Toggle mobile menu
        function toggleMobileMenu() {
            hamburgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
        
        // Close mobile menu
        function closeMobileMenu() {
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Event listeners
        hamburgerBtn.addEventListener('click', toggleMobileMenu);
        menuOverlay.addEventListener('click', closeMobileMenu);
        
        // Close menu when clicking on a menu item (for better UX)
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Handle dropdown menus on mobile
        const dropdownItems = mobileMenu.querySelectorAll('.dropdown > a');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                // On mobile, clicking dropdown parent should toggle dropdown, not navigate
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const parentLi = this.parentElement;
                    parentLi.classList.toggle('active');
                }
            });
        });
        
        // Close menu on window resize if it's open
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
});


