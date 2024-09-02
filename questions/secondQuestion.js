function secondQuestion(userInput){
    if(!userInput){
        console.log("it's a false Value" );
        return NaN
    }

    if(typeof userInput !== 'number') {
      console.log("this value it's NaN");
      return NaN
    }

    
let n1 = 0  ,n2 = 1,next = 0

if (userInput === 0 || userInput === 1){
  console.log(`Your Number: ${userInput} exists in the fibonnaci sequence`);
  return true;
}

for(let i = 0 ; i<userInput; i++){
    
    next = n1 + n2;
    n1 = n2
    n2 = next
    if (userInput === n2){
      console.log(
        `Your Number: ${userInput} exists in the fibonnaci sequence `
      );
      return true
    }
}

console.log(
  `your Number:${userInput} it doesn't exists in the fibonnaci sequence`
);
return false;

}



module.exports = secondQuestion