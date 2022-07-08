const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1600
canvas.height = 900

const imagen = new Image()
imagen.src ="./img/gamermap.png"

const foregroundImg = new Image()
foregroundImg.src ="./img/fore.png"

const player = new Image()
player.src = "./img/playerDown.png"

context.fillStyle = 'blue' 
context.fillRect(0,0,canvas.width, canvas.height)

const offsetX = -1185;
const offsetY= -500


var collisionMap = []

for(let i = 0; i < colisiones.length; i += 70){

    let slices = colisiones.slice(i, 70 + i)
    collisionMap.push(slices)

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

    const movableItem = [background, ...boundaries, foreground]

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

    foreground.draw()
    console.log(movementQuotient)
    
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
               y: boundary.position.y + movementQuotient,
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
            movableItem.position.y += movementQuotient

        })     
        
      }
       else if (keys.a.pressed == true && keys.keystate.lastKey === 'a'){
        for(let i = 0; i<boundaries.length;i++){
            const boundary = boundaries[i]
             if(stopPlayer({
                e1:mainChar,
                e2:{...boundary,position:{
                  x: boundary.position.x + movementQuotient,
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
            movableItem.position.x += movementQuotient
            
        })
         
        
      }
       else if (keys.s.pressed == true && keys.keystate.lastKey === 's'){
        for(let i = 0; i<boundaries.length;i++){
            const boundary = boundaries[i]
             if(stopPlayer({
                e1:mainChar,
                e2:{...boundary,position:{
                  x: boundary.position.x,
                  y: boundary.position.y - movementQuotient,
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
            movableItem.position.y -= movementQuotient
        })
         
      }
       else if (keys.d.pressed == true && keys.keystate.lastKey === 'd'){
        for(let i = 0; i<boundaries.length;i++){
         const boundary = boundaries[i]
          if(stopPlayer({
             e1:mainChar,
             e2:{...boundary,position:{
               x: boundary.position.x - movementQuotient,
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
            movableItem.position.x -= movementQuotient
        })  
          
        
      } 
      
                    
}


}



animation()


console.log(mainChar.width)


 


 













 










