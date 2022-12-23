function changeNavBarBG () {
    var navbar = document.getElementById("navbar")
    var getStartedBtn = document.querySelector(".get-started")
    var scrollValue = window.scrollY;
    if(scrollValue<400) {
        navbar.classList.remove("navbar-scroll")
        getStartedBtn.classList.remove("get-started-scroll")
    } else {
        navbar.classList.add("navbar-scroll")
        getStartedBtn.classList.add("get-started-scroll")
    }
}


function fixDiscoverPosition () {
    var scrollValue = window.scrollY;
    var container = document.querySelector(".bottom-right")
    console.log(scrollValue)
    if(scrollValue<815) {
        container.classList.remove("bottom-right-scroll")
    } else {
        container.classList.add("bottom-right-scroll")
    }
}


window.addEventListener("scroll", changeNavBarBG);
window.addEventListener("scroll", fixDiscoverPosition);