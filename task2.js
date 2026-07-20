// Task - 1
let employee = {
    name : "Naveen",
    EmployeeId :"EMP101",
    department : "Frontend",
    salary : 25000,
    Ispermanent : true
}
console.log("Task - 1 \n");
console.log(employee);

// Task - 2
let student = {
    name:"Vasi",
    age : 25,
    course : "MECH",
    college : "Kalaignar Karunanidhi Institute of technology",
    passedout : "2023 Batch students"
}
console.log(" \n Task - 2");
console.log("Student_Name :", student.name);
console.log("Course :",student.course);
console.log("Passed out year : ",student.passedout);


//Task - 3
let product = ["milk" , "Rice" , "Oil" , "Sugar" , "soap"]
console.log("\n Task - 3" ); 
console.log("First product - ",product[0])
console.log("Third product -",product[2]);
console.log("Last Prodcut -",product[4]);
console.log("Total Products - " , product.length);

// Task -4
let employees = {
    name : "Vasi",
    designation : "Software Developer",
    salary : 25000,
    skills : ["HTML" , "CSS" , "JAVASCRIPT"]
}
console.log("\n Task -4");
console.log("Employee_Name - " , employees.name);
console.log("Designation - ",employees.designation );
console.log("Skills - ",employees.skills[2])

// TASK - 5
let basic_salary = 25000;
let bonus = 5000;
let total = basic_salary + bonus ;
console.log(" \n Task -5");
console.log("Total-salary", total);

//Task - 6
let price = 4500;
let tax = 18;
let tax_amt = (price * tax)/100;
let total_amt = price + tax_amt; 
console.log("\n Task - 6");
console.log("GST Amount - ",tax_amt);
console.log("Final Value - ",total_amt);

// Task - 7
let num = 13
console.log("\n Task - 7");
num % 2 == 0 ? console.log("Even Number") : console.log("ODD Number");

// Task - 8
let uname = "Admin"
let pass = 1234
console.log("\n Task - 8");
uname == "Admin" && pass == 12344 ? console.log("Login Success") : console.log("Invalid Credentials");

// Task - 9
let Age = 21;
console.log("\n Task - 9");
Age >= 18 ? console.log("Eligible for Vote"):console.log("Not Eligible");

// Task - 10 
let Salary = 40000
let exp = 5
console.log( "\n Task - 10 ");
Salary > 30000 && exp >=2 ? console.log("Eligible"):console.log("Not Eligible");

// Task - 11
let Price = 5000;
let Discount = 10; 

let Disc_amt = Price / Discount
let final_price = Price - Disc_amt 
console.log(" \n Task - 11");
console.log("Discount Amount " ,Disc_amt);
console.log("Final Price ", final_price);

// Taks - 12
var Name = "Vasimalai";
var Email = "vasimalai@thestacklky.com"
var Phone = 8508712233;
var City = "Coimbatore ";
console.log("\n Task -12 ");
console.log("Name : ",Name);
console.log("Email :" , Email);
console.log("Phone :",Phone);
console.log("City :",City);

// Task - 13
let account = {
    username : "Vasimalai@thestackly",
    followers : " 120K",
    following : 1000,
    posts : 120,
    verified : true
}
console.log("\n Task 13");
console.log("Username ",account.username );
console.log("followers", account.followers);
console.log("Verified Status",account.verified);

// Task -14
let food = ["Idli", "Dosa", "Poori", "Meals", "Parotta"]
console.log("\n Task - 14");
console.log("Second Item -",food[1]);
console.log("Fouth Item - ",food[3]);
console.log("Last Item -",food[4]);

// Task - 15
let balance = 25000;
let withdraw = 8000;
let bal = balance - withdraw ;
console.log("\n Task -15");
console.log("Remaining Balance ",bal);

// Task -16
let mobile = 25000;
let exchange = 5000;
let coupon = 2000;
let final_value = mobile-exchange-coupon;
console.log("\n Task - 16");
console.log("Final Price of the mobile was - ", final_value);

// Task -17
let experience = 3
let performance = false 
console.log("\n Task - 17");
experience >=3 && performance == true ? console.log("Promotion Approved"):console.log("Promotion pending");

// Task - 18
const ticket = 180;
var people = 5;
let sum = ticket * people
console.log("\n Task - 18");
console.log("Total amount : ",sum);

// task -19
var temp = 38 ; 
console.log("\n Task -19 ");
temp >= 38 ? console.log("Hot Day "):console.log("Normal Weather");

// Taks -20
let emp = {
    empCode: "EMP1001",
    name: "Rahul",
    department: "Frontend",
    designation: "Associate Software Engineer",
    salary: 28000,
    skills: ["HTML","CSS","JavaScript","React"],
    permanent: true
}
console.log("\n Task - 20");
console.log("Employee code - ", emp.empCode);
console.log("Employee Name - ",  emp.name);
console.log("Department",emp.department);
console.log("Salary ",emp.salary);
console.log("Last Skill",emp.skills[3]);
console.log("Premanent Status",emp.permanent);
