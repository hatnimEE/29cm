const searchEl = document.querySelector('.search');
const searchWrapEl = document.querySelector('.full-search-section-wrap');
const searchCloseEl = document.querySelector('.full-search-close');


searchEl.addEventListener('click',function(){
    searchWrapEl.classList.add('focused');
})

searchCloseEl.addEventListener('click',function(){
    searchWrapEl.classList.remove('focused');
})


const fadeEls = document.querySelectorAll('.contents .fade-in');

fadeEls.forEach(function(fadeIn,index){
    gsap.to(fadeEls, 1 ,{
        delay:(index+1)*.2,
        opacity:1
        
    });
})

new Swiper('.top-popup .swiper-container',{
    direction : 'vertical',
    autoplay:true
});




const topPopupEl = document.querySelector('.top-popup');
const headerEl = document.querySelector('header');


window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 100){
        headerEl.classList.add('active');
    }else{
        headerEl.classList.remove('active');
    }
}, 300));



window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 100){
        //배지 숨기기
        gsap.to(topPopupEl, .1, {
            opacity:0,
            display: 'none',
            height : '0px'
        })
    }else{
        //배지 보이기
        gsap.to(topPopupEl, .1, {
            opacity:1,
            display: 'block',
            height: '35px'
        })
    }
}, 300));

window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 100){
        //배지 숨기기
        gsap.to(headerEl, .1, {
            padding:'30px 0 0 0'
        })
    }else{
        //배지 보이기
        gsap.to(headerEl, .1, {
            padding:'60px 0 0 0'
        })
    }
}, 300));







//gsap.to(요소,지속시간,옵션);
// _.throttle(함수, 시간)