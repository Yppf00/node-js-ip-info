const satelize = require('satelize')
const prompt = require("prompt-sync")({ sigint: true });
const value = prompt("enter the ip ");
satelize.satelize({ ip: value }, (err, payload) => {
   console.log(payload)
})