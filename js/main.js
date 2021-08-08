gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, ScrollToPlugin, DrawSVGPlugin, ScrambleTextPlugin);
var pathVideo = document.querySelector(".path-video");
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

const element = document.getElementById("image-compare1");
const viewer = new ImageCompare(element, { fluidMode: true, hoverStart: true, smoothing: true }).mount();

const element2 = document.getElementById("image-compare2");
const viewer2 = new ImageCompare(element2, { fluidMode: true, hoverStart: true, smoothing: true }).mount();
var s1TL = gsap.timeline({ paused: true });
var s5TL = gsap.timeline({ paused: true });
s5TL.from(".white-dot", 1, {
  scale: 0,
  yoyo: true,
  transformOrigin: "50% 50%",
  ease: "elastic.outout(0.8,0.3)",
  stagger: {
    amount: -1,

    from: "random",
  },
});
s5TL.from(".red-dot", 1, {
  scale: 0.3,
  autoAlpha: 0,
  y: "-1000",
  yoyo: true,
  transformOrigin: "50% 50%",
  ease: "power1.inOut",
  stagger: {
    amount: 1.5,
    grid: "auto",
    from: "center",
  },
});
var s5TL2 = gsap.timeline({ paused: true });
s5TL2.from(".red-dot", 1, {
  scale: 1.3,
  repeat: -1,
  yoyo: true,
  transformOrigin: "50% 50%",
  ease: "power1.inOut",
  delay: 3,
  stagger: {
    amount: 1.5,
    grid: "auto",
    from: "center",
  },
});
gsap.set(".a2, .a3, .a4, .a5", {
  autoAlpha: 0,
});
gsap.set(".a3, .a4, .a5", {
  position: "absolute",
  autoAlpha: 0,
});

var pie = gsap.timeline();
var section2 = gsap.timeline({ paused: true });
var section34 = gsap.timeline({ paused: true });
var section9 = gsap.timeline({ paused: true });
var section26 = gsap.timeline({ paused: true });
var bar = gsap.timeline({ paused: true });
var path1 = gsap.timeline({ paused: true });
var path2 = gsap.timeline({ paused: true });
var path3 = gsap.timeline({ paused: true });
var sky1 = gsap.timeline({ paused: true });
var sky2 = gsap.timeline({ paused: true });
var sky3 = gsap.timeline({ paused: true });
var sky4 = gsap.timeline({ paused: true });
var ten = gsap.timeline({ paused: true });
var believe = gsap.timeline({ paused: true });
var up = gsap.timeline({ paused: true });

section26.from(".s26-line-1", {
  duration: 3,
  scale: 100,
  transformOrigin: "50% 50%",
});

section26.from(
  ".s26-line-2",
  {
    drawSVG: 0,
    duration: 3,
    y: "-100%",
  },
  "<"
);

section26.from(".s26-line-3", {
  autoAlpha: 0,
});

up.from(
  ".up-line-1",
  {
    drawSVG: "50% 50%",
    duration: 4,
    ease: "bounce.in",
  },
  "<"
);
up.from(
  ".up-line-2",
  {
    duration: 3,
    autoAlpha: 0,
  },
  "<+2.5"
);
up.from(
  ".up-line-3",
  {
    duration: 3,
    autoAlpha: 0,
  },
  "<+1"
);

believe.from(".believe-1", {
  autoAlpha: 0,
  duration: 2,
  scale: 1.5,
  transformOrigin: "50% 50%",
});
believe.from(".believe-2", {
  autoAlpha: 0,
  duration: 1.5,
});
believe.from(
  ".believe-3",
  {
    autoAlpha: 0,
    drawSVG: 0,
    duration: 3,
  },
  "<"
);

section2.from(".two-1", {
  autoAlpha: 0,
  duration: 1.5,
});
section2.from(".two-2", {
  autoAlpha: 0,
  duration: 1.5,
  scale: 0,
});
section2.from(".two-3", {
  autoAlpha: 0,
});

