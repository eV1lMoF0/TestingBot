const Discord = require('discord.js');
const { get } = require('node-superfetch');

exports.run = async (message, color) => {

    let m = await message.channel.send(`*Please Wait...*`);
    try {
        const { body } = await get('https://api-to.get-a.life/meme');

        let memeEmbed = new Discord.RichEmbed()
            .setColor(color)
            .setTitle(body.text)
            .setImage(body.url)
            .setTimestamp()
            .setFooter(`Request by: ${message.author.tag}`);

        message.channel.send(memeEmbed).then(() => { m.delete();});
    } catch (e) {
        message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  cooldown: "5",
  permLevel: "User"
};

exports.help = {
    name: "meme",
    category: "Fun Stuff",
    description: "Get a random meme",
    usage: "meme"
};
