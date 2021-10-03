// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return  `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if(license === 'GNU GPLv3') {
    return `![License: GNU GPLv3]https://img.shields.io/badge/License-GPLv3-blue.svg`
  } else if(license === 'Apache 2.0') {
    return `![License: Apache 2.0]https://img.shields.io/badge/License-Apache%202.0-blue.svg`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return `https://choosealicense.com/licenses/mit/`
  } else if(license === 'GNU GPLv3') {
    return `https://choosealicense.com/licenses/gpl-3.0/`
  } else if(license === 'Apache 2.0') {
    return `https://choosealicense.com/licenses/apache-2.0/`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `## License 
    [![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
  }else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
${renderLicenseSection(data.license)}
---
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Tests](#tests)
- [Questions](#questions)
---
## Installation
${data.installation}
---
## Usage
${data.usage}
---
## Credits
${data.credits}
---
## License
${renderLicenseSection(data.license)}
---
## Features
${data.features}
---
## Tests
${data.tests}
---
## Questions
(https://github.com/${data.github})
If you have any additional questions, please contact me at ${data.email}

`;
}

module.exports = generateMarkdown;
