const inquirer = require('inquirer')
const fs = require('fs')

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
                    console.log ('Github username required');
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
            message: 'Describe your app. What does it do? (Required)',
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
            name: 'usage',
            message: 'How do you use this app?'
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
            type: 'list',
            name: 'license',
            message: 'What license does this app use? (Default is None)',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            default: 'None'
        },
        {
            type: 'input',
            name: 'issues',
            message: 'How do you report issues?'
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
            name: 'repo',
            message: 'What is the link to the repo of this project?'
        },
        {
            type: 'input',
            name: 'deployed',
            message: 'What is the link to the deployed version of this project?'
        },


    ])

}



questions()
.then(answers => {
    fs.writeFile('output/README.md', init(answers), err => {
        if (err) throw err;
        console.log('README file is complete! Checkout README.md in the output folder to see your changes.')
    });


})


const init = (answers) => {
   let licenseText = ''
   console.log(answers.license)
   switch (answers.license) {
       case 'MIT':
       licenseText = 'The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.';
       break;
       case 'APACHE 2.0':
       licenseText = 'The 2.0 version of the Apache License, approved by the ASF in 2004, helps us achieve our goal of providing reliable and long-lived software products through collaborative, open-source software development.';
       break;
       case 'GPL 3.0':
       licenseText = 'The GNU General Public License is a free, copyleft license for software and other kinds of works.';
       break;
       case 'BSD 3':
       licenseText = 'The BSD 3-clause license allows you almost unlimited freedom with the software so long as you include the BSD copyright and license';
       break;
       default: licenseText = 'Copyright Protected'
   }
return `
# ${answers.projectName} 
![Packagist License](https://img.shields.io/static/v1?label=License&message=${answers.license}&color=blue)

## About 
${answers.description}

${answers.usage}

### Links

Deployed at ${answers.deployed}

Repository at ${answers.repo}

### Installation
${answers.install}

### Credits
${answers.contributers}

### License
${answers.license}
${licenseText}


### Questions and Issues
Github profile: https://github.com/${answers.github}

Have any questions?

Please email us at ${answers.email}

${answers.issues}

`;

    
}