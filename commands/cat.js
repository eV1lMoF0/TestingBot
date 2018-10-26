const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (message) => {

  let {body} = await superagent
      .get('http://aws.random.cat/meow');

  let catembed = new Discord.RichEmbed()
      .setColor("#ffff00")
      .setTitle("Cat")
      .setImage(body.file);

  message.channel.send(catembed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  cooldown: "5",
  permLevel: "User"
};

exports.help = {
    name: "cat",
    category: "Fun Stuff",
    description: "Get a random cat",
    usage: "cat"
};