section34.fromTo(
  ".s34-1",
  {
    scale: 0,
    transformOrigin: "90% 100%",
  },
  {
    scale: 1,
    duration: 2,
    ease: "back.out(10)",
  }
);
section34.from(".s34-2", {
  autoAlpha: 0,
});
section34.from(".s34-3", {
  scale: 0,
  ease: "back.out(3)",
});
section34.from(
  ".s34-4",
  {
    autoAlpha: 0,
  },
  "<"
);

section9.from(".section9-1", {
  x: "-200%",
  duration: 4,
  ease: "back.out(2)",
});
section9.from(".section9-2", {
  drawSVG: "50% 50%",
});
section9.from(
  ".section9-3",
  {
    autoAlpha: 0,
    x: "200%",
    duration: 2,
  },
  "<+1"
);

ten.from(".ten-1", {
  duration: 3,
  ease: "back.out(4)",

  scale: 0,
  transformOrigin: "-100% 50%",
});
ten.from(".ten-2", {
  scale: 0,
  transformOrigin: "50% 50%",
});
ten.from(
  ".ten-3",
  {
    duration: 1,

    autoAlpha: 0,
  },
  "<"
);
ten.from(".ten-4", {
  autoAlpha: 0,
  duration: 1.5,
});

sky1.from(".sky-1-line-1", {
  duration: 3,
  drawSVG: 0,
  autoAlpha: 0,
});
sky1.from(".sky-1-line-2", {
  duration: 1,
  drawSVG: "100% 100%",
});
sky1.from(".sky-1-line-3", {
  scale: 0,
  duration: 3,

  autoAlpha: 0,
});
sky1.from(
  ".sky-1-line-4",
  {
    scale: 0,
    transformOrigin: "50% 50%",
  },
  "<+0.8"
);
sky1.from(
  ".sky-1-line-5",
  {
    scale: 0,
    transformOrigin: "50% 50%",
  },
  "<+1.6"
);

sky2.from(".sky-2-line-1", {
  duration: 3,
  drawSVG: 0,
  autoAlpha: 0,
});
sky2.from(".sky-2-line-2", {
  duration: 1,
  drawSVG: "100% 100%",
});
sky2.from(".sky-2-line-3", {
  scale: 0,
  duration: 3,

  autoAlpha: 0,
});
sky2.from(
  ".sky-2-line-4",
  {
    scale: 0,
    transformOrigin: "50% 50%",
  },
  "<+0.8"
);
sky2.from(
  ".sky-2-line-5",
  {
    scale: 0,
    transformOrigin: "50% 50%",
  },
  "<+1.6"
);

sky3.from(".sky-3-line-1-m", {
  duration: 3,
  drawSVG: 0,
  autoAlpha: 0,
});
sky3.from(".sky-3-line-2-m", {
  duration: 3,
  scale: 0,
});
sky3.from(
  ".sky-3-line-3-m",
  {
    scale: 0,
    transformOrigin: "50% 50%",
  },
  "<+0.2"
);
sky3.from(
  ".sky-3-line-4-m",
  {
    scale: 0,
    transformOrigin: "50% 50%",
  },
  "<+1"
);
sky3.from(
  ".sky-3-line-5-m",
  {
    scale: 0,
    transformOrigin: "50% 50%",
  },
  "<+1.5"
);

sky4.from(".sky-4-line-1", {
  duration: 3,
  drawSVG: 0,
  autoAlpha: 0,
});

path1.from(".path-1-line-1", {
  duration: 1,
  drawSVG: 0,
  autoAlpha: 0,
});
path1.from(
  ".path-1-line-2",
  {
    duration: 1,
    drawSVG: 0,
    autoAlpha: 0,
  },
  "<+=0.4"
);
path1.from(
  ".path-1-line-3",
  {
    duration: 1,
    drawSVG: 0,
    autoAlpha: 0,
  },
  "<+=0.4"
);
path1.from(
  ".path-1-line-4",
  {
    duration: 1,
    drawSVG: 0,
    autoAlpha: 0,
  },
  "<+=0.4"
);

