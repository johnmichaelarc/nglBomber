var request = require('request');
const { v4: uuidv4 } = require('uuid');

var options = {
  'method': 'POST',
  'url': 'https://ngl.link/jijibolkang',
  form: {
    'question': '',
    'deviceId': `${uuidv4()}`
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
