
var movementQuotient = 3

function updateSpeed(){
    if (!isNaN(document.getElementById('varSpeed').value) && parseInt((document.getElementById('varSpeed').value)) <= 20) {
        movementQuotient = parseInt(document.getElementById('varSpeed').value)
        console.log("Player speed set at " + movementQuotient)
      } else {
        throw console.error("Invalid character");
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
