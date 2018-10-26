const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {


if (message.content.startsWith(client.config.defaultSettings.prefix + "servers")) {
    if (message.author.id !== '297193056363610112') return message.channel.send("You are not authorized to use this command.");
    let string = '';

    client.guilds.forEach(guild => {
        string += '***Server Name:*** ' + guild.name + '\n' + '***Server ID:***` ' + guild.id + ' ` ' + '\n\n';

    })

    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("Bot is On ", string)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);
    message.channel.send(botembed);
}

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Bot Owner"
};

exports.help = {
    name: "serversinfo",
    category: "System",
    description: "showes servers.",
    usage: "serversinfo"
};
