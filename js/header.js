let appHeader = `

    <!-- NAVBAR -->
    <div id="app-header" class="fixed top-0 left-0 w-full z-50 transition-all duration-500">
    <!-- Navigation Bar -->
    <div class="navbar flex items-center bg-white justify-between px-6 md:px-16 py-5">
        <!-- Logo -->
        <a href="./index.html#app-header" class="flex items-center gap-4">
            <div class="rounded-xl p-1" style="box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.15);">
                <img class="h-[3.5vw] max-sm:h-[10vw]" src="./images/aaharkosh-logo.jpg" alt="AaharKosh Logo">
            </div>
            <img class="h-[2.5vw] max-sm:h-[7.5vw]" src="./images/aaharkosh-text-image.svg" alt="AaharKosh Logo">
        </a>
    
        <!-- Navigation Links (Desktop) -->
        <ul class="hidden md:flex space-x-6 md:space-x-16 font-medium text-lg">
            <li><a href="./index.html#app-header" class="relative hover:after:scale-x-100">Home</a></li>
            <li><a href="./index.html#plansPage" class="relative hover:after:scale-x-100">Plans</a></li>
            <li><a href="./index.html#servicePage" class="relative hover:after:scale-x-100">How it Works</a></li>
            <li><a href="./index.html#why-choose-us" class="relative hover:after:scale-x-100">Why Us</a></li>
            <li><a href="./index.html#testimonials" class="relative hover:after:scale-x-100">Testimonial</a></li>
            <li><a href="./aboutus.html" class="relative hover:after:scale-x-100">About Us</a></li>
            <li><a href="./index.html#contactPage" class="relative hover:after:scale-x-100">Contacts</a></li>
        </ul>
    
        <!-- Hamburger Icon (Mobile) -->
        <div class="md:hidden flex items-center">
            <button id="hamburger" class="text-3xl focus:outline-none">
                <i class="ri-menu-line"></i>
            </button>
        </div>
    </div>

    <!-- Mobile Menu (Full-screen Overlay) -->
    <div id="mobile-menu" class="fixed inset-0 bg-gray-100 z-50 hidden flex flex-col p-5 pt-10 space-y-4 text-3xl font-medium transform -translate-x-full transition-transform duration-500 ease-in-out">
        <!-- Close Icon -->
        <div class="relative pb-12">
            <img class="h-8 absolute top-1 left-6" src="./images/aaharkosh-text-image.svg" alt="AaharKosh Logo">
            <button id="close-menu" class="absolute top-0 right-6 text-4xl focus:outline-none">
                <i class="ri-close-line"></i>
            </button>
        </div>
        <a href="./index.html#app-header" class="text-black h-12 flex items-center pl-4 text-[6vw]"><i class="ri-home-4-line mr-6"></i> Home</a>
        <a href="./index.html#plansPage" class="text-black h-12 flex items-center pl-4 text-[6vw]"><i class="ri-chat-check-line mr-6"></i> Plans</a>
        <a href="./index.html#servicePage" class="text-black h-12 flex items-center pl-4 text-[6vw]"><i class="ri-customer-service-line mr-6"></i> How it Works</a>
        <a href="./index.html#why-choose-us" class="text-black h-12 flex items-center pl-4 text-[6vw]"><i class="ri-map-pin-user-line mr-6"></i> Why Us</a>
        <a href="./index.html#testimonials" class="text-black h-12 flex items-center pl-4 text-[6vw]"><i class="ri-customer-service-line mr-6"></i> Testimonials</a>
        <a href="./aboutus.html" class="text-black h-12 flex items-center pl-4 text-[6vw]"><i class="ri-group-line mr-6"></i> About Us</a>
        <a href="./index.html#contactPage" class="text-black h-12 flex items-center pl-4 text-[6vw]"><i class="ri-phone-fill mr-6"></i> Contacts</a>
    </div>
</div>


`;





document.getElementById("app-header").innerHTML = appHeader;

const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a'); // Select all links inside the mobile menu
const navbar = document.querySelector('.navbar'); // Select the navbar
let lastScrollY = window.scrollY; // Track the last scroll position

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden'); // Make menu visible
    setTimeout(() => mobileMenu.classList.remove('-translate-x-full'), 10); // Smooth open transition
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full'); // Start close transition
    setTimeout(() => mobileMenu.classList.add('hidden'), 500); // Wait for animation to finish, then hide
});

// Close menu when clicking on any link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full'); // Close with animation
        setTimeout(() => mobileMenu.classList.add('hidden'), 500); // Hide after animation
    });
});

// Sliding Navbar Logic
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // User is scrolling down - hide navbar
        navbar.classList.add('-translate-y-full');
    } else {
        // User is scrolling up - show navbar
        navbar.classList.remove('-translate-y-full');
    }

    lastScrollY = currentScrollY; // Update last scroll position
});
