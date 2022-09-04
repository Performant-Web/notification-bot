const mobile = 'https://discord.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
const desktop = 'discord://discord.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
/*
let requesting = browser.permissions.request(
    permissions
  )
  */

setTimeout(() => {
    document.getElementById('mycheck').click();
}, 1000);

/*
window.addEventListener('load', (event) =>{

    console.log(Page Loaded);

});
*/

function myFunction() {
    document.getElementById('mycheck').click();
}

function mFunction() {
    document.getElementById('mcheck').click();
}

function redirect1() {
    window.open(mobile);
}

function redirect2() {
    window.open(desktop);
}