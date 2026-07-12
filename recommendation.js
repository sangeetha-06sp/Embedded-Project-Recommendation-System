/* ==========================================
   EMBEDCRAFT - RECOMMENDATION.JS
========================================== */

function generateRecommendation() {

    let data = JSON.parse(localStorage.getItem("projectData"));

    if (!data) {

        alert("Please complete all the previous steps.");

        window.location.href = "domain.html";

        return;

    }

    let projectName =
        "Smart " + data.domain + " Monitoring System";

    let cost = "₹2,000 - ₹3,500";

    let difficulty = "Intermediate";

    let futureScope =
        "AI Integration, IoT Cloud Monitoring, Mobile App Control";

    document.getElementById("projectName").innerHTML = projectName;

    document.getElementById("domain").innerHTML = data.domain;

    document.getElementById("controller").innerHTML = data.controller;

    document.getElementById("communication").innerHTML =
        data.communication;

    document.getElementById("sensors").innerHTML =
        data.sensors.join(", ");

    document.getElementById("features").innerHTML =
        data.features.join(", ");

    document.getElementById("cost").innerHTML = cost;

    document.getElementById("difficulty").innerHTML = difficulty;

    document.getElementById("future").innerHTML = futureScope;

}

// Restart Project

function restartProject() {

    localStorage.removeItem("projectData");

    window.location.href = "index.html";

}