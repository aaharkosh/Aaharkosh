let appHeader = `

    <!-- NAVBAR -->
    <div id="app-header" class="fixed top-0 left-0 w-full z-50 transition-all duration-500">
    <!-- Navigation Bar -->
    <div class="navbar flex items-center justify-between transition-all px-4 md:px-16 py-5">
        <!-- Logo -->
        <a href="./index.html#app-header" class="flex items-center gap-4">
            <div class="rounded-xl p-1" style="box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.15);">
                <img class="h-[3vw] max-sm:h-[10vw]" src="./images/aaharkosh-logo.jpg" alt="AaharKosh Logo">
            </div>
            <img class="h-[2vw] max-sm:h-[7.5vw]" src="./images/aaharkosh-text-image.svg" alt="AaharKosh Logo">
        </a>
    
        <!-- Navigation Links (Desktop) -->
        <ul class="hidden md:flex space-x-16 max-md:space-x-6 font-medium text-lg">
            <li><a href="./index.html#app-header" class="nav-link relative cursor-pointer after:content-[''] after:absolute after:w-full hover:text-primary after:h-[0.08vw] after:bg-primary after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all hover:after:scale-x-100">Home</a></li>
            <li><a href="./index.html#plansPage" class="nav-link relative cursor-pointer after:content-[''] after:absolute after:w-full hover:text-primary after:h-[0.08vw] after:bg-primary after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all hover:after:scale-x-100 hover:after:scale-x-100">Plans</a></li>
            <li><a href="./index.html#servicePage" class="nav-link relative cursor-pointer after:content-[''] after:absolute after:w-full hover:text-primary after:h-[0.08vw] after:bg-primary after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all hover:after:scale-x-100 hover:after:scale-x-100">How it Works</a></li>
            <li><a href="./index.html#why-choose-us" class="nav-link relative cursor-pointer after:content-[''] after:absolute after:w-full hover:text-primary after:h-[0.08vw] after:bg-primary after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all hover:after:scale-x-100 hover:after:scale-x-100">Why Us</a></li>
            <li><a href="./team.html" class="nav-link relative cursor-pointer after:content-[''] after:absolute after:w-full hover:text-primary after:h-[0.08vw] after:bg-primary after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all hover:after:scale-x-100 hover:after:scale-x-100">Career</a></li>
            <li><a href="./aboutus.html" class="nav-link relative cursor-pointer after:content-[''] after:absolute after:w-full hover:text-primary after:h-[0.08vw] after:bg-primary after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all hover:after:scale-x-100 hover:after:scale-x-100">About Us</a></li>
            <li><a href="./index.html#contactPage" class="nav-link relative cursor-pointer after:content-[''] after:absolute after:w-full hover:text-primary after:h-[0.08vw] after:bg-primary after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all hover:after:scale-x-100 hover:after:scale-x-100">Contacts</a></li>
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
        "faqs.html": "bg-light",  
        "aboutus.html": "bg-light", 
        "feedback.html": "bg-light", 
        "policy.html": "bg-light", 
        "allplans.html": "bg-light",
        "team.html": "bg-light",
        "whatwedo.html": "bg-light",
        "terms.html": "bg-light"
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

// gsap.to("#app-header",{
//     position:"fixed",
//     scrollTrigger:{
//         scroller:"body",
//         trigger:".navbar",
//         start:"top 10%",
//         end:"top -20%",
//         markers:true,
//         scrub:2
//     }
// })

// // Sliding Navbar Logic
// window.addEventListener('scroll', () => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > lastScrollY) {
//         // User is scrolling down - hide navbar
//         appheader.classList.add('bg-white','transition-all','duration-500');
//     } else {
//         // User is scrolling up - show navbar
//         appheader.classList.remove('-translate-y-full','transition-all','duration-500');
//     }

//     lastScrollY = currentScrollY; // Update last scroll position
// });




        tailwind.config = {
          theme: {
            extend: {
              colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                light: 'var(--color-primary-light)',
              },
            },
          },
        }
   

//         window.addEventListener('scroll', () => {
//     const header = document.getElementById('app-header');
  
//     if (window.scrollY > 100) {
//       header.classList.add('fixed', 'top-0', 'shadow-lg');
//       header.classList.remove('relative');
//     } else {
//       header.classList.remove('fixed', 'top-0', 'shadow-lg');
//       header.classList.add('relative');
//     }
//   });



// let lastScrollTop = 0;
// let header = document.getElementById('app-header');
// let hasScrolledFirstTime = false;

// window.addEventListener('scroll', function () {
//     let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     // Ensure the animation starts only after first full scroll
//     if (!hasScrolledFirstTime && currentScrollTop > header.offsetHeight) {
//         hasScrolledFirstTime = true;
//     }

//     if (hasScrolledFirstTime) {
//         if (currentScrollTop > lastScrollTop) {
//             // Scroll Down - Hide header
//             header.style.transform = 'translateY(-100%)';
//         } else {
//             // Scroll Up - Show header
//             header.style.transform = 'translateY(0)';
//         }
//     }

//     lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
// });







// document.addEventListener("DOMContentLoaded", function () {
//     // const header = document.getElementById("app-header");
//     const orangeBgPages = ["aboutus.html", "team.html"]; // Pages where navbar starts as orange
//     const currentPage = window.location.pathname.split("/").pop(); // Get the current filename

//     function updateNavbarOnScroll() {
//         if (window.scrollY > 50) {
//             appheader.classList.remove("bg-orange-500");
//             appheader.classList.add("bg-white", "shadow-md");
//         } else {
//             appheader.classList.remove("bg-white", "shadow-md");
//             appheader.classList.add("bg-orange-500");
//         }
//     }

//     if (orangeBgPages.includes(currentPage)) {
//         appheader.classList.add("bg-orange-500");

//         window.addEventListener("scroll", updateNavbarOnScroll);
//     } else {
//         appheader.classList.add("bg-white");
//     }
// });