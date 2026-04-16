const css = document.createElement("link")
css.rel = "stylesheet"
css.href = "https://raw.githack.com/Spacetrale/Lugnica-hub/refs/heads/main/assets/style.css"
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
            <div class="menu active">
                <div id="script-container">
                    <h2 id="not-found">No one actually</h2>
                </div>
            </div>
        </div>
`
document.body.appendChild(menu)

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

// Add scripts

async function FetchJson() {
    document.getElementById("not-found").remove()
    const r = await fetch("https://raw.githubusercontent.com/Spacetrale/Lugnica-hub/refs/heads/main/assets/scripts.json")
    const data = await r.json()

    if (data.length == 0) {
        const notFound = document.createElement("h2")
        notFound.id = "not-found"
        notFound.textContent = "No one actually"
        document.body.appendChild(notFound)
        return
    } else {
        data.forEach(e => {
            const script = document.createElement("div")
            script.classList.add("script")
            document.getElementById("script-container").appendChild(script)

            const name = document.createElement("span")
            name.textContent = e["name"]
            script.appendChild(name)

            const description = document.createElement("p")
            description.textContent = e["description"]
            script.appendChild(description)

            const btn = document.createElement("button")
            btn.textContent = "Launch"
            btn.onclick  = () => {
                LaunchScript(e["url"])
            }
            script.appendChild(btn)
        });
    }
}

function LaunchScript(link) {
    fetch(link).then((r) => {
        return r.text()
    }).then((r) => {
        eval(r)
    })
}

FetchJson()
