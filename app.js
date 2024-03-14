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



var arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
var arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
var result = 0;
for (let i = 0; i < arr_1.length; i++) {
    result += arr_1[i];
    
}
for (let j = 0; j < arr_2.length; j++) {
    result += arr_2[j];
    
}
console.log(result);


var number = prompt("enter");
for(var i = 1; i <= number; i++) {
   if(i % 2 == 0){
        console.log(i);
    }
    
}

var arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
    
}

var arr_3   = [4, 6, 7];
var arr_4    = [8, 1, 9];
var sum = [];
// for (let i = 0; i < arr_3.length; i++) {
//     console.log(arr_3[i]);
// }

sum.push(arr_4[0] + arr_3[0]);
sum.push(arr_4[1] + arr_3[1]);
sum.push(arr_4[2] + arr_3[2]);
console.log(sum);

// for (let h = 0; h < arr_3.length; h++) {
//     var sum = arr_3[h] + arr_4[h];
//     sum.push(sum);
    
// }
// console.log(sum);



var namesArray = [['ahmed' , 17] , ['hammad' ,16] , ['hamza' , 14]];
var checking = []
for(var i = 0 ; i < namesArray.length; i++){
    console.log(namesArray[i][0][0]);
    if(namesArray[i][0][0] === "h"){
        console.log('Name starting with h match');
    }else if(namesArray[i][0][0] === "a"){
        console.log('Name starting with a match');
    }
}










