const canvas = document.getElementById('canvas');
// The next one is the "rendering context," used to manipulate what is on the canvas
const ctx = canvas.getContext('2d');

const img = new Image();
img.src ="Monkey_McDonalds.png";

img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0,0); // This sets the img at the top left
}
