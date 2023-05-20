const shakeBird = () => {
    // Here we are grabbing the bird
    let bird = document.getElementById("bird");
    bird.classList.remove('shake')
    bird.classList.add('shake')
}
const shakeNest = () => {
    // Here we are grabbing the bird's nest
    let nest = document.getElementById("nest");
    // Here we are grabbing the leaves
    let egg = document.getElementById("egg");
    // Here we are grabbing the bird
    let bird = document.getElementById("bird");

    bird.classList.remove('shake')
    bird.classList.add('shake')
    egg.classList.remove('shake')
    egg.classList.add('shake')
    nest.classList.remove('shake')
    nest.classList.add('shake')

}
const moveEgg = () => {
    // Here we are grabbing the eggs
    let egg = document.getElementById("egg");
    egg.classList.remove('move-egg')
    egg.classList.add('move-egg')

}
const fallLeaves = () => {
    // Here we are grabbing the leaves
    let leaves =document.getElementById("leaves");

    let leaf = document.getElementsByTagName('i')
    for (let index = 0; index < leaf.length; index++) {
        leaf.item(index).remove();
    }
    for (let index = 0; index < 14; index++) {
        let i = document.createElement('i')
        leaves.appendChild(i)
    }
    leaves.classList.remove('falling-leaves')
    leaves.classList.add('falling-leaves')
}