// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //Can use a !== 'None' to determine outcome
  if (license !== "None") {
    //Create the badge
    return `![License](https://img.shields.io/badge/License-${license}-skyblue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //Link to add to Table of Contents if there is a license section
  if (license !== "None") {
    //Link
    return `[License](#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //Create the entire license section if there is a license present
  if (license !== "None") {
    return `
    ## License
    
    Please see the license file in the GitHub repository for more information`;
  }
  return "";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
  # ${data.title}
  ${licenseBadge}

  ## Description

  ${data.description}

  ## Table of Contents

  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributing](#contributing)\n
  [Credits](#credits)\n
  ${licenseLink}

  ## Installation
  
  ${data.install}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.test}

  ## Credits\n

  ${licenseSection}

  ## Questions

  If there are any questions, you may visit my GitHub page at
  https://github.com/${data.username}\n
  Or feel free to contact me at ${data.email}.`;
}

module.exports = generateMarkdown;
