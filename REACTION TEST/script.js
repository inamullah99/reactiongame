var shape = document.querySelector('.shape')
var time = document.querySelector('#time')
var score = document.querySelector('#score')
var level = document.querySelector('#level')
var rules = document.querySelector('.rules')
var showRules = document.querySelector('#showRules')
var closeRules = document.querySelector('#closeButton')

var s = 0
var l = 1

showRules.addEventListener('click', ()=> {
    rules.classList.add('show')
    showRules.style.visibility = 'hidden'
})
closeRules.addEventListener('click', ()=> {
    rules.classList.remove('show')
    showRules.style.visibility = 'visible'
})


var start
function createShape() {
    var width = Math.random() * 100 + 50
    var top = Math.random() * 70
    var left = Math.random() * 70
    start = new Date().getTime();

    if (Math.random() >= 0.5) {
        shape.style.borderRadius = '50%'
    } else {
        shape.style.borderRadius = '0px'
    }

    shape.style.display = 'block'
    shape.style.width = width + 'px'
    shape.style.height = width + 'px'
    shape.style.top = top + '%'
    shape.style.left = left + '%'
    shape.style.backgroundColor = getRandomColor()
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function incLevel() {
    if (s < 10) {
        l = 1
    } else if (s > 9 && s < 20 ) {
        l = 2
    } else if (s >= 20 && s < 30 ) {
        l = 3
    } else if (s >= 30 && s < 40 ) {
        l = 4
    } else if (s >= 40) {
        l = 5
    }
    level.innerHTML = l
}

createShape()
shape.addEventListener('click', () => {
    var end = new Date().getTime();
    shape.style.display = 'none'
    var t = (end - start) / 1000;
    if (l == 1 && t <= 2 || l == 2 && t <= 1.6 || l == 3 && t <= 1.2  || l == 4 && t <= 0.8  || l == 5 && t <= 0.4 ) {
        s +=1
    } else {
        s -=1
    }
    time.innerHTML = t
    score.innerHTML = s
    incLevel()
    createShape()
})
