// Initialize Lenis for smooth scrolling
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP ScrollTrigger setup
gsap.registerPlugin(ScrollTrigger);


gsap.to('.about', {
    gap: "20vh",
    ease: 'none',
    scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: '50% 0%',
        scrub: true,
        // markers: true
    }
});

gsap.to('.footer', {
    gap: "9vh",
    ease: 'none',
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 50%',
        end: '50% 0%',
        scrub: true,
        // markers: true
    }
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Select the h1 elements in the hero section
    const heroHeadings = document.querySelectorAll('.hero-section h1');

    // Create the scroll effect
    gsap.to(heroHeadings[0], {
        x: '10%',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.to(heroHeadings[1], {
        x: '-10%',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.to(heroHeadings[2], {
        x: '10%',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    const imgDiv = document.querySelector('.img-div-sec');
    const imgContainer = document.querySelector('.img-container');
    const h2Elements = document.querySelectorAll('.right-section h2');

    h2Elements.forEach((h2, index) => {
        h2.addEventListener('mouseenter', () => {
            const imagePath = imageArray[index % imageArray.length];
            imgContainer.style.backgroundImage = `url(${imagePath})`;
            imgDiv.style.display = 'block';
        });

        h2.addEventListener('mouseleave', () => {
            imgDiv.style.display = 'none';
        });
    });
});

document.querySelector("body").addEventListener('mousemove', function (dets) {
    const reductionFactor = 0.3; // Adjust this value to control how much the div moves (0.1 to 0.5 works well)

    function moveDiv() {
        const windowHeight = window.innerHeight;
        const centerY = windowHeight / 2;
        const mouseOffsetFromCenter = dets.clientY - centerY;
        const reducedOffset = mouseOffsetFromCenter * reductionFactor;
        const newY = centerY + reducedOffset;

        document.querySelector(".img-div-sec").style.top = `${newY}px`;
    }

    window.requestAnimationFrame(moveDiv);
});

// Infinite scroll effect for .scroll-section
function setupInfiniteScroll() {
    const scrollContent = document.querySelector('.scroll-content');
    const scrollWidth = scrollContent.offsetWidth;

    // Clone the content
    const clone = scrollContent.cloneNode(true);
    scrollContent.parentNode.appendChild(clone);

    // Set up the animation
    gsap.to('.scroll-content', {
        x: -scrollWidth,
        ease: 'none',
        duration: 30,
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % scrollWidth)
        }
    });
}

// Call the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', setupInfiniteScroll);

// Array of 12 image URLs
const imageArray = [
    'https://images.unsplash.com/photo-1724765623733-68ef3080a5c3?q=80&w=2470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1726715245558-69afa5ded798?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682251024316-fcd478b8ad15?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1702318262405-091b2519df01?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1723924995430-b74c76bbcdfd?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1718305340842-f9c16d9d7031?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1722619452740-1b6d0c33627a?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1720546973026-7011fa500f9d?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1716574207415-6252b5fc6f17?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1723391962110-299d412ca046?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1723347130196-8d31b6ac01fd?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1679669693237-74d556d6b5ba?q=80&w=2598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

document.querySelector("body").addEventListener('mousemove', function(dets){
    function abc(){
        document.querySelector(".mouse-flow h6:nth-child(1)").style.top = `${dets.clientY}px`;
        document.querySelector(".mouse-flow h6:nth-child(1)").style.left = `${dets.clientX}px`;
        document.querySelector(".mouse-flow h6:nth-child(2)").style.top = `${dets.clientY}px`;
        document.querySelector(".mouse-flow h6:nth-child(2)").style.left = `${dets.clientX}px`;
        document.querySelector(".mouse-flow h6:nth-child(3)").style.top = `${dets.clientY}px`;
        document.querySelector(".mouse-flow h6:nth-child(3)").style.left = `${dets.clientX}px`;
        document.querySelector(".mouse-flow h6:nth-child(4)").style.top = `${dets.clientY}px`;
        document.querySelector(".mouse-flow h6:nth-child(4)").style.left = `${dets.clientX}px`;
        document.querySelector(".mouse-flow h6:nth-child(5)").style.top = `${dets.clientY}px`;
        document.querySelector(".mouse-flow h6:nth-child(5)").style.left = `${dets.clientX}px`;
        document.querySelector(".mouse-flow h6:nth-child(6)").style.top = `${dets.clientY}px`;
        document.querySelector(".mouse-flow h6:nth-child(6)").style.left = `${dets.clientX}px`;
    }
    window.requestAnimationFrame(abc);
});

