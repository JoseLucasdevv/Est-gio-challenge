function fourthQuestion(SP = 6783643,RJ = 3667866,MG = 2922988,ES = 2716548,outros = 1984953 ){
const TOTAL = SP + RJ + MG + ES + outros

const spPercent = calculatePercent(TOTAL,SP)
const rjPercent = calculatePercent(TOTAL, RJ);
const mgPercent = calculatePercent(TOTAL, MG);
const esPercent = calculatePercent(TOTAL, ES);
const outrosPercent = calculatePercent(TOTAL, outros);

  console.log(`SP: ${spPercent.toFixed(2)}%`);
  console.log(`RJ: ${rjPercent.toFixed(2)}%`);
  console.log(`MG: ${mgPercent.toFixed(2)}%`);
  console.log(`ES: ${esPercent.toFixed(2)}%`);
  console.log(`Outros: ${outrosPercent.toFixed(2)}%`);

}

function calculatePercent(total,state){
  return (state / total) * 100;

}



module.exports = fourthQuestion