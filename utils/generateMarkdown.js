// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Modified license to create badge
  const modLicense = license.replace(/ /g, "_");
  const finalLicense = modLicense.replace(/-/g, "--");
  //Can use a !== 'None' to determine outcome
  if (license !== "None") {
    //Create the badge
    return `![License](https://img.shields.io/badge/License-${finalLicense}-skyblue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //Link to add to Table of Contents if there is a license section
  if (license !== "None") {
    return `[License](#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Create the entire license section if there is a license present
  if (license !== "None") {
    return `
    \n## License
    
    \nThe license being used for this project is ${license}. Please see the license file in the GitHub repository for more information`;
  }
  return "";
}

function renderBodyTop(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  return `
  # ${data.title}
  ${licenseBadge}

  ## Description

  ${data.description}

  ## Table of Contents

  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  ${licenseLink}\n
  [Questions](#questions)

  ## Installation
  
  ${data.install}

  ## Usage

  ${data.usage}

  ## Contributing

  How to contribute to this project:\n
  
  ${data.contribute}

  ## Tests

  ${data.test}`;
}

function renderBodyBottom(data) {
  return `
  ## Questions

  If there are any questions, you may visit my GitHub page at
  https://github.com/${data.username}\n
  Or feel free to contact me at ${data.email}.`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const bodyTop = renderBodyTop(data);
  const licenseSection = renderLicenseSection(data.license);
  const bodyBottom = renderBodyBottom(data);

  return `
  ${bodyTop}
  ${licenseSection}
  ${bodyBottom}`;
}

module.exports = generateMarkdown;
