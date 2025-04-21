

// const balls = [];

// while (balls.length < 2)
// {
//     const size = random(10,20);
//     const ball = new Ball(random(0+size, width-size), random(0+size, height-size), random(-10,10),
//     random(-10,10), randomRGB(), size);

    
//     balls.push(ball);
// }


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomRGB() {
    return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
  }
  
  class Ball {
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
    }

    
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2* Math.PI);
        ctx.fill();
    }
    
    update()
    {
        if (this.x + this.size >= width)
        {
            this.velX = -this.velX;
        }
        if (this.x - this.size <= 0)
        {
            this.velX = -this.velX;
        }
        if (this.y + this.size >= height)
        {
            this.velY = -this.velY;
        }
        if (this.y - this.size <= 0)
        {
            this.velY = -this.velY;
        }
        this.x += this.velX;
        this.y += this.velY;
        
    }

    
    collisionDetect() 
    {
        for (const ball of balls) 
        {
            if (this !== ball) 
            {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const combined_radius = this.size + ball.size - distance;
        
                if (distance < this.size + ball.size)
                {
                    ball.color = this.color = randomRGB();

                    this.velX = -this.velX - combined_radius;
                    this.velY = -this.velY - combined_radius;
                    ball.velX = -ball.velX - combined_radius;
                    ball.velY = -ball.velY - combined_radius;
                }
                
            }
        }
    }
         
}

const balls = [];

        while (balls.length < 20)
        {
            const size = random(5,30);
            const ball = new Ball(random(0+size, width-size), random(0+size, height-size), random(-10,20),
            random(-10,20), randomRGB(), size);


            balls.push(ball);
        }

        
        function loop() {
            ctx.fillStyle = "rgb(0 0 0 / 25%)";
            ctx.fillRect(0, 0, width, height);
        
            for (const ball of balls) {
            ball.draw();
            ball.update();
            ball.collisionDetect();
            }
        
            requestAnimationFrame(loop);
        }
        
        loop();
    
  