exports.run = async (client, message, args, level) => {

    if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        return;
    } else if (!message.channel.permissionsFor(client.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        return;
    }

    if (message.channel.type == 'text') {
        message.channel.fetchMessages()
            .then(messages => {
                message.channel.bulkDelete(messages);
                messagesDeleted = messages.array().length; // number of messages deleted

                // Logging the number of messages deleted on both the channel and console.
                message.channel.send("Deletion of messages successful. Total messages deleted: "+messagesDeleted);
                console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
            })
            .catch(err => {
                console.log('Error while doing Bulk Delete');
                console.log(err);
            });
    }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Server Owner"
};

exports.help = {
    name: "clearmessages",
    category: "System",
    description: "clears messages for the current message location.",
    usage: "clearmessages"
};
