
const boxA = document.querySelector('#boxA')
const boxB = document.querySelector('#boxB')
const boxC = document.querySelector('#boxC')
let diskSelector = 0
let minMoves = 0
let counter = 0

let active = false


function diskBuild(){
    const diskDrop = document.getElementById('drop')
    diskSelector = diskDrop.options[diskDrop.selectedIndex].value
    for (i = 1; i <= diskSelector; i++){
        let diskDiv = document.createElement('div')
        diskDiv.id = 'disk' + i
        diskDiv.className = 'disk'
        boxA.appendChild(diskDiv)}
    minMoves = 2 ** diskSelector - 1
    document.getElementById('minimum').textContent = minMoves
    }
    diskBuild()

let moves = function(){
    if (active === false && this.childElementCount === 0){
        return
    }else if (active === this.lastChild){
        active = false
    }else if (active === false){
        this.lastChild.style.borderWidth = '5px'
        active = this.lastChild
    }else if (active.offsetWidth < this.lastChild.offsetWidth || this.childElementCount === 0){
        active.style.borderWidth = '2px'
        this.appendChild(active)
        counter =counter + 1
        document.getElementById('counter').textContent = counter
        winner()
        active = false
    }else{
        active.style.borderWidth = '2px'
        active = false}
}

boxA.addEventListener('click', moves)
boxB.addEventListener('click', moves)
boxC.addEventListener('click', moves)

//if winner
function winner() {if (boxC.childElementCount == diskSelector){
    alert(`You cleared the tower in ${counter} moves!!`)
}}

function resetGame(){
    $('.disk').remove()
    active = false
    counter = 0
    document.getElementById('counter').textContent = counter
    diskBuild()
    boxC.addEventListener('click', moves)
}
