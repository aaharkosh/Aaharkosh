let appHeader = `

    <!-- NAVBAR -->
    <div>
        <!-- Navigation Bar -->
        <div class="navbar flex items-center justify-between px-6 md:px-24 py-4 md:py-7">
            <!-- Logo -->
            <div>
                <img class="h-8" src="./AaharKosh_logo.jpg" alt="AaharKosh Logo">
            </div>
        
            <!-- Navigation Links (Desktop) -->
            <div>
                <ul class="hidden md:flex space-x-6 md:space-x-16 font-medium text-lg mt-2">
                    <li><a href="./index.html#homePage" class="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-orange-600 after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-orange-600 transition-all">Home</a></li>
                    <li><a href="./index.html#plansPage" class="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-orange-600 after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-orange-600 transition-all ml-[-1.5vw] max-lg:ml-[-5vw]">Plans</a></li>
                    <li><a href="./index.html#servicePage" class="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-orange-600 after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-orange-600 transition-all ml-[-1.5vw] max-lg:ml-[-5vw]">How it Works</a></li>
                    <li><a href="#" class="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-orange-600 after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-orange-600 transition-all ml-[-1.5vw] max-lg:ml-[-5vw]">About Us</a></li>
                    <li><a href="./index.html#contactPage" class="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-orange-600 after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-orange-600 transition-all ml-[-1.5vw] max-lg:ml-[-5vw]">Contacts</a></li>
                </ul>
            </div>

            <!-- Hamburger Icon (Mobile) -->
            <div class="md:hidden flex items-center">
                <button id="hamburger" class="text-3xl focus:outline-none">
                    <i class="ri-menu-line"></i>
                </button>
            </div>
        </div>
    
        <!-- Mobile Menu (Full-screen Overlay) -->
        <div id="mobile-menu" class="fixed inset-0 bg-[#FFE8D6] z-50 flex flex-col p-5 pt-20 space-y-8 text-3xl font-medium transform -translate-x-full transition-transform duration-500 ease-in-out">
            <!-- Close Icon -->
            <button id="close-menu" class="absolute top-6 right-6 text-4xl focus:outline-none">
                <i class="ri-close-line"></i>
            </button>
            <a href="./index.html#homePage" class="text-black h-12 w-72 flex items-center pl-4 text-[6vw]"> <i class="ri-home-4-line mr-6"></i> Home</a>
            <a href="#" class="text-black h-12 w-72 flex items-center pl-4 text-[6vw]"> <i class="ri-menu-2-line mr-6"></i> Menu</a>
            <a href="./index.html#plansPage" class="text-black h-12 w-72 flex items-center pl-4 text-[6vw]"> <i class="ri-chat-check-line mr-6"></i> Plans</a>
            <a href="./index.html#servicePage" class="text-black h-12 w-72 flex items-center pl-4 text-[6vw]"> <i class="ri-customer-service-line mr-6"></i> Service</a>
            <a href="#" class="text-black h-12 w-96 flex items-center pl-4 text-[6vw]"> <i class="ri-group-line mr-6"></i> About Us</a>
            <a href="./index.html#contactPage" class="text-black h-12 w-72 flex items-center pl-4 text-[6vw]"> <i class="ri-phone-fill mr-6"></i> Contacts</a>
            <button class="px-2 w-32 ml-5 py-3 text-[5.5vw] font-medium text-white shadow-md rounded-lg bg-[#FF570C] transition duration-300 ease-in-out transform hover:scale-105">Log In</button>
        </div>
    
        <!-- Add this script for toggle functionality -->
       
    </div>

`;
document.getElementById("app-header").innerHTML = appHeader;
const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle menu open/close with smooth animation
hamburger.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
});