// const url = 'https://discord.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
const url = 'discord://discord.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
// const url = 'discord://discordapp.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
// const url = 'https://discordapp.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'

window.open('discord://discord.com/channels/1011637841199112192/1011637841807278084/1015470189120331786', '_system');

/*
window.onload = (event) =>{
    window.location.assign(url);
};
*/

// MAYBE USE REPLACE OVER ASSIGN

/*
window.addEventListener('load', (event) =>{

    console.log(Page Loaded);

});
*/

function one() {
    window.location.assign(url);
}

function two() {
    window.location.href = url;
}

function three() {
    window.open(url);
}

function four() {
    document.location.assign(url);
}

function five() {
    document.location.href = url;
}