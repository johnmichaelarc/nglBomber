var request = require('request');
const { v4: uuidv4 } = require('uuid');

// settings
let targetUser = 'mainhabs'; //jijibolkang
let message = `
Ang nagednis nitong ilaw (ang nagednis nitong ilaw)
Alaws iba kundi Ikaw (Alaws iba kundi Ikaw)
Salamat sa liwanag Mo (salamat sa liwanag Mo)
Muling magkakakulay ang Pasko
Salamat sa liwanag Mo (salamat sa liwanag Mo)
Muling magkakakulay ang Pasko
`;
let messageCount = 50;

const welcome = `
 ███▄    █   ▄████  ██▓        ▄▄▄▄    ██▀███   ▒█████  
 ██ ▀█   █  ██▒ ▀█▒▓██▒       ▓█████▄ ▓██ ▒ ██▒▒██▒  ██▒
▓██  ▀█ ██▒▒██░▄▄▄░▒██░       ▒██▒ ▄██▓██ ░▄█ ▒▒██░  ██▒
▓██▒  ▐▌██▒░▓█  ██▓▒██░       ▒██░█▀  ▒██▀▀█▄  ▒██   ██░
▒██░   ▓██░░▒▓███▀▒░██████▒   ░▓█  ▀█▓░██▓ ▒██▒░ ████▓▒░
░ ▒░   ▒ ▒  ░▒   ▒ ░ ▒░▓  ░   ░▒▓███▀▒░ ▒▓ ░▒▓░░ ▒░▒░▒░ 
░ ░░   ░ ▒░  ░   ░ ░ ░ ▒  ░   ▒░▒   ░   ░▒ ░ ▒░  ░ ▒ ▒░ 
   ░   ░ ░ ░ ░   ░   ░ ░       ░    ░   ░░   ░ ░ ░ ░ ▒  
         ░       ░     ░  ░    ░         ░         ░ ░  
                                    ░                   
`

console.log(welcome)

let sendMessage = () => {
  var options = {
  'method': 'POST',
  'url': 'https://ngl.link/api/submit',
    form: {
    'username': `${targetUser}`,
    'question': `${message}`,
    'deviceId': `${uuidv4()}`
  },
  };
  request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(`[${targetUser}] -- Message: ${message} | Sent !`);
});
}

for (let i = 0; i < messageCount; i++){
  sendMessage()
}
