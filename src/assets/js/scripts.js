var playPause = anime({
   targets: 'div.box',
   translateY: [
    { value: 300, duration: 1000 },
    { value: 0, duration: 800 }
   ],
   rotate: {
    value: '1turn',
    easing: 'easeInOutSine'
   },
   delay: function(el, i , l) {
        return i * 1000;
   },
   autoplay: false
});

document.querySelector('.play').onclick = playPause.play;
document.querySelector('.pause').onclick = playPause.pause;


/* anime({
   targets: 'div.box.yellow',
   translateY: [
    { value: 300, duration: 1000 },
    { value: 0, duration: 800 }
   ],
   rotate: {
    value: '1turn',
    easing: 'easeInOutSine'
   },
   delay: function(el, i , l) {
        return i * 1000
   }
});

anime({
   targets: 'div.box.orange',
   translateY: [
    { value: 300, duration: 1000, delay: 1000 },
    { value: 0, duration: 800 }
   ],
   rotate: {
    value: '1turn',
    easing: 'easeInOutSine',
    delay: 1000
   }
});

anime({
   targets: 'div.box.blue',
   translateY: [
    { value: 300, duration: 1000, delay: 2000 },
    { value: 0, duration: 800 }
   ],
   rotate: {
    value: '1turn',
    easing: 'easeInOutSine',
    delay: 2000
   }
});

anime({
   targets: 'div.box.pink',
   translateY: [
    { value: 300, duration: 1000, delay: 3000 },
    { value: 0, duration: 800 }
   ],
   rotate: {
    value: '1turn',
    easing: 'easeInOutSine',
    delay: 3000
   }
}); */