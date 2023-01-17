// select intro dom element from html
const intro = document.querySelector('.intro');
// select content dom element from html
const video = intro.querySelector('video');
// select text dom element from html
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

// scrollmagic
const controller = new ScrollMagic.Controller();

// scene duration and trigger
let scene = new ScrollMagic.Scene({
  duration: 10000, // video duration in milliseconds
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//text animation
const textAnim = TweenMax.fromTo(text, 4, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 6000, // video duration in milliseconds
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

// video ease stop animation at the end
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

// event listener for scrolling dévides number by 1000 to give us seconds
scene.on('update', (e) => {
  scrollpos = e.scrollPos / 1000;
});

// dévides 1000 / 30
setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);
