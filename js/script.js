var users = [];

function submitUser() {
  var name = document.querySelector("#nameInput").value;
  var airline = document.querySelector("#airlinesSelect").value;
  users.push({ name: name, airline: airline, });
  document.querySelector("#nameInput").value = "";
  document.querySelector("#airlinesSelect").value = "";
}
function displayUsers() {
  var table = document.getElementById("usersTable");

  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  for (var i = 0; i < users.length; i++) {
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var airlineCell = row.insertCell(1);
    nameCell.innerHTML = users[i].name;
    airlineCell.innerHTML = users[i].airline;
  }
}
