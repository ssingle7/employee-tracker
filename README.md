# employee-tracker

The purpose of this employee tracker application was to build a solution for managing a company's employees using node, inquirer, and MySQL. This interface will allow non-developers to view and interact with information stored in a database. As a business owner, view and manage the departments, roles, and employees in my company so that you can organize and plan your business.

* The database schema was designed containing three tables: department, role, and employee.

* A command-line application that allows the user to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

* API routes were created to: read the `db.json` file and return all saved notes as JSON 

  * read the `db.json` file and return all saved notes as JSON.

  * to receive a new note to save on the request body, and then return the new note to the client.

  * to receive a query parameter containing the id of a note to delete. 
  

 # Installation

1. Clone the repo 

   `git clone https://github.com/ssingle7/employee-tracker`

2. Install dependencies 

   `npm install`

3. Create the database using the `databaseSeed.sql` and `employeeSchema.sql`

4. Run Server 

## Preview 

![EmployeeTracker](/employeeTracker.gif)

## Deployed Link

https://github.com/ssingle7/employee-tracker

### Credits

* 02-ask-the-class

* Tutor

* Ask BCS 

### License 

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub license](https://img.shields.io/badge/Javascript-yellow)
![GitHub license](https://img.shields.io/badge/-node.js-green)
![GitHub license](https://img.shields.io/badge/-inquirer-red)
![GitHub license](https://img.shields.io/badge/mySQL-blue)

Copyright (c) [2020] [Selena Singleton]
