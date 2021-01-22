const inquirer = require("inquirer");
const mysql = require("mysql");
// const connection = require('./connection');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Savannah20",
    database: "employee_tracker"
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id: ${connection.threadId}`);
});

// 1.Hard code queries in MySql workbench
// 2. Bring queries in and add into functions 
// 3. Test each function individually 
// 4. Incorporate inquirer.prompt to call these functions  
// 5. Add additional inquirer prompts to take in user input 
// 6. Modify the SQL queries to be dynamic 
