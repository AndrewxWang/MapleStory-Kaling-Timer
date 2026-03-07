function makeTimer(name, start, section) {
    let time = start;

    const btn = document.createElement("button");
    btn.textContent = name + ": " + time + "s";

    setInterval(function () {
        if (time > 0) {
            time--;
            btn.textContent = name + ": " + time + "s";
            if (time === 0) {
                    btn.style.color = "red"; // turn red at 0
            }
        }
    }, 1000);

    btn.onclick = function () {
        time = start;
        btn.textContent = name + ": " + time + "s";
        btn.style.color = "#ABD2FA";
    };

    section.appendChild(btn);
}

function dog() {
    let section = document.getElementById("timers");
    section.innerHTML = "";

    // update peril
    document.getElementById("phaseOne").innerHTML = "Phase One: Dog";

    makeTimer("FMA", 60, section);
    makeTimer("Cloud", 37, section);
}

function bird() {
    let section = document.getElementById("timers");
    section.innerHTML = "";

    // update peril
    document.getElementById("phaseOne").innerHTML = "Phase One: Bird";

    makeTimer("FMA", 60, section);
    makeTimer("Fly", 18, section);
}

function tiger() {
    let section = document.getElementById("timers");
    section.innerHTML = "";

    // update peril
    document.getElementById("phaseOne").innerHTML = "Phase One: Tiger";

    makeTimer("FMA", 60, section);
    makeTimer("TP", 10, section);
}

function phaseTwo() {
    let section = document.getElementById("timers");
    section.innerHTML = "";

    makeTimer("FMA", 60, section);
    makeTimer("Fly", 18, section);
    makeTimer("Scroll", 30, section);
    makeTimer("Scroll", 10, section);
    makeTimer("TP", 8, section);
}

function phaseThree() {
    let section = document.getElementById("timers");
    section.innerHTML = "";
    
    let clutchTimer = 13;

    makeTimer("Chain", 10, section);
    makeTimer("Clutch", clutchTimer, section); // WIP change to 10 after all 3 peril dead
    makeTimer("Slam", 13, section);
    makeTimer("Scroll", 12, section);

}