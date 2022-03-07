// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions =   
    [   
        {
            type: "input",
            name: "title",
            message: "What is the title of the project?",
        },
        {
            type: "input",
            name: "description",
            message: "What is the description of the project?",
        },
        {
            type: "input",
            name: "install",
            message: "What command should be used to install the necessary dependicies for this project?",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the key feature of the project?",

        },
        {
            type: "input",
            name: "guidelines",
            message: "How can someone contribute to the project?",
        },
        {
            type: "input",
            name: "test",
            message: "What command should be use to run the unit tests on this application?",
        },
        {
            type: "list",
            name: "license",
            message: "What license should be used for your project?",
            choices: ["MIT","GPL v3", "AGPL"],
        },
        {
            type: "input",
            name: "github",
            message: "What is your Github username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log("README created!"))
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then((data) => {
            const readMeText = markDown(data);
    
            writeToFile("README.md", readMeText);


        })


}

// Function call to initialize app
init();
