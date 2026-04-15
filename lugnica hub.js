const css = document.createElement("link")
css.rel = "stylesheet"
css.href = "https://rawcdn.githack.com/Spacetrale/Lugnica-hub/refs/heads/main/assets/style.css"
document.head.appendChild(css)

const menu = document.createElement("div")
menu.id = "main"
menu.innerHTML = `
        <nav>
            <ul id="navbar">
                <li class="active">Official</li>
            </ul>
            <div id="move">
                <img src="https://github.com/Spacetrale/Lugnica-hub/blob/main/assets/move.png?raw=true" draggable="false" style="cursor: move;">
            </div>
        </nav>
        <div id="menu-container">
            <div class="menu">
                <div id="script-container">
                    <h2>No one actually</h2>
                </div>
            </div>
        </div>
`
document.body.appendChild(menu)

const notifications = document.createElement("div")
notifications.id = "notifications"
document.body.appendChild(notifications)

// Base Function
const moveBtn = document.getElementById("move")
let moveState = false

moveBtn.addEventListener("mousedown", () => {
    moveState = true
})
document.addEventListener("mousemove", (e) => {
    if (moveState == true) {
        menu.style.top = `${e.clientY-20}px`
        menu.style.left = `${e.clientX-menu.clientWidth+20}px`
    }
})
moveBtn.addEventListener("mouseup", () => {
    moveState = false
})
