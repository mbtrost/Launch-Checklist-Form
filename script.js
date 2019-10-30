// Write your JavaScript code here!
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
      alert("All fields are required!");
      document.querySelector("faultyItems").style.visibility = "hidden";
    }
    if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
      alert("Information invalid");
      document.querySelector("faultyItems").style.visibility = "hidden";
    }
    if (fuelLevelInput.value < 10000){
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("launchStatus").style.color="red"
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch.";
    }
    if (cargoMassInput.value > 10000){
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("launchStatus").style.color="red"
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
    }
    if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000){
      document.getElementById("faultyItems").style.visibility = "hidden";
      document.getElementById("launchStatus").style.color="green"
      document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
    }
    event.preventDefault();
  });

  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
    response.json().then(function(json) {
      let num = Math.floor(Math.random()*(json.length+1));
      console.log(num);
      let div = document.getElementById("missionTarget");
      div.innerHTML = `
        <h2>Mission Destination</h2>
      <ol>
        <li>Name: ${json[num].name}</li>
        <li>Diameter: ${json[num].diameter}</li>
        <li>Star: ${json[num].star}</li>
        <li>Distance from Earth: ${json[num].distance}</li>
        <li>Number of Moons: ${json[num].moons}</li>
      </ol>
      <img src="${json[num].image}">
      `
    });
  });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
