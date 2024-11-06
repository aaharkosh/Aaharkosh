function homepageAnimation(){
  var tl = gsap.timeline()
  tl.from(".navbar",{
    opacity:0,
    stagger:0.5,
    y:30,
    duration:0.8
  })
  .from(".homepage-rightpart",{
    opacity:0,
    duration:0.8,
    y:30
  })
  .from(".left-head",{
    opacity:0,
    duration:0.8,
    y:30,
  })
  .from(".left-para",{
    opacity:0,
    duration:0.8,
    y:30,
  })
  .from(".left-btn",{
    opacity:0,
    duration:0.8,
    y:30,
  })
  .from(".icon",{
    opacity:0,
    duration:0.8,
    y:30,
    stagger:0.5
  })
}
homepageAnimation()

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

  const slides = document.querySelectorAll("#slider-container > div");
    const bulletContainer = document.getElementById("bullet-container").children;
    let currentSlide = 0;

    function updateSlider() {
      document.getElementById("slider-container").style.transform = `translateX(-${currentSlide * 100}%)`;
      Array.from(bulletContainer).forEach((bullet, index) => {
        bullet.classList.remove('bg-[#FFE8D6]');
        bullet.classList.add('bg-[#FF570C]');
        if (index === currentSlide){
            bullet.classList.remove('bg-[#FF570C]');
            bullet.classList.add('bg-[#FFE8D6]');  
        };
      });
    }

    document.getElementById("prevSlide").addEventListener("click", () => {
      currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
      updateSlider();
    });

    document.getElementById("nextSlide").addEventListener("click", () => {
      currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
      updateSlider();
    });

    Array.from(bulletContainer).forEach((bullet, index) => {
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
  tl3.from(".contact-para",{
    opacity:0,
    stagger:1.5,
    duration:0.8,
    y:20,
    scrollTrigger:{
      trigger:".contact-para",
      scroller:"body",
      // markers:true,
      start:"top 70%",
      end:"top 50%",
      scrub:2
    }
  })
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

function subscribePageAnimation(){
  var tl4 = gsap.timeline()
  tl4.from(".subscription-title",{
    opacity:0,
    stagger:1.5,
    duration:0.8,
    y:20,
    scrollTrigger:{
      trigger:".subscription-title",
      scroller:"body",
      // markers:true,
      start:"top 85%",
      end:"top 70%",
      scrub:2
    }
  })
  tl4.from(".subscription-para",{
    opacity:0,
    stagger:1.5,
    duration:0.8,
    y:20,
    scrollTrigger:{
      trigger:".subscription-para",
      scroller:"body",
      // markers:true,
      start:"top 85%",
      end:"top 70%",
      scrub:2
    }
  })
  tl4.from(".subscription-form",{
    opacity:0,
    stagger:1.5,
    duration:0.8,
    y:20,
    scrollTrigger:{
      trigger:".subscription-form",
      scroller:"body",
      // markers:true,
      start:"top 85%",
      end:"top 70%",
      scrub:2
    }
  })
}
subscribePageAnimation()

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