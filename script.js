// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-linksm')[0]

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
// })

function openMenu() {
    var x = document.getElementById("navbar-li");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

var y = document.getElementById("productFront");
var z = document.getElementById("productSide");

const activColor = document.getElementsByClassName("valgt");
const product = document.getElementsByClassName ("product");

function changeImg() {

    // if(y.style.display === "flex"){
    //     y.style.display = "none";
    //     z.style.display = "flex";
    // }

    for(var i=0, j = product.length; i<j; i++){
        if(product[i].classList.contains("valgt") && product[i].classList.contains("hide") ){
            product[i].classList.remove("hide");
            console.log("valgt og vist");
        }
        else if (product[i].classList.contains("valgt")){
            product[i].classList.add("hide");
            console.log("valgt og gemt");
        }
        else{
            console.log("ikke valgt");
        }

    }

    // if(y.classList.contains("valgt") && y.classList.contains("hide")){
    //     y.classList.remove("hide");
    //     z.classList.add("hide");
    //     console.log("if");
    // }
    // else if (z.classList.contains("valgt") && z.classList.contains("hide")){
    //     y.classList.add("hide");
    //     z.classList.remove("hide");
    //     console.log("else if");
    // }

    // if (activColor[0].classList.contains("hide") ){
    //     activColor[0].classList.remove("hide");
    //     activColor[1].classList.add("hide");
    // }

    // if (y.style.display === "none"){
    //     y.classList.remove("hide");
    //     z.classList.add("hide");

        // y.style.display = "flex";
        // z.style.display = "flex";
        // console.log("none");
    // } 
    // else {
    //     // activColor[0].classList.add("hide");
    //     // activColor[1].classList.remove("hide");
    //     // y.classList.add("hide");
    //     // z.classList.remove("hide")


    //     // y.style.display = "none";
    //     // z.style.display = "none";
    //     console.log("else");
    // }
}




// Color change functions
const dots = document.getElementsByClassName("dot");
const box = document.getElementsByClassName("textbox");
var largeHalv = document.getElementById("dotLarge");
var largeKvart = document.getElementById("dotLarge2");




function colorGreen(){
    var c = 0;
    for (var i= 0, j = dots.length; i<j; i++){
        if(dots[i] != dots[c]){
            dots[i].classList.remove("active")
            console.log("removeA")
        }
        else{
            dots[i].classList.add("active")
            console.log("addA")
        }
    }
    box[0].classList.remove("lyser??d", "bl??", "gul", "orange");
    box[1].classList.remove("lyser??d", "bl??", "gul", "orange");
    box[0].classList.add("gr??n");
    box[1].classList.add("gr??n");
    largeHalv.classList.remove("lyser??d", "bl??", "gul", "orange"); 
    largeKvart.classList.remove("lyser??d", "bl??", "gul", "orange");
    largeHalv.classList.add("gr??n");
    largeKvart.classList.add("gr??n");

    var n = 0;
    var m = 5;
    for(var i = 0, j = product.length; i<j; i++){
        if(product[i] != product[n] && product[i] != product[m]){
            product[i].classList.remove("valgt");
            product[i].classList.add("hide");
            console.log("if");
        }
        else if (product[i] == product[m]){
            product[i].classList.add("valgt");
            product[i].classList.add("hide");
            console.log("else if");
        }
        else{
            product[i].classList.add("valgt");
            product[i].classList.remove("hide");
            console.log("else");
        }
    }
    console.log("gr??n");
}

function colorPink(){
    var c = 1;
    for (var i= 0, j = dots.length; i<j; i++){
        if(dots[i] != dots[c]){
            dots[i].classList.remove("active")
            console.log("removeA")
        }
        else{
            dots[i].classList.add("active")
            console.log("addA")
        }
    }

    box[0].classList.remove("gr??n", "bl??", "gul", "orange");
    box[1].classList.remove("gr??n", "bl??", "gul", "orange");
    box[0].classList.add("lyser??d");
    box[1].classList.add("lyser??d");
    largeHalv.classList.remove("gr??n", "bl??", "gul", "orange");
    largeKvart.classList.remove("gr??n", "bl??", "gul", "orange");
    largeHalv.classList.add("lyser??d");
    largeKvart.classList.add("lyser??d");

    var n = 1;
    var m = 6;
    for(var i = 0, j = product.length; i<j; i++){
        if(product[i] != product[n] && product[i] != product[m]){
            product[i].classList.remove("valgt");
            product[i].classList.add("hide");
            console.log("if");
        }
        else if (product[i] == product[m]){
            product[i].classList.add("valgt");
            product[i].classList.add("hide");
            console.log("else if");
        }
        else{
            product[i].classList.add("valgt");
            product[i].classList.remove("hide");
            console.log("else");
        }
    }

    console.log("lyser??d");

}
function colorBlue(){
    var c = 2;
    for (var i= 0, j = dots.length; i<j; i++){
        if(dots[i] != dots[c]){
            dots[i].classList.remove("active")
            console.log("removeA")
        }
        else{
            dots[i].classList.add("active")
            console.log("addA")
        }
    }
    box[0].classList.remove("gr??n", "lyser??d", "gul", "orange");
    box[1].classList.remove("gr??n", "lyser??d", "gul", "orange");
    box[0].classList.add("bl??");
    box[1].classList.add("bl??");
    largeHalv.classList.remove("gr??n", "lyser??d", "gul", "orange");
    largeKvart.classList.remove("gr??n", "lyser??d", "gul", "orange");
    largeHalv.classList.add("bl??");
    largeKvart.classList.add("bl??");

    var n = 2;
    var m = 7;
    for(var i = 0, j = product.length; i<j; i++){
        if(product[i] != product[n] && product[i] != product[m]){
            product[i].classList.remove("valgt");
            product[i].classList.add("hide");
            console.log("if");
        }
        else if (product[i] == product[m]){
            product[i].classList.add("valgt");
            product[i].classList.add("hide");
            console.log("else if");
        }
        else{
            product[i].classList.add("valgt");
            product[i].classList.remove("hide");
            console.log("else");
        }
    }

    console.log("bl??");

}
function colorYellow(){
    var c = 3;
    for (var i= 0, j = dots.length; i<j; i++){
        if(dots[i] != dots[c]){
            dots[i].classList.remove("active")
            console.log("removeA")
        }
        else{
            dots[i].classList.add("active")
            console.log("addA")
        }
    }
    box[0].classList.remove("gr??n", "lyser??d", "bl??", "orange");
    box[1].classList.remove("gr??n", "lyser??d", "bl??", "orange");
    box[0].classList.add("gul");
    box[1].classList.add("gul");
    largeHalv.classList.remove("gr??n", "lyser??d", "bl??", "orange");
    largeKvart.classList.remove("gr??n", "lyser??d", "bl??", "orange");
    largeHalv.classList.add("gul");
    largeKvart.classList.add("gul");

    var n = 3;
    var m = 8;
    for(var i = 0, j = product.length; i<j; i++){
        if(product[i] != product[n] && product[i] != product[m]){
            product[i].classList.remove("valgt");
            product[i].classList.add("hide");
            console.log("if");
        }
        else if (product[i] == product[m]){
            product[i].classList.add("valgt");
            product[i].classList.add("hide");
            console.log("else if");
        }
        else{
            product[i].classList.add("valgt");
            product[i].classList.remove("hide");
            console.log("else");
        }
    }

    console.log("gul");
}
function colorOrange(){
    var c = 4;
    for (var i= 0, j = dots.length; i<j; i++){
        if(dots[i] != dots[c]){
            dots[i].classList.remove("active")
            console.log("removeA")
        }
        else{
            dots[i].classList.add("active")
            console.log("addA")
        }
    }

    box[0].classList.remove("gr??n", "lyser??d", "bl??", "gul");
    box[1].classList.remove("gr??n", "lyser??d", "bl??", "gul");
    box[0].classList.add("orange");
    box[1].classList.add("orange");
    largeHalv.classList.remove("gr??n", "lyser??d", "bl??", "gul");
    largeKvart.classList.remove("gr??n", "lyser??d", "bl??", "gul");
    largeHalv.classList.add("orange");
    largeKvart.classList.add("orange");

    var n = 4;
    var m = 9;
    for(var i = 0, j = product.length; i<j; i++){
        if(product[i] != product[n] && product[i] != product[m]){
            product[i].classList.remove("valgt");
            product[i].classList.add("hide");
            console.log("if");
        }
        else if (product[i] == product[m]){
            product[i].classList.add("valgt");
            product[i].classList.add("hide");
            console.log("else if");
        }
        else{
            product[i].classList.add("valgt");
            product[i].classList.remove("hide");
            console.log("else");
        }
    }
    
    console.log("orange");
}
// Color change slut
