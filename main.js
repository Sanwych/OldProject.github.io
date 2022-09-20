const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1600
canvas.height = 900

const imagen = new Image()
imagen.src ="./img/gamermap.png"

const foregroundImg = new Image()
foregroundImg.src ="./img/fore.png"

const playerDown = new Image()
playerDown.src = "./img/playerDown.png"

const playerUp = new Image()
playerUp.src = "./img/playerUp.png"

const playerRight = new Image()
playerRight.src = "./img/playerRight.png"

const playerLeft = new Image()
playerLeft.src = "./img/playerLeft.png"




context.fillRect(0,0,canvas.width, canvas.height)

const offsetX = -1185;
const offsetY= -500

const mainChar = new Propiedades({
    position:{
        x:canvas.width / 2 - 192 / 3, 
        y:canvas.height / 2 - 68 / 2,
    }, 
    image:playerDown,
    frames:{
        default:4,
    },
    sprites:{
        down:playerDown,
        up:playerUp,
        right:playerRight,
        left:playerLeft
    }  
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


    
  

function animation(){
    
    window.requestAnimationFrame(animation) 
    
    
    background.draw()
    
    boundaries.forEach(boundary => {
        boundary.draw()    
    
    })

    mainChar.draw()

    foreground.draw()
  
    
  if(sidebar.classList.contains('off')){

    
    
    let moving = true
    mainChar.moving = false
    if(keys.w.pressed == true && keys.keystate.lastKey === 'w'){
        mainChar.image = mainChar.sprites.up
        
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
            mainChar.moving = true
        })     
        
      }
       else if (keys.a.pressed == true && keys.keystate.lastKey === 'a'){
        mainChar.image = mainChar.sprites.left
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
            mainChar.moving = true
        })
         
        
      }
       else if (keys.s.pressed == true && keys.keystate.lastKey === 's'){
        mainChar.image = mainChar.sprites.down
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
            mainChar.moving = true
        })
         
      }
       else if (keys.d.pressed == true && keys.keystate.lastKey === 'd'){
        mainChar.image = mainChar.sprites.right
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
            mainChar.moving = true
        })  
          
        
      } 
      
                    
}


}

animation()










 










