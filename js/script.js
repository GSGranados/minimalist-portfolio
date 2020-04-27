
const spans = document.querySelectorAll("h1 span");
spans.forEach((span) =>
  span.addEventListener("mouseover", function (e) {
    span.classList.add("animated", "rubberband");
  })
);

spans.forEach((span) =>
  span.addEventListener("mouseout", function (e) {
    span.classList.remove("animated", "rubberband");
  })
);

const htmlbar= document.querySelector('.bar-html');
const cssbar= document.querySelector('.bar-css');
const jsbar= document.querySelector('.bar-javascript');
const reactbar= document.querySelector('.bar-react');

var t1 = new TimelineLite();
t1.fromTo(htmlbar,.75, {width: 'calc(0% - 6px)'},{width: 'calc(90% - 6px)', ease: Power4.easeOut})
.fromTo(cssbar,.75, {width: 'calc(0% - 6px)'},{width: 'calc(95% - 6px)', ease: Power4.easeOut})
.fromTo(jsbar,.75, {width: 'calc(0% - 6px)'},{width: 'calc(75% - 6px)', ease: Power4.easeOut})
.fromTo(reactbar,.75, {width: 'calc(0% - 6px)'},{width: 'calc(70% - 6px)', ease: Power4.easeOut})

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)

const showRequiredCategory = event => {
    const getId = event.id;
    const links = document.querySelectorAll('.work-category button');
    for (let i = 0; i < links.length; i++) {
        if(links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    }
    event.classList.add('active');
    const getCategory = document.querySelector(`.category-${getId}`);
    const categories = document.querySelectorAll('div[class^= "category-"]');
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory');
            categories[i].classList.add('hideCategory');
        }
        
    }
    getCategory.classList.remove('hideCategory');
    getCategory.classList.add('showCategory')
}