// TODO: Include packages needed for this application i
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
const { error } = require("console");
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "Title",
        question: "What is the title of the project that you are creating this ReadMe file for?"
    },
    {
        name: "License Type",
        question: "What license would you prefer to be used for your personalized ReadMe file?"
    },
    {
        name: "Installation",
        question: "Please breifly describe any installations needed to use your application."
    }
//needs the rest of the questions logged ************************************************************************
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (err) {
            console.log("error");
        } else {
            console.log("ReadMe file created.");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
