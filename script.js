// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-linksm')[0]

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
// })

function openMenu() {
    var x = document.getElementById("navbar-li");
    if (x.style.display === "flex"){
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}