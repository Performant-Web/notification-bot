require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { TOKEN } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', message => {

    const attachments = message.attachments.map(i => i);

    const imgSize = 80;

    const data = {
        message: {
            id: message.id,
            content: message.content,
            img: (attachments.length) ? attachments[0].url : null,
            createdAt: message.createdAt,
        },
        user: {
            id: message.author.id,
            name: message.author.username,
            img: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.webp?size=${imgSize}`,
        },
        server: {
            id: message.guildId,
            name: message.guild.name,
            img: `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.webp?size=${imgSize}`,
        },
        channel: {
            id: message.channelId,
            name: message.channel.name,
        },
    };

    console.log(data);

});

client.login(TOKEN);