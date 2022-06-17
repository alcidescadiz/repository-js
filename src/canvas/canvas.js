const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


ctx.fillStyle = 'green'
//ctx.fillRect(0, 0, 100, 100)

// Draw blue triangle
ctx.beginPath()
//ctx.fillStyle = 'blue'
ctx.lineWidth = 3
ctx.moveTo(20, 20)
ctx.lineTo(180, 20)
ctx.lineTo(130, 130)
ctx.lineTo(110, 130)
ctx.closePath()
ctx.stroke()


//ctx.clearRect(75, 10, 20, 20);

ctx.strokeStyle = 'green';
//ctx.strokeRect(30, 30, 160, 100);


ctx.fillStyle = 'rgb(200, 0, 0)';
//ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
//ctx.fillRect(30, 30, 50, 50);


var tutorial = document.getElementById('tutorial');
var ctxTutorial = tutorial.getContext('2d');
ctxTutorial.fillStyle = 'green'
ctxTutorial.fillRect(10, 10, 150, 100)