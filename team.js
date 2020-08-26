//RD =  here is qhere I require the npm pacakages, and third-party programs for npm and console applications
const mysql = require("mysql");
const inquirer = require("inquirer");
const console = require('console.table')
const banner = require("simple-banner");
banner.set(" - Corporate Heirarchy - ")
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
                "Update Employee Manager",
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
                case "Update Employee Manager":
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

        ])
}