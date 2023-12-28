// Included packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Created an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "link",
    message:
      "What is the URL to where a user can access your deployed application.",
  },
  {
    type: "input",
    name: "description",
    message: "What is the purpose and functionality of this project.",
  },
  {
    type: "input",
    name: "features",
    message: "List all of the features about this project here.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "What are the languages or technologies associated with this project.",
  },
  {
    type: "input",
    name: "require",
    message: "List any and all project dependencies here.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select any and all licenses applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "test",
    message: "Provide a list of any tests that have been conducted.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any and all contributors by their Github usernames.",
    default: "", //Do I need this?
  },
  {
    type: "input",
    name: "creator",
    message: "What is your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address.",
  },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data); //removed a possible return comand
}


// Created a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating your README.md File...");//Providing confirmation message.
    writeToFile("Generated-README.md", generateMarkdown({ ...responses }));
  });
}
// Function call to initialize app
init();
