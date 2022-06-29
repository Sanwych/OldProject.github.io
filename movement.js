
function playerMovement(){
    background.draw()
    context.drawImage(player, 

        0,0,player.width / 4 , 
        player.height,   
        canvas.width / 2 - player.width / 3, 
        canvas.height / 2,
        player.width / 4 , 
        player.height,)  

     if(keys.w.pressed == true && keys.keystate.lastKey === 'w'){
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
