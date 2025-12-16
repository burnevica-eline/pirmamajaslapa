const teamMembers = [
    { name: "Elīne", role: "Dizainere", age: 21, gender: "Sieviete", responsibilities: "Lapas dizains, krāsu palete, fontu izvēle" },
    { name: "Mārtiņš", role: "Programmētājs", age: 21, gender: "Vīrietis", responsibilities: "Datu apstrāde, vizualizācijas" },
];

function displayTeam() {
var container = document.getElementById("team-container");
for (var i = 0; i < teamMembers.length; i++) {
var member = teamMembers[i];
var memberDiv = document.createElement("div");
memberDiv.innerHTML = "<h3>" + member.name + "</h3>" +
"<p><strong>Loma:</strong> " + member.role + "</p>" +
"<p><strong>Vecums:</strong> " + member.age + "</p>" +
"<p><strong>Dzimums:</strong> " + member.gender + "</p>" +
"<p><strong>Pienākumi:</strong> " + member.responsibilities + "</p>";
container.appendChild(memberDiv);
    }
}

window.onload = function() {
    displayTeam();
};