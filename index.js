const pi = 3.14159
let radius;
let cicrcmference



document.getElementById("login").onclick = function() {
    radius = document.getElementById("mytext").value
    radius = Number(radius)
    cicrcmference = 2 * pi * radius

    document.getElementById("result").textContent = cicrcmference + 'cm'
}
