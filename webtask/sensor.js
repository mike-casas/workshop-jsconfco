// curl --headers 'Access-Token: <your_access_token_here>' \
//     --header 'Content-Type: application/json' \
//     --data-binary '{"body":"Space Elevator","title":"Space Travel Ideas","type":"note"}' \
//     --request POST \
//     https://api.pushbullet.com/v2/pushes

// ctx.data.SECRET
// params of  messages
var request = require('request');

module.exports  = function(ctx,cb){
  var options = {
    url: "https://api.pushbullet.com/v2/pushes",
    method: "POST",
    headers: {
      'Access-Token': ctx.data.SECRET,
      'Content-Type': "application/json"
    },
    body: {
      "title": ctx.data.title,
      "body": ctx.data.body,
      "type": "note"
    }
  };

  request(options, function(err, res, body){
    console.log(res.statusCode);
     cb(null, 'success')
  })
}
