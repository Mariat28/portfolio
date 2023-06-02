import anime from 'animejs/lib/anime.es.js';
// window.onload=styleText();
export function styleText(letterWrapper){
    // let textWrapper = document.querySelector('.letters')
    // letterWrapper  = letterWrapper?.textContent?.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
    anime.timeline({loop:true}).add({
        targets: '.line',
        scaleY: [0,11],
        opacity:[0.5,1],
        easing: "easeOutExpo",
        duration:800
    }).add({
        targets: '.line',
        translateX: [0, document.querySelector('.letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 800,
        delay: 100
    }).add({
        targets: '.letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 700,
        autoplay: false,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
    }).add({
        targets: '.text-wrapper',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
        autoplay: false,
    });
}
export default styleText;
