function fifthQuestion(string){
let str = new String();
for(let i = string.length - 1 ; i>=0 ; i--){
    console.log(i)
    str += string[i];
}
console.log(str)

return str;

}




module.exports = fifthQuestion