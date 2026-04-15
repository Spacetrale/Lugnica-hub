(function () {
    // SCRIPT FOR https://orteil.dashnet.org/cookieclicker/
    // https://github.com/cookieclickercheat

    const menu = document.createElement("div")
    menu.id = "main"
    menu.style = "top: 50%; left: 50%;"
    menu.innerHTML = `
            <nav>
                <ul id="navbar">
                    <li class="active" onclick="show(0)">Cookies</li>
                    <li onclick="show(0)">Buildings</li>
                    <li onclick="show(1)">Upgrades</li>
                    <li onclick="show(2)">Prestige</li>
                    <li onclick="show(3)">Achievements</li>
                </ul>
                <div id="move">
                    <img src="https://github.com/Spacetrale/Lugnica-hub/blob/main/assets/move.png?raw=true" draggable="false" style="cursor: move;">
                </div>
            </nav>
            <div id="menu-container">
                <div class="menu active">
                    <h2>Not ready</h2>
                </div>
                <div class="menu">
                    <h2>Not ready</h2>
                </div>
                <div class="menu">
                    <h2>Not ready</h2>
                </div>
                <div class="menu">
                    <h2>Not ready</h2>
                </div>
                <div class="menu">
                    <h2>Not ready</h2>
                </div>
            </div>
    `
    document.body.appendChild(menu)

    const notifications = document.createElement("div")
    notifications.id = "notifications"
    document.body.appendChild(notifications)

    // Base Function
    const moveBtn = menu.querySelector("#move")
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

    function show(n) {
        return
    }
})()
