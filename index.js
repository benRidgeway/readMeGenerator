// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generatePage } = require("./Develop/utils/generateMarkdown.js");
console.log(inquirer);
console.log(fs);
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        // Title
        {
            type: "input",
            name: "title",
            message: "Project Title Here",
        },
        // Description
        {
            type: "input",
            name: "description",
            message: "Project Description",
        },
        // Installation
        {
            type: "input",
            name: "installation",
            message: "How do you install your project?",
        },
        // Usage
        {
            type: "input",
            name: "usage",
            message: "What is your project used for?",
        },
        // contributiuons
        {
            type: "input",
            name: "contributions",
            message: "Contribution Guidelines",
        },
        // test guidelines
        {
            type: "input",
            name: "testing",
            message: "Add your projects testing guidelines here",
        },
        // License
        {
            type: "list",
            name: "license",
            message: "Your software license for the project",
            choices: ["MIT", "GPL-3.0", "N/A"],
        //   choices

        },
        // Github
        {
            type: "input",
            name: "github",
            message: "Add your Github UserName here",
        },
        // email
        {
            type: "input",
            name: "email",
            message: "Add your personal email here",
        }, 
    ]);
};

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
    questions().then((data) => {
        generatePage(data);
    });
}

// Function call to initialize app
init();
