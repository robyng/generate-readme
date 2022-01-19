const init = (answers) => {
    let licenseText = ''
    switch (answers.license) {
        case 'MIT':
        licenseText = 'The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.';
        break;
        case 'APACHE2.0': //remove spaces between words to not cause issue in Badge
        licenseText = 'The 2.0 version of the Apache License, approved by the ASF in 2004, helps us achieve our goal of providing reliable and long-lived software products through collaborative, open-source software development.';
        break;
        case 'GPL3.0':
        licenseText = 'The GNU General Public License is a free, copyleft license for software and other kinds of works.';
        break;
        case 'BSD3':
        licenseText = 'The BSD 3-clause license allows you almost unlimited freedom with the software so long as you include the BSD copyright and license';
        break;
        default: licenseText = 'Copyright Protected'
    }
 return `# ${answers.projectName} 
 [![Packagist License](https://img.shields.io/static/v1?label=License&message=${answers.license}&color=blue)](#license)

 ## Description 
 ${answers.description}
 
 Repository at ${answers.repo}
 
 ## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [Contributors and Credits](#contributors-and-credits)
 * [License](#license)
 * [Tests](#tests)
 * [Questions](#questions)
 

 
 ## Installation
 ${answers.install}
 
 ## Usage
 ${answers.usage}

 ### License
 ${answers.license}
 ${licenseText}

 ## Contributors and Credits
 ${answers.contribution}
 
 ${answers.contributers}
 
 ## Tests
 ${answers.tests}
 
## Questions
You may submit a public question to the reposiotry here: https://github.com/${answers.github}/issues
 
Or you can email us directly at ${answers.email}`;    

 };

 module.exports = init;