const powerOut_One = gsap.timeline({ defaults: { ease: "power1.out" } });

powerOut_One.to(".container", { y: "-100%", duration: 1, stagger: 0.25 });
powerOut_One.fromTo(".intro-text", { opacity: 0 }, { opacity: 1, duration: 0.5 });
powerOut_One.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 0.5 });
powerOut_One.fromTo(".header", { opacity: 0 }, { opacity: 1, duration: 1 });
