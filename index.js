// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const prompt = inquirer.createPromptModule();
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are the test instructions?",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license for your project.",
    choices: ["MIT", "GPLv3", "Apache", "BSD3-Clause", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    prompt (questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
        console.log('Successfully created README.md');
    })
    .catch((error) => {
        console.error('Error generating README:', error);
    })
}

// Function call to initialize app
init();
