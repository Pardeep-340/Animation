    function animateRocket() {
            const screenWidth = window.innerWidth;
            let tl = gsap.timeline();
            if (screenWidth <= 1023.98) {
                tl.to('.rocket', {
                    duration: 2,
                    x: '80vw',
                    ease: "Power1.easeInOut",
                })
                    .to('.rocket', {
                        duration: 0.4,
                        x: '85vw',
                        rotate: -20,
                        y: '-6vh',
                       
                    })
                    .to('.rocket', {
                        duration: 0.9,
                        x: '99vw',
                        y: '-20vh',
                        rotate: -90,
                       
                    })
                    .to('.rocket', {
                        duration: 0.6,
                        y: '-130vh',
                       
                    });
            } else {
                tl.to('.rocket', {
                    duration: 3.3,
                    x: '80vw',
                    ease: "Power1.easeInOut",
                })
                    .to('.rocket', {
                        duration: 0.4,
                        x: '85vw',
                        rotate: -20,
                        y: '-6vh',
                       
                    })
                    .to('.rocket', {
                        duration: 0.9,
                        x: '99vw',
                        y: '-20vh',
                        rotate: -90,
                       
                    })
                    .to('.rocket', {
                        duration: 0.6,
                        y: '-130vh',
                       
                    });
            }
        }
        window.addEventListener('resize', animateRocket);
        animateRocket();