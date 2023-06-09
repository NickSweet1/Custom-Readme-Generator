// TODO: Include packages needed for this application i
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        name: "Title",
        message: "What is the title of the project that you are creating this ReadMe file for?"
    },
    {
        name: "License Type",
        message: "What license would you prefer to be used for your personalized ReadMe file?"
    },
    {
        name: "Installation",
        message: "Please breifly describe any installations needed to use your application."
    }
//needs the rest of the questions logged ************************************************************************
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log("error");
        } else {
            console.log("ReadMe file created.");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile("README.md", markdownContent);
    });
};

// Function call to initialize app
init();
