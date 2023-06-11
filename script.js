const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    alert("Thanks for submitting");
});


dontGo({
	title: 'Comeback!',
	faviconSrc: './assets/faviconAlt.png',
	timeout: 100
});


let nam = document.querySelector('span#name');
let setName = "Justin";
let i = 0;
nam.innerHTML = "";

let direction = "f"

setInterval(() => {

    if (direction == "f") {
        if (i >= setName.length) {
            i = setName.length - 1
            direction = "b"
            return
        }
        nam.innerHTML += setName[i];
        i++;
    } else {
        if (i < 0) {
            i = 0;
            direction = "f";
            return
        }
        nam.innerHTML = setName.substring(0, i);
        i--;
    }
}, 200);