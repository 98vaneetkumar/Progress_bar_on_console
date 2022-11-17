// const logUpdate = require("log-update")

import logUpdate from "log-update";

// let frames=['loading','loading.','loading..','loading...','loading.../','loading...*','loading...\\']

// let frames=['/','*','\\'];

let frames=['🕛','🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚']

let i=0;
setInterval(()=>{
 const frame=frames[i++ % frames.length];
 logUpdate(frame);
},200)


