// in script.js (or a new <script> block after loading GSAP)

gsap.registerPlugin(ScrollTrigger);

// grab your elements
const text  = document.getElementById('text');
const leaf  = document.getElementById('leaf');
const hill1 = document.getElementById('hill1');
const hill4 = document.getElementById('hill4');
const hill5 = document.getElementById('hill5');

// same cap you had
const maxScroll = 550;

// build a single timeline whose playhead goes from 0→1 as you scroll 0→maxScroll
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.parallax',      // start when .parallax hits the top
    start:    'top top',       //    of the viewport
    end:      `+=${maxScroll}`,//    scroll 0→maxScrollpx
    scrub:    true,            //    scrub ties animation progress to scroll
    // markers: true,          // <-- enable to debug start/end
  }
});

// now lay out all your tweens at the same time (position = 0)
tl.to(text,  { y: maxScroll * 2.5 }, 0)  // text.marginTop = scroll*2.5
  .to(leaf,  { y: -maxScroll * 1.5, x: maxScroll * 1.5 }, 0) // leaf.top/left
  .to(hill5, { x: maxScroll * 1.5 }, 0)  // hill5.left
  .to(hill4, { x: -maxScroll * 1.5 }, 0) // hill4.left
  .to(hill1, { y: maxScroll * 1   }, 0); // hill1.top
