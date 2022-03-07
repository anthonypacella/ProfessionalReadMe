// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "MIT")
    {
      licenseBadge = "https://img.shields.io/apm/l/atomic-design-ui.svg?";
    }
  else if (license === "GPL v3")
    {
      licenseBadge = "https://img.shields.io/badge/License-GPL%20v3-yellow.svg"
    }
  else if (license === "AGPL")
    {
      licenseBadge = "https://img.shields.io/badge/license-AGPL-blue.svg";
    }
  else
    {
      licenseBadge = "";
    }

    return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === "MIT")
    {
      licenseLink = "https://opensource.org/licenses/MIT";
    }
  else if (license === "GPL v3")
    {
      licenseLink = "https://www.gnu.org/licenses/quick-guide-gplv3.en.html"
    }
  else if (license === "AGPL")
    {
      licenseLink = "https://fossa.com/blog/open-source-software-licenses-101-agpl-license/";
    }
  else 
    {
      licenseLink = "";
    }

    return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
      licenseSection = `Licensed under the ${license} license. To learn more about the ${license} license, please visit: ${renderLicenseLink(license)}.`;
      return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  
  # ${data.title}
       
  ![${data.license} License](${renderLicenseBadge(data.license)})
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
              
  ## Installation
  * In order to use the application, please make sure to run the ${data.install} command prior to running the applicaiton.
  
  ## Usage
  * The key feature(s) of the application: ${data.usage}
  
  ## License
  * ${renderLicenseSection(data.license)}
  
  ## Contributing
  * ${data.guidelines}
  
  ## Tests
  * In order to test the functionality of this application, unit tests have been developed. To run these unit tests, make sure to use the ${data.test} command.
                  
  ## Questions
  If you have any additional questions, please reach out to:
  * Github Profile: www.github.com/${data.github}
  * Email Address: ${data.email}
  `;
}

module.exports = generateMarkdown;
