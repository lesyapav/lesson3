const options={
    rootMargins: '10pt 0pt',
    treshold: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0]
};
function vdHandler(elements){
    for (let el of elements){//
        if (el.isIntersecting && el.target.dataset.src){//
            el.target.src = el.target.dataset.src; //
            el.target.dataset.src=''; //
        }
        el.target.style.opacity = el.intersectionRatio; //
    }
}
const vd = new IntersectionObserver(vdHandler, options);
const cImgs = document.querySelectorAll('article img');
for (let el of cImgs)
    vd.observe(el);