let ohm = document.querySelectorAll(".ohm");
let ohm1 = document.querySelector(".ohm1");
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
