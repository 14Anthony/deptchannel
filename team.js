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
            {
                type: "list",
                name: "roleId",
                message: "Provide the EE's Role",
                choices: [
                    "10 sales lead",
                    "11 salesperson",
                    "20 lead engineer",
                    "21 software engineer",
                    "31 accountant",
                    "40 leagal team lead",
                    "41 lawyer"
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
            //RD =  Here is where I break apart the choices array and ids for the roles into seperate strings at the space.
            let roleID = res.roleID.split(" ");
            //RD = per JJ, the question marks are directly related to the the values, and sequence matters?           
            connection.query("INSERT INTO employee (firstName, lastName, roleId, managerId) Values (?,?,?,?)", [res.firstName, res.lastName, res.roleid[0], res.managerid], function (err, data) {
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
        console.log(data);
        runSearch();
    })
}
function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "dept",
                message: "Provide your Departments Name."
            },
        ])
        .then(function (res) {
            connection.query("INSERT INTO department (name) VALUES ?", [res.department], function (err, data) {
                if (err) throw err;
                console.log("Department Added");
                runSearch();
            })
        })
}