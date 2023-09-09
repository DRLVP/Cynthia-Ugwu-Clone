// SMOOTH ANIMATION
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// TEXT ANIMATION

function textAnimation(params) {
    let tl = gsap.timeline();

    tl.from("#nav-bar", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to(".bounding__elem", {
            y: 0,
            duration: 2,
            stagger: .2,
            delay: -1.5,
            ease: Expo.easeInOut
        })

        .from(".hero__links", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1.5,
            ease: Expo.easeInOut
        })
}

textAnimation();


let timeOut;

// Skew mouse circle

function skewCircle() {
    clearTimeout(timeOut);

    // set deafault scale value
    let xscale = 1;
    let yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener('mousemove', (details) => {
        xscale = gsap.utils.clamp(.8, 1.2, details.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, details.clientY - yprev);

        xprev = details.clientX;
        yprev = details.clientY;

        mouseFollower(xscale, yscale);

        timeOut = setTimeout(() => {
            document.querySelector("#mini-circle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1,1)`;
        }, 100)
    })
}
skewCircle();

// MOUSE CIRCLE FLLOWER

function mouseFollower(xscale, yscale) {
    window.addEventListener('mousemove', (details) => {
        const circle = document.querySelector("#mini-circle");
        circle.style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})`;
    })
};

mouseFollower();