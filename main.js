const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1600
canvas.height = 900

const image = new Image()
image.src ="./img/mapaeste.png"

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
        context.fillStyle = 'red'
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
    x: offsetX,
    y: offsetY
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

    const movableItem = [background, ...boundaries]
    



    

function animation(){

    window.requestAnimationFrame(animation) 
    background.draw()
    boundaries.forEach(boundary => {
        boundary.draw()
    })
    context.drawImage(player, 
  
        0,0,player.width / 4 , 
        player.height,   
        canvas.width / 2 - player.width / 3, 
        canvas.height / 2,
        player.width / 4 , 
        player.height,)  
      
  if(sidebar.classList.contains('off')){

    if(keys.w.pressed == true && keys.keystate.lastKey === 'w'){
        movableItem.forEach((movableItem) =>{
            movableItem.position.y += 3

        })     
        
      }
       else if (keys.a.pressed == true && keys.keystate.lastKey === 'a'){
        movableItem.forEach((movableItem) =>{
            movableItem.position.x += 3
        })
         
        
      }
       else if (keys.s.pressed == true && keys.keystate.lastKey === 's'){
        movableItem.forEach((movableItem) =>{
            movableItem.position.y -= 3
        })
         
      }
       else if (keys.d.pressed == true && keys.keystate.lastKey === 'd'){
        movableItem.forEach((movableItem) =>{
            movableItem.position.x -= 3
        })  
          
        
      } 
      
                    
}


}



animation()



 


 










