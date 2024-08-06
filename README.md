# Full-Stack Developer Bootcamp Module 10 - Challenge: SVG Logo Generator

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Generator](#generator)
- [Badge](#badge)
- [Credit and Source Code](#credits-and-code-source)
- [Related Efforts](#related-efforts)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [GitHub Repository Location (HTTPS)](#github-repository-location-https)
- [GitHub Pages Location](#github-pages-location)
- [Application Screenshots](#application-screenshots) 


## Description

The SVG Logo Generator is a Node.js Command-Line Interface (CLI)-based application that enables Users to quickly and professionally create customized graphical logos, in the form of SVG format files by answering a simple string of questions regarding the User's Project.  

The SVG Logo Generator creates a uniquely-identified, free-standing SVG file that may be imported to the User's application structure of choice, whether browser-based HTML, or within a stand-alone application structure (e.g., Xcode, Android).

The SVG Logo Generator ensures consistency of generated output, through programmatically-standardized specifications defined by the User requirements questionnaire, and makes available the output SVG file in a defined (predictable) location and file format that enables automated ingestion to, or use through and end-point application.

As developed, the SVG Logo Generator is only accessible through a local instance, specific to each accessing computer.

Artifacts generated through local instances of the SVG Logo Generator will be available to all Users of the install computer, held in on-device storage and, consequently, not currently accessible through the Web unless deployed as a component of an online application or other end-point.

The SVG Logo Generator source code is published on GitHub, and may be cloned to individual User computers to instantiate local versions.

The app utilizes a Node.js CLI-based (Inquirer Module) Form to ingest User requirements input, and JavaScript (mediated by Node) to generate local SVG file output. 

Because the SVG Logo Generator output files are held in on-device storage, generated artifacts, though not Inquirer-mediated questionnaire responses themselves, will persist across User sessions on individual, hosting computers.


## Installation

The SVG Logo Generator source code may be downloaded from its GitHub repository, and run directly by a hosting computer.

No Installation of the SVG Logo Generator itself is required.

However, local computers must hold an installation of Node.js in order the run the SVG Logo Generator application.


## Usage

The SVG Logo Generator is intended for use by one or more Users to generate personalized SVG file-based Logos specific to User-selected requirements (e.g., Shape, Color) and maintain the locally-generated SVG file artifacts which persist across multiple sessions. 

All Users of the SVG Logo Generator on a local computer will have full access to all generated artifacts.


## Credits and Code Source

Code, where referenced from a third-party Source, is noted in Comments accompanying the relevant Code lines.


## License

Copyright <YEAR> <COPYRIGHT Chris Milazzo>


MIT License

Copyright (c) 2024 MeanderingBrook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Badges

N / A


## Features

N / A


## How to Contribute

N / A


## Tests

Jest-mediated automated testing, using npm ('npm run test'), see shapes.test.js ('tests' folder)

Return value and generated content testing and data evaluation, see archive.js ('archive' Folder)

`console.log` output of specification data specific to User requirements; see index.js, shapes.js, inquirer.js, logo.js ('lib' Folder).


## GitHub Repository Location (HTTPS)

https://github.com/MeanderingBrook/10_Challenge_SVG-Generator.git


## GitHub Pages Location

Not Applicable: Application is a Node.js Command Line Interface (CLI)-based application that cannot be hosted through a browser interface.


## Application Screenshots

![SVG Generator: CLI Questionnaire - Screenshot 01](./assets/images/SVG-Generator_CLI-Questionnaire_Screenshot-01.png?raw=true "SVG Generator: CLI Questionnaire")

![SVG Generator: CLI Questionnaire with Validation Warning - Screenshot 02](./assets/images/SVG-Generator_CLI-Questionnaire-Validation-Warning_Screenshot-02.png?raw=true "SVG Generator: CLI Questionnaire with Validation Warning")

![SVG Generator: CLI Questionnaire with Process Completion Notice - Screenshot 03](./assets/images/SVG-Generator_CLI-Questionnaire-Process-Completion-Notice_Screenshot-03.png?raw=true "SVG Generator: CLI Questionnaire with Process Completion Notice")

![SVG Generator: CLI Questionnaire with Process Completion Notice (Limited Log Output) - Screenshot 04](./assets/images/SVG-Generator_CLI-Questionnaire-Process-Completion-Notice-Limited-Log-Output_Screenshot-04.png?raw=true "SVG Generator: CLI Questionnaire with Process Completion Notice (Limited Log Output)")

![SVG Generator: Generated Logo Output - Screenshot 05](./assets/images/SVG-Generator_Generated-Logo-Output_Screenshot-05.png?raw-true "SVG Generator: Generated Logo Output")