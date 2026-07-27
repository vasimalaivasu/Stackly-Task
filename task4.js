// task -1 
// let stud_det = {
//     name :"Vasimalai",//prompt("Enter the Student name"),
//     age : 24,//prompt ("enter the Student Age :"),
//     dept :"mech", //prompt ("Enter the student Department :"),
//     cgpa : 8.5//prompt ("Enter the student's CGPA : ")
// }
// console.log(stud_det);
// // alert(`"student Name : ",${stud_det.name},"student age :",${stud_det.age}, "Student Department : ",${stud_det.dept},"student CGPA :",${stud_det.cgpa}`);


// task -2 
// let employee ={
//     emp_id : "Emp101",
//     name : "vasimalai",
//     dept : "Developing",
//     salary : 30000
// }
// console.log("Employee name : ",employee.name);
// console.log("Employee salary :",employee.salary);

// task - 3
// var products = ["Laptop" , "Mouse" , "Keyboard" ,"Monitor","Headset"];
// console.log("first product :" , products[0])
// console.log("Last product :" ,products.length[5]);
// console.log("Total number",products.length)


// task - 4
// var tam = 90;
// var eng = 80;
// var mat = 98;
// var sci = 97;
// var evs = 90;
// let total = tam + eng + mat + sci + evs ;
// let avg = total / 5 ;
// console.log("Total Marks : ",total);
// console.log("Average Marks : ",avg);


// task - 5 
// let age = 18;
// age >= 18 ? console.log("ELigible for Vote"):console.log("Not Eligible for Vote");

// task - 6
// const uname = "Admin"
// const password = "12345"
// uname === "Admin" && password === "12345" ? console.log("Login Succeess"):console.log("Login Unsuccessful");

// task -7
// let a = 15;
// let b = 10;
// let add = a + b ;
// console.log("Addition value : ",add);
// let sub = a-b;
// console.log("Subraction value : ",sub );
// let mul = a*b;
// console.log("multiplication value : " ,mul);
// let div = a/b;
// console.log("Division value :",div);
// let mod = a%b;
// console.log("Modulus value : ",mod);

// task - 8
// let cus_name = "vasimalai";
// let unit = 120;
// let total
// if (unit >0 && unit <=100){
//     total = unit * 2;
// }else if (unit >=101 && unit <= 200){
//     total = unit * 4 ;
// } else {
//     total = unit * 6;
// }
// console.log("Customer name : " ,cus_name);
// console.log("Consumed unit : ", unit);
// console.log("Bill amount : ",total);

// // task - 9 
// let salary = 12000;
// let bonus = 3000;
// let gross =salary + bonus;
// console.log("Gross salary = ",gross  )


// // task -10
// let ticket = 220 ;
// let persons = 5 ;
// console.log (" Bill amount :", ticket*persons)

// task - 11
// const product = "Laptop";
// let price = 400;
// if(price > 5000){
//     let disc = price * 0.2
//     console.log("original price : ",price);
//     console.log("Discount amount : ",disc);
//     console.log("final price : " , price - disc);
// }else {
//     let disc = price * 0.1;
//     console.log("orginal price : ", price);
//     console.log("Discount amount : ",disc);
//     console.log("final price : " , price - disc);
// }

// task - 12 
// function studentDetails(name, department, cgpa) {
//     console.log("Student Details");
//     console.log("Name: " + name);
//     console.log("Department: " + department);
//     console.log("CGPA: " + cgpa);
// }
// studentDetails("John", "Computer Science", 8.5);

// task -13 
// function bankBalance(accountHolder, currentBalance, withdrawAmount) {
//     let remainingBalance = currentBalance - withdrawAmount;

//     console.log("Bank Details");
//     console.log("Account Holder: " + accountHolder);
//     console.log("Current Balance: " + currentBalance);
//     console.log("Withdraw Amount: " + withdrawAmount);
//     console.log("Remaining Balance: " + remainingBalance);
// }
// bankBalance("Rahul", 10000, 2500);

// task -14
// function mobileRecharge(mobileNumber, rechargeAmount) {
//     console.log("Mobile Recharge");
//     console.log("Mobile Number: " + mobileNumber);
//     console.log("Recharge Amount: " + rechargeAmount);
//     console.log("Recharge Successful");
// }
// mobileRecharge("9876543210", 299);

// task -15
// function restaurantBill(foodName, quantity, price) {
//     let totalBill = quantity * price;

//     console.log("Restaurant Invoice");
//     console.log("Food Name: " + foodName);
//     console.log("Quantity: " + quantity);
//     console.log("Price: " + price);
//     console.log("Total Bill: " + totalBill);
// }
// restaurantBill("Burger", 2, 150);


// mini Project
let employeeName = "Arun";
let employeeId = 101;
let department = "IT";
let salary = 30000;
let experience = 3;
let skills = ["HTML", "CSS", "JavaScript"];
let employee = {
    name: employeeName,
    id: employeeId,
    department: department,
    salary: salary,
    experience: experience,
    skills: skills
};
function displayEmployee() {
    console.log("Employee Details");
    console.log("Name: " + employee.name);
    console.log("ID: " + employee.id);
    console.log("Department: " + employee.department);
    console.log("Salary: " + employee.salary);
    console.log("Experience: " + employee.experience + " years");
    console.log("Skills: " + employee.skills);
}
function calculateSalary(bonus) {
    let totalSalary = employee.salary + bonus;
    console.log("Total Salary: " + totalSalary);
}
function checkExperience() {
    if (employee.experience >= 5) {
        console.log("Experienced Employee");
    } else {
        console.log("Fresher or Less Experienced Employee");
    }
}
function addEmployee() {
    console.log("Employee Added Successfully");
}
addEmployee();
displayEmployee();
calculateSalary(5000);
checkExperience();