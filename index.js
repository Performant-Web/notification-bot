require('dotenv').config();
const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const { Client, GatewayIntentBits } = require('discord.js');
const { TOKEN } = process.env;
const PORT = process.env.PORT || 5000;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

let subscription = '';
let payload = '';

function push() {
    webpush.sendNotification(subscription, payload).catch(console.log);
}

client.on('messageCreate', message => {
    const attachments = message.attachments.map(i => i);
    const imgSize = 96;
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
    // Refactor so payload is created directly from message
    payload = JSON.stringify({
        title: data.user.name,
        body: data.message.content,
        icon: data.user.img,
        image: data.message.img,
        url: `discord://discord.com/channels/${data.server.id}/${data.channel.id}/${data.message.id}`,
    });
    push();

});

client.login(TOKEN);

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));
app.set('view-engine', 'html');

const publicVapidKey = process.env.PUBLIC_KEY;
const privateVapidKey = process.env.PRIVATE_KEY;

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

app.get('/', (req, res) => {
    res.status(200);
    res.render('index');
});

app.get('/redirect', (req, res) => {
    res.sendFile(__dirname + '/client/redirect.html');
});

app.post('/subscribe', (req, res) => {
    subscription = req.body;
    res.status(201).json({});
});

app.listen(PORT, () => {
    console.log('Server started on port http://localhost:' + PORT);
});