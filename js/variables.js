var root = document.querySelector(':root')
var rootStyles = getComputedStyle(root)

var lightModeBtn = document.getElementById('light-mode')
var darkModeBtn = document.getElementById('dark-mode')

lightModeBtn.addEventListener('click', function () {
    var lightBackground = rootStyles.getPropertyValue('--light-background')
    var lightColor = rootStyles.getPropertyValue('--light-color')
    root.style.setProperty('--background', lightBackground)
    root.style.setProperty('--color', lightColor)
})

darkModeBtn.addEventListener('click', function () {
    var darkBackground = rootStyles.getPropertyValue('--dark-background')
    var darkColor = rootStyles.getPropertyValue('--dark-color')
    root.style.setProperty('--background', darkBackground)
    root.style.setProperty('--color', darkColor)
})