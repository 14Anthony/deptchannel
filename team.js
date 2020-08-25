//RD =  here is qhere I require the npm pacakages, and third-party programs for npm and console applications
const mysql = require("mysql");
const inquirer = require("inquirer");
const console = require('console.table')
const banner = require("simple-banner");
banner.set(" - Corporate Heirarchy - ")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "cms_db"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "VIEW All Employees",
                "VIEW All Employees by Dept",
                "VIEW All Employees by Manger",
                "ADD Employee",
                "REMOVE Employee",
                "UPDATE Employee by Department",
                "UPDATE Employee by Manager",
                "VIEW All Roles",
                "ADD a Role",
                "REMOVE a Role"
            ]
        })
    then(function (answer) {
        switch (answer.action) {
            case "VIEW All Employees":
                allEEs();
                break;

            case "VIEW All Employees by Dept":
                allEEsDept();
                break;

            case "VIEW All Employees by Manger":
                allEEsManager();
                break;

            case "ADD Employee":
                addEE();
                break;

            case "REMOVE Employee":
                removeEE();
                break;

            case "UPDATE Employee by Department":
                updateEEDept();
                break;

            case "UPDATE Employee by Manager":
                updateEEManager();
                break;

            case "VIEW All Roles":
                viewAllRoles();
                break;

            case "ADD a Role":
                addRole();
                break;

            case "REMOVE a Role":
                removeRole();
                break;
        }
    });
}
function allEEs() {
    inquirer
        .prompt({
            name: "artist",
            type: "input",
            message: "What artist would you like to search for?"
        })
        .then(function (answer) {
            const query = "SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function (err, res) {
                for (let i = 0; i < res.length; i++) {
                    console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
                }
                runSearch();
            });
        });
}