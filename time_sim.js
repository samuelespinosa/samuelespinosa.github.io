var PD = require("probability-distributions");
var probs=PD.rnorm(100, 2, 1);
console.log(probs);
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function simulator() {
    
    count_user_arises = 0;
    count_client_arises = 0;
   
    const interval = setInterval(function() {
        count_user_arises=0;
        count_interested_arises=0;
    }, 10000);

    let probability=Math.abs(r_probs[count_client_arises]);
    
  }
  
  module.exports = {simulator};