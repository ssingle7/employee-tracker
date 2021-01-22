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


function departmentView() {
    var sqlStr = "SELECT * FROM department";
    connection.query(sqlStr, function (err, result) {
        if (err) throw err;

        console.table(result)
        runSearch();
    })
}

function employeeView() {
    var sqlStr = "SELECT first_name, last_name, title, salary FROM employee ";
    sqlStr += "LEFT JOIN role ";
    sqlStr += "ON employee.role_id = role.id"
    connection.query(sqlStr, function (err, result) {
        if (err) throw err;

        console.table(result)
        runSearch();
    })
}

function roleView() {
    var sqlStr = "SELECT * FROM role";
    connection.query(sqlStr, function (err, result) {
        if (err) throw err;

        console.table(result)
        runSearch();
    })
}

const updateEmployee = () => {

    function runUpdateSearch() {
        inquirer
            .prompt({
                name: "action",
                type: "list",
                message: "Which employee do you want to update?",
                choices: employeeOptions
            })
           
    }
    runUpdateSearch();  
}

// 1.Hard code queries in MySql workbench
// 2. Bring queries in and add into functions 
// 3. Test each function individually 
// 4. Incorporate inquirer.prompt to call these functions  
// 5. Add additional inquirer prompts to take in user input 
// 6. Modify the SQL queries to be dynamic 
