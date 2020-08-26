//RD =  here is qhere I require the npm pacakages, and third-party programs for npm and console applications
const mysql = require("mysql");
const inquirer = require("inquirer");
const ctable = require('console.table')
const banner = require("simple-banner");

//RD = Here is where we create the connection to the SQL Server
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "cms_db"
});
//RD =  Here is where we make the connection and run the what would you like questions.
connection.connect(function (err) {
    if (err) throw err;
    //RD =  Here is where I call the first function to start the program.
    runSearch();
});

function runSearch() {
    //RD = Here is where we que the pathway of questions
    inquirer
        .prompt([{
            message: "What would you like to do?",
            type: "list",
            name: "choice",
            choices: [
                "Add Employee",
                "Add Department",
                "Add Role",
                "View Employees",
                "View Departments",
                "View Roles",
                "Update Employee",
                "Delete Employee",
                "Delete Department",
                "Delete Role"
            ]
        }])
        //RD =  Here is where I set up the logic switchboard for questions.
        .then(function (answers) {
            switch (answers.choice) {
                case "Add Employee":
                    addEmployee()
                    break;
                case "View Employees":
                    viewEmployees()
                    break;
                case "Add Department":
                    addDepartment()
                    break;
                case "View Departments":
                    viewDepartment()
                    break;
                case "Add Role":
                    addRole()
                    break;
                case "View Roles":
                    viewRoles()
                    break;
                case "Update Employee":
                    updateEmployee()
                    break;
                case "Delete Employee":
                    deleteEmployee()
                    break;
                case "Delete Department":
                    deleteDepartment()
                    break;
                case "Delete Role":
                    deleteRole()
                    break;
            }
        })
}
//RD =  Here is where prompt the questions to add an employee.
function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "firstName",
                message: "Provide the EE's First Name."
            },
            {
                type: "input",
                name: "lastName",
                message: "Provide the EE's Last Name."
            },
            {
                type: "list",
                name: "roleId",
                message: "Provide the EE's Role",
                choices: [
                    "1	sales lead",
                    "2	salesperson",
                    "3	lead engineer",
                    "4	software engineer",
                    "5	accountant",
                    "6	leagal team lead",
                    "7	lawyer",
                    "8	lead engineer",
                ]
            },
            {
                type: "number",
                name: "managerId",
                message: "Provide the EE's Managers Id."
            },

        ])
        //RD = Here is we where we received the async code.
        .then(function (res) {
            var roleID = res.roleId.split(" ");
            //RD = per JJ, the question marks are directly related to the the values, and sequence matters?           
            connection.query("INSERT INTO employee (firstName, lastName, roleId, managerId) Values (?,?,?,?)", [res.firstName, res.lastName, res.roleId[0], res.managerid], function (err, data) {
                if (err) throw err;
                console.log("An EE has been added.");
                runSearch();
            })
        })
}
//RD = second on the switchboard is view employee function requesting all the data from the employee table, and cue'ing the original questions again.
function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, data) {
        if (err) throw err;
        // banner.set(" - Employee View - ")
        console.table(banner.set(" - Employee View - "), data);
        runSearch();
    })
}
//RD =  here is where I create the DEpts.  and insert the values into SQL.
function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "deptName",
                message: "Provide your Departments Name."
            },
        ])
        .then(function (res) {
            connection.query("INSERT INTO department (deptName) VALUES (?)", [res.deptName], function (err, data) {
                if (err) throw err;
                console.log("Department Added");
                runSearch();
            })
        })
}
//RD =  here is where I create the function to view the newly created Depts copy and past from view employees..
function viewDepartment() {
    connection.query("SELECT * FROM department", function (err, data) {
        if (err) throw err;
        console.table(banner.set(" - DEPARTMENT View - "), data);
        runSearch();
    })
}
// RD = here is where I use inquirer to prompt questions with the responses being INSERTED INTO the roles table.
function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "Provide EE title"
            },
            {
                type: "number",
                name: "salary",
                message: "Provide EEs Salary"
            },
            {
                type: "number",
                name: "deptId",
                message: "Provide Department Id number"
            }
        ])
        //RD =  Here we collect the async response and create another by requesting to insert the responses into the database. copy and past the preview add dept, add ee .
        .then(function (res) {
            connection.query("INSERT INTO roles (title, salary, deptId) VALUES (?,?,?)", [res.title, res.salary, res.deptId], function (err, data) {
                if (err) throw err;
                console.log("Roles have been Added");
                runSearch();
            })
        })
}
//RD = Copy pasta from a previous view function and changing it to a view roles selecting the entire table.
function viewRoles() {
    connection.query("SELECT * FROM roles", function (err, data) {
        if (err) throw err;
        console.table(banner.set(" - ROLE View - "), data);
        runSearch();
    })
}

//RD=  Look back into this past weeks classes for updating.........??????? its the last req.
function updateEmployee() {

}