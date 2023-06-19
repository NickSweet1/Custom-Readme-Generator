// TODO: Include packages needed for this application i
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is the title of the project that you are creating this ReadMe file for?" //changed to message from question to allow it to be used in the inquirer
    },
    {
        name: "description",
        message: "What is a good description for the project that you are creating?"
    },
    {
        name: "usage",
        message: "What information would you like to include in the usage section of your readme?"
    },
    {
        name: "tests",
        message: "Whould you like to include any information regarding testing?"
    },
    {
        name: "license",
        message: "What license would you prefer to be used for your personalized ReadMe file?",
        type: "list",
        choices: ["MIT", "Apache", "GPL"]
    },
    {
        name: "installation",
        message: "Please breifly describe any installations needed to use your application."
    },
    {
        name: "contributions",
        message: "Please enter any information regarding how another developer can contribute to this project."
    },
    {
        name: "name",
        message: 'Please type your name for the "Authors" section of the readme.'
    },
    {
        name: "github",
        message: 'Please enter your github url for the "Authors" section.'
    },
    {
        name: "email",
        message: "Please enter an email for the questions section of your readme."
    }
//needs the rest of the questions logged ************************************************************************
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log("error"); // logs error if error occurs
        } else {
            console.log("ReadMe file created."); //logs proof that file has been created
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        const markdownContent = generateMarkdown(answers); //stoes the data to enter into README file to a variable
        writeToFile("README.md", markdownContent); //calls the function to actually generate the README file
    });
};

// Function call to initialize app
init();
