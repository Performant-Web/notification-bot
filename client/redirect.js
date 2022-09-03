const url = 'https://discord.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'

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

function six() {
    document.open(url);
}