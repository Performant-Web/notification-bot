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
            content: message.content,
            id: message.id,
            img: (attachments.length) ? attachments[0].url : null,
            createdAt: message.createdAt,
        },
        user: {
            name: message.author.username,
            id: message.author.id,
            img: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.webp?size=${imgSize}`,
        },
        server: {
            name: message.guild.name,
            id: message.guildId,
            img: `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.webp?size=${imgSize}`,
        },
        channel: {
            name: message.channel.name,
            id: message.channelId,
        },
    };

    console.log(data);

});

client.login(TOKEN);