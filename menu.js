const boton = document.getElementById('menu')
const sidebar = document.getElementById('sidebar')
boton.addEventListener('click', () => {

    if(sidebar.classList.contains('on')){
        sidebar.classList.add("off")
        sidebar.classList.remove("on")
    } else if(sidebar.classList.contains('off')){
        sidebar.classList.add("on")
        sidebar.classList.remove("off")
    }
 
})