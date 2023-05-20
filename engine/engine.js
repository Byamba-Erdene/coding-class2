const start = () => {
    let nest = document.getElementById('nest')
    let egg = document.getElementById('egg')
    let bird = document.getElementById('bird');
    let wrinkles = document.getElementById('wrinkles');
    nest.style.transition = "opacity 1s"
    nest.style.opacity = "1"
    egg.style.transition = "opacity 1s"
    egg.style.opacity = "1"
    bird.style.transition = "opacity 1s"
    bird.style.opacity = "1"
    wrinkles.style.transition = "opacity 1s"
    wrinkles.style.opacity = "1"

}
const redirect = () => {
    window.location.href = "./certificate.html"
}