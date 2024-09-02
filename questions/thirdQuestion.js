const fs = require("fs").promises;
const path = require("path");

function getMaxValue(revenue, monthlyAverage) {
  const days = [];
  let maxValue = revenue[0].max_value;
  for (let i = 0; i < revenue.length; i++) {
    if (revenue[i].max_value === 0) continue;

    if (revenue[i].max_value > monthlyAverage) {
        
      days.push(revenue[i].day);
    }
    if (revenue[i].max_value > maxValue) {
      maxValue = revenue[i].max_value;
    }
  }

  return {maxValue,days};
}
function getLowerValue(revenue) {
    
  let lowerValue = revenue[0].max_value;
  for (let i = 0; i < revenue.length; i++) {
    if (revenue[i].max_value === 0) continue;
    
    if (revenue[i].max_value < lowerValue) {
      lowerValue = revenue[i].max_value;
    }
  }

  return lowerValue;
}


async function thirdQuestion(monthlyAverage) {

    if(!monthlyAverage) return;
    if(typeof monthlyAverage !== 'number')return NaN
  try {
    const filePath = path.join(__dirname, "..", "utils", "thirdQuestion.json");

    const fileContent = await fs.readFile(filePath, "utf8");

    const data = JSON.parse(fileContent);
    const revenue = data.revenue;

    const lowerValue = getLowerValue(revenue);

    const {maxValue,days} = getMaxValue(revenue, monthlyAverage);
    
    console.log(`max Value: ${maxValue}`)
    console.log(`lower Value: ${lowerValue}`);
    console.log(`days that earned more than the monthly average: ${days}`)

    console.log(maxValue);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}



module.exports = thirdQuestion
