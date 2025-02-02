let appHeader = `

    <!-- NAVBAR -->
    <div id="app-header" class="fixed top-0 left-0 w-full z-50 transition-all duration-500">
    <!-- Navigation Bar -->
    <div class="navbar flex items-center justify-between transition-all px-4 md:px-16 py-5">
        <!-- Logo -->
        <a href="./index.html#app-header" class="flex items-center gap-4">
            <div class="rounded-xl p-1">
                <img class="h-[3.5vw] max-sm:h-[10vw] rounded-lg" style="box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.15);"  src="/images/app logo.png" alt="AaharKosh Logo">
            </div>
            <img class="h-[2vw] max-sm:h-[7.5vw]" src="../images/aaharkosh-text-image.svg" alt="AaharKosh Logo">
        </a>
    
        <!-- Navigation Links (Desktop) -->
        <ul class="hidden md:flex space-x-16 max-md:space-x-6 font-medium text-lg">
            <li><a href="./index.html#app-header" class="nav-link relative cursor-pointer after:content-[''] after:absolute after:w-full hover:text-[var(--color-primary)] after:h-[0.13vw] after:bg-[var(--color-primary)] after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all hover:after:scale-x-100">Home</a></li>
            <li><a href="./index.html#plansPage" class="nav-link relative cursor-pointer after:content-[''] after:absolute after:w-full hover:text-[var(--color-primary)] after:h-[0.13vw] after:bg-[var(--color-primary)] after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all hover:after:scale-x-100 hover:after:scale-x-100">Plans</a></li>
            <li><a href="./index.html#servicePage" class="nav-link relative cursor-pointer after:content-[''] after:absolute after:w-full hover:text-[var(--color-primary)] after:h-[0.13vw] after:bg-[var(--color-primary)] after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all hover:after:scale-x-100 hover:after:scale-x-100">How it Works</a></li>
            <li><a href="./index.html#why-choose-us" class="nav-link relative cursor-pointer after:content-[''] after:absolute after:w-full hover:text-[var(--color-primary)] after:h-[0.13vw] after:bg-[var(--color-primary)] after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all hover:after:scale-x-100 hover:after:scale-x-100">Why Us</a></li>
            <li><a href="./team.html" class="nav-link relative cursor-pointer after:content-[''] after:absolute after:w-full hover:text-[var(--color-primary)] after:h-[0.13vw] after:bg-[var(--color-primary)] after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all hover:after:scale-x-100 hover:after:scale-x-100">Career</a></li>
            <li><a href="./aboutus.html" class="nav-link relative cursor-pointer after:content-[''] after:absolute after:w-full hover:text-[var(--color-primary)] after:h-[0.13vw] after:bg-[var(--color-primary)] after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all hover:after:scale-x-100 hover:after:scale-x-100">About Us</a></li>
            <li><a href="./index.html#contactPage" class="nav-link relative cursor-pointer after:content-[''] after:absolute after:w-full hover:text-[var(--color-primary)] after:h-[0.13vw] after:bg-[var(--color-primary)] after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all hover:after:scale-x-100 hover:after:scale-x-100">Contacts</a></li>
        </ul>
    
        <!-- Hamburger Icon (Mobile) -->
        <div class="md:hidden flex items-center">
            <button id="hamburger" class="text-3xl focus:outline-none">
                <i class="ri-menu-line"></i>
            </button>
        </div>
    </div>

    <!-- Mobile Menu (Full-screen Overlay) -->
    <div id="mobile-menu" class="fixed inset-0 bg-gray-100 z-50 hidden flex flex-col p-5 pt-10 space-y-4 max-md:space-y-12 max-sm:space-y-6 text-3xl font-medium transform -translate-x-full transition-transform duration-500 ease-in-out">
        <!-- Close Icon -->
        <div class="relative pb-12">
            <img class="h-8 absolute top-1 left-6" src="/images/aaharkosh-text-image.svg" alt="AaharKosh Logo">
            <button id="close-menu" class="absolute top-0 right-6 text-4xl focus:outline-none">
                <i class="ri-close-line"></i>
            </button>
        </div>
        <a href="./index.html#app-header" class="text-black h-10 flex items-center pl-4 text-[5vw]"><i class="ri-home-4-line mr-6"></i> Home</a>
        <a href="./index.html#plansPage" class="text-black h-10 flex items-center pl-4 text-[5vw]"><i class="ri-chat-check-line mr-6"></i> Plans</a>
        <a href="./index.html#servicePage" class="text-black h-10 flex items-center pl-4 text-[5vw]"><i class="ri-customer-service-line mr-6"></i> How it Works</a>
        <a href="./index.html#why-choose-us" class="text-black h-10 flex items-center pl-4 text-[5vw]"><i class="ri-map-pin-user-line mr-6"></i> Why Us</a>
        <a href="./team.html" class="text-black h-10 flex items-center pl-4 text-[5vw]"><i class="ri-customer-service-line mr-6"></i>Career</a>
        <a href="./aboutus.html" class="text-black h-10 flex items-center pl-4 text-[5vw]"><i class="ri-group-line mr-6"></i> About Us</a>
        <a href="./index.html#contactPage" class="text-black h-10 flex items-center pl-4 text-[5vw]"><i class="ri-phone-fill mr-6"></i> Contacts</a>
    </div>
</div>


`;


// navbar script js

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const pageName = window.location.pathname.split("/").pop(); // Get current page name

    // Define page-specific background colors
    const pageColors = {
        "faqs.html": "bg-[var(--color-primary-light)]",  
        "aboutus.html": "bg-[var(--color-primary-light)]", 
        "feedback.html": "bg-[var(--color-primary-light)]", 
        "policy.html": "bg-[var(--color-primary-light)]", 
        "allplans.html": "bg-[var(--color-primary-light)]",
        "whatwedo.html": "bg-[var(--color-primary-light)]",
        "terms.html": "bg-[var(--color-primary-light)]"
    };

    // Set default background if page matches, otherwise keep white
    if (pageColors[pageName]) {
        navbar.classList.add(pageColors[pageName]);
    } else {
        navbar.classList.add("bg-white");
    }

    // Change navbar background on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.remove(...Object.values(pageColors)); // Remove all possible colors
            navbar.classList.add("bg-white");
        } else {
            if (pageColors[pageName]) {
                navbar.classList.remove("bg-white");
                navbar.classList.add(pageColors[pageName]);
            }
        }
    });
});










document.getElementById("app-header").innerHTML = appHeader;
const appheader = document.querySelector("#app-header")
const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a'); // Select all links inside the mobile menu
const navbar = document.querySelector('.navbar'); // Select the navbar
// let lastScrollY = window.scrollY; // Track the last scroll position

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
