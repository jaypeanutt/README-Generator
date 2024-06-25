// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "Enter your email address:",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title for this project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please give a brief project description.",
    name: "description",
  },
  {
    type: "input",
    message: "Please outline installation instructions.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please outline usage information.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please outline contribution guidelines.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please outline test instructions.",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license for your application:",
    name: "license",
    choices: ["MIT", "Apache 2.0", "BSD 2", "BSD 3", "None"],
  },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Success! README.md has been generated.")
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile("README.md", readmeContent);
    });
}

// Function call to initialize app
init();