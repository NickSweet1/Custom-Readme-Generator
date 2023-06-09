// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";

  switch (license) {
    case "MIT": 
    licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    break;
    case "Apache 2.0":
    licenseBadge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)" ;
    break;
    case "GPLv3":
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
  if (license) {
    return `This project is licensed under ${renderLicenseLink(license)}. \n ${renderLicenseBadge(license)}`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseInfo = renderLicenseSection(data.license); //calls the function with the license that the use inputs and sets to a variable
  return `
  # ${data.title} \n
  ## Description
  ${data.description} \n
  ## Installation
  ${data.installation} \n
  ## License
  ${licenseInfo} \n
`; //needs the rest of the imformation logged ********************************************
}

module.exports = generateMarkdown;
