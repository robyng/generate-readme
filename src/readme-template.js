const init = (answers) => {
    let licenseText = ''
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
 return `# ${answers.projectName} 
 ![Packagist License](https://img.shields.io/static/v1?label=License&message=${answers.license}&color=blue)

 ## Description 
 ${answers.description}

 Deployed at ${answers.deployed}
 
 ## Table of Contents
 * [Installation](#installation)
 * [Usage](#Usage)
 * [Credits](#credits)
 * [License](#license)
 * [Questions](#questions)
 

 
 Repository at ${answers.repo}
 
 ### Installation
 ${answers.install}
 
 ## Usage
 ${answers.usage}

 ### Credits
 ${answers.contributers}
 
 ### License
 ${answers.license}
 ${licenseText}
 
 
 ### Questions
 Github profile: https://github.com/${answers.github}
 
 Have any questions?
 
 Please email us at ${answers.email}
 
 ${answers.issues}`;    
 };

 module.exports = init;