path2.from(".path-2-line-1", {
  duration: 1,
  drawSVG: 0,
  autoAlpha: 0,
});
path2.from(
  ".path-2-line-2",
  {
    duration: 1,
    drawSVG: 0,
    autoAlpha: 0,
  },
  "<+=0.4"
);
path2.from(
  ".path-2-line-3",
  {
    duration: 1,
    drawSVG: 0,
    autoAlpha: 0,
  },
  "<+=0.4"
);
path2.from(
  ".path-2-line-4",
  {
    duration: 1,
    drawSVG: 0,
    autoAlpha: 0,
  },
  "<+=0.4"
);

path3.from(".path-3-line-1", {
  duration: 1,
  drawSVG: 0,
  autoAlpha: 0,
});
path3.from(
  ".path-3-line-2",
  {
    duration: 1,
    drawSVG: 0,
    autoAlpha: 0,
  },
  "<+=0.4"
);

gsap.set(".path-circle-1", {
  fill: "none",
  autoAlpha: 0,
});
gsap.set(".path-circle-text-1", {
  fill: "none",
});
gsap.set(".path-circle-2", {
  fill: "none",
  autoAlpha: 0,
});
gsap.set(".path-circle-text-2", {
  fill: "none",
});

bar.from(".bar-chart-left", {
  duration: 5,

  transformOrigin: "100% 0%",
  scaleX: 0,
  stagger: function (index, target, list) {
    // your custom logic here. Return the delay from the start (not between each)
    return index * 0.3;
  },
});
bar.from(
  ".bar-chart-right",
  {
    duration: 5,

    transformOrigin: "0% 100%",
    scaleX: 0,
    stagger: function (index, target, list) {
      // your custom logic here. Return the delay from the start (not between each)
      return index * 0.3;
    },
  },
  "<"
);
bar.from(
  ".number-left",
  {
    duration: 5,
    autoAlpha: 0,
  },
  "<+4"
);
bar.from(
  ".number-right",
  {
    duration: 5,
    autoAlpha: 0,
  },
  "<"
);

var dart = gsap.timeline({ paused: true });
var gearMobile = gsap.timeline({ paused: true });
var gearDesktop = gsap.timeline({ paused: true });

var lineChart = gsap.timeline({ paused: true });
var greenLineChart = gsap.timeline({ paused: true });

