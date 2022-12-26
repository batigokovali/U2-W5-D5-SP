function changeNavBarBG () {
    var navbar = document.getElementById("navbar")
    var getStartedBtn = document.querySelector(".get-started")
    var scrollValue = window.scrollY;
    if(scrollValue<380) {
        navbar.classList.remove("navbar-scroll")
        getStartedBtn.classList.remove("get-started-scroll")
    } else {
        navbar.classList.add("navbar-scroll")
        getStartedBtn.classList.add("get-started-scroll")
    }
}

function heroAnimation() {
    let toggle = document.querySelectorAll("svg > g > g > g")
    let random = Math.floor(Math.random()*toggle.length)
    let random0or1 = Math.floor(Math.random()*2)
    toggle[random].style.opacity = random0or1;
}

function toggler() {
    setInterval(heroAnimation,50)
}
toggler()


window.addEventListener("scroll", changeNavBarBG);
