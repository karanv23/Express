const ExpressClient = require('./Structures/ExpressClient.js');
const config = require('../config');

client.on('ready', () => {
  client.user.setActivity('CGX HΩMΞTΩWN™');
})

const client = new ExpressClient(config);
client.start();
