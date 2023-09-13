//1
let firstName = "Oleksandra";
let lastName = "Koval";
let fullName = "firstName + lastName";
console.log (`fullname is ${firstName} ${lastName}`);

//2
let x = 6;
let y = 10; 
let s = x*y;
console.log (`s = ${s}`);

//3
console.log (10**6);

//4
console.log ( Math.floor (Math.random () * 50) );

//5
let number = -1;
if ( number >=0 ) {
    console.log ( "positive value" )
} else if (number <0) {
    console.log ("negative value")
}

//6
let text = "abrakadabra"
if (text.length > 1);
console.log (text.slice(-2,-1))

//7
let month = (Math.floor (Math.random()*12+1));
switch (month) {
    case 1:
        console.log ("January");
        break;
    case 2:
        console.log ("February");
        break;
    case 3:
        console.log ("March");
        break;
    case 4:
        console.log ("April");
        break;
    case 5:
        console.log ("May");
        break;
    case 6:
        console.log ("June");
        break;
    case 7:
        console.log ("July");
        break;
    case 8:
        console.log ("August");
        break;
    case 9:
        console.log ("September");
        break;
    case 10:
        console.log ("October");
        break;
    case 11:
        console.log ("November");
        break;
    case 12:
        console.log ("December");
        break;
    default:
        console.log ( "month is not found")
}

//8
let password = "gffghg&fhhnh";
if (password.length >5) {
    if ( password.indexOf ('&') >0 ){
    console.log ( "This password is strong.");
    } else { 
        console.log ("This password is weak.");
    }
} 

//9
let a = 6;
let b = 7;
let Σ = a+b;
if (typeof a=="number" && typeof b=="number") {
    console.log (`Σ = ${Σ}`);
} else {
    console.log ("Sum of those items can’t be counted")
}


//10

let textOne = "green";
let textTwo = "red";
if (typeof textOne =="string" && typeof textTwo =="string") {
    if (textOne.length == textTwo.length) {
        console.log ("Those items are string and they’re equal");
    } else {
    console.log("Items are not compareble");
    }
}