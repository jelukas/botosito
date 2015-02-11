var Twit = require('twit');

 
var T = new Twit({
	consumer_secret: '4ZHAU44pLge1PUa9c6aEAQZ8D54Kf20UzKfiNijJftna2BEMbG',
	consumer_key: 'oCGcUnuqQyrAaeZhqfbJmWd3o',
	access_token: '3003066754-VxEzsRX5PHacfRXmkK36SnsW2ADS6mmg0Fuq9ap',
	access_token_secret: 'XRp0b07eUiT9FuwMLCYRSYQbjvKgE2ORZKgpH1zmj5TIC'
});


mensajes = [
	'hey @{screen_name} wanna learn growth hacking? follow me and get the best growth hackes. Early launch',
	'@{screen_name} learn growth hacking on growthhackers.com',
	'hi @{screen_name}, you can learn growth hacking here: growthhackers.com'
	];


console.log("Reading in the last 10 tweets with search: growthhacking that contains links");
T.get('search/tweets', { q: '#growthhack filter:links -RT', count: 10 }, function(err, reply) {
    if (err) {
        console.dir(err);
    } else {
        for (var i = 0; i < reply.statuses.length; i++) {
            var status = reply.statuses[i];
            console.log('*************************');
            console.log('  username: @' + status.user.screen_name);
            console.log('   ' + status.text);
            console.log('  time/date: ' + status.created_at);
            console.log('*************************');
	    mention_to_user(status.user.screen_name);
        }
    }
});


function get_random_from_array(array){
	var item = array[Math.floor(Math.random()*array.length)];
	return item;
}

function mention_to_user(screen_name){
	var message = get_random_from_array(mensajes).replace('{screen_name}', screen_name);
	T.post('statuses/update', { status: message }, function(err, data, response) {
		if (err) {
        		console.dir(err);
	 	} else {
			//console.log(data);
		}
	});
}
