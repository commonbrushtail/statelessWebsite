const element = document.getElementById("image-compare1");
const viewer = new ImageCompare(element, { fluidMode: true, hoverStart: true }).mount();

const element2 = document.getElementById("image-compare2");
const viewer2 = new ImageCompare(element2, { fluidMode: true, hoverStart: true }).mount();
var dart = gsap.timeline({ paused: true });
var gearMobile = gsap.timeline({ paused: true });
var gearDesktop = gsap.timeline({ paused: true });
gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, Flip, ScrollToPlugin, DrawSVGPlugin);

ScrollTrigger.matchMedia({
  "(min-width: 320px) and (max-width: 1023.9px)": function () {
    console.log("mobile to portait ipad");

    dart.from(".line-to-target", { duration: 3, stagger: 0.1, drawSVG: 0 });
    dart.from(
      ".dart-t1",
      {
        autoAlpha: 0,
      },
      "<+0.3"
    );
    dart.from(
      ".dart-t2",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t3",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t4",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t5",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );

    gearMobile.to(
      ".gear-m5",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearMobile.to(
      ".gear-m4",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearMobile.to(
      ".gear-m3",
      {
        rotation: -360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearMobile.to(
      ".gear-m2",
      {
        rotation: -360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearMobile.to(
      ".gear-m1",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );

    var s1TL = gsap.timeline();
    s1TL.set(".a2, .a3, .a4, .a5", {
      autoAlpha: 0,
    });
    s1TL.set(".a3, .a4, .a5", {
      position: "absolute",
      autoAlpha: 0,
    });
    s1TL.fromTo(
      ".a1",
      {
        autoAlpha: 0,
      },
      {
        scale: 1.3,
        autoAlpha: 1,
        duration: 2,
      }
    );
    s1TL.to(".a1", {
      scale: 1,
    });
    s1TL.to(".a2", {
      autoAlpha: 1,
    });
    s1TL.fromTo(
      ".a3",
      {
        position: "static",
        autoAlpha: 0,
        width: 0,
      },
      {
        autoAlpha: 1,
        width: "100%",
        duration: 1,
      }
    );
    s1TL.to(".a3", {
      marginTop: "20px",
      marginBottom: "20px",
    });
    s1TL.to(
      ".a3",
      {
        width: "80%",
      },
      "<"
    );
    s1TL.fromTo(
      ".a4",
      {
        position: "absolute",
      },
      {
        autoAlpha: 1,
      },
      "<"
    );
    s1TL.to(".aWrap", {
      y: "-50%",
    });
    s1TL.to(".a5", {
      scale: 3,
      autoAlpha: 1,
      x: "250%",
      y: "7%",
    });
    s1TL.to(
      ".a4",
      {
        autoAlpha: 1,
        x: "-35%",
      },
      "<"
    );

    /*
    s1TL.to(".a2", {
      display: "block",
      autoAlpha: 1,
      duration: 1.5,
    });
    */
  },
  "only screen and (min-device-width: 1024px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)": function () {
    console.log("ipad pro portrait");

    dart.from(".line-to-target", { duration: 3, stagger: 0.1, drawSVG: 0 });
    dart.from(
      ".dart-t1",
      {
        autoAlpha: 0,
      },
      "<+0.3"
    );
    dart.from(
      ".dart-t2",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t3",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t4",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t5",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );

    var s1TL = gsap.timeline();
    s1TL.set(".a2, .a3, .a4, .a5", {
      autoAlpha: 0,
    });
    s1TL.set(".a3, .a4, .a5", {
      position: "absolute",
      autoAlpha: 0,
    });
    s1TL.fromTo(
      ".a1",
      {
        autoAlpha: 0,
      },
      {
        scale: 1.3,
        autoAlpha: 1,
        duration: 2,
      }
    );
    s1TL.to(".a1", {
      scale: 1,
    });
    s1TL.to(".a2", {
      autoAlpha: 1,
    });
    s1TL.fromTo(
      ".a3",
      {
        position: "static",
        autoAlpha: 0,
        width: 0,
      },
      {
        autoAlpha: 1,
        width: "100%",
        duration: 1,
      }
    );
    s1TL.to(".a3", {
      marginTop: "20px",
      marginBottom: "20px",
    });
    s1TL.to(
      ".a3",
      {
        width: "80%",
      },
      "<"
    );
    s1TL.fromTo(
      ".a4",
      {
        position: "absolute",
      },
      {
        autoAlpha: 1,
      },
      "<"
    );
    s1TL.to(".aWrap", {
      y: "-50%",
    });
    s1TL.to(".a5", {
      scale: 3,
      autoAlpha: 1,
      x: "250%",
      y: "7%",
    });
    s1TL.to(
      ".a4",
      {
        autoAlpha: 1,
        x: "-35%",
      },
      "<"
    );

    /*
    s1TL.to(".a2", {
      display: "block",
      autoAlpha: 1,
      duration: 1.5,
    });
    */
  },
  "(min-width: 1280px)": function () {
    console.log("desktop from 1280px onward");

    gearDesktop.to(
      ".gear-d5",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d4",
      {
        rotation: -360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d3",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d2",
      {
        rotation: -360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d1",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );

    dart.from(".dart-line-1", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-2", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-3", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-4", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-5", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-6", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(
      ".dart-t1",
      {
        autoAlpha: 0,
      },
      "<-3"
    );
    dart.from(
      ".dart-t2",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t3",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t4",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t5",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );

    var s1TL = gsap.timeline();
    s1TL.set(".a2, .a3, .a4, .a5", {
      autoAlpha: 0,
    });
    s1TL.set(".a3, .a4, .a5", {
      position: "absolute",
      autoAlpha: 0,
    });
    s1TL.fromTo(
      ".a1",
      {
        autoAlpha: 0,
      },
      {
        scale: 1.3,
        autoAlpha: 1,
        duration: 2,
      }
    );
    s1TL.to(".a1", {
      scale: 1,
    });
    s1TL.to(".a2", {
      autoAlpha: 1,
    });
    s1TL.to(".a1-2-wrap", {
      x: "-60%",
    });
    s1TL.to(".a3", {
      autoAlpha: 1,
    });
    s1TL.fromTo(
      ".a4",
      {
        x: "50%",
        y: "-14%",
      },
      {
        x: "65%",
        y: "-14%",
        autoAlpha: 1,
      }
    );
    s1TL.fromTo(
      ".a5",
      {
        x: "1200%",
        y: "-42%",
      },
      {
        x: "1449%",
        y: "-42%",

        autoAlpha: 1,
      },
      "<"
    );
    s1TL.to(".a5", {
      scale: 6,
      x: "1638%",
      y: "45%",
    });
  },
  "only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)": function () {
    console.log("ipad landscape");

    gearDesktop.to(
      ".gear-d5",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d4",
      {
        rotation: -360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d3",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d2",
      {
        rotation: -360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d1",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );

    dart.from(".dart-line-1", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-2", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-3", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-4", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-5", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-6", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(
      ".dart-t1",
      {
        autoAlpha: 0,
      },
      "<-3"
    );
    dart.from(
      ".dart-t2",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t3",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t4",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t5",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    var s1TL = gsap.timeline();
    s1TL.set(".a2, .a3, .a4, .a5", {
      autoAlpha: 0,
    });
    s1TL.set(".a3, .a4, .a5", {
      position: "absolute",
      autoAlpha: 0,
    });
    s1TL.fromTo(
      ".a1",
      {
        autoAlpha: 0,
      },
      {
        scale: 1.3,
        autoAlpha: 1,
        duration: 2,
      }
    );
    s1TL.to(".a1", {
      scale: 1,
    });
    s1TL.to(".a2", {
      autoAlpha: 1,
    });
    s1TL.to(".a1-2-wrap", {
      x: "-60%",
    });
    s1TL.to(".a3", {
      autoAlpha: 1,
    });
    s1TL.fromTo(
      ".a4",
      {
        x: "50%",
        y: "-14%",
      },
      {
        x: "65%",
        y: "-14%",
        autoAlpha: 1,
      }
    );
    s1TL.fromTo(
      ".a5",
      {
        x: "1200%",
        y: "-42%",
      },
      {
        x: "1449%",
        y: "-42%",

        autoAlpha: 1,
      },
      "<"
    );
    s1TL.to(".a5", {
      scale: 6,
      x: "1638%",
      y: "45%",
    });
  },
  "only screen and (min-device-width: 1112px) and (max-device-width: 1112px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)": function () {
    console.log("ipad landscape");

    gearDesktop.to(
      ".gear-d5",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d4",
      {
        rotation: -360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d3",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d2",
      {
        rotation: -360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d1",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );

    dart.from(".dart-line-1", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-2", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-3", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-4", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-5", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-6", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(
      ".dart-t1",
      {
        autoAlpha: 0,
      },
      "<-3"
    );
    dart.from(
      ".dart-t2",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t3",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t4",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t5",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    var s1TL = gsap.timeline();
    s1TL.set(".a2, .a3, .a4, .a5", {
      autoAlpha: 0,
    });
    s1TL.set(".a3, .a4, .a5", {
      position: "absolute",
      autoAlpha: 0,
    });
    s1TL.fromTo(
      ".a1",
      {
        autoAlpha: 0,
      },
      {
        scale: 1.3,
        autoAlpha: 1,
        duration: 2,
      }
    );
    s1TL.to(".a1", {
      scale: 1,
    });
    s1TL.to(".a2", {
      autoAlpha: 1,
    });
    s1TL.to(".a1-2-wrap", {
      x: "-60%",
    });
    s1TL.to(".a3", {
      autoAlpha: 1,
    });
    s1TL.fromTo(
      ".a4",
      {
        x: "50%",
        y: "-14%",
      },
      {
        x: "65%",
        y: "-14%",
        autoAlpha: 1,
      }
    );
    s1TL.fromTo(
      ".a5",
      {
        x: "1200%",
        y: "-42%",
      },
      {
        x: "1449%",
        y: "-42%",

        autoAlpha: 1,
      },
      "<"
    );
    s1TL.to(".a5", {
      scale: 6,
      x: "1638%",
      y: "45%",
    });
  },
  "only screen and (min-device-width: 1180px) and (max-device-width: 1180px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)": function () {
    console.log("ipad landscape");
    gearDesktop.to(
      ".gear-d5",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d4",
      {
        rotation: -360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d3",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d2",
      {
        rotation: -360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d1",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );

    dart.from(".dart-line-1", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-2", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-3", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-4", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-5", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-6", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(
      ".dart-t1",
      {
        autoAlpha: 0,
      },
      "<-3"
    );
    dart.from(
      ".dart-t2",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t3",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t4",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t5",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    var s1TL = gsap.timeline();
    s1TL.set(".a2, .a3, .a4, .a5", {
      autoAlpha: 0,
    });
    s1TL.set(".a3, .a4, .a5", {
      position: "absolute",
      autoAlpha: 0,
    });
    s1TL.fromTo(
      ".a1",
      {
        autoAlpha: 0,
      },
      {
        scale: 1.3,
        autoAlpha: 1,
        duration: 2,
      }
    );
    s1TL.to(".a1", {
      scale: 1,
    });
    s1TL.to(".a2", {
      autoAlpha: 1,
    });
    s1TL.to(".a1-2-wrap", {
      x: "-60%",
    });
    s1TL.to(".a3", {
      autoAlpha: 1,
    });
    s1TL.fromTo(
      ".a4",
      {
        x: "50%",
        y: "-14%",
      },
      {
        x: "65%",
        y: "-14%",
        autoAlpha: 1,
      }
    );
    s1TL.fromTo(
      ".a5",
      {
        x: "1200%",
        y: "-42%",
      },
      {
        x: "1449%",
        y: "-42%",

        autoAlpha: 1,
      },
      "<"
    );
    s1TL.to(".a5", {
      scale: 6,
      x: "1638%",
      y: "45%",
    });
  },
  "only screen and (min-device-width: 1194px) and (max-device-width: 1194px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)": function () {
    console.log("ipad landscape");

    gearDesktop.to(
      ".gear-d5",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d4",
      {
        rotation: -360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d3",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d2",
      {
        rotation: -360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );
    gearDesktop.to(
      ".gear-d1",
      {
        rotation: 360,
        repeat: -1,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "power0",
      },
      "<"
    );

    dart.from(".dart-line-1", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-2", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-3", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-4", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-5", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(".dart-line-6", { duration: 0.8, drawSVG: 0, ease: "power0" });
    dart.from(
      ".dart-t1",
      {
        autoAlpha: 0,
      },
      "<-3"
    );
    dart.from(
      ".dart-t2",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t3",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t4",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    dart.from(
      ".dart-t5",
      {
        autoAlpha: 0,
      },
      "<+0.7"
    );
    var s1TL = gsap.timeline();
    s1TL.set(".a2, .a3, .a4, .a5", {
      autoAlpha: 0,
    });
    s1TL.set(".a3, .a4, .a5", {
      position: "absolute",
      autoAlpha: 0,
    });
    s1TL.fromTo(
      ".a1",
      {
        autoAlpha: 0,
      },
      {
        scale: 1.3,
        autoAlpha: 1,
        duration: 2,
      }
    );
    s1TL.to(".a1", {
      scale: 1,
    });
    s1TL.to(".a2", {
      autoAlpha: 1,
    });
    s1TL.to(".a1-2-wrap", {
      x: "-60%",
    });
    s1TL.to(".a3", {
      autoAlpha: 1,
    });
    s1TL.fromTo(
      ".a4",
      {
        x: "50%",
        y: "-14%",
      },
      {
        x: "65%",
        y: "-14%",
        autoAlpha: 1,
      }
    );
    s1TL.fromTo(
      ".a5",
      {
        x: "1200%",
        y: "-42%",
      },
      {
        x: "1449%",
        y: "-42%",

        autoAlpha: 1,
      },
      "<"
    );
    s1TL.to(".a5", {
      scale: 6,
      x: "1638%",
      y: "45%",
    });
  },
});

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  onLeave: function (origin, destination, direction) {
    if (origin.item.classList.contains("beforeQuote") && destination.item.classList.contains("fpQuoteSlide1")) {
      gsap.fromTo(
        ".quote-slide",
        {
          opacity: 1,
          y: "100vh",
        },
        {
          opacity: 1,
          y: 0,
        }
      );
    }
    if (destination.item.classList.contains("beforeQuote") && origin.item.classList.contains("fpQuoteSlide1")) {
      gsap.fromTo(
        ".quote-slide",
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 1,
          y: "100vh",
        }
      );
    }

    if (destination.item.classList.contains("afterQuote") && origin.item.classList.contains("fpQuoteSlide5")) {
      gsap.fromTo(
        ".quote-slide",
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: "-100vh",
        }
      );
    }

    if (destination.item.classList.contains("fpQuoteSlide5") && origin.item.classList.contains("afterQuote")) {
      gsap.fromTo(
        ".quote-slide",
        {
          opacity: 1,
          y: "-100vh",
        },
        {
          opacity: 1,
          y: 0,
        }
      );
    }

    if (destination.item.classList.contains("fpQuoteSlide1")) {
      swiper.slideTo(0);
      swiper2.slideTo(0);
    }
    if (destination.item.classList.contains("fpQuoteSlide2")) {
      swiper.slideTo(1);
      swiper2.slideTo(0);
    }
    if (destination.item.classList.contains("fpQuoteSlide3")) {
      swiper.slideTo(2);
      swiper2.slideTo(1);
    }
    if (destination.item.classList.contains("fpQuoteSlide4")) {
      swiper.slideTo(3);
      swiper2.slideTo(1);
    }
    if (destination.item.classList.contains("fpQuoteSlide5")) {
      swiper.slideTo(4);
      swiper2.slideTo(2);
    }

    if (origin.item.classList.contains("gear-section")) {
      gearMobile.pause();
      gearDesktop.pause();
    }

    if (origin.item.classList.contains("uknow-section")) {
      console.log("leave uknow");
      parallaxInstance1.disable();
    }
    if (origin.item.classList.contains("doctor-section")) {
      console.log("leave doctor");
      rippleTimeLine.clear();
      parallaxInstance2.disable();
    }
    if (origin.item.classList.contains("hand-section")) {
      console.log("leave hand");
      rippleTimeLine.clear();
      parallaxInstance2.disable();
    }
  },
  afterLoad: function (origin, destination, direction) {
    if (destination.item.classList.contains("dart-section")) {
      dart.play();
    }
    if (destination.item.classList.contains("gear-section")) {
      gearMobile.play();
      gearDesktop.play();
    }
    if (destination.item.classList.contains("uknow-section")) {
      console.log("entert uknow");
      parallaxInstance1.enable();
    }
    if (destination.item.classList.contains("doctor-section")) {
      console.log("entert doctor");
      parallaxInstance2.enable();
    }
    if (destination.item.classList.contains("hand-section")) {
      console.log("entert hand");
      parallaxInstance3.enable();
    }
  },
});

const swiper = new Swiper(".swiper-container", {
  allowTouchMove: false,
  parallax: true,
  resistanceRatio: 0,
  speed: 1000,
  direction: "vertical",
});

const swiper2 = new Swiper(".swiper-container2", {
  allowTouchMove: false,
  nested: true,
  parallax: true,
  resistanceRatio: 0,
  speed: 1000,
});

var scene7 = document.getElementById("scene7");
var parallaxInstance1 = new Parallax(scene7, {
  pointerEvents: true,
});
parallaxInstance1.disable();

var scene22 = document.getElementById("scene22");
var parallaxInstance2 = new Parallax(scene22, {
  pointerEvents: true,
});
parallaxInstance2.disable();

var scene23 = document.getElementById("scene23");
var parallaxInstance3 = new Parallax(scene23, {
  pointerEvents: true,
});
parallaxInstance3.disable();

var rippleTimeLine = gsap.timeline({
  pause: true,
  reverse: true,
});
let ohm = document.querySelectorAll(".ohm");
let ohm1 = document.querySelector(".ohm1");
gsap.set(ohm1.parentElement, {
  zIndex: 3,
});
gsap.set(ohm1, {
  scale: 1.5,
});
gsap.set(ohm1.children[1], {
  scale: 0.55,
});
gsap.set(ohm1.children[2], {
  height: "max-content",
  autoAlpha: 1,
});
ohm.forEach((element) => {
  element.addEventListener("mouseover", () => {
    rippleTimeLine.fromTo(
      element.firstElementChild,
      {
        scale: 1.01,
      },
      {
        scale: 1.3,
        duration: 0.8,
        repeat: -1,
      }
    );
  });
  element.addEventListener("mouseleave", () => {
    rippleTimeLine.clear();
    rippleTimeLine.to(element.firstElementChild, {
      scale: 1,
    });
  });
  element.addEventListener("click", (e) => {
    ohm.forEach((element) => {
      gsap.to(element.parentElement, {
        zIndex: 1,
      });
      gsap.to(element, {
        scale: 1,
      });
      gsap.to(element.children[1], {
        scale: 1,
      });
      gsap.to(element.children[2], {
        height: 0,
        autoAlpha: 0,
      });
    });

    gsap.to(e.currentTarget.parentElement, {
      zIndex: 3,
    });
    gsap.to(e.currentTarget, {
      scale: 1.5,
    });
    gsap.to(e.currentTarget.children[1], {
      scale: 0.55,
    });
    gsap.to(e.currentTarget.children[2], {
      height: "max-content",
      autoAlpha: 1,
    });
  });
});

let ob = document.querySelectorAll(".ob");
let ob1 = document.querySelector(".ob1");
gsap.set(ob1.parentElement, {
  zIndex: 3,
});
gsap.set(ob1, {
  scale: 1.5,
});
gsap.set(ob1.children[1], {
  scale: 0.55,
});
gsap.set(ob1.children[2], {
  height: "max-content",
  autoAlpha: 1,
});
ob.forEach((element) => {
  element.addEventListener("mouseover", () => {
    rippleTimeLine.fromTo(
      element.firstElementChild,
      {
        scale: 1.01,
      },
      {
        scale: 1.3,
        duration: 0.8,
        repeat: -1,
      }
    );
  });
  element.addEventListener("mouseleave", () => {
    rippleTimeLine.clear();
    rippleTimeLine.to(element.firstElementChild, {
      scale: 1,
    });
  });
  element.addEventListener("click", (e) => {
    ob.forEach((element) => {
      gsap.to(element.parentElement, {
        zIndex: 1,
      });
      gsap.to(element, {
        scale: 1,
      });
      gsap.to(element.children[1], {
        scale: 1,
      });
      gsap.to(element.children[2], {
        height: 0,
        autoAlpha: 0,
      });
    });
    gsap.to(e.currentTarget.parentElement, {
      zIndex: 3,
    });
    gsap.to(e.currentTarget, {
      scale: 1.5,
    });
    gsap.to(e.currentTarget.children[1], {
      scale: 0.55,
    });
    gsap.to(e.currentTarget.children[2], {
      height: "max-content",
      autoAlpha: 1,
    });
  });
});

let oh = document.querySelectorAll(".oh");
let oh1 = document.querySelector(".oh1");

gsap.set(oh1.children[1], {
  scale: 0.7,
});
gsap.set(oh1.children[2], {
  height: "max-content",
  autoAlpha: 1,
  marginTop: "10px",
});
oh.forEach((element) => {
  element.addEventListener("mouseover", () => {
    rippleTimeLine.fromTo(
      element.firstElementChild,
      {
        scale: 1.01,
      },
      {
        scale: 1.3,
        duration: 0.8,
        repeat: -1,
      }
    );
  });
  element.addEventListener("mouseleave", () => {
    rippleTimeLine.clear();
    rippleTimeLine.to(element.firstElementChild, {
      scale: 1,
    });
  });
  element.addEventListener("click", (e) => {
    oh.forEach((element) => {
      gsap.to(element, {
        scale: 1,
      });
      gsap.to(element.children[1], {
        scale: 1,
      });
      gsap.to(element.children[2], {
        height: 0,
        autoAlpha: 0,
        marginTop: "0px",
      });
    });

    gsap.to(e.currentTarget.children[1], {
      scale: 0.7,
    });
    gsap.to(e.currentTarget.children[2], {
      height: "max-content",
      autoAlpha: 1,
      marginTop: "10px",
    });
  });
});
