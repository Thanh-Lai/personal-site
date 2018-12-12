$(document).ready(function() {
    //Init ScrollMagic
    let controller = new ScrollMagic.Controller();

    $('.text-up').each(function() {
        let textUp = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '90%',
            triggerHook: 0.9,
        })
        .setClassToggle(this, 'unblurr')
        .addTo(controller);
    })

    let headshot = new ScrollMagic.Scene({
        triggerElement: '#headshot img',
        duration: '70%',
        triggerHook: 0.7,
    })
    .setClassToggle('#headshot img', 'unblurr')
    .addTo(controller)

    let timeline = new ScrollMagic.Scene({
        triggerElement: '.cd-horizontal-timeline',
        duration: '80%',
        triggerHook: 0.8,
    })
    .setClassToggle('.cd-horizontal-timeline', 'unblurr')
    .addTo(controller)

    $('.sections').each(function() {
        let sections = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '100%',
            triggerHook: 0.8,
        })
        .setClassToggle(this, 'unblurr')
        .addTo(controller)
    })

    $('.download').each(function() {
        let download = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '80%',
            triggerHook: 0.9
        })
        .setClassToggle(this, 'unblurr')
        .addTo(controller);
    })

    $('.contact-me').each(function() {
        let contacts = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '80%',
            triggerHook: 0.9
        })
        .setClassToggle(this, 'unblurr')
        .addTo(controller);
    })

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
