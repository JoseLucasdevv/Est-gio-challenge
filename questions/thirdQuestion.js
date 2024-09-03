const fs = require("fs").promises;
const path = require("path");

function getMaxValue(revenue, monthlyAverage) {
  const days = [];
  let maxValue = revenue[0].valor;
  for (let i = 0; i < revenue.length; i++) {
    if (revenue[i].valor === 0) continue;

    if (revenue[i].valor > monthlyAverage) {
        
      days.push(revenue[i].dia);
    }
    if (revenue[i].valor > maxValue) {
      maxValue = revenue[i].valor;
    }
  }

  return {maxValue,days};
}
function getLowerValue(revenue) {
    
  let lowerValue = revenue[0].valor;
  for (let i = 0; i < revenue.length; i++) {
    if (revenue[i].valor === 0) continue;
    
    if (revenue[i].valor < lowerValue) {
      lowerValue = revenue[i].valor;
    }
  }

  return lowerValue;
}


async function thirdQuestion(monthlyAverage) {

    if(!monthlyAverage) return;
    if(typeof monthlyAverage !== 'number')return NaN
  try {
    const filePath = path.join(__dirname, "..", "utils", "dados.json");

    const fileContent = await fs.readFile(filePath, "utf8");

    const data = JSON.parse(fileContent);
    

    const lowerValue = getLowerValue(data);

    const {maxValue,days} = getMaxValue(data, monthlyAverage);
    
    console.log(`max Value: ${maxValue}`)
    console.log(`lower Value: ${lowerValue}`);
    console.log(`days that earned more than the monthly average: ${days}`)

    console.log(maxValue);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

thirdQuestion(22000)



module.exports = thirdQuestion
