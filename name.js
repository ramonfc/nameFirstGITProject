'use strict'

function getValue(){
	let n = 0;
	while(true){
  	n = +prompt("Type a number: ","");
  	if(!isNaN(n)){
  		break;
  	}
  }
 	
  return n;
};

let val1 = getValue();
let val2 = getValue();
let message = `${val1} + ${val2} = ${val1+val2}`;
alert(message);

let val3 = getValue();
alert("your input: "+ val3);


let val5 = "Wilson Fino";
alert(val5);
