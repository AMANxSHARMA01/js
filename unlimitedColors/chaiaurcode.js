// random colour generate with random hex values

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]    // hex ki random position
    }
    return color
}

let intervalId;

const StartChangingColor = function () {

    if(!intervalId){
        intervalId = setInterval(changeBg, 1000)
    }

    function changeBg() {
    document.body.style.backgroundColor = randomColor();
    }
}

const StopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null;                   // dereference variable for optimization
}

document.querySelector('#start').
addEventListener('click', StartChangingColor);

document.querySelector('#stop').
addEventListener('click', StopChangingColor);