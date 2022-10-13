/* global fetch */

console.log("yo");

document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("monsterInput").value;
    if (value === "") return;
    var modifiedValue = value.toLowerCase().split(" ").join("-");
    const url = "https://api.open5e.com/monsters/" + modifiedValue + "/?format=json";
    console.log(url);
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        // insert stuff here
    });
});