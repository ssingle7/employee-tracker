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