document.addEventListener("DOMContentLoaded", (event) => {
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

  let tl = gsap.timeline({
    onRepeat: () => nextDevice(),
    repeat: -1,
    repeatDelay: 3,
    repeatRefresh: true,
    delay: 1,
  });

  tl.to(heroDevice, { opacity: 0, duration: 0.4 });
  tl.to(heroDevice, {
    width: () => {
      return currentDeviceWidth;
    },
    duration: 0.4,
    onComplete: () => {
      heroDevice.textContent = currentDeviceText;
    },
  });
  tl.to(heroDevice, { opacity: 1, duration: 0.4 });
});
