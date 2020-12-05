/* gsap.from('.navBar', { y: '-100%', duration: 1, ease: 'bounce' })
gsap.from('li', { opacity: 0, duration: 2, delay: 1, stagger: 0.5 })

gsap.from('.right', { x: '100vw', duration: 1.4, delay: 0.5, opacity: 0 })
gsap.from('.left', { x: '-100vw', duration: 1.4, delay: 0.5, opacity: 0 })

gsap.fromTo('.revButton', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0, duration: 1, delay: 2.5 })

gsap.from('.footer', { opacity: 0, y: 20, ease: 'elastic', duration: 2, delay: 2 }) */


const timeline = gsap.timeline({ defaults: { duration: 1 } })

timeline
    .from('.navBar', { y: '-100%', ease: 'bounce' })
    .from('li', { opacity: 0, stagger: 0.5 })
    .from('.right', { x: '100vw', opacity: 0 }, 1)      //Absolute Delay of 1s compared to first animation
    .from('.left', { x: '-100vw', opacity: 0 }, '<.5')  //Relative delay of 0.5s compared to previous animation
    .fromTo('.revButton', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 }, 2)
    .from('.footer', { opacity: 0, y: 20, ease: 'elastic' }, '<1')


const button = document.querySelector('.revButton')

button.addEventListener("click", () => {
    timeline.timeScale(5);
    timeline.reverse();
    document.body.style.backgroundColor = "yellow";
})
