function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

gsap.timeline({
    ScrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:true,
        start:"top 27%",
        end:"top 0",
        scrub:3
    }
})

tl.to(".page1 h1",{
    x:-100,
    duration: 1,
},"same")

tl.to(".page1 h2",{
    x:100,
},"same")




