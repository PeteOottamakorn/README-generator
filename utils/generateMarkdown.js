// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n## Description\n\n${data.description}\n\n## Table of Contents\n\nInsert Table of Contents here\n\n## Installation\n\n${data.install}\n\n## Usage\n\n${data.usage}\n\n## Contributing\n\n${data.contribute}\n\n## Tests\n\n${data.test}\n\n## License\n\nLicense function goes here\n\n## Questions\n\nIf there are any questions, you may visit my GitHub page at\nhttps://github.com/${data.username}\nOr feel free to contact me at ${data.email}.`;
}

module.exports = generateMarkdown;
