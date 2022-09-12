var canvas = document.getElementById('canvas') 
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'red'
ctx.fillRect(5,5,50,50)
ctx.clearRect(0,0,400,200)

ctx.strokeStyle = 'green';
ctx.lineWidth = '1'
ctx.rect(5,5,50,50)
ctx.stroke()


let canvas2 = document.querySelector('#canvas_2')
let ctx2 = canvas2.getContext('2d')

ctx2.fillStyle = 'red'
ctx2.fillRect(20, 20, 100,100)

ctx2.strokeStyle = 'black'
ctx2.lineWidth = '1'
ctx2.rect(125,20,100,100)
ctx2.fill()
ctx2.stroke()
