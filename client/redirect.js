const url1 = 'https://discord.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
const url2 = 'discord://discord.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
const url3 = 'discord://discordapp.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
const url4 = 'https://discordapp.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
/*
let requesting = browser.permissions.request(
    permissions
  )
  */
/*
setTimeout(() => {
    redirect();
}, 10000);
*/
/*
window.addEventListener('load', (event) =>{

    console.log(Page Loaded);

});
*/

function redirect1() {
    window.location.assign(url1);
}

function redirect2() {
    window.location.assign(url2);
}

function redirect3() {
    window.location.assign(url3);
}

function redirect4() {
    window.location.assign(url4);
}
/*
const permissionsNames = [
    "geolocation",
    "notifications",
    "push",
    "midi",
    "camera",
    "microphone",
    "speaker",
    "device-info",
    "background-fetch",
    "background-sync",
    "bluetooth",
    "persistent-storage",
    "ambient-light-sensor",
    "accelerometer",
    "gyroscope",
    "magnetometer",
    "clipboard",
    "display-capture",
    "nfc"
  ]
  
  const getAllPermissions = async () => {
    const allPermissions = []
    // We use Promise.all to wait until all the permission queries are resolved
    await Promise.all(
      permissionsNames.map(async permissionName => {
          try {
            let permission
            switch (permissionName) {
              case 'push':
                // Not necessary but right now Chrome only supports push messages with  notifications
                permission = await navigator.permissions.query({name: permissionName, userVisibleOnly: true})
                break
              default:
                permission = await navigator.permissions.query({name: permissionName})
            }
            console.log(permission)
            allPermissions.push({permissionName, state: permission.state})
          }
          catch(e){
            allPermissions.push({permissionName, state: 'error', errorMessage: e.toString()})
          }
      })
    )
    return allPermissions
  }

  console.log(getAllPermissions());
  */