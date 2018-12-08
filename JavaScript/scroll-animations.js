$(document).ready(function() {
    //Init ScrollMagic
    let controller = new ScrollMagic.Controller();

    // scenes

    $('.text-up').each(function() {
        let textUp = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '80%',
            triggerHook: 0.9,
            // reverse: false
        })
        .setClassToggle(this, 'fade-in')
        .addTo(controller);
    })
    
    let headshot = new ScrollMagic.Scene({
        triggerElement: '#headshot img',
        duration: '70%',
        triggerHook: 0.7,
    })
    .setClassToggle('#headshot img', 'unblurr')
    .addTo(controller)

    $('.sections').each(function() {
        let sections = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '100%',
            triggerHook: 0.8,
        })
        .setClassToggle(this, 'appear')
        .addTo(controller)
    })

    $('.download').each(function() {
        let download = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '80%',
            triggerHook: 0.9
        })
        .setClassToggle(this, 'scale')
        .addTo(controller);
    })

    $('.contact-me').each(function() {
        let textUp = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '80%',
            triggerHook: 0.9
        })
        .setClassToggle(this, 'unblurr')
        .addTo(controller);
    })
});