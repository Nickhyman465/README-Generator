// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const markdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your application?'
        },
    {
        type: 'input',
        name: 'description',
        message: 'What is the describtion for your application?',
      },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How does your application function?',
      },
      
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('README CREATED!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('README.md', data)
    })
    .then(() => console.log('README Write Success!'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
