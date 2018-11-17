var check = false;
var city;
var tilt = false;

function preload() {
  // put preload code here
  cityOFF = loadImage("./assets/city_off.png");
  cityON = loadImage("./assets/city_on.png");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  city = image(cityOFF, 0, 0, image.width, image.height);
}

function draw() {
  fill('white');
  noStroke();
  text('Shake to turn on the light!', 140, height / 8);
  // put drawing code here
  if (check == true) {
    city = image(cityON, 0, 0, image.width, image.height);
    text('Tilt the device to turn the lights back off!', 100, height / 8);
  } else if (tilt == true) {
    city = image(cityOFF, 0, 0, image.width, image.height);
    text('Shake to turn on the lights!', 140, height / 8);
  }

}

function deviceShaken() {
  check = true;
  tilt = false;
}
function deviceTurned() {

  if (turnAxis === 'X') {
    tilt = true;
    check = false;
  }
  }
