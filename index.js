var canvas = document.getElementById('canvas') 
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'red'
ctx.fillRect(5,5,50,50)
ctx.clearRect(0,0,400,200)

ctx.strokeStyle = 'green';
ctx.lineWidth = '1'
ctx.rect(5,5,50,50)
ctx.stroke()


// let canvas2 = document.querySelector('#canvas_2')
// let ctx2 = canvas2.getContext('2d')

// ctx2.fillStyle = 'red'
// ctx2.fillRect(20, 20, 100,100)

// ctx2.strokeStyle = 'black'
// ctx2.lineWidth = '1'
// ctx2.rect(125,20,100,100)
// ctx2.fill()
// ctx2.stroke()

let canvas2 = document.querySelector('#canvas_2')
let ctx_2 = canvas2.getContext('2d')

// ctx_2.fillStyle = 'red'
// ctx_2.fillRect(10, 10, 90, 80)

// ctx_2.strokeStyle = 'black'
// ctx_2.rect(100, 10, 90,80)
// ctx_2.lineWidth = '1'
// ctx_2.fill()
// ctx_2.stroke()

ctx_2.beginPath()
ctx_2.fillStyle = 'red';
ctx_2.strokeStyle = 'blue'
ctx_2.moveTo(10,10)
ctx_2.lineTo(150,150)
ctx_2.lineTo(150,10)
ctx_2.lineWidth = '2'
ctx_2.closePath()
ctx_2.stroke()
ctx_2.fill()

let ctx_3 = canvas2.getContext('2d')

ctx_3.beginPath()
ctx_3.strokeStyle = 'blue'
ctx_3.moveTo(155,10)
ctx_3.lineTo(155,150)
ctx_3.lineTo(295,10)
ctx_3.lineWidth = '2'
ctx_3.closePath()
ctx_3.stroke()
ctx_3.fill()

