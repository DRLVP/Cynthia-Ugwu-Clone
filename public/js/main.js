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


// MOUSE CIRCLE FLLOWER

function mouseFollower() {
    window.addEventListener('mousemove', (details) => {
        const circle = document.querySelector("#mini-circle");
        circle.style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
    })
};

mouseFollower();