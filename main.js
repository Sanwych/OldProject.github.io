const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1600
canvas.height = 900


const image = new Image()
image.src ="./img/mapaeste.png"

const player = new Image()
player.src = "./img/playerDown.png"

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

const background = new Propiedades({
    position:{
    x: -297,
    y: -300
    },
    speed: "speed",
    image:image
    })

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

context.fillStyle = 'blue' 
context.fillRect(0,0,canvas.width, canvas.height )

function animation(){
    window.requestAnimationFrame(animation)

    background.draw()
    
   
    context.drawImage(player, 

        0,0,player.width / 4 , player.height, /* 0 --> Valor inicial de X 0 --> Valor inicial de Y 
                                              player.width / 4 --> Parte que se corta (desde la izquierda, 
                                              coge a un personaje) player.height --> altura del personaje */
        
        canvas.width / 2 - player.width / 3, 
        canvas.height / 2,
        player.width / 4 , 
        player.height,)  

        if (keys.w.pressed == true && keys.keystate.lastKey === 'w'){
            background.position.y = background.position.y + 3     
        }
         else if (keys.a.pressed == true && keys.keystate.lastKey === 'a'){
            background.position.x = background.position.x + 3 
        }
        else if (keys.s.pressed == true && keys.keystate.lastKey === 's'){
            background.position.y = background.position.y - 3  
        }
        else if (keys.d.pressed == true && keys.keystate.lastKey === 'd'){
            background.position.x = background.position.x - 3    
        } 

        
       
}

animation()

 window.addEventListener('keydown', (e) => {
   switch (e.key){
   case 'w':
    keys.w.pressed = true
    keys.keystate.lastKey = 'w'
   break;

   case 'a':
    keys.a.pressed = true
    keys.keystate.lastKey = 'a'
   break;

   case 's': 
   keys.s.pressed = true
   keys.keystate.lastKey = 's'
  break;
   
   case 'd':  
   keys.d.pressed = true  
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


 























