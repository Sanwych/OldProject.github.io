const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1600
canvas.height = 900

const imagen = new Image()
imagen.src ="./img/mapaeste.png"

const player = new Image()
player.src = "./img/playerDown.png"

context.fillStyle = 'blue' 
context.fillRect(0,0,canvas.width, canvas.height)

const offsetX = -300;
const offsetY= -297

var collisionMap = []

for(let i = 0; i < colisiones.length; i += 70){

    let slices = colisiones.slice(i, 70 + i)
    collisionMap.push(slices)

}



class Boundary {

    static width = 48
    static height = 48

    constructor({position}){
        this.position = position
        this.width = 48
        this.height = 48
    }

    draw(){
        context.fillStyle = ' rgba(255,0,0,0) '
        context.fillRect(this.position.x,this.position.y, this.width, this.height)  
    }   
}

const boundaries = []

collisionMap.forEach((row, i) => {
 row.forEach((symbol, j) => {
 if(symbol === 1025){
    
    boundaries.push(new Boundary({
    position:{
        x: Boundary.width * j + offsetX,
        y: Boundary.height * i + offsetY
    }  
}

))}})})

class Propiedades{
    
    constructor({position, width, height, image, frames = {default: 1}}){
        this.position = position
        this.image = image   
        this.frames = frames 
        this.width = width
        this.height = height
    
    }
     draw(){
        context.drawImage(this.image, 
  
            0,
            0,
            this.image.width / this.frames.default , 
            this.image.height,  
            this.position.x,
            this.position.y, 
            this.image.width / this.frames.default , 
            this.image.height
            ) 
       
    }
}

const mainChar = new Propiedades({
    position:{
        x:canvas.width / 2 - 192 / 3, 
        y:canvas.height / 2 - 68 / 2,
    }, 
    image:player,
    frames:{default:4},
    width: 160 / 4,
    height: 68
     
    
})

const background = new Propiedades({
    position:{
    x: offsetX,
    y: offsetY
    },
    
    image:imagen
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

    const movableItem = [background, ...boundaries]

    function stopPlayer({e1,e2}){
        
         return   (e1.position.x + e1.width >= e2.position.x &&
                  e1.position.x <= e2.position.x + e2.width &&
                  e1.position.y <= e2.position.y + e2.height &&
                  e1.position.y + e1.height >= e2.position.y)   
    }

    
  

function animation(){
    
    window.requestAnimationFrame(animation) 
    
    background.draw()
    
    boundaries.forEach(boundary => {
        boundary.draw()    
    
    })

    mainChar.draw()
    
  if(sidebar.classList.contains('off')){

    
    
    let moving = true
    
    if(keys.w.pressed == true && keys.keystate.lastKey === 'w'){
      for(let i = 0; i < boundaries.length; i++){
         const boundary = boundaries[i]
          if(
            stopPlayer({
             e1:mainChar,
             e2:{
                ...boundary
                ,position:{
               x: boundary.position.x,
               y: boundary.position.y + 3,
             }}
            }
            )){
                moving = false 
                
                console.log(moving)
                break
            }
      }
        
        if(moving == true)
        movableItem.forEach((movableItem) =>{
            movableItem.position.y += 3

        })     
        
      }
       else if (keys.a.pressed == true && keys.keystate.lastKey === 'a'){
        for(let i = 0; i<boundaries.length;i++){
            const boundary = boundaries[i]
             if(stopPlayer({
                e1:mainChar,
                e2:{...boundary,position:{
                  x: boundary.position.x + 3,
                  y: boundary.position.y
                }
               }}
               )){
                
                   moving = false
                   console.log(moving)
                   break
               }
         }
           
           if(moving == true)
        movableItem.forEach((movableItem) =>{
            movableItem.position.x += 3
        })
         
        
      }
       else if (keys.s.pressed == true && keys.keystate.lastKey === 's'){
        for(let i = 0; i<boundaries.length;i++){
            const boundary = boundaries[i]
             if(stopPlayer({
                e1:mainChar,
                e2:{...boundary,position:{
                  x: boundary.position.x,
                  y: boundary.position.y - 3,
                }}
               }
               )){
                
                   moving = false
                   console.log(moving)
                   break
               }
         }
           
           if(moving == true)
        movableItem.forEach((movableItem) =>{
            movableItem.position.y -= 3
        })
         
      }
       else if (keys.d.pressed == true && keys.keystate.lastKey === 'd'){
        for(let i = 0; i<boundaries.length;i++){
         const boundary = boundaries[i]
          if(stopPlayer({
             e1:mainChar,
             e2:{...boundary,position:{
               x: boundary.position.x - 3,
               y: boundary.position.y
             }}
            }
            )){
                
                moving = false
                console.log(moving)
                break
            }
      }
        
        if(moving == true)
        movableItem.forEach((movableItem) =>{
            movableItem.position.x -= 3
        })  
          
        
      } 
      
                    
}


}



animation()


 


 










