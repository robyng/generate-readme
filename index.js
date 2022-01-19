const inquirer = require('inquirer')
const fs = require('fs')
const init = require('./src/readme-template.js');

const questions = () => {
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username? (required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {

                    return false;
                }
            }
        },
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
            message: 'Describe your app. What problem does it solve? (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log ('Project description required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'How do you install this app? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log ('Install description required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app? Provide instructions for starting.(Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log ('How to use instructions required');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does this app use? (Default is None)',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            default: 'None'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What email should people contact you at? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ('Email required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributers',
            message: 'Who contributed to this project? List all names including yourself. (Required)',
            validate: contributerInput => {
                if (contributerInput) {
                    return true;
                } else {
                    console.log ('Contributers list required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide instructions on how to become a contributor. (Required)',
            validate: contributerInput => {
                if (contributerInput) {
                    return true;
                } else {
                    console.log ('Contribution instructions required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What the intructions for runing tests? (Required)',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log ('Test instructions required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is the link to the repo of this project?'
        },
        // {
        //     type: 'input',
        //     name: 'deployed',
        //     message: 'What is the link to the deployed version of this project?'
        // },


    ])

}



questions()
.then(answers => {
    fs.writeFile('output/README.md', init(answers), err => {
        if (err) throw err;
        console.log('README file is complete! Checkout README.md in the output folder to see your changes.')
    });


})