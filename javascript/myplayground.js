
const prompt=require("prompt-sync")({sigint:true}); 
let amount = prompt('Enter the amount:')
let disc = 0.2

totalAmount = amount * disc
console.log(totalAmount)