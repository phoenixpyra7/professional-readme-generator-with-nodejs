// Created a function that returns a license badge based on which license is passed in.
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-purple.svg)`;
  }
  return "";
}

//Created a function that returns the license link
function renderLicenseLink(license) {
  let licenseLink;
  switch (license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "Apaches":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// Created a function that returns the license section of README
function renderLicenseSection(license) {
  let licenseSect = "";

  if (license != "None") {
    licenseSect += "License information: " + renderLicenseLink(license) + "\n";
  }
  return licenseSect;
}

// Created a function to generate a markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)} 

## Live URL
[Live URL](${data.link})

##  License(s):
${data.license}

##  Table of Contents
* [Decsription](#decsription)
* [Languages](#languages)
* [Dependencies](#dependencies)
* [Testing](#testing)
* [Contributors](#contributors)
* [Questions](#questions)


## Description
-  ${data.description}


## Languages including instructions:
-  ${data.installation}


## Dependencies including instructions:
-  ${data.require}


## Test and Instructions:
-  ${data.test}


## Contributors:
-  ${data.contributors}


## Questions:
-  You can reach me with questions at: [Github](https://${data.author}) 
-  Or you can email me at: [Email](${data.email})
`;
}

module.exports = generateMarkdown;
