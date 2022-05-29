//learning Canvas 
let canvas = document.getElementById("gameScreen");
let c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Rectangle(x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    this.draw = function(){
        c.fillStyle = ("rgba(" + r + "," + g +","+b+",0.5)");
        c.fillRect(this.x, this.y, 50, 50);
    }
    this.update = function(){
        if(this.x + 50 > innerWidth || this.x - 50 < 0){
            this.dx = -this.dx;
        }
    
        if(this.y + 50 > innerHeight || this.y - 50 < 0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}
var rectArray = [];

for (var i = 0; i < 50; i++){
    var width = 50;
    var x = Math.random() * (innerWidth - width * 2) + width;
    var y = Math.random() * (innerHeight - width * 2) + width;
    var dx = Math.random() * -0.5 * 5;
    var dy = Math.random() * -0.5 * 5;
    rectArray.push(new Rectangle(x,y,dx,dy));
}


//c.fillStyle = 'rgba(255,0,0,0.5)';
//c.fillRect(canvas.width/2 -50 ,canvas.height/2 -50,100,100);
//c.fillStyle = 'rgba(0,255,0,0.5)';
//c.fillRect(150,150,150,150);
//c.fillStyle = 'rgba(0,0,255,0.5)';
//c.fillRect(250,250,150,150);


//Line
//c.beginPath();
//c.moveTo(50,300,);
//c.lineTo(300,250);
//c.lineTo(450,36);
//c.lineTo(50,300);
//c.strokeStyle = "Blue";
//c.stroke();

//arc


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI *2 , false);
        c.strokeStyle = "white";
        c.stroke();
        c.fill(); 
    }
    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }  
}

var circleArray = [];

for (var i = 0; i < 50; i++){
    var radius = 50;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = Math.random() * -0.5 * 5;
    var dy = Math.random() * -0.5 * 5;
    circleArray.push(new Circle(x,y,dx,dy,radius));
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
        rectArray[i].update();
    }
}

animate();

//for (var i =0; i < 500; i++) {
//    let r = Math.random() * 255;
//    let g = Math.random() * 255;
//    let b = Math.random() * 255;
//    let x = Math.random() * window.innerWidth;
//    let y = Math.random() * window.innerHeight;
//    c.beginPath();
//    c.arc(x,y,30,0,Math.PI *2);
//    c.strokeStyle = "rgba(" + r +"," + g + "," + b + ",1)";
//    c.stroke();
//}