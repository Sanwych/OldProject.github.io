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

const mainChar = new Propiedades({
    position:{
        x:canvas.width / 2 - 192 / 3, 
        y:canvas.height / 2 - 68 / 2,
    }, 
    image:player,
    frames:{default:4},
    width: 160 / 4,
    height: 63
     
    
})

const background = new Propiedades({
    position:{
    x: offsetX,
    y: offsetY
    },
    
    image:imagen
    })


const foreground = new Propiedades({
    position:{
        x: offsetX,
        y: offsetY
        },
        
        image:foregroundImg
        })


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


    function playerMovement(){

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
    
  

function animation(){
    
    window.requestAnimationFrame(animation) 
    
    
    background.draw()
    
    boundaries.forEach(boundary => {
        boundary.draw()    
    
    })

    mainChar.draw()

    foreground.draw()
  
    
  if(sidebar.classList.contains('off')){

    playerMovement()
                       
}


}



 













 










