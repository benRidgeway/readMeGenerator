const fs = require ('fs')
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (data.license === "GPL-3.0") {
//     data.licenseBadge = "GPLv3"
//   }
//   if (data.license === "MIT") {
//     data.licenseBadge = "MIT"
//   }
//   else {
//     "";
//   }

// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## License
  ${data.license}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#testing)
  * [Github](#github)
  * [Email](#email)



  ## Description
  ${data.description}

  ##Installation
  ${data.usage}

  ##Contributing
  ${data.contributions}

  ##Tests
  ${data.testing}

  ##GitHub
  ${data.github}

  ##Email
  ${data.email}


`;
}

function generatePage (data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./newfile.md", generateMarkdown(data), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ok: true, message: "NewFile created"});
    });
  });
};






module.exports = { 
  generatePage,
 };
