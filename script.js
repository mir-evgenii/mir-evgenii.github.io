
let obj_commands = {
  bio: "<a href='https://github.com/mir-evgenii'>Github</a>",
  skills: '',
  projects: '',
  git: "<a href='https://github.com/mir-evgenii'>Click here!</a>",
  help: "Some help<br>and nothing<br>not work...",
  cat: `──────▄▀▄─────▄▀▄──────<br>
        ─────▄█░░▀▀▀▀▀░░█▄─────<br>
        ─▄▄──█░░░░░░░░░░░█──▄▄─<br>
        █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█`,
  alien: `▒▒▄▀▀▀▀▀▄▒▒▒▒▒▄▄▄▄▄▒▒▒<br>
          ▒▐░▄░░░▄░▌▒▒▄█▄█▄█▄█▄▒<br>
          ▒▐░▀▀░▀▀░▌▒▒▒▒▒░░░▒▒▒▒<br>
          ▒▒▀▄░═░▄▀▒▒▒▒▒▒░░░▒▒▒▒<br>
          ▒▒▐░▀▄▀░▌▒▒▒▒▒▒░░░▒▒▒▒`,
  ufo: `──────────────▄▀█▀█▀▄─<br>
        ─────────────▀▀▀▀▀▀▀▀▀<br> 
        ─────────────▄─░░░░░▄─<br>
        ───█──▄─▄───▐▌▌░░░░░▌▌<br>
        ▌▄█▐▌▐█▐▐▌█▌█▌█░░░░░▌▌`,
  robot: `░░░░░░░▄█▄▄▄█▄░░░░░░░<br>
          ▄▀░░░░▄▌─▄─▄─▐▄░░░░▀▄<br>
          █▄▄█░░▀▌─▀─▀─▐▀░░█▄▄█<br>
          ░▐▌░░░░▀▀███▀▀░░░░▐▌░<br>
          ████░▄█████████▄░████`,
  coffee: `─▄▀─▄▀───<br>
           ──▀──▀───<br>
           █▀▀▀▀▀█▄─<br>
           █░░░░░█─█<br>
           ▀▄▄▄▄▄▀▀─`,
};

function runCommand (command) {

  if (command === 'clear') {
    document.getElementById('output').innerHTML = '';
    return null;
  }

  for (key in obj_commands) {
    if (key === command) return obj_commands[key];
  }

  return `Error ¯\\_(ツ)_/¯ use command - help`;
}

document.addEventListener('keydown', function(event) {
  if (event.code == 'Enter') {
    let command = document.getElementById('input').value;
    document.getElementById('input').value = "";
    command = command.replace(/\s+/g, '');
    document.getElementById('output').innerHTML += "<br>eugene@github:~$ " + command;
    result = runCommand(command);
    if (result) document.getElementById('output').innerHTML += "<br>" + result;
  }
});

