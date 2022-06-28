const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1600
canvas.height = 900

const image = new Image()
image.src ="./img/mapaeste.png"

const player = new Image()
player.src = "./img/playerDown.png"

var collisionMap = []

for(let i = 0; i < colisiones.length; i += 70){

    let slices = colisiones.slice(i, 70 + i)
    collisionMap.push(slices)


}

console.log(collisionMap)

class Propiedades{
    constructor({position, speed, image}){
        this.position = position
        this.speed = speed
        this.image = image    
    }
     draw(){
        context.drawImage(this.image, this.position.x , this.position.y) 
       
    }
}

const keys = {   
    w:{
        pressed: false,        
    },
    a:{
        pressed: false,      
    },
    s:{
        pressed: false,              
    },
    d:{
        pressed: false,    
    },
   keystate: {
    lastUpped: "",
    lastKey: ""
    }
}

const background = new Propiedades({
    position:{
    x: -297,
    y: -300
    },
    speed: "speed",
    image:image
    })

context.fillStyle = 'blue' 
context.fillRect(0,0,canvas.width, canvas.height )

function animation(){
    
    window.requestAnimationFrame(animation) 
    
    if(sidebar.classList.contains('off')){ 
      playerMovement()
        }                    
}


animation()
   keys.keystate.lastKey = 'd'
  break;

   } 
})


window.addEventListener('keyup', (e) => {
  
    switch (e.key){
    case 'w': 
    keys.w.pressed = false 
    keys.keystate.lastUpped = 'w'
    
    
    break;
    case 'a': 
    keys.a.pressed = false 
    keys.keystate.lastUpped = 'a'
    
    
    break;
    case 's': 
    keys.s.pressed = false  
    keys.keystate.lastUpped = 's'
    
    break;
    case 'd':
    keys.d.pressed = false 
    keys.keystate.lastUpped = 'd'

    
    break;
    }
 })



 























