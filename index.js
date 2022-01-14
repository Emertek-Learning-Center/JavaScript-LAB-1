var cog = document.querySelector('#trigger')
var colorMenu = document.querySelector('#colorMenu')

// showing and hiding the color menu on click
var isShown = 0
cog.addEventListener('click', function(){
    if (isShown == 1) {
        colorMenu.style.display = "none"
        isShown = 0
    }else{
        colorMenu.style.display = "block"
        isShown = 1
    }
})

// hiding the colr menu using the x button
var exitButton = document.querySelector('#exitButton')
exitButton.addEventListener('click', function(){
    colorMenu.style.display = "none"
    isShown = 0
})

// changing the color of the square 
var color = document.querySelectorAll('.color')
var square = document.querySelector('#square')
color.forEach(c =>{
    c.addEventListener('click', function(){
        // storing the class with the needed color
        var col = c.classList[1]
        // resetting the class list of the square
        square.classList = ""
        // assigning the needed class
        square.classList.toggle(col)
    })
})
