// Created a function that returns a license badge based on which license is passed in.
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link

function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {}

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
// liscense?
* [Testing](#testing)
* [Contributors](#contributors)
// creator?
* [Questions](#questions)


## Features
${data.features}

## How to Use This Application:
${data.usage}

## Languages & Dependencies
${data.require}

##  License
${data.license}

## Testing
${data.test}

## Contributors
${data.contributors}

## Creator
${data.creator}

## Questions
-  You can reach me with questions at: [Github](https://${data.creator})
-  Or you can email me at: [Email](${data.email})
`;
}

module.exports = generateMarkdown;
