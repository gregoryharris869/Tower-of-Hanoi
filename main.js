let Movedisk = "pickup"
let currentDisk = null

const towerClick = function (event) {
    const tower = event.currentTarget
    if (Movedisk === "pickup") {

        const disc = tower.lastElementChild

        if (disc) {
            console.log("Picked up " + disc.id)
            currentDisc = disc
            Movedisk = "drop"
        }
    } else if (Movedisk === "drop") {

        console.log("current : " + currentDisc.dataset.width)

        Movedisk = "pickup"

        if (!event.currentTarget.firstElementChild) {
            tower.append(currentDisc)
        }
        else if (currentDisc.dataset.width < event.currentTarget.lastElementChild.dataset.width) {
            tower.append(currentDisc)

        } if (tower3.childElementCount === 4) {
            alert(" Winner! ")

        }
    }
}

document.querySelector('button').addEventListener('click', reset)

function reset() {
    tower1.append(disc4)
    tower1.append(disc3)
    tower1.append(disc2)
    tower1.append(disc1)
}

const tower1 = document.querySelector("#tower1")
const tower2 = document.querySelector("#tower2")
const tower3 = document.querySelector("#tower3")

tower1.addEventListener('click', towerClick)
tower2.addEventListener('click', towerClick)
tower3.addEventListener('click', towerClick)