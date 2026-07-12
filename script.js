/* ==========================================
   EMBEDCRAFT - SCRIPT.JS
========================================== */

// Store user selections
let projectData = {
    domain: "",
    controller: "",
    communication: "",
    sensors: [],
    features: []
};

// Save data in browser
function saveData(){

    localStorage.setItem(
        "projectData",
        JSON.stringify(projectData)
    );

}

// Load saved data
function loadData(){

    let data = localStorage.getItem("projectData");

    if(data){

        projectData = JSON.parse(data);

    }

}

// Go to next page
function nextPage(page){

    window.location.href = page;

}

// Go to previous page
function previousPage(page){

    window.location.href = page;

}

// Domain Selection
function selectDomain(domain){

    projectData.domain = domain;

    saveData();

}

// Controller Selection
function selectController(controller){

    projectData.controller = controller;

    saveData();

}

// Communication Selection
function selectCommunication(type){

    projectData.communication = type;

    saveData();

}

// Sensor Selection
function toggleSensor(sensor){

    if(projectData.sensors.includes(sensor)){

        projectData.sensors =
        projectData.sensors.filter(item => item !== sensor);

    }

    else{

        projectData.sensors.push(sensor);

    }

    saveData();

}

// Feature Selection
function toggleFeature(feature){

    if(projectData.features.includes(feature)){

        projectData.features =
        projectData.features.filter(item => item !== feature);

    }

    else{

        projectData.features.push(feature);

    }

    saveData();

}

// Clear Project
function resetProject(){

    localStorage.removeItem("projectData");

}