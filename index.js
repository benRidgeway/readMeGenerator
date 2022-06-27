// TODO: Include packages needed for this application
const inquirer = import("inquirer");
const fs = require("fs")
const { generatePage } = import("./Develop/utils/generateMarkdown.js");
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
            validate: (nameInput) => {
              if(nameInput) {
                return true;
              }   else {
                console.log('Title is required');
                return false;
              }
            },
        },
        // Description
        {
            type: "input",
            name: "Description",
            message: "Project Description",
            validate: (nameInput) => {
              if(nameInput) {
                return true;
              }   else {
                console.log('Description is required');
                return false;
              }
            },
        },
        // Installation
        {
            type: "input",
            name: "Installation",
            message: "How do you install your project?",
            validate: (nameInput) => {
              if(nameInput) {
                return true;
              }   else {
                console.log('Installation instructions required');
                return false;
              }
            },
        },
        // Usage
        {
            type: "input",
            name: "Project Usage",
            message: "What is your project used for?",
            validate: (nameInput) => {
              if(nameInput) {
                return true;
              }   else {
                console.log('A project usage description is required');
                return false;
              }
            },
        },
        // contributiuons
        {
            type: "input",
            name: "Contributions",
            message: "Contribution Guidelines",
            validate: (nameInput) => {
              if(nameInput) {
                return true;
              }   else {
                console.log('Contribution guidelines are required');
                return false;
              }
            },
        },
        // test guidelines
        {
            type: "input",
            name: "Testing Guidelines",
            message: "Add your projects testing guidelines here",
            validate: (nameInput) => {
              if(nameInput) {
                return true;
              }   else {
                console.log('Testing Guidelines are required');
                return false;
              }
            },
        },
        // License
        {
            type: "list",
            name: "License",
            message: "Your software license for the project",
        //   choices
            validate: (nameInput) => {
              if(nameInput) {
                return true;
              }   else {
                console.log('You must choose a license');
                return false;
              }
            },
        },
        // Github
        {
            type: "input",
            name: "Github UserName",
            message: "Add your Github UserName here",
            validate: (nameInput) => {
              if(nameInput) {
                return true;
              }   else {
                console.log('Github UserName is required');
                return false;
              }
            },
        },
        // email
        {
            type: "input",
            name: "Email",
            message: "Add your personal email here",
            validate: (nameInput) => {
              if(nameInput) {
                return true;
              }   else {
                console.log('Email address is required');
                return false;
              }
            },
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
