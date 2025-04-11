gsap.registerPlugin(ScrollTrigger);

const text  = document.getElementById('text');
const leaf  = document.getElementById('leaf');
const hill1 = document.getElementById('hill1');
const hill4 = document.getElementById('hill4');
const hill5 = document.getElementById('hill5');

const maxScroll = 550;

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.parallax',     
    start:    'top top',     
    end:      `+=${maxScroll}`,
    scrub:    true,            
  }
});

tl.to(text,  { y: maxScroll * 2.5 }, 0)  
  .to(leaf,  { y: -maxScroll * 1.5, x: maxScroll * 1.5 }, 0) 
  .to(hill5, { x: maxScroll * 1.5 }, 0)  
  .to(hill4, { x: -maxScroll * 1.5 }, 0) 
  .to(hill1, { y: maxScroll * 1   }, 0); 
