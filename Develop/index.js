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
        name: "license",
        message: "What license would you prefer to be used for your personalized ReadMe file?"
    },
    {
        name: "installation",
        message: "Please breifly describe any installations needed to use your application."
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
