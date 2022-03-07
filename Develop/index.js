// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
            if (data.license === "MIT") {
                license = "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
            }
            else if (data.license === "GPL v3") {
                license = "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)";
            }
            else if (data.license === "AGPL") {
                license = "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)";
            }

            const readMeText = `
            
# ${data.title}
     
${license}

## Description
* ${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
            
## Installation
* In order to use the application, please make sure to run the ${data.install} command prior to running the applicaiton.

## Usage
* The key feature(s) of the application: ${data.usage}

## License
* Licensed under the ${data.license} license.

## Contributing
* ${data.guidelines}

## Tests
* In order to test the functionality of this application, unit tests have been developed. To run these unit tests, make sure to use the ${data.test} command.
                
## Questions
If you have any additional questions, please reach out to:
* Github Profile: www.github.com/${data.github}
* Email Address: ${data.email}`
    
            writeToFile("README.md", readMeText);


        })


}

// Function call to initialize app
init();
