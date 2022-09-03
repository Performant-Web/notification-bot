const url = 'https://discord.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
// const url = 'discord://discord.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
// const url = 'discord://discordapp.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
// const url = 'https://discordapp.com/channels/1011637841199112192/1011637841807278084/1015470189120331786'
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

function redirect() {
    window.open(url, '_system');
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