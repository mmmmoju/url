const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("579978587831009281")
setInterval(function() {
channel.send(`ilove you moody and braahim @«MDX»#0567  @«HMX»`#0039 `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
