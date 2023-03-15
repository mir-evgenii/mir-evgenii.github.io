
let obj_commands = {
  bio: `- In 2015 I started to study programming at the university.<br>
        - Worked in a university project from 2017 - 2018 using Python and Linux as an Intern developer.<br>
        - In 2019 - 2021 worked as a Test Engineer and Intern PHP developer.<br>
        - In 2021 - 2022 worked as a Perl developer in payment system.<br>
        - Since 2022 I have been working as a PHP developer in a startup in the service sector.`,
  skills: 'Backend | PHP | Python | Perl',
  projects: "<a href='https://github.com/mir-evgenii'>Github</a>",
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

