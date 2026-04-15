(function () {
    // SCRIPT FOR https://orteil.dashnet.org/cookieclicker/
    // https://github.com/cookieclickercheat

    const menu = document.createElement("div")
    menu.id = "main"
    menu.style = "top: 50%; left: 50%;"
    menu.innerHTML = `
            <nav>
                <ul id="navbar">
                    <li class="active">Cookies</li>
                    <li>Buildings</li>
                    <li>Upgrades</li>
                    <li>Prestige</li>
                    <li>Achievements</li>
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
        allButtons = menu.querySelectorAll("li")
        const allMenus = menu.querySelectorAll(".menu")

        for (let i = 0; i < allMenus.length; i++) {
            allButtons[i].classList.remove("active")
            allMenus[i].classList.remove("active")
        }
        allButtons[n].classList.add("active")
        allMenus[n].classList.add("active")
    }
    
    let allButtons = menu.querySelectorAll("li")
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", () => {
            show(i)
        })
    }
})()
