var multiplicationNumber = prompt("Enter a Table Number");
var startingNumber = prompt("Enter a Starting Number");
var endingNumber = prompt("Enter an ending number");
document.write("Table oF " + multiplicationNumber + "<br>" );
for (let i = startingNumber; i < endingNumber; i++) {
    document.write("<br>" + multiplicationNumber + " X " + i + " = " +  multiplicationNumber * i  + "<br>");
    
}








var number1 = +prompt("ENTER A NUMBER TO CHECK EVEN OR ODD");
var flag = "check";

if (number1 <= 1000000) {
    for (let i = 2; i <= number1 / 2; i++) {
        if (number1 % i === 0) {
            flag = "even";
            break;  
        }
    } 
    
    // Check for odd numbers
    if (flag !== "even") {
        flag = "odd";
    }
}

if (flag === "check") {
    document.write("Please Enter A Valid Number");
} else if (flag === "even") {
    document.write("Even Number");
} else if (flag === "odd") {
    document.write("ODD NUMBER");
}



var n = prompt("Enter a number:");

for (var i = 2; i <= n; i += 2) {
    console.log(i);
}


var order = ["ahmed" , "aslam" , "hamza" , "hammad" , "fatima" ];
for (let i = order.length -1 ; i >= 0; i--) {
    console.log(order[i]);
    
}

