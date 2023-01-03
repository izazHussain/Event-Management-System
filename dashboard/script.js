console.log("Connected")
function addStudent() {
  var taskname = document.sample.taskname.value;
  var teamassigned = document.sample.teamassigned.value;
  var duetime = document.sample.duetime.value;
  var details = document.sample.details.value;
  var status = document.sample.status.value;

  var tr = document.createElement("tr");

  var td1 = tr.appendChild(document.createElement("td"));
  var td2 = tr.appendChild(document.createElement("td"));
  var td3 = tr.appendChild(document.createElement("td"));
  var td4 = tr.appendChild(document.createElement("td"));
  var td5 = tr.appendChild(document.createElement("td"));
  var td6 = tr.appendChild(document.createElement("td"));
  var td7 = tr.appendChild(document.createElement("td"));

  td1.innerHTML = taskname;
  td2.innerHTML = teamassigned;
  td3.innerHTML = duetime;
  td4.innerHTML = details;
  td5.innerHTML = status;
  td6.innerHTML =
    '<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn">';
  td7.innerHTML =
    '<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn">';

  document.getElementById("tbl").appendChild(tr);
}

function UpStud(stud) {
  var taskname = document.sample.taskname.value;
  var teamassigned = document.sample.teamassigned.value;
  var duetime = document.sample.duetime.value;
  var details = document.sample.details.value;
  var status = document.sample.status.value;
  var s = stud.parentNode.parentNode;
  var tr = document.createElement("tr");

  var td1 = tr.appendChild(document.createElement("td"));
  var td2 = tr.appendChild(document.createElement("td"));
  var td3 = tr.appendChild(document.createElement("td"));
  var td4 = tr.appendChild(document.createElement("td"));
  var td5 = tr.appendChild(document.createElement("td"));
  var td6 = tr.appendChild(document.createElement("td"));
  var td7 = tr.appendChild(document.createElement("td"));

  td1.innerHTML = '<input type="text" name="taskname1">';
  td2.innerHTML = '<input type="text" name="teamassigned1">';
  td3.innerHTML = '<input type="text" name="duetime1">';
  td4.innerHTML = '<input type="text" name="details1">';
  td5.innerHTML = '<input type="text" name="status1">';
  td6.innerHTML =
    '<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn">';
  td7.innerHTML =
    '<input type="button" name="up" value="Update" onclick="addUpStud(this);" class="btn">';

  document.getElementById("tbl").replaceChild(tr, s);
}

function addUpStud(stud){
  var taskname = document.sample.taskname.value;
  var teamassigned = document.sample.teamassigned.value;
  var duetime = document.sample.duetime.value;
  var details = document.sample.details.value;
  var status = document.sample.status.value;
  var s = stud.parentNode.parentNode;
  var tr = document.createElement('tr');
  
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
  var td6 = tr.appendChild(document.createElement('td'));
  var td7 = tr.appendChild(document.createElement('td'));
  
  
  td1.innerHTML = taskname;
  td2.innerHTML = teamassigned;
  td3.innerHTML = duetime;
  td4.innerHTML = details;
  td5.innerHTML = status;
  td6.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn">'
  td7.innerHTML='<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn">'

  document.getElementById("tbl").replaceChild(tr, s);
}



function delStudent(Stud) {
  var s = Stud.parentNode.parentNode;
  s.parentNode.removeChild(s);
}
