// console.log("hello javascript");

// var a=89;
// var b=89
// var sum=a+b
// console.log(`${a} + ${b} = ${sum}`)

// var p=7899
// var r=89
// var t=9
// var amount = (p*r*t)/100
// console.log(amount.toFixed(1));
// console.log("hello world...");
// console.error("hello world...");
// console.warn("hello world...");
// document.write("<h1>hello world$$$</h1>")


//using prompt

// var a=Numberb ( prompt("enter the number: "))
// document.write(`a=${a} and typeof=${typeof a}`)

//condition statement 
//condition?statement1:statement2;
//             true     false

// var a=Number(prompt("Enter the number:"))
// a%2==0?document.write(`${a} is even`):document.write(`${a} is odd`);


//Math.pow()--used to get an power of any number
// ex-- Math.pow(3,4) = 81

//Math.sqrt()--used to get a squrt of any number
 // Math.sqrt(25)=5

 //Question-- to chech whether the number is perfect square or not
 
 
//  function toCheck(num){
//      var a=Math.sqrt(num)
//      document.write(a);
//      document.write(Math.floor(a))
     
//      return toCheck=Math.floor(a)
//     }
//     toCheck(62)

// function toCheck(num){
//  if(Math.ceil(Math.sqrt(num))==Math.floor(Math.sqrt(num))){
//     document.write(`${num} is a perfect square number`)
//  }else{
//     document.write(`${num} is not a perfect square number`)
//  }

// }
// toCheck(25)
    

//Question---to check leap year

// function toCheckLeap(num){
            
//        var no=Math.floor(num)
//        if(no%100==0){
//             if(no%400==0){
//               console.log("its leap year");
              
//             }else{
//                 console.log("not a leap year");
                
//             }


//        }else{
           
//             if(no%4==0){
//                 console.log("leap year");
                
//             }else{
//                 console.log("not");
                
//             }
            
//        }
// }
// toCheckLeap(2001)


//Question--- to check perfect number
//answer-- result we get after the summission of the factors of a number then number will be equal to the orgininal number
// var number=Number(prompt("enter the number: "))
// var sum=0
// for(let i=1;i<=number/2;i++){
//      if(number%i==0){
//         sum=sum+i
//      }
// }
// if(sum==number){
//     console.log("perfect");
    
// }else{
//     console.log("not");
    
// }


// recurrsion-- calling function itself

    //Question -- to find factorial using recurrsion

// function toFact(num){
//     if(num<=1)
//         return 1
//     else
//     return num*toFact(num-1)  /// 5*fact(4)
//                               /// 4*fact(3)
//                               //continue... till 1
// }
// console.log(toFact(5))

//String -- types of loop use to acccess the chacracter of a string
// 1-- for loop
//2-- for of loop
//3-- for in loop
//1 string udsing for loo[p]
// var a="javascript using for loop"
// var count =0;
// for(let i=0;i<a.length;i++){
    
//     console.log(a[i]);
//     count++;
// }
// console.log(count);

//process.stdout.write( ) function is used to display the output in a line.
//2- string using wehile loop
// var a="javascript using for loop"
// let i=0;
// while(i<a.length){
// process.stdout.write(`${a[i]} `);
// i++
// }

//3-- string using for in loop -- we used for in loop yo getting index of a string

// var a="javascript using for loop"
// for(let i in a){
//     process.stdout.write(`${i} `) ;
    
// }

//indexof()-- retrun -1 if character does not exist in a string if exist then return 1 index of a character of a string
//lastindexof()--if exist it start searching from the last give the index of a character whom which i searching

// console.log(a.indexOf("i"));
// console.log(a.lastIndexOf("o"));


//Array --push() and pop()

// var arr=[]
// var num=Number(prompt("Enter the elements: "))
// for(let i=1;i<=num;i++){
//       let input=Number(prompt("Enter the elements: "+i))
//       arr.push(input)
// }
// document.write(`array elements are : ${arr}`)

//fibonacci series

// var inp=Number(prompt("Enter the number:"))
// var a=0;
// var b=1;
//  var sum;
//  document.write(a+" ")
//  document.write(b+" ")
//  for(var i=0;i<=inp;i++)
//     {
//         sum=a+b
//      document.write(sum+" ")
//      a=b
//      b=sum
//  }

 //sum of a number

//  var inp=Number(prompt("Enter the number: "))
//  var sum=0;
//  while(inp!=0){
//      var rem=inp%10
//      sum=sum+rem;
//      inp=parseInt(inp/10)


//  }
//  document.write(`sum = ${sum}`)

//Armstrong number

// var inp=Number(prompt("Enter the number: "))
// var sum=0
// var n=inp;
// function toCheck(inp){
//     var count=0;

//  var temp=inp;
//  while(temp>0){
// temp=temp/10
// count++;

//  }
//  document.write(count)

   

// }

// while(inp!=0){
    
//     var rem=inp%10;
//     sum=sum+rem**toCheck(inp)
//     inp=parseInt(inp/10)


// }
// if(sum==n){
//     document.write("it is")
// }


//Sum of a number using function

// function sumOfDigit(num){
//    let sum=0
//    while(num!=0){
//     let rem=num%10
//     sum=sum+rem
//     num=parseInt(num/10)
   
    
//    }
//    return sum;

// }

// console.log(sumOfDigit(123));


// function sample(){
//     if(true){
//        a=20;
//        var b=20
//        let c=30;
//        const d=40;
//        console.log(`a=${a}  b=${b} c=${c} d=${d}`);
       

//     }
//     console.log(`a=${a} b=${b} `);
    
// }
// sample();
// console.log(`a${a}  b=${b}`);


//find factorial using recurssion

// function fact(num){
//     if(num<=1)
//         return 1
//     else
//     return num*fact(num-1)


// }
// console.log(fact(5));


//string using loop
 var a="this is me"
 for(let i=0;i<=a.length;i++){
    console.log(a[i]);
    
 }

