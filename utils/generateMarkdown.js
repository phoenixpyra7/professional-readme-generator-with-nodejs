// Created a function that returns a license badge based on which license is passed in.
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-green.svg)`;
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
${renderLicenseBadge(data.license)} //this here?

## Live URL
[Live URL](${data.link})

## Description
${data.description}

## Table of Contents
* [Features](#features)
* [How to Use This Application](#HowtoUseThisApplication)
* [Languages & Dependencies](#languagesanddependencies)
* [Testing](#testing)
* [Contributors](#contributors)
* [Questions](#questions)

// breaking up parts for easy reading
## Features:
${data.features}

## How to Use This Application:
${data.usage}

## Languages & Dependencies:
${data.require}

##  License(s):
${data.license}

## Tests:
${data.test}

## Contributors:
${data.contributors}

## Author:
${data.author}

## Questions:
-  You can reach me with questions at: [Github](https://${data.creator})
-  Or you can email me at: [authoremail](${data.email})
`;
}

module.exports = generateMarkdown;
