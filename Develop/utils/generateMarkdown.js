// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";

  switch (license) {
    case "MIT": 
    licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    break;
    case "Apache":
    licenseBadge = "![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)" ;
    break;
    case "GPL":
    licenseBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    break;
    default: 
    return "";
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  switch (license) {
    case "MIT": 
    licenseLink = "[MIT](https://opensource.org/licenses/MIT)";
    break;
    case "Apache":
    licenseLink = "[Apache](https://opensource.org/licenses/Apache-2.0)" ;
    break;
    case "GNU":
    licenseLink = "[GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
    break;
    default: 
    return "";
  }

  return licenseLink;
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ((license === "MIT") || (license === "Apache") || (license === "GPL")) {
    return `This project is licensed under ${renderLicenseLink(license)}.`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseInfo = renderLicenseSection(data.license); //calls the function with the license that the use inputs and sets to a variable
  const githubUrl = data.github;
  const licenseLogo = renderLicenseBadge(data.license); //calls the function for the license badge and sets it to a variable.
  const githubReadme = `[Github Page](${githubUrl})`
  const emailAddress = data.email;
  return `
  <h1 align="center">${data.title} </h1>
  \n
  ${licenseLogo}
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Tests](#tests)
  5. [Questions](#questions)
  6. [Contributing](#contributing)
  7. [Authors](#authors)
  8. [License](#license)
  ## Description<a name="description"></a>
  ${data.description} \n
  ## Installation<a name="installation"></a>
  ${data.installation} \n
  ## Usage<a name="usage"></a> 
  ${data.usage} \n
  ## Tests<a name="tests"></a>
  ${data.tests} \n
  ## Questions<a name="questions"></a>
  For any questions or inqueries please reach me at ${emailAddress} or view my projects at ${githubReadme}! \n
  ## Contributing<a name="contributing"></a>
  ${data.contributions} \n
  ## Authors<a name="authors"></a>
  ${data.name} \n
  ## License<a name="license"></a>
  ${licenseInfo}`;
}

module.exports = generateMarkdown;
