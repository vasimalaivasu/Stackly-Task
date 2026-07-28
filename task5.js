// // task -1
// let studentName = "Rahul";
// let department = "CSE";
// let cgpa = 8.6;
// console.log("Student name : " + studentName);
// console.log("Department : " + department);
// console.log("cgpa : " + cgpa);
// console.log("Status :" ,cgpa >= 7 ? "Eligible" : "Not Eligible");

// task - 2 
// let productPrice = 2500;
// let quantity = 3;
// let total = productPrice * quantity
// if(total>5000){
//     let Discount = total * 0.10;
//     let final_amt = total-Discount;
//     console.log("Total : " + total);
//     console.log("Discount :" + Discount);
//     console.log("Final price :" +final_amt );
// }else {
//     console.log("Total : " + total);
// }

// task - 3
// let basicSalary = 35000;
// let bonus = 5000;
// let tax = 3000;
// let net = (basicSalary + bonus)- tax;
// console.log("Basic Salary : " + 35000);
// console.log("Bonus : " + bonus);
// console.log("tax : " + tax);
// console.log("Net salary : " + net);

// task - 4 
// let movie = "Leo";
// let ticketPrice = 180;
// let tickets = 5;
// console.log("Movie : "+movie);
// console.log("Tickets :"+tickets);
// console.log("Total :",tickets * ticketPrice);

// // task -5 
// let username = "admin";
// let password = "12345";
// username ==="admin" && password === "12345" ? console.log("Login Success") : console.log("Invalid Username or password");

// task - 6
// let units = 250 ;
// if(units<= 100){
//     console.log("Total Bill Amount: " , units*5);    
// }else if(units > 100 && units < 200){
//     console.log("Total Bill Amount: ",units*7);
// }else {
//     console.log("Total Bill Amount : ",units*10);
// }

// task -7 
// let menu = ["Dosa","Idly","Poori","Meals"];
// console.log("First_Item :",menu[0] );
// console.log("Last_Item :",menu.length - 1);
// console.log("Total_Items :",menu.length);
// menu.push("Fried Rice ");
// menu.splice(menu.indexOf("Idly"),1);
// console.log("updated Menu :" ,menu);

// task - 8
// let employee = {
//     name:"Ravi",
//     role:"Frontend Developer",
//     salary:40000
// }
// console.log("Employee Name : " , employee.name);
// console.log("Role : ",employee.role);
// console.log("Salary : ",employee.salary);

// task -9
// let products = [
// "Mouse",
// "Keyboard",
// "Monitor",
// "CPU",
// "Speaker"
// ];
// for ( let i=0;i<products.length;i++){
//     console.log(i + 1,products[i]);
// }

// task - 10
// function calculateArea(length, width) {
//     return length * width;
// }
// console.log("Area =", calculateArea(20, 10));

// // task - 11
// let balance = 5000
// function deposit(amt){
//     balance = balance + amt ;
// }
// function withdraw(amt){
//     balance = balance -  amt ;
// }
// deposit(2000);
// withdraw(1000);
// console.log("Final Balance : ",balance)

// task -12 
// function addition(a, b) {
//     return a + b;
// }
// function calculate(callback, a, b) {
//     console.log(callback(a, b));
//     console.log("Calculation Completed");
// }
// calculate(addition, 10, 20);

// task - 13 
// function* couponGenerator() {
//     yield "WELCOME10";
//     yield "SAVE20";
//     yield "SUPER30";
//     yield "BIG50";
//     yield "MEGA100";
// }
// let coupons = couponGenerator();
// console.log(coupons.next().value);
// console.log(coupons.next().value);
// console.log(coupons.next().value);
// console.log(coupons.next().value);
// console.log(coupons.next().value);


// task - 14 
// function discount(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     };
// }
// console.log(discount(10)(20)(30));

// task - 15 
// let frontend = ["HTML","CSS","JS"];
// let backend = ["Node","Express","MongoDB"];
// let fullstack = [...frontend,...backend];
// console.log(fullstack);

// task - 16
// function sum(...numbers) {
//     let total = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     console.log(total);
// }
// sum(10, 20, 30, 40, 50);

// task - 17
// let colors = ["Red","Blue","Green","Yellow"];
// let [c1, c2, c3, c4] = colors;
// console.log(c1);
// console.log(c2);
// console.log(c3);
// console.log(c4);

// task - 18
// let user = {
// name:"Navi",
// city:"Salem",
// role:"Developer"
// }
// let { name, city, role} = user;
// console.log(name);
// console.log(city);
// console.log(role);

// task -19
// let cart = ["Mobile", "Laptop", "Watch"];
// console.log("Original:", cart);
// cart.push("Tablet");
// console.log("After push:", cart);
// cart.pop();
// console.log("After pop:", cart);
// cart.shift();
// console.log("After shift:", cart);
// cart.unshift("Camera");
// console.log("After unshift:", cart);

// task - 20
// let products = [
//     "Laptop",
//     "Mouse",
//     "Keyboard",
//     "Monitor",
//     "Speaker"
// ];
// if(products.includes("Monitor")){
//     console.log("products Available");
// }else{
//     console.log("Out of Stock");
// }