greenLineChart.from(
  ".top-green-line-chart",
  {
    duration: 5,
    drawSVG: 0,
  },
  "<"
);
greenLineChart.from(
  ".green-line-chart-color",
  {
    duration: 5,
    opacity: 0,
  },
  "<"
);
greenLineChart.from(
  ".line-in-green-chart",
  {
    duration: 5,
    drawSVG: "100% 100%",

    stagger: true,
  },
  "<"
);
greenLineChart.to(".green-line-number-1", { duration: 5, scrambleText: { text: "348.0", chars: "123456789", speed: 5, revealDelay: 1, tweenLength: false } }, "<");
greenLineChart.to(".green-line-number-2", { duration: 5, scrambleText: { text: "918.1", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
greenLineChart.to(".green-line-number-3", { duration: 5, scrambleText: { text: "433.6", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
greenLineChart.to(".green-line-number-4", { duration: 5, scrambleText: { text: "863.7", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
greenLineChart.to(".green-line-number-5", { duration: 5, scrambleText: { text: "973.3", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
greenLineChart.to(".green-line-number-6", { duration: 5, scrambleText: { text: "973.3", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
greenLineChart.to(".green-line-number-7", { duration: 5, scrambleText: { text: "1,279.6", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
greenLineChart.to(".green-line-number-8", { duration: 5, scrambleText: { text: "1,319.6", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
greenLineChart.to(".green-line-number-9", { duration: 5, scrambleText: { text: "1,305.2", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
greenLineChart.to(".green-line-number-10", { duration: 5, scrambleText: { text: "1,479.9", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
greenLineChart.to(".green-line-number-11", { duration: 5, scrambleText: { text: "1,471.8", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");

lineChart.from(
  ".top-line-chart",
  {
    duration: 5,
    drawSVG: 0,
  },
  "<"
);
lineChart.from(
  ".line-chart-color",
  {
    duration: 5,
    opacity: 0,
  },
  "<"
);
lineChart.from(
  ".line-in-chart",
  {
    duration: 5,
    drawSVG: "100% 100%",

    stagger: true,
  },
  "<"
);
lineChart.to(".line-number-1", { duration: 5, scrambleText: { text: "457,409", chars: "123456789", speed: 5, revealDelay: 1, tweenLength: false } }, "<");
lineChart.to(".line-number-2", { duration: 5, scrambleText: { text: "452,553", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
lineChart.to(".line-number-3", { duration: 5, scrambleText: { text: "446,492", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
lineChart.to(".line-number-4", { duration: 5, scrambleText: { text: "461,975", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
lineChart.to(".line-number-5", { duration: 5, scrambleText: { text: "507,645", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
lineChart.to(".line-number-6", { duration: 5, scrambleText: { text: "825,153", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
lineChart.to(".line-number-7", { duration: 5, scrambleText: { text: "789,519", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
lineChart.to(".line-number-8", { duration: 5, scrambleText: { text: "558,334", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
lineChart.to(".line-number-9", { duration: 5, scrambleText: { text: "557,324", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
lineChart.to(".line-number-10", { duration: 5, scrambleText: { text: "574,618", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
lineChart.to(".line-number-11", { duration: 5, scrambleText: { text: "547,160", chars: "123456789", speed: 5, revealDelay: 1 } }, "<");
gsap.set(".pie", { autoAlpha: 0 });
ScrollTrigger.matchMedia({
  "(min-width: 320px) and (max-width: 1023.9px)": function () {
    console.log("mobile to portait ipad");
    let od = document.querySelectorAll(".od");
    let odOutter = document.querySelectorAll(".od-outter");

    gsap.set(".od-text", {
      autoAlpha: 0,
    });

    gsap.to(".od-outter-1", {
      x: "80%",
      y: "-173%",
    });
    gsap.to(".od1-text", {
      autoAlpha: 1,
    });

    od.forEach((element) => {
      element.addEventListener("click", (e) => {
        console.log(e.currentTarget.classList);
        gsap.to(odOutter, {
          x: 0,
          y: 0,
        });
        gsap.to(".od-text", {
          autoAlpha: 0,
        });

        if (e.currentTarget.classList.contains("od-inner-1")) {
          gsap.to(".od-outter-1", {
            x: "80%",
            y: "-173%",
          });
          gsap.to(".od1-text", {
            autoAlpha: 1,
          });
          return;
        }
        if (e.currentTarget.classList.contains("od-inner-2")) {
          gsap.to(".od-outter-2", {
            x: "-100%",
            y: "-173%",
          });
          gsap.to(".od2-text", {
            autoAlpha: 1,
          });
          return;
        }
        if (e.currentTarget.classList.contains("od-inner-3")) {
          gsap.to(".od-outter-3", {
            x: "60%",
            y: "-160%",
          });
          gsap.to(".od3-text", {
            autoAlpha: 1,
          });
          return;
        }
        if (e.currentTarget.classList.contains("od-inner-4")) {
          gsap.to(".od-outter-4", {
            x: "-60%",
            y: "-130%",
          });
          gsap.to(".od4-text", {
            autoAlpha: 1,
          });
          return;
        }
        if (e.currentTarget.classList.contains("od-inner-5")) {
          gsap.to(".od-outter-5", {
            x: "20%",
            y: "-130%",
          });
          gsap.to(".od5-text", {
            autoAlpha: 1,
          });
          return;
        }
        if (e.currentTarget.classList.contains("od-inner-6")) {
          gsap.to(".od-outter-6", {
            x: "-70%",
            y: "-180%",
          });
          gsap.to(".od6-text", {
            autoAlpha: 1,
          });
          return;
        }
      });
    });

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
    /*
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
    */
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
  },
  "only screen and (min-device-width: 1024px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)": function () {
    console.log("ipad pro portrait");
    let od = document.querySelectorAll(".od");
    let odOutter = document.querySelectorAll(".od-outter");
    gsap.set(".od-text", {
      autoAlpha: 0,
    });
    gsap.set(".od-outter-1", {
      x: "80%",
      y: "-300%",
    });
    gsap.set(".od1-text", {
      autoAlpha: 1,
    });
    od.forEach((element) => {
      element.addEventListener("click", (e) => {
        console.log(e.currentTarget.classList);
        gsap.to(odOutter, {
          x: 0,
          y: 0,
        });
        gsap.to(".od-text", {
          autoAlpha: 0,
        });

        if (e.currentTarget.classList.contains("od-inner-1")) {
          gsap.to(".od-outter-1", {
            x: "80%",
            y: "-300%",
          });
          gsap.to(".od1-text", {
            autoAlpha: 1,
          });
          return;
        }
        if (e.currentTarget.classList.contains("od-inner-2")) {
          gsap.to(".od-outter-2", {
            x: "-100%",
            y: "-173%",
          });
          gsap.to(".od2-text", {
            autoAlpha: 1,
          });
          return;
        }
        if (e.currentTarget.classList.contains("od-inner-3")) {
          gsap.to(".od-outter-3", {
            x: "60%",
            y: "-200%",
          });
          gsap.to(".od3-text", {
            autoAlpha: 1,
          });
          return;
        }
        if (e.currentTarget.classList.contains("od-inner-4")) {
          gsap.to(".od-outter-4", {
            x: "-55%",
            y: "-245%",
          });
          gsap.to(".od4-text", {
            autoAlpha: 1,
          });
          return;
        }
        if (e.currentTarget.classList.contains("od-inner-5")) {
          gsap.to(".od-outter-5", {
            x: "40%",
            y: "-140%",
          });
          gsap.to(".od5-text", {
            autoAlpha: 1,
          });
          return;
        }
        if (e.currentTarget.classList.contains("od-inner-6")) {
          gsap.to(".od-outter-6", {
            x: "-60%",
            y: "-250%",
          });
          gsap.to(".od6-text", {
            autoAlpha: 1,
          });
          return;
        }
      });
    });

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
  normalScrollElements: ".credit",

  onLeave: function (origin, destination, direction) {
    if (destination.item.classList.contains("sky-section")) {
      document.querySelector(".sky-video").play();
      document.querySelector(".sky-video").style.opacity = 1;
    }
    if (!destination.item.classList.contains("sky-section")) {
      document.querySelector(".sky-video").pause();
    }

    if (destination.item.classList.contains("path-section")) {
      document.querySelector(".path-video").play();
      document.querySelector(".path-video").style.opacity = 1;
    }
    if (!destination.item.classList.contains("path-section")) {
      document.querySelector(".path-video").pause();
    }
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
          ease: "power0",
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
      swiper2.slideTo(1);
    }
    if (destination.item.classList.contains("fpQuoteSlide3")) {
      swiper.slideTo(2);
      swiper2.slideTo(2);
    }
    if (destination.item.classList.contains("fpQuoteSlide4")) {
      swiper.slideTo(3);
      swiper2.slideTo(3);
    }
    if (destination.item.classList.contains("fpQuoteSlide5")) {
      swiper.slideTo(4);
      swiper2.slideTo(4);
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
    if (destination.item.classList.contains("section5")) {
      s5TL2.pause();
    }
  },
  afterLoad: function (origin, destination, direction) {
    if (destination.item.classList.contains("section26")) {
      section26.resume();
    }
    if (destination.item.classList.contains("section34")) {
      section34.resume();
    }
    if (destination.item.classList.contains("up-section")) {
      up.resume();
    }
    if (destination.item.classList.contains("believe")) {
      believe.resume();
    }
    if (destination.item.classList.contains("section9")) {
      section9.resume();
    }
    if (destination.item.classList.contains("section2")) {
      section2.resume();
    }
    if (destination.item.classList.contains("sky-section")) {
      document.querySelector(".sky-video").play();
      document.querySelector(".sky-video").style.opacity = 1;
    }
    if (!destination.item.classList.contains("sky-section")) {
      document.querySelector(".sky-video").pause();
      setTimeout(() => {
        document.querySelector(".sky-video").style.opacity = 0;
      }, 100);
    }
    if (destination.item.classList.contains("path-section")) {
      document.querySelector(".path-video").play();
      document.querySelector(".path-video").style.opacity = 1;
    }
    if (!destination.item.classList.contains("path-section")) {
      document.querySelector(".path-video").pause();
      setTimeout(() => {
        document.querySelector(".path-video").style.opacity = 0;
      }, 100);
    }

    if (destination.item.classList.contains("sky1")) {
      sky1.resume();
    }
    if (destination.item.classList.contains("sky2")) {
      sky2.resume();
    }
    if (destination.item.classList.contains("sky3")) {
      sky3.resume();
    }
    if (destination.item.classList.contains("sky4")) {
      sky4.resume();
    }
    if (destination.item.classList.contains("section10Year")) {
      ten.resume();
    }

    if (destination.item.classList.contains("path-section-1")) {
      path1.resume();
    }
    if (destination.item.classList.contains("path-section-2")) {
      gsap.to(".path-circle-1", {
        fill: "#fdb913",
        ease: "power0",
        autoAlpha: 1,
        transformOrigin: "50% 50%",
        duration: 3,
      });
      gsap.to(".path-circle-text-1", {
        fill: "#002A28",
        delay: 1,
        zIndex: 3,
      });
      path2.resume();
    }
    if (destination.item.classList.contains("path-section-3")) {
      gsap.to(".path-circle-2", {
        fill: "#fdb913",
        ease: "power0",
        autoAlpha: 1,
        transformOrigin: "50% 50%",
        duration: 3,
      });
      gsap.to(".path-circle-text-2", {
        fill: "#002A28",
        delay: 1,
        zIndex: 3,
      });
      path3.resume();
    }
    if (destination.item.classList.contains("bar-chart-section")) {
      bar.play();
    }
    if (destination.item.classList.contains("green-line-chart-section")) {
      greenLineChart.play();
    }
    if (destination.item.classList.contains("line-chart-section")) {
      lineChart.play();
    }

    if (destination.item.classList.contains("section1")) {
      s1TL.resume();
    }
    if (destination.item.classList.contains("section5")) {
      console.log("asdasd");

      s5TL.resume();

      s5TL2.resume();
    }

    if (destination.item.classList.contains("pie-section")) {
      console.log("pie");
      pie.to(".pie", { autoAlpha: 1 });
      pie.from(".top-circle", { duration: 3, drawSVG: 0 }, "<");
      pie.from(".small-green-pie", { duration: 3, drawSVG: 0 }, "<");
      pie.from(".yellow-pie", { duration: 3, drawSVG: 0 }, "<");
      pie.from(".orange-pie", { duration: 3, drawSVG: 0 }, "<");
      pie.from(".bottom-pie", { duration: 3, drawSVG: 0 }, "<");
      pie.from(".pie-info-1", { autoAlpha: 0 }, "<0.5");
      pie.from(".pie-info-2", { autoAlpha: 0 }, "<0.5");
      pie.from(".pie-info-3", { autoAlpha: 0 }, "<0.5");
      pie.from(".pie-info-4", { autoAlpha: 0 }, "<0.5");
    }

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

oh.forEach((element) => {});

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
