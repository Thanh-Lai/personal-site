$(document).ready(function() {
    //Init ScrollMagic
    let controller = new ScrollMagic.Controller();

    let aboutFixed = new ScrollMagic.Scene({
        triggerElement: '#about-bg',
        triggerHook: 0,
    })
    .setClassToggle('#about-bg', 'fixed')
    .addTo(controller)

    let portfolioFixed = new ScrollMagic.Scene({
        triggerElement: '#portfolio-bg',
        triggerHook: 0,
    })
    .setClassToggle('#portfolio-bg', 'fixed')
    .addTo(controller)

});
