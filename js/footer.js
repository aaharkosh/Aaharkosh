let appfooter = `
    
    <!-- FOOTER-SECTION -->

    <footer class="bg-[#FFE8D6] font-['poppins'] w-full overflow-hidden">
        <div class="container mx-auto py-6 px-10 pt-6 max-md:p-6 max-lg:p-12 footer-content">
            <div class="flex max-md:flex-col max-lg:flex-col justify-center">
                <!-- First Column -->
                <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-6">
                    <img class="h-8 max-lg:h-12 max-md:h-8" src="./AaharKosh_logo.jpg" alt="">
                    <div class="flex gap-3 mt-5">
                        <button class="text-lg px-2 py-1 shadow-md rounded-xl cursor-pointer bg-white transition duration-300 ease-in-out hover:scale-110">
                            <i class="ri-twitter-fill"></i>
                        </button>
                        <button class="text-lg px-2 py-1 shadow-md rounded-xl cursor-pointer bg-white transition duration-300 ease-in-out hover:scale-110">
                            <i class="ri-instagram-fill"></i>
                        </button>
                        <button class="text-lg px-2 py-1 shadow-md rounded-xl cursor-pointer bg-white transition duration-300 ease-in-out hover:scale-110">
                            <i class="ri-facebook-fill"></i>
                        </button>
                        <button class="text-lg px-2 py-1 shadow-md rounded-xl cursor-pointer bg-white transition duration-300 ease-in-out hover:scale-110">
                            <i class="ri-google-fill"></i>
                        </button>
                    </div>
                </div>
                <!-- Second Column -->
                <div class="md:w-1/2 xl:w-1/4 lg:w-1/2 md:p-6 max-md:ml-4 max-md:mt-8 flex flex-col">
                    <h4 class="font-semibold text-lg max-md:text-lg max-lg:text-3xl">Company</h4>
                    <a class="text-sm max-lg:text-xl max-md:text-sm max-lg:mt-4 mt-2 cursor-pointer relative after:content-[''] after:absolute after:w-28 after:h-[1px] after:bg-black after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all">Why Aaharkosh?</a>
                    <a href="#aboutPage" class="text-sm mt-1 max-lg:text-xl max-md:text-sm cursor-pointer relative after:content-[''] after:absolute after:w-16 after:h-[1px] after:bg-black after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all">About us</a>
                    <a href="./faqs.html" class="text-sm mt-1 max-lg:text-xl max-md:text-sm cursor-pointer relative after:content-[''] after:absolute after:w-8 after:h-[1px] after:bg-black after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all">FAQs</a>
                </div>
                <!-- third column -->
                <div class="md:w-1/2 xl:w-1/4 lg:w-1/2 md:p-6 max-md:ml-4 max-md:mt-4 flex flex-col">
                    <h4 class="font-black text-lg max-lg:text-3xl max-md:text-lg">Partner with us</h4>
                    <a href="./vender.html" class="text-sm mt-2 max-lg:text-xl max-md:text-sm cursor-pointer relative after:content-[''] after:absolute after:w-[9vw] after:h-[1px] after:bg-black after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all">Become our vander</a>
                    <a href="./rider.html" class="text-sm mt-1 max-lg:text-xl max-md:text-sm cursor-pointer relative after:content-[''] after:absolute after:w-32 after:h-[1px] after:bg-black after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all">Become our rider</a>
                </div>
                <!-- Fourth Column -->
                <div class="md:w-1/2 xl:w-1/4 lg:w-1/2 p-4 md:p-6 max-md:mt-4 flex flex-col">
                    <h4 class="font-black text-lg max-lg:text-3xl max-md:text-lg">Support</h4>
                    <a class="text-sm mt-1 max-lg:text-xl max-md:text-sm cursor-pointer relative after:content-[''] after:absolute after:w-28 after:h-[1px] after:bg-black after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-allr">Support center</a>
                    <a href="./feedback.html" class="text-sm mt-1 max-lg:text-xl max-md:text-sm cursor-pointer relative after:content-[''] after:absolute after:w-[4.5vw] after:h-[1px] after:bg-black after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all">Feedback</a>
                    <a href="#contactPage" class="text-sm max-sm:text-sm mt-1 max-lg:text-xl cursor-pointer relative after:content-[''] after:absolute after:w-16 after:h-[1px] after:bg-black after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all">Contacts</a>
                </div>
                <!-- Fifth Column -->
             <div class="md:w-1/2 xl:w-1/4 lg:w-1/2 p-4 md:p-6 max-md:mt-4 flex flex-col items-start"> 
                    <h4 class="font-black text-lg max-sm:mb-6 max-lg:text-3xl max-md:text-lg">Stay Connected</h4>
                    <div class="flex items-center gap-4 mt-2 mb-2 justify-center max-md:mt-[-5vw]">
                        <i class="ri-phone-line text-2xl"></i>
                        <div class="text-sm">
                            <h4 class="cursor-pointer hover:text-[#FF570C] transition-all duration-300">
                                +91 6521312315
                            </h4>
                            <h4 class="cursor-pointer hover:text-[#FF570C] transition-all duration-300">
                                +91 6542312315
                            </h4>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 justify-center">
                        <i class="ri-mail-line text-2xl"></i>
                        <h4 class="text-sm cursor-pointer hover:text-[#FF570C] transition-all duration-300">
                            AAHARKOSH@GMAIL.COM
                        </h4>
                    </div>
                    <!-- <p class="text-sm mt-2 w-full max-md:w-48 max-md:text-sm max-lg:text-xl">Questions or Feedback? We'd love to hear from you.</p>
                    <div class="cursor-pointer mt-5 bg-white w-full md:w-56 flex px-3 py-2 rounded-lg">
                        <input class="bg-transparent text-black focus:outline-none text-sm w-full max-md:w-72" type="email" placeholder="Email Address">
                        <button class="bg-[#FF570C] px-2 text-lg text-white rounded-lg py-1">
                            <i class="ri-arrow-right-s-line"></i>
                        </button>
                    </div> -->
                </div> 
            </div>
            <!-- Footer Links -->
            <div class="flex flex-wrap justify-center w-full items-center gap-12 text-sm border-t-[1px] border-zinc-700 mt-12">
                <a href="./policy.html" class="mt-4 cursor-pointer relative after:content-[''] after:absolute after:w-24 after:h-[1px] after:bg-black after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all">Privacy Policy</a>
                <a href="./terms.html" class="mt-4 cursor-pointer relative after:content-[''] after:absolute after:w-36 after:h-[1px] after:bg-black after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all">Terms & Conditions</a>
                <h6 class="mt-4 max-md:mt-[-10vw] cursor-pointer relative after:content-[''] after:absolute after:w-36 after:h-[1px] after:bg-black after:left-0 after:bottom-[-5%] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[500ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left transition-all">Opt-out Preferences</h6>
            </div>
            <!-- Copyright -->
            <div class="text-center text-xs mt-5">
                <h1>© 2024 Your Website. All rights reserved.</h1>
            </div>
        </div>
    </footer>

`;
document.getElementById("app-footer").innerHTML = appfooter;