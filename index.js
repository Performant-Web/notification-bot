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
        username: message.author.username,
        userImg: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.webp?size=${imgSize}`,
        message: message.content,
        messageImg: (attachments.length) ? attachments[0].url : null,
        server: message.guild.name,
        serverImg: `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.webp?size=${imgSize}`,
        channel: message.channel.name,
        createdAt: message.createdAt,
        };

    console.log(data);

});

client.login(TOKEN);