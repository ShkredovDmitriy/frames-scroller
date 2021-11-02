if (document.querySelector(".animation-page")) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);
  gsap.registerPlugin(MotionPathHelper);

  const container1 = ".section-ani__container-1";
  const container2 = ".section-ani__container-2";
  const container3 = ".section-ani__container-3";
  const container4 = ".section-ani__container-4";
  const container5 = ".section-ani__container-5";
  const text1 = ".section-ani__text-11";
  const text21 = ".section-ani__text-21";
  const text22 = ".section-ani__text-22";
  const text23 = ".section-ani__text-23";
  const text41 = ".section-ani__text-41";
  const text42 = ".section-ani__text-42";
  const text43 = ".section-ani__text-43";
  const images3 = ".section-ani__images-3";
  const image51 = ".section-ani__image-51";

  // gsap.from(text1, {
  //   opacity: 0,
  //   y: "5rem",
  //   duration: 1.5
  // });

  // // CONTAINER 2
  // let tl2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: container2,
  //     markers: true,
  //     pin: true, // pin the trigger element while active
  //     start: "top top", // when the top of the trigger hits the top of the viewport
  //     end: "top -250%", // end after scrolling 500px beyond the start
  //     scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //     // snap: {
  //     //   // snapTo: "labels", // snap to the closest label in the timeline
  //     //   // duration: { min: 0.1, max: 0.5 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
  //     //   // delay: 0.1, // wait 0.2 seconds from the last scroll event before doing the snapping
  //     //   ease: "none" // the ease of the snap animation ("power3" by default)
  //     // }
  //   }
  // });

  // tl2
  //   .addLabel("start1")
  //   .from(text21, { x: "-100%", autoAlpha: 0, duration: 1, delay: 0.5 })
  //   .addLabel("start2")
  //   .from(text22, { x: "-100%", autoAlpha: 0, duration: 1 })
  //   .addLabel("start3")
  //   .from(text23, { x: "-100%", autoAlpha: 0, duration: 1 })
  //   .addLabel("start4")
  //   .to(text21, { autoAlpha: 0, duration: 1 })
  //   .addLabel("start5")
  //   .to(text22, { autoAlpha: 0, duration: 1 })
  //   .addLabel("start6")
  //   .to(text23, { autoAlpha: 0, duration: 1 })
  //   .addLabel("start7");

  // // CONTAINER 3
  // let tl3 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: container3,
  //     markers: true,
  //     pin: true,
  //     start: "top top",
  //     end: "top -250%",
  //     scrub: 1
  //   }
  // });

  // tl3.fromTo(
  //   images3,
  //   { x: "165vw", ease: Linear.easeNone },
  //   { x: "-165vw", ease: Linear.easeNone }
  // );

  // // CONTAINER 4
  // let tl4 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: container4,
  //     markers: true,
  //     // pin: true,
  //     start: "top 50%",
  //     end: "top top"
  //     // scrub: 1
  //   }
  // });

  // tl4
  //   .from(text41, { x: "-50vw", autoAlpha: 0, duration: 0.75, delay: 0.25 })
  //   .from(text42, { x: "50vw", autoAlpha: 0, duration: 0.75 })
  //   .from(text43, { x: "-50vw", autoAlpha: 0, duration: 0.75 });

  // // CONTAINER 5
  // let tl5 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: container5,
  //     markers: true,
  //     pin: true,
  //     start: "top top",
  //     end: "top -100%",
  //     scrub: 1
  //   }
  // });

  // tl5.to(image51, {
  //   motionPath: {
  //     // path: [
  //     //   { x: 0, y: 0 },
  //     //   { x: 200, y: 200 },
  //     //   { x: 900, y: 500 },
  //     //   { x: 1500, y: 550 }
  //     // ],
  //     path: "#flyPath",
  //     align: "#flyPath",
  //     autoRotate: true,
  //     curviness: 0.5
  //   },
  //   duration: 3,
  //   ease: "Power0.easeNone"
  // });

  // MotionPathHelper.create(image51);
}

if (document.querySelector(".direction-pointer")) {
  const chevron1 = ".direction-pointer__shevron.top";
  const chevron2 = ".direction-pointer__shevron.middle";
  const chevron3 = ".direction-pointer__shevron.bottom";
  let timeLine = gsap.timeline();

  timeLine
    .from(chevron1, { autoAlpha: 0, duration: 0.25, delay: 0.15 })
    .to(chevron1, { autoAlpha: 1, duration: 0.25 })
    .to(chevron1, { autoAlpha: 0, duration: 0.25 })
    .from(chevron2, { autoAlpha: 0, duration: 0.25, delay: "-=0.5" })
    .to(chevron2, { autoAlpha: 1, duration: 0.25 })
    .to(chevron2, { autoAlpha: 0, duration: 0.25 })
    .from(chevron3, { autoAlpha: 0, duration: 0.25, delay: "-=0.5" })
    .to(chevron3, { autoAlpha: 1, duration: 0.25 })
    .to(chevron3, { autoAlpha: 0, duration: 0.25 })
    .repeat(-1);
}

if (document.querySelector(".container3")) {
  const trigger = ".trigger";
  const container2 = ".container2";
  const container3 = ".container3";

  const container4 = ".container4";
  const text = ".container4__text";

  let timeLine = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      markers: true,
      inertia: false,
      ease: "none",
      pin: true, // pin the trigger element while active
      start: "top 95%", // when the top of the trigger hits the top of the viewport
      end: "top -200%", // end after scrolling 500px beyond the start
      scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }
  });

  timeLine
    .to(text, { scale: 1, autoAlpha: 1, duration: 1, ease: "none" })
    .to(text, { scale: 1, autoAlpha: 1, duration: 0.25, ease: "none" })
    .to(container4, { autoAlpha: 0, duration: 1, ease: "none" })
    .to(container4, { autoAlpha: 0, duration: 0.25, ease: "none" })
    .to(container2, { autoAlpha: 0, duration: 1, ease: "none" })
    .to(container2, { autoAlpha: 0, duration: 1, ease: "none" })
    .to(container3, {
      maskSize: "auto +=200%",
      duration: 2,
      ease: "none"
    });

  // .to(container3, { left: "0", duration: 1, ease: Linear.easeNone })
  // .to(container2, { scale: 20, x: "-65%", duration: 2, delay: 0.25 });
}
