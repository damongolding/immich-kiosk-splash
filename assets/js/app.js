document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const heroDevice = document.getElementById("hero-device");
  const devices = document.querySelectorAll(".device");

  let currentDevice = 0;
  let currentDeviceText;
  let currentDeviceWidth;

  const nextDevice = () => {
    if (currentDevice > devices.length - 1) currentDevice = 0;

    currentDeviceText = devices[currentDevice].textContent;
    currentDeviceWidth = Math.ceil(devices[currentDevice].offsetWidth) + 10;

    currentDevice++;
  };

  nextDevice();

  const tl = gsap.timeline({
    onRepeat: () => nextDevice(),
    repeat: -1,
    repeatDelay: 1.5,
    repeatRefresh: true,
    delay: 2,
  });

  tl.to(heroDevice, { opacity: 0, duration: 0.4 });
  tl.to(
    heroDevice,
    {
      width: () => {
        return currentDeviceWidth;
      },
      duration: 0.4,
      ease: "sine.inOut",
      onComplete: () => {
        heroDevice.textContent = currentDeviceText;
      },
    },
    "-=0.2",
  );
  tl.to(heroDevice, { opacity: 1, duration: 0.4 });

  gsap.from(".features--feature", {
    scrollTrigger: ".features--feature",
    y: "+=100",
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  });
});
