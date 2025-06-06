 const convertBtn = document.getElementById("convert-btn");
 const output = document.getElementById("output");
 const romanNumerals = [{
   roman: "M",
   numeral: 1000
 },
 {
   roman: "CM",
   numeral: 900
 },
 {
   roman: "D",
   numeral: 500
 },
 {
   roman: "CD",
   numeral: 400
 },
 {
   roman: "C",
   numeral: 100
 },
 {
   roman: "XC",
   numeral: 90
 },
 {
   roman: "L",
   numeral: 50
 },
 {
   roman: "XL",
   numeral: 40
 },
 {
   roman: "X",
   numeral: 10
 },
 {
   roman: "IX",
   numeral: 9
 }, 
 {
   roman: "V",
   numeral: 5
 },{
   roman: "IV",
   numeral:4
 },{
   roman: "I",
   numeral: 1
 }];

 convertBtn.addEventListener("click", ()=>{
  const number = document.getElementById("number");
  const numberInt = parseInt(number.value);
   
  if(!numberInt ){
    output.innerText= "Please enter a valid number";
    output.classList.add('red');  
    output.classList.remove('hide');
    setTimeout(()=>{
      output.classList.add('hide');
    }, 4000);
    
  }else if(numberInt < 1){
    output.innerText= "Please enter a number greater than or equal to 1";
    output.classList.add('red');  
    output.classList.remove('hide');
    setTimeout(()=>{
      output.classList.add('hide');
    }, 4000);
    
  }else if(numberInt >= 4000){
    output.innerText= "Please enter a number less than or equal to 3999";
    output.classList.add('red');  
    output.classList.remove('hide');
    setTimeout(()=>{
      output.classList.add('hide');
    }, 4000);
    
  }else {
        output.innerText = convertToRomanNumeral(numberInt);
        output.classList.remove('hide');   
  }
 });

 const convertToRomanNumeral = (numberInt) => {
  
  if (numberInt === 0) {
    return '';
  }
  else{
    for (const roman of romanNumerals) {  
        if (numberInt >= roman.numeral) {
          return roman.roman + convertToRomanNumeral(numberInt - roman.numeral);
        }
    }
  }  
};
