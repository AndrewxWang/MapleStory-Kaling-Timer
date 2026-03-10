function makeTimer(name, start, containerId, repeat = false, autoStart = true) {
    let time = start;
    const section = document.getElementById(containerId);

    const btn = document.createElement("button");
    btn.textContent = name + ": " + time + "s";

    if (!autoStart) {
        time = 0;
        btn.textContent = name + ": Click to Start"; 
    }
    
    setInterval(function () {
        if (time > 0) {
            time--;
            btn.textContent = name + ": " + time + "s";
            if (time === 0) {
                btn.style.color = "darkred"; // turn red at 0
                if (repeat) {
                    time = start; // restart timer automatically
                    btn.textContent = name + ": " + time + "s";
                    btn.style.color = "#ABD2FA"; // reset color
                }
            } else if (time <= (start * 0.1)) {
                btn.style.color = "red"; // red color at 10%
            } else if (time <= (start * 0.2)) {
                btn.style.color = "orange"; // yellow color at 20% of time remaining
            } else if (time <= (start * 0.3)) {
                btn.style.color = "yellow"; // orange at 30% of time remaining
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
    const containerId = "timers1";
    const section = document.getElementById(containerId);
    section.innerHTML = "";
    document.getElementById("phaseOneTitle").innerText = "Phase One: Dog";
    document.getElementById("dog").style = "opacity: 1;";
    document.getElementById("bird").style = "opacity: 0.5;";
    document.getElementById("tiger").style = "opacity: 0.5;";

    makeTimer("FMA", 60, containerId, true);
    makeTimer("Cloud", 35, containerId, false, false);
}

function bird() {
    const containerId = "timers1";
    const section = document.getElementById(containerId);
    section.innerHTML = "";
    document.getElementById("phaseOneTitle").innerText = "Phase One: Bird";
    document.getElementById("dog").style = "opacity: 0.5;";
    document.getElementById("bird").style = "opacity: 1;";
    document.getElementById("tiger").style = "opacity: 0.5;";

    makeTimer("FMA", 60, containerId);
    makeTimer("Fly", 18, containerId);
}

function tiger() {
    const containerId = "timers1";
    const section = document.getElementById(containerId);
    section.innerHTML = "";
    document.getElementById("phaseOneTitle").innerText = "Phase One: Tiger";
    document.getElementById("dog").style = "opacity: 0.5;";
    document.getElementById("bird").style = "opacity: 0.5;";
    document.getElementById("tiger").style = "opacity: 1;";

    makeTimer("FMA", 60, containerId);
    makeTimer("Dash", 10, containerId, false, false);
    makeTimer("TP", 10, containerId, false, false);
}

function phaseTwo() {
    const containerId = "timers2";
    const section = document.getElementById(containerId);
    section.innerHTML = "";

    document.getElementById("p2").style = "opacity: 0.5;";
    makeTimer("FMA", 60, containerId, true);
    makeTimer("Fly", 18, containerId);
    makeTimer("Clutch", 10, containerId, true);
    makeTimer("Scroll", 30, containerId, false, false);
    makeTimer("TP", 8, containerId, false, false);
}

function phaseThree() {
    const containerId = "timers3";
    const section = document.getElementById(containerId);
    section.innerHTML = "";
    
    document.getElementById("p3").style = "opacity: 0.5;";
    makeTimer("Clutch", 13, containerId, true);
    makeTimer("Chain", 10, containerId, false, false);    
    makeTimer("Slam", 13, containerId, false, false);
    makeTimer("Scroll", 12, containerId, false, false);

}

function phaseFour() {
    const containerId = "timers4";
    const section = document.getElementById(containerId);
    section.innerHTML = "";
    
    document.getElementById("p4").style = "opacity: 0.5;";
    makeTimer("FMA", 60, containerId, true);
    makeTimer("Clutch", 10, containerId, true, false);

}

let helpVar = 1;

function showHelp() {
    if (helpVar === 1) {
        document.getElementById("helpText").style.display = "block";
    } else {
        document.getElementById("helpText").style.display = "none";
    }

    helpVar *= -1;
}

function showPhase(phaseId) {
    const phases = document.querySelectorAll('.phase');

    phases.forEach(phase => {
        phase.style.display = 'none';
        phase.style.opacity = '0';
    });

    const phase = document.getElementById(phaseId);

    phase.style.display = 'block';

    setTimeout(() => {
        phase.style.transition = 'opacity 0.67s ease';
        phase.style.opacity = '1';
    }, 10);
}

showPhase('phase1');