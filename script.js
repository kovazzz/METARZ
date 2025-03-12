function startPractice(mode) {
    document.getElementById("practice-container").classList.remove("hidden");
}

function generateMETAR() {
    let metar = "KLAX 24012KT 10SM FEW250 25/12 A2992";
    document.getElementById("metar-text").innerText = metar;
    document.getElementById("metar-display").classList.remove("hidden");
}

function checkMETAR() {
    let answer = document.getElementById("answer").value;
    if (answer.toUpperCase() === "KLAX") {
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Try Again.";
    }
}

function loadLevel(level) {
    let metars = {
        1: "KLAX 24012KT 10SM FEW250 25/12 A2992",
        2: "KJFK 18008KT 7SM SCT200 20/10 A3001"
    };
    document.getElementById("level-text").innerText = `Decode: ${metars[level]}`;
    document.getElementById("level-display").classList.remove("hidden");
}

function checkLevel() {
    let answer = document.getElementById("level-answer").value;
    document.getElementById("level-result").innerText = answer ? "Checked!" : "Enter something!";
}

function showLesson(topic) {
    let lessons = {
        "airport": "Airports are identified by ICAO codes (e.g., KLAX = Los Angeles).",
        "wind": "Wind format: 24012KT (Direction: 240°, Speed: 12 knots).",
        "temp": "Temperature format: 25/12 (Temperature: 25°C, Dew Point: 12°C)."
    };
    document.getElementById("lesson-content").innerText = lessons[topic];
}
