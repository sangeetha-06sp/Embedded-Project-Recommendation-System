function generateProject(){

    let application = document.getElementById("application").value;
    let controller = document.getElementById("controller").value;
    let communication = document.getElementById("communication").value;

    let result = document.getElementById("result");

    if(application=="" || controller=="" || communication==""){
        result.innerHTML="<h3>Please select all required fields.</h3>";
        return;
    }

    result.innerHTML=`
    <h2>Recommended Project</h2>

    <p><b>Project Name:</b> Smart ${application} Monitoring System</p>

    <p><b>Controller:</b> ${controller}</p>

    <p><b>Communication:</b> ${communication}</p>

    <p><b>Estimated Cost:</b> ₹1800 - ₹2500</p>

    <p><b>Difficulty:</b> Intermediate</p>

    <p><b>Application:</b> ${application}</p>
    `;
}