// function  servicePageAnimation(){
//     const slides = document.querySelectorAll("#slider-container > div");
//     const bulletContainer = document.getElementById("bullet-container").children;
//     let currentSlide = 0;
//     const maxSlides = 10;  // Limit to 10 slides
    
//     function updateSlider() {
//         document.getElementById("slider-container").style.transform = `translateX(-${currentSlide * 100}%)`;
    
//         // Update bullet styles
//         Array.from(bulletContainer).forEach((bullet, index) => {
//             bullet.classList.remove('bg-[var(--color-primary-light)');
//             bullet.classList.add('bg-[var(--color-secondary)]');
//             if (index === currentSlide) {
//                 bullet.classList.remove('bg-[var(--color-secondary)]');
//                 bullet.classList.add('bg-[var(--color-primary-light)]');
//             }
//         });
//     }
    
//     document.getElementById("prevSlide").addEventListener("click", () => {
//         currentSlide = (currentSlide > 0) ? currentSlide - 1 : maxSlides - 1;
//         updateSlider();
//     });
    
//     document.getElementById("nextSlide").addEventListener("click", () => {
//         currentSlide = (currentSlide < maxSlides - 1) ? currentSlide + 1 : 0;
//         updateSlider();
//     });
    
//     Array.from(bulletContainer).slice(0, maxSlides).forEach((bullet, index) => {
//         bullet.addEventListener("click", () => {
//             currentSlide = index;
//             updateSlider();
//         });
//     });
// }
// servicePageAnimation()