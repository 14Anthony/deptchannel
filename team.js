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
});

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "Find songs by artist",
                "Find all artists who appear more than once",
                "Find data within a specific range",
                "Search for a specific song",
                "Find artists with a top song and top album in the same year"
            ]
        })
    then(function (answer) {
        switch (answer.action) {
            case "Find songs by artist":
                artistSearch();
                break;

            case "Find all artists who appear more than once":
                multiSearch();
                break;

            case "Find data within a specific range":
                rangeSearch();
                break;

            case "Search for a specific song":
                songSearch();
                break;

            case "Find artists with a top song and top album in the same year":
                songAndAlbumSearch();
                break;
        }
    });
}