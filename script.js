// function homepageAnimation(){
//   var tl = gsap.timeline()
//   tl.from(".navbar",{
//     opacity:0,
//     stagger:0.5,
//     y:30,
//     duration:0.4
//   })
//   .from(".homepage-rightpart",{
//     opacity:0,
//     duration:0.6,
//     y:30
//   })
//   .from(".left-head",{
//     opacity:0,
//     duration:0.6,
//     y:30,
//   })
//   .from(".left-para",{
//     opacity:0,
//     duration:0.6,
//     y:30,
//   })
//   .from(".left-btn",{
//     opacity:0,
//     duration:0.6,
//     y:30,
//   })
//   .from(".icon",{
//     opacity:0,
//     duration:0.6,
//     y:30,
//     stagger:0.5
//   })
// }
// homepageAnimation()

function whatwedoPageAnimation(){
  gsap.from(".whatwedo",{
    opacity:0,
    stagger:1.5,
    duration:0.8,
    y:20,
    scrollTrigger:{
      trigger:".whatwedo",
      scroller:"body",
      // markers:true,
      start:"top 60%",
      end:"top 40%",
      scrub:2
    }
  })
}
whatwedoPageAnimation()

function  servicePageAnimation(){
  var tl1 = gsap.timeline()
  tl1.from(".service-head",{
    opacity:0,
    stagger:1.5,
    duration:0.8,
    y:20,
    scrollTrigger:{
      trigger:".service-head",
      scroller:"body",
      // markers:true,
      start:"top 70%",
      end:"top 50%",
      scrub:2
    }
  })
  tl1.from("#creative-slider",{
    opacity:0,
    stagger:0.5,
    duration:1,
    y:70,
    scrollTrigger:{
      trigger:"#creative-slider",
      scroller:"body",
      // markers:true,
      start:"top 70%",
      end:"top 50%",
      scrub:2
    }
  })



//   const slides = document.querySelectorAll("#slider-container > div");
// const bulletContainer = document.getElementById("bullet-container").children;
// let currentSlide = 0;
// const maxSlides = 10;  // Limit to 10 slides

// function updateSlider() {
//   // Transform the slide container to show the current slide
//   document.getElementById("slider-container").style.transform = `translateX(-${currentSlide * 100}%)`;

//   // Update bullet styles to highlight the active slide
//   Array.from(bulletContainer).forEach((bullet, index) => {
//     bullet.classList.remove('bg-[#FFE8D6]');
//     bullet.classList.add('bg-[#FF570C]');
//     if (index === currentSlide) {
//       bullet.classList.remove('bg-[#FF570C]');
//       bullet.classList.add('bg-[#FFE8D6]');
//     }
//   });
// }

// document.getElementById("prevSlide").addEventListener("click", () => {
//   // Navigate to the previous slide, wrapping around if needed
//   currentSlide = (currentSlide > 0) ? currentSlide - 1 : maxSlides - 1;
//   updateSlider();
// });

// document.getElementById("nextSlide").addEventListener("click", () => {
//   // Navigate to the next slide, wrapping around if needed
//   currentSlide = (currentSlide < maxSlides - 1) ? currentSlide + 1 : 0;
//   updateSlider();
// });

// // Allow bullets to navigate to the corresponding slide
// Array.from(bulletContainer).slice(0, maxSlides).forEach((bullet, index) => {
//   bullet.addEventListener("click", () => {
//     currentSlide = index;
//     updateSlider();
//   });
// });


const slides = document.querySelectorAll("#slider-container > div");
const bulletContainer = document.getElementById("bullet-container").children;
let currentSlide = 0;
const maxSlides = 10;  // Limit to 10 slides

function updateSlider() {
    document.getElementById("slider-container").style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update bullet styles
    Array.from(bulletContainer).forEach((bullet, index) => {
        bullet.classList.remove('bg-[#FFE8D6]');
        bullet.classList.add('bg-[#FF570C]');
        if (index === currentSlide) {
            bullet.classList.remove('bg-[#FF570C]');
            bullet.classList.add('bg-[#FFE8D6]');
        }
    });
}

document.getElementById("prevSlide").addEventListener("click", () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : maxSlides - 1;
    updateSlider();
});

