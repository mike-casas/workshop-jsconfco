/*
  params
  https://url?webtask_no_cache=1&body='+ params.body +'&title='+ params.title +'&type='+ params.type;
*/

var request = require('request');
module.exports = function(){

  var data= {
    "title": "Jsconf",
    "body": "movimiento en la sala , todos felices",
    "note": "note"
  }

  var params = "&body="+ data.body+ "&title="+ data.title+ "&type=" + data.note;
  var url = "https://wt-neneriostb-gmail_com-0.run.webtask.io/sensor?webtask_no_cache=1"
  
  request({
    url: url+params
  }, function(err, res, body){
    console.log('success');
  });
}
