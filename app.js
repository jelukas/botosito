var TwitterBot = require("node-twitterbot").TwitterBot;
 
// Include your access information below
var Bot = new TwitterBot({
  "consumer_secret": "4ZHAU44pLge1PUa9c6aEAQZ8D54Kf20UzKfiNijJftna2BEMbG",
  "consumer_key": "oCGcUnuqQyrAaeZhqfbJmWd3o",
  "access_token": "3003066754-VxEzsRX5PHacfRXmkK36SnsW2ADS6mmg0Fuq9ap",
  "access_token_secret": "XRp0b07eUiT9FuwMLCYRSYQbjvKgE2ORZKgpH1zmj5TIC"
});
 
Bot.tweet("@jelukas89 hola ! ");

