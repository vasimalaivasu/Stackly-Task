// // Task - 1
// let username = prompt("Enter your user name");
// let password = prompt("Enter your password");
// console.log("Task-1");
// if(username === "admin" && password == "12345"){
//     alert("Login Successful");
// }else{
//     alert("Invalid Username or Password");
// }

// Task - 2
// let p_amt = 3500;
// let final_amount;
// if(p_amt >=5000){
//     console.log("20% discount allocated");
//     final_amount = p_amt + (p_amt*0.2);
//     console.log(final_amount);
// }else{
//     console.log("No Discount");
// }

// Task -3 
// let balance =  10000;
// let withdraw = 4000;
// if(withdraw <= balance){
//     balance -= withdraw;
//     console.log("Transaction Success");
//     console.log("Balance:", balance);
// }else{
//     console.log("Insufficient Balance");
// }

// Task - 4
// let mark = 87;
// if(mark >= 90){
//     console.log("Grade A");
// }
// else if(mark >=80){
//     console.log("Grade B");
// }
// else if(mark >=70){
//     console.log("Grade C");
// }
// else{
//     console.log("Fail");
// }

// Task - 5
// let signal = "red"
// switch(signal){
//     case "red":
//         console.log("Stop the Vehicle");
//         break;

//     case "yellow":
//         console.log("Ready to ride ");
//         break;

//     case "green":
//         console.log("signal open vehicle can go now.");
//         break;    
      
//     default:comsole.log("wear helmet have a safe ride");
//     break;
// }

// Task - 6
// let order_amount = 500
// console.log("Order_amount :" ,order_amount);
// if (order_amount >= 1000){
//     console.log("Delivery : free");
//     console.log("Free Deliver applicable ");
//     alert("Your order amount Will be :",order_amount);
// }else {
//     Total = order_amount + 80
//     console.log("Delivery : 80");
//     alert("Your order amount will be : ", Total);
//     console.log("Total amount : ",Total);
// }

// Task - 7 
// let age = prompt("Enter the candidate age ;");
// if (age >= 18){
//     console.log("Eligble for Voting");
// }else {
//     console.log("Not eligible for Voting");
// }

// Task -8
// let a = 100;
// let b = 200;
// let c = 30;
// if(a>b){
//     if(a>c){
//         console.log("A is greater than all");
//     }
// }else if(b>c){
//     console.log("B is greater than All");  
// }
// else{
//     console.log("C is greater than all");
// }

// Task - 9 
// let pin = "1234";
// if(pin.length === 4){
//     console.log("Login Success");
// }else{
//     console.log("Invalid PIN");
// }

// Task - 10
// let prod = 0;
// if(prod == 0){
//     console.log("Out of stock");
// }else{
//     console.log("Available");
// }

//Task - 11
// let salary = 10000
// let total 
// if(salary >= 50000){
//     total = salary + 10000;
//     console.log("Total Salary along with bonus = " , total);
// }else if( salary > 30000){
//     total = salary + 5000;
//     console.log("Total salary along with bonus = ", total)
// }else {
//     total = salary + 2000;
//     console.log("Total salary along with bonus = ", total)
// }

// Task - 12 
// let units = 250;
// let total_amount
// if(units > 0 && units < 100){
//     total_amount = units * 2;
//     console.log("Total cost of electricity bill" , total_amount);
// }else if(units>100 && units <200){
//     total_amount = units * 4 ;
//     console.log("Total cost of electricity bill" , total_amount);
// }else{
//     total_amount = units * 6 ;
//     console.log("total cost of electricity bill" , total_amount);
// }

// Task - 13
// let age = 2;
// if ( age < 5 ){
//     console.log("Entry free");
// }else if (age >5 && age <18){
//     console.log("Entry Ticket will be cost of 100");
// }else{
//     console.log("Entry ticket will be cost of 200");
// }

// Taks - 14 
// let Token = "senior citizen"
// switch (Token) {
//     case "Emergency":
//         console.log("Emergency ward patient")
//         break;

//     case "senior citizen":
//         console.log("Seniore  Citizen ward patient")
//         break;

//     case "Priority":
//         console.log("Priority ward patient")
//         break;

//     case "Normal":
//         console.log("Normal ward patient")
//         break;

//     case "Regular Queue":
//         console.log("Regular Queue ward patient")
//         break;

//     default:
//         console.log("Token -1 ward patient or Out patient");
//         break;
// }


// Task - 15
// let attendance
// switch(attendance){
//     case "present":
//         console.log("Attendance status present");
//         break;

//     case "working":
//         console.log("Working Status") ;
//         break;
        
//     case "leave":
//         console.log("Attendance Status Leave");
//         break;

//     case "leave approved":
//         console.log("Attendance Status Leave Approved");
//         break;
        
//     case "absent":
//         console.log("Attendance status Absent");
//         break;

//     default:
//         console.log("Salary Detucted");
//         break;
// }

// Task -16
// let rice=500;
// let sugar=300;
// let oil=250;
// let total=rice+sugar+oil;
// let dic_amt
// console.log(total);
// if(total>1000){
//     dic_amt = total - (total * 0.10);
//     console.log("After Discount amount :",dic_amt);   
// }else{
//     console.log("Total : ", total);
// }

// Task - 17
// let products = ["Laptop", "Mouse", "Keyboard", "Monitor"]
// for(let i = 0; i < products.length;i++){
//     console.log(`${i + 1} ${products[i]}`);
// }

// Task - 18
// let employee={
// name:"Vasimalai",
// role:"Developer",
// salary:50000
// }
// for (let key in employee){
//     console.log(employee[key]);
// }

// // Task - 19 
// let num = Number("100");
// let bool = Boolean("true");
// let str = String(200);
// console.log("Number :",typeof(num))
// console.log("Boolean :", typeof(bool));
// console.log("String :",typeof(str));

// Task - 20
// let banking = 2;
// switch (banking){
//     case (1):
//         console.log("Deposit has been successful");
//         break;
    
//     case (2):
//         console.log("Cash Withdraw successful");
//         break;
    
//     case (3):
//         console.log("Balance Enquiry Successful");
//         break;
        
//     default:
//         console.log("Exit");
//         break
// }