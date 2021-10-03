// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
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
      {
        type: 'input',
        name: 'credits',
        message: 'List all collaborators and third-party assets that require attribution',
      },
    {
        type: 'list',
        message: 'What license would you like for this application?',
        name: 'license',
        default: '',
        choices: ['MIT', 'GNU GPLv3', 'Apache'],
  },
  {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.',
  },
  {
        type: 'input',
        name: 'tests',
        message: 'If your project has any tests, describe them here.',
},
{
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
},
{
        type: 'input',
        name: 'email',
        message: 'What is your preferred contact email address?',
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