document.getElementById("nextSlide").addEventListener("click", () => {
    currentSlide = (currentSlide < maxSlides - 1) ? currentSlide + 1 : 0;
    updateSlider();
});

Array.from(bulletContainer).slice(0, maxSlides).forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
    });
});



}
servicePageAnimation()

function  planPageAnimation(){
  var tl2 = gsap.timeline()
  tl2.from(".plan-head",{
      opacity:0,
      stagger:1.5,
      duration:0.8,
      y:20,
      scrollTrigger:{
        trigger:".plan-head",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:2
      }
  })
  tl2.from(".plancards",{
      opacity:0,
      stagger:5,
      duration:0.8,
      y:50,
      scrollTrigger:{
        trigger:".plancards",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:2
      }
  })
  tl2.from(".plan-btn",{
      opacity:0,
      stagger:1.5,
      duration:0.8,
      y:20,
      scrollTrigger:{
        trigger:".plan-btn",
        scroller:"body",
        start:"top 100%",
        end:"top 90%",
        scrub:2
      }
  })
} 
planPageAnimation()

function whyaaharkoshPageAnimation(){
  var tl4 = gsap.timeline()
  tl4.from("#why-choose-us",{
    opacity:0,
    stagger:1.5,
    duration:0.8,
    y:20,
    scrollTrigger:{
      trigger:"#why-choose-us",
      scroller:"body",
      // markers:true,
      start:"top 60%",
      end:"top 40%",
      scrub:2
    }
  })
  tl4.from("#testimonials",{
    opacity:0,
    stagger:1.5,
    duration:0.8,
    y:20,
    scrollTrigger:{
      trigger:"#testimonials",
      scroller:"body",
      // markers:true,
      start:"top 60%",
      end:"top 40%",
      scrub:2
    }
  })
}
whyaaharkoshPageAnimation()

function contactPageAnimation(){
  var tl3 = gsap.timeline()
  tl3.from(".contact-head",{
    opacity:0,
    stagger:1.5,
    duration:0.8,
    y:20,
    scrollTrigger:{
      trigger:".contact-head",
      scroller:"body",
      // markers:true,
      start:"top 70%",
      end:"top 50%",
      scrub:2
    }
  })
  // tl3.from(".contact-para",{
  //   opacity:0,
  //   stagger:1.5,
  //   duration:0.8,
  //   y:20,
  //   scrollTrigger:{
  //     trigger:".contact-para",
  //     scroller:"body",
  //     // markers:true,
  //     start:"top 70%",
  //     end:"top 50%",
  //     scrub:2
  //   }
  // })
  tl3.from(".contact-box",{
    opacity:0,
    stagger:1.5,
    duration:0.8,
    y:20,
    scrollTrigger:{
      trigger:".contact-box",
      scroller:"body",
      // markers:true,
      start:"top 70%",
      end:"top 50%",
      scrub:2
    }
  })
}
contactPageAnimation()

function choosePageAnimation(){
  gsap.from(".choose",{
    opacity:0,
    stagger:1.5,
    duration:0.8,
    y:20,
    scrollTrigger:{
      trigger:".choose",
      scroller:"body",
      // markers:true,
      start:"top 60%",
      end:"top 40%",
      scrub:2
    }
  })
}
choosePageAnimation()
function customerPageAnimation(){
  gsap.from(".customer",{
    opacity:0,
    stagger:1.5,
    duration:0.8,
    y:20,
    scrollTrigger:{
      trigger:".customer",
      scroller:"body",
      // markers:true,
      start:"top 60%",
      end:"top 40%",
      scrub:2
    }
  })
}
customerPageAnimation()
function aboutPageAnimation(){
  gsap.from(".about",{
    opacity:0,
    stagger:1.5,
    duration:0.8,
    y:20,
    scrollTrigger:{
      trigger:".about",
      scroller:"body",
      // markers:true,
      start:"top 60%",
      end:"top 40%",
      scrub:2
    }
  })
}
aboutPageAnimation()

function footerPageAnimation(){
  gsap.from(".footer-content",{
    opacity:0,
    stagger:1.5,
    duration:1,
    scrollTrigger:{
      trigger:".footer-content",
      scroller:"body",
      // markers:true,
      start:"top 70%",
      end:"top 50%",
      scrub:2
    }
  })
}
footerPageAnimation()