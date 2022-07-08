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