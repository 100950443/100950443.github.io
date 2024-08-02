
//	Name: sneh patel

//   File: sneh.html

//	Date: 01-August-2024

//	description: In this article we will write a classic "bouncing balls" demo, to show you how useful objects can be in JavaScript.

// setup canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Dimensions to window dimensions
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
// Shape class
class Shape {
  constructor(x,y,velX,velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}
// Ball class
class Ball extends Shape {
  constructor(x, y, velX, velY, color, size) {
    super(x,y, velX, velY);
    this.color = color;
    this.size = size;
    // properly to track if the ball is there.
    this.exists = true;
  }
// Code to draw the ball
  draw() {
  if (this.exists) { 
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}  

  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball) && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}
// EvilCricle class for shape
class EvilCircle extends Shape {
   constructor(x,y) {
    super(x,y, 20, 20);
    this.color = 'white';
    this.size = 10;

    // event listerner for keydown to move the evil circle
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "a":
          this.x -= this.velX;
          break;
        case "d":
          this.x += this.velX;
          break;
        case "w":
          this.y -= this.velY;
          break;
        case "s":
          this.y += this.velY;
          break;      
      }
    });
  }
} 

// Method to draw the evil circle
   draw() {
     ctx.beginPath();
     ctx.lineWidth = 3;
     ctx.strokeStyle = this.color;
     ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
     ctx.stroke();
}
// Method to keep the evil circle inside the boundaries
checkBounds() {
  if ((this.x + this.size) >= width) {
    this.x = width - this.size;
  }
  if ((this.x - this.size) <= 0) {
    this.x = this.size;
  }
  if ((this.y - this.size) >= height) {
    this.y = height - this.size;
  }
  if ((this.y - this.size) <= 0) {
    this.y = this.size;
  }
}

// Method to detect collisions with balls and "eat" them
collisionDetect() {
  for (const ball of balls) {
    if (ball.exists) {
      const dx = this.x - ball.x;
      const dy = this.y - ball.y;
      const distance = Math.sqrt(dx * dc + dy * dy);
      if (distance < this.size + ball.size) {
        ball.exists = false;
        ballCount--;
        updateBallCount();
      }
    }
  }
}

const balls = [];

// Create 25 balls with random properties

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}
// Create the evil circle with initial position
const EvilCircle = new EvilCircle(random(0,width), random(0, height));
let ballCount = balls.length;
//Create and add a paragraph element to display the ball count
const ballCountDisplay = document.createElement('p');
ballCountDisplay.textContent = 'Ball count: ${ballcount}';
document.body.appendChild(ballCountDisplay);
//Function to update the ball count dispaly
function  updateBallCount() {
  ballCountDisplay.textContent = 'Ball Count: ${ballCount}';
}
//the code for the the loop
function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  // Draw, detect collisions and update for each ball if it exists
  for (const ball of balls) {
    if (ball.exists) {
      ball.draw();
    ball.update();
    ball.collisionDetect();
    }
  }
// Calling loop repeatedly to make next frame
  requestAnimationFrame(loop);
}

loop();