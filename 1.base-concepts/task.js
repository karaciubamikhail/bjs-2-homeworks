"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let d=0;

  d=Math.pow(b,2)-(4*a*c);
  if (d<0){
    arr = [];
  }
  if(d>0){
    arr=[(-b + Math.sqrt(d))/(2*a),(-b - Math.sqrt(d))/(2*a)];
  }
  if(d==0){
    arr=[-b/(2*a)];
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P=(percent/100)/12;
  let S=amount;
  if(contribution>0){
    S=S-contribution;
  }
  let n=countMonths;
  let plat = S * (P + (P / (((1 + P)**n) - 1)));
  let sum=plat*n;
  console.log(sum);
  return Number(`${sum.toFixed(2)}`);
}

calculateTotalMortgage(10,0,50000,12);
calculateTotalMortgage(10, 1000, 50000, 12.);
calculateTotalMortgage(10, 0, 20000, 24);
calculateTotalMortgage(10, 1000, 20000, 24);
calculateTotalMortgage(10, 20000, 20000, 24);
calculateTotalMortgage(10, 0, 10000, 36);
calculateTotalMortgage(15, 0, 10000, 36);