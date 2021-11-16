
// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your project name? (required)',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log ('Project name required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your app. What does it do? (Required)'
        },
        {
            type: 'input',
            name: 'desc-use',
            message: 'How do you use this app?'
        },
        {
            type: 'input',
            name: 'install',
            message: 'How do you install this app?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license does this app use?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'issues',
            message: 'How do you report issues?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What email should people contact you at?'
        },
        {
            type: 'input',
            name: 'contributers',
            message: 'Who contributed to this project? List all names including yourself.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the link to the repo of this project?'
        },

    ])
}

questions()
    .then(questions => {
        console.log(questions)
    })
    
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const fs = require('fs')

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
// init();
// © 2021 GitHub, In



