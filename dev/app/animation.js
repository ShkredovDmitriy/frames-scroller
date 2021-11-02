console.clear();
gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 540;
const images = [];

var frameCount = 50;
const currentFrame = index => {
  const url = `./images/ezgif-frame-${(index + 1)
    .toString()
    .padStart(3, "0")}.jpg`;
  return url;
};

const timeLine = gsap.timeline({
  scrollTrigger: {
    trigger: ".scene",
    markers: true,
    inertia: false,
    ease: "none",
    pin: true,
    start: "top 0",
    end: "top -100%",
    scrub: 0.5
  }
});

timeLine.to("canvas", { onUpdate: render });

function render() {
  const current = Math.floor((frameCount - 1) * timeLine.progress());
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[current], 0, 0, 960, 540);
}

for (let i = 0; i < frameCount; i++) {
  const img = document.createElement("img");
  img.src = currentFrame(i);
  images.push(img);
}

images[0].onload = render;

console.log(images);
