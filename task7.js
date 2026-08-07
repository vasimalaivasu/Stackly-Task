// Task -1 
let student = {
    name : "Vasimalai",
    age :  21,
    dept : "Developer",
    fees : 25000,
}
console.log(student);
console.log(student.age>=18 ? "Eligible" : "Not Eligible");

// Task -2  
function calculate(salary,bonus,deduction){
    return salary+bonus-deduction;
}
const total_salary = calculate(30000,5000,2000);
console.log(total_salary);

// Task - 3
let products = ["Laptop","Mouse","Keyboard","Headphone"];
products.push("CPU");
// console.log(products);
products.pop();
console.log("Products : ",products);
console.log("Total Products :",products.length);
console.log("First Product :",products[0]);
console.log("Last Product :",products[products.length-1]);

// Task - 4
let uname = "admin";
let pass = "12345";
console.log(uname === "Admin" && pass === "12345" ? "Eligible" : "Not Eligible");

// Task - 5
let age = 30;
console.log(age >=18 ? "Eligible" : "Not Eligible"); 

// Task - 6
let employees = [
{name:"Arun",salary:25000},
{name:"Kavin",salary:40000},
{name:"Ravi",salary:55000}
]
const employee = employees.find(emp =>emp.name==="Kavin");
console.log(employee);
console.log(employees);

// Task - 7
const product = [
    { name: "Mouse", price: 400 },
    { name: "Keyboard", price: 800 },
    { name: "Pen Drive", price: 450 },
    { name: "Monitor", price: 7000 }
];
const results = product.filter(product1 => product1.price < 500);
console.log(results);

// Task - 8
const marks = [45, 56, 67, 89]; 
const newMarks = marks.map(mark => mark + 5);
console.log(newMarks);

// Task - 9
const mark = [90, 85, 70, 65];
const result = mark.every(mark => mark > 50);
console.log(result);

//Task - 10
const otp = Math.floor(100000 + Math.random()*900000);
console.log("OTP :",otp);

// Task - 11
const password = "Abc@1234";
const strong =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password);
console.log(strong ? "Strong Password" : "Weak Password");

// Task - 12
const gadjets = ["Laptop", "Mobile", "Watch", "Camera"];
const search = "Mobile";
console.log(gadjets.includes(search) ? "Available" : "Not Available");

// Task - 13
setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleTimeString());
}, 1000);

// Task - 14
let count = 10;
const timer = setInterval(() => {
    console.log(count);
    if (count === 0) {
        clearInterval(timer);
    }
    count--;
}, 1000);

// Task - 15 
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            console.log("Name:", product.title);
            console.log("Price:", product.price);
            console.log("Image:", product.image);
        });
    })
    .catch(error => console.log(error));

// Taks - 16
const worker = [
    { name: "Arun", salary: 25000 },
    { name: "Kavin", salary: 40000 },
    { name: "Ravi", salary: 55000 }
];
const totalSalary = worker.reduce((sum, emp) => sum + emp.salary, 0);
const averageSalary = totalSalary / worker.length;
const highestSalary = worker.reduce((max, emp) =>
    emp.salary > max.salary ? emp : max
);
console.log("Total Salary:", totalSalary);
console.log("Average Salary:", averageSalary);
console.log("Highest Salary:", highestSalary.salary);

// Task - 17
let menu = ["Pizza", "Burger", "Shawarma", "Fries"];
let order = [];
order.push("Pizza");
order.push("Fries");
order.splice(1, 1);
console.log("Items:", order);
console.log("Total Items:", order.length);
const price = 200;
console.log("Bill: ₹", order.length * price);

//Task - 18
const account = {
    holder: "Arun",
    balance: 10000,
    deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
    },
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        } else {
            console.log("Insufficient Balance");
        }
    },
    checkBalance() {
        console.log("Balance:", this.balance);
    }
};
account.deposit(5000);
account.withdraw(3000);
account.checkBalance();

// Task - 19
let tasks = [];
function addTask(task) {
    tasks.push(task);
}
function deleteTask(index) {
    tasks.splice(index, 1);
}
function updateTask(index, newTask) {
    tasks[index] = newTask;
}
function showTasks() {
    console.log(tasks);
}
addTask("Learn JavaScript");
addTask("Practice Arrays");
updateTask(0, "Learn ES6");
deleteTask(1);
showTasks();

// Task - 20
let products = [
    {
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        stock: 10
    },
    {
        name: "Mouse",
        price: 500,
        category: "Electronics",
        stock: 25
    },
    {
        name: "Chair",
        price: 3000,
        category: "Furniture",
        stock: 8
    }
];
function addProduct(product) {
    products.push(product);
}
function searchProduct(name) {
    return products.find(product => product.name === name);
}
function filterCategory(category) {
    return products.filter(product => product.category === category);
}
function totalStock() {
    return products.reduce((sum, product) => sum + product.stock, 0);
}
function totalInventoryValue() {
    return products.reduce(
        (sum, product) => sum + product.price * product.stock,
        0
    );
}
addProduct({
    name: "Keyboard",
    price: 1500,
    category: "Electronics",
    stock: 12
});
console.log(searchProduct("Mouse"));
console.log(filterCategory("Electronics"));
console.log("Total Stock:", totalStock());
console.log("Inventory Value: ₹", totalInventoryValue());