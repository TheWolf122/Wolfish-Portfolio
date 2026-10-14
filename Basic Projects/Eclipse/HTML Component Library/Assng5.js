// define navbar Press
function navbarPress() {
    console.log("NavBar was pressed");
}

// define openNav()
counter = 0;
function openNav() {
    if (counter == 0) {
        counter = 1;
        document.getElementById("mysidenav").style.width = "250px";
    }
    else {
        counter = 0;
        document.getElementById("mysidenav").style.width = "0";
    }
}

// define buttonPress()
function buttonPress() {
    console.log("Button was pressed");
}   

// hover button animation
function hoverButton() {
    document.getElementById("button").style.color = "white";
}

// define fabPress()
function fabPress() {
    console.log("FAB was pressed");
}

//define spinnerColor()
count=0;
function spinnerColor() {
    if (count == 0) {
        document.getElementById("spinner1").style.border = "16px solid var(--color2)";
        document.getElementById("spinner1").style.borderTop = "16px solid var(--color1)";
        count = 1;
    }
    else {
        document.getElementById("spinner1").style.border = "16px solid var(--color1)";
        document.getElementById("spinner1").style.borderTop = "16px solid var(--color2)";
        count = 0;
    }
}



//HTML inner text time

document.getElementById("navbarinfo").innerText = `
HTML

<div class="navbar" id="navbar">
<i class="material-icons">menu</i>
<a href="Assgn5.html" onclick="navbarPress()" aria-label="Example 1">Example 1</a>
<a href="Assgn5.html" onclick="navbarPress()" aria-label="Example 2">Example 2</a>
<a href="Assgn5.html" onclick="navbarPress()" aria-label="Example 3">Example 3</a>
<a href="Assgn5.html" onclick="navbarPress()" aria-label="Example 4">Example 4</a>
</div>
`;

document.getElementById("navdrawerinfo").innerText = `
HTML

<div class="mysidenav" id="mysidenav">
<a href="Assgn5.html" onclick="navbarPress()" aria-label="Example 1">Example 1</a>
<a href="Assgn5.html" onclick="navbarPress()" aria-label="Example 2">Example 2</a>
<a href="Assgn5.html" onclick="navbarPress()" aria-label="Example 3">Example 3</a>
<a href="Assgn5.html" onclick="navbarPress()" aria-label="Example 4">Example 4</a>
</div>
<div class="overlay"></div>
`;

document.getElementById("buttoninfo").innerText = `
HTML

<div class="button" id="button">
<button id="button" onclick="buttonPress()">PLACEHOLDER1</button>
</div>
`;

document.getElementById("fabinfo").innerText = `
HTML

<div class="fab" id="fab">
<button id="fab" onclick="fabPress()">PLACEHOLDER2</button>
</div>
`;

document.getElementById("carouselinfo").innerText = `
HTML

<div class="carousel">
<img src="image1.jpg" alt="Image 1">
<img src="image2.jpg" alt="Image 2">
<img src="image3.jpg" alt="Image 3">
<img src="image4.jpg" alt="Image 4">
<!-- Add more images if needed -->
</div>
`;

document.getElementById("spinnerinfo").innerText = `
HTML

<div class="spinners">
        <div class="spinner1" id="spinner1" onclick="spinnerColor()"></div>
        <div class="spinner2"></div>
        <div class="spinner3"></div>
        <div class="spinner4"></div>
</div>
`;