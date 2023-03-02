let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})




function countTo() {
    let from = 60;
    let to = 220;
    let step = to > from ? 1 : -1;
    let interval = 31;

    if (from == to) {
        document.querySelector(".topic-heading1").textContent = from;
        return;
    }

    let counter = setInterval(function () {
        from += step;
        document.querySelector(".topic-heading1").textContent = from;

        if (from == to) {
            clearInterval(counter);
        }
    }, interval);
}
countTo();



function countTo2() {
    let from = 110;
    let to = 1320;
    let step = to > from ? 1 : -1;
    let interval = 0;

    if (from == to) {
        document.querySelector(".topic-heading2").textContent = from;
        return;
    }

    let counter = setInterval(function () {
        from += step;
        document.querySelector(".topic-heading2").textContent = from;

        if (from == to) {
            clearInterval(counter);
        }
    }, interval);
}
countTo2();




function countTo3() {
    let from = 70;
    let to = 430;
    let step = to > from ? 1 : -1;
    let interval = 13;

    if (from == to) {
        document.querySelector(".topic-heading3").textContent = from;
        return;
    }

    let counter = setInterval(function () {
        from += step;
        document.querySelector(".topic-heading3").textContent = from;

        if (from == to) {
            clearInterval(counter);
        }
    }, interval);
}
countTo3();



function countTo4() {
    let from = 11;
    let to = 70;
    let step = to > from ? 1 : -1;
    let interval = 82;

    if (from == to) {
        document.querySelector(".topic-heading4").textContent = from;
        return;
    }

    let counter = setInterval(function () {
        from += step;
        document.querySelector(".topic-heading4").textContent = from;

        if (from == to) {
            clearInterval(counter);
        }
    }, interval);
}
countTo4();


