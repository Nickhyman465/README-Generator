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
    [![License: ${license}](${renderLicenseBadge(license)})(${renderLicenseLink(license)})]`
  }else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
---
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
---
## Installation
${data.installation}
---
## Usage
${data.usage}
---
## Credits
${data.credits}
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.
## License
${renderLicenseSection(data.license)}
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
---
## Features
${data.features}
`;
}

module.exports = generateMarkdown;
