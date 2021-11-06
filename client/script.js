const number = document.getElementsByClassName("number-of-deaths")[0];
let images = ['corona1.jpg', 'corona2.jpg', 'corona3.jpg'];
document.body.style.backgroundImage = "url('./img/" + images[Math.floor(Math.random() * images.length)] + "')";
console.log("url('./img/+" + images[Math.floor(Math.random() * images.length)] + "')");
fetch("http://localhost:3000/numberofdead")
    .then(res => res.json())
    .then(data => {
        number.textContent = data.numberOfDead;
    })
    .catch(
        err => {
            number.textContent = "INFINITY";
        }
    )