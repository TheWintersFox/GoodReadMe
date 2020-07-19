// installs
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// licenses

// contributors
const yesContributors = "If you would like to contribute to this project, please follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) guidelines."
const noContributors = "This project is currently not accepting any contributions."

// array of questions for user
const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter your name: "
    },
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project: "
    },
    {
        type: "input",
        name: "description",
        message:  "Please provide a brief description of your project."
    },
    {
        type: "input",
        name: "installation",
        message:  "What do you need to install in order for your application to work?"
    },
    {
        type: "input",
        name: "usage",
        message:  "How do you use your application?"
    },
    {
        type: "input",
        name: "tests",
        message:  "How would you run tests on this project?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license (if project is open sourced, choose 'none' from the list below).",
        choices: [
            "Apache License 2.0",
            "GNU GPLv3",
            "MIT",
            "ISC",
            "None"
        ]
    },
    {
        type: "list",
        name: "contributors",
        message: "Would you like other developers to contribute to your project?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email: "
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data));
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(answers)) {
    console.log(answers);

}

// function call to initialize program
init();
