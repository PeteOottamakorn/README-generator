const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//Array with questions to pass into inquirer prompt
const questions = [
  //Prompt for project title
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  //Prompt for description
  {
    type: "input",
    name: "description",
    message:
      "Please provide a description explaining the what, why, and how of this project:",
  },
  //Prompt for installation instructions
  {
    type: "input",
    name: "install",
    message: "What needs to be done to install the project?",
  },
  //Prompt for usage information
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions on how to use the project:",
  },
  //Prompt for contribution guidelines
  {
    type: "input",
    name: "contribute",
    message: "How can others contribute to this project?",
  },
  //Prompt for test instructions
  {
    type: "input",
    name: "test",
    message: "What tests were completed for this project?",
  },
  //Prompt for license (look into checklist or radial type)
  {
    type: "checkbox",
    name: "license",
    message: "Which license is this project under?",
    choices: [
      "Apache",
      "General Public Licence",
      "MIT",
      "BSD 2",
      "BSD 3",
      "Boost",
      "Creative Commons",
      "Eclipse",
      "GNU Affero",
      "GNU General",
      "GNU Lesser",
      "Mozilla",
      "Unlicense",
    ],
  },
  //Prompt to obtain GitHub username
  {
    type: "input",
    name: "username",
    message: "What is your username on GitHub?",
  },
  //Prompt to obtain email address
  {
    type: "input",
    name: "email",
    message: "What is the best e-mail to reach you at?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let markdown = generateMarkdown(data);
  //fs.writeFile('file', data, callback function)
  fs.writeFile(`${fileName}_README.md`, markdown, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README created.");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // console.log(answers.title);
    writeToFile(answers.title, answers);
  });
}

// Function call to initialize app
init();
// console.log(data);
