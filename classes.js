class Boundary {

    static width = 48
    static height = 48

    constructor({position}){
        this.position = position
        this.width = 48
        this.height = 47

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
            this.image.height;
            ) 
       
    }

}

