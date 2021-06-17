
let obj_commands = {
  name: 'Eugene',
  age: '99',
  help: "Some help<br>and nothing<br>not work..."
};

function runCommand (command) {
  for (key in obj_commands) {
    if (key === command) return obj_commands[key];
  }
  return 'Error';
}

document.addEventListener('keydown', function(event) {
  if (event.code == 'Enter') {
    let command = document.getElementById('input').value;
    document.getElementById('input').value = "";
    document.getElementById('output').innerHTML += "<br>eugene@github:~$ " + command;
    result = runCommand(command);
    if (result) document.getElementById('output').innerHTML += "<br>" + result;
  }
});

