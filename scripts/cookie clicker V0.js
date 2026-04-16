(function () {
    // SCRIPT FOR https://orteil.dashnet.org/cookieclicker/
    // https://github.com/cookieclickercheat

    const menu = document.createElement("div")
    menu.id = "main"
    menu.style = "top: 20%; left: 20%;"
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
                    <input id="cookies-entry" type="number" class="entry" placeholder="Cookies...">
                    <button id="cookies-btn" class="btn">Give cookies</button>
                    <input id="cps-entry" type="number" class="entry" placeholder="Cps...">
                    <button id="cps-btn" class="btn">Set cps</button>
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

    // Script Functions

    const cookiesEntry = menu.querySelector("#cookies-entry")
    const cpsEntry = menu.querySelector("#cps-entry")

    menu.querySelector("#cookies-btn").addEventListener("click", () => {
        const result = parseInt(cookiesEntry.textContent)
        if (isNaN(result)) {
            createNotification("?", "Problem", "You have put a string or none value.")
        }
    })

    // Base Functions
    const moveBtn = menu.querySelector("#move")
    let moveState = false

    moveBtn.addEventListener("mousedown", () => {
        moveState = true
    })
    document.addEventListener("mousemove", (e) => {
        if (moveState == true) {
            menu.style.top = `${e.clientY - 25}px`
            menu.style.left = `${e.clientX - menu.clientWidth + 25}px`
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

    function createNotification(icon, type, description) {
        const notification = document.createElement("div")
        notification.classList.add("notification")
        notification.innerHTML = `
            <div class="icon ${type.toLowerCase()}">
                <h2>${icon}</h2>
            </div>
            <div id="info">
                <span>${type}:</span>
                <p>${description}</p>
            </div>`
        notification.style.animation = "newNotification 2s fowards"
        notifications.appendChild(notification)


        setTimeout(() => {
            notification.style.opacity = "0"

            setTimeout(() => {
                notification.remove()
            }, 500)
        }, 7000)
    }

    // INIT

    let allButtons = menu.querySelectorAll("li")
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", () => {
            show(i)
        })
    }
})()
