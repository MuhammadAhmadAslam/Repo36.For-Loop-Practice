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



var concatArray1 = [2, "ahmed" , 5 , 'hammad'];
var concatArray2 = ['abdul hadi' , 9 , 10];
var empty = concatArray1.concat(concatArray2);
console.log(empty);

var months = ["Januar", "Februar", "Mar", "April"];
var myMonths = months.reverse();
console.log(myMonths);


var hello = ["ahmed" , "hammad" , 1 , 2];
var c =  hello.includes("ahmed"); 
console.log('found');

console.log(hello.reverse());


var fruits = ['banana' , 'apple' , 'mango' , 1 , 4 , 'onion' , 'potato' , 'tomato' , 2 , 9, 100];
console.log(fruits.sort());
console.log(fruits.reverse());

for(i= 0; i <= 15; i++){
    console.log(i);
}
for (let i = 12; i <= 24; i++) {
    console.log(i);
    
}
for (let i = 7; i <= 31; i++) {
    if (i%2 != 0) {
        console.log(i);
    }
     console.log(i);
}


for (let i = 10; i >= -20 ; i--) {
    if (i%2 === 0) {
        console.log(i);
       
    }
    
}





var num = prompt('enter a number')
for (var i = 1; i <= 45; i++) {
    if (i%3 === 0 && i%5 === 0) {
      console.log('Fizz & Buzz');
    }else if(i%5 === 0){
        console.log('Buzz');
    }else if(i%3 === 0){
        console.log('Fizz');
    }
    
}




var thisIsAnArray = ["element1", "element2", "element3", "element4"];
for (let i = 0; i < thisIsAnArray.length; i++) {
   console.log(thisIsAnArray[i]);
    
}


var numbersArray = [1,13,22,123,49];
var result1= 0;
for (var i = 0; i < numbersArray.length; i++) {
 result1 +=   result1 + numbersArray[i];
   
}
console.log(result1);






var addition1 = [12, 12, 12, 12]
var addition2 = [12 ,12 , 12 ,12]
var add = 0;
for (let i = 0; i < addition1.length; i++) {
    add = add + addition1[i];
    
}
console.log(add);
for (let i = 0; i < addition2.length; i++) {
    add = add + addition2[i];
    
}
console.log(add);


var average = [12 ,12 ,12, 12, 12, 12]
var totalAverage = 6

for (let i = 0; i < average.length; i++) {
    var CHECK = (average[i]/totalAverage);
    
}




console.log(CHECK);





 









