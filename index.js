var canvas = document.getElementById('canvas') 
var ctx = canvas.getContext('2d');
let myColor = 'red'

document.querySelector('.color').oninput = function(){
    myColor = this.value
}

canvas.onmousedown = function(event){
    canvas.onmousemove = function(event){
        let x  = event.offsetX
        let y = event.offsetY
        ctx.fillRect(x-5,y-5,8,8)
        ctx.fillStyle = myColor
        ctx.fill()
    }
    canvas.onmouseup = function(){
        canvas.onmousemove = null
    }
}

// ctx.fillStyle = 'red'
// ctx.fillRect(5,5,50,50)
// ctx.clearRect(0,0,400,200)

// ctx.strokeStyle = 'green';
// ctx.lineWidth = '1'
// ctx.rect(5,5,50,50)
// ctx.stroke()


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


var canvas3 = document.querySelector('#canvas_3')
var ctx3 = canvas3.getContext('2d')

ctx3.beginPath()
// ctx3.fillStyle = 'red'
// // ctx3.fillRect(10,10, 100, 100)
// ctx3.strokeStyle = 'red'
// ctx3.rect(10,10,100,100)
// ctx3.lineWidth = 2
// ctx3.stroke()
// ctx3.fill()
ctx3.strokeStyle = 'red'
ctx3.moveTo(10,10)
ctx3.lineTo(50,50)
ctx3.lineWidth = 5
ctx3.lineTo(60,10)
ctx3.fill()
ctx3.closePath()
ctx3.stroke()
