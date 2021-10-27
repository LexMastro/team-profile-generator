const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generateHTML');


let employees = [];

const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
            validate: (value) => { if (value !== "") { return true } else { return 'Please enter name to continue' } }
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID?",
            validate: (value) => { if (value !== "") { return true } else { return 'Please enter ID to continue' } }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            validate: (value) => { if (value !== "") { return true } else { return 'Please enter email to continue' } }
        },
        {
            type: "list",
            name: "role",
            message: "What is your job role?",
            choices: ["Manager", "Engineer", "Intern"],
            validate: (value) => { if (value !== "") { return true } else { return 'Please choose a role to continue' } }
        },
    ]).then(data => {
        switch (data.role) {
            case "Manager":
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your office number?",
                        name: "office",
                        validate: (value) => { if (value !== "") { return true } else { return 'Please enter office number to continue' } }
                    },
                ]).then(answers => {
                    employees.push(new Manager(data.name, data.id, data.email, answers.office))
                    continuePrompt()
                })
                break;
            case "Engineer":
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your github username?",
                        name: "github",
                        validate: (value) => { if (value !== "") { return true } else { return 'Please enter github username to continue' } }
                    },
                ]).then(answers => {
                    employees.push(new Engineer(data.name, data.id, data.email, answers.github))
                    continuePrompt()
                })
                break;
            case "Intern":
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What school did you study at?",
                        name: "school",
                        validate: (value) => { if (value !== "") { return true } else { return 'Please enter school to continue' } }
                    },
                ]).then(answers => {
                    employees.push(new Intern(data.name, data.id, data.email, answers.school))
                    continuePrompt()
                })
                break;
        }
    })
}

function continuePrompt() {
    inquirer.prompt([
        {
            type: "list",
            message: "Do you want to add another Employee?",
            name: "add",
            choices: ["Yes", "No"]
        }
    ]).then(exitQuestions => {
        if (exitQuestions.add === "Yes") {
            promptQuestions()
        } else {
            makeHTML();
        }
    })

}

function makeHTML() {
    const htmlFile = generateHTML(employees);
    const fileName = "index.html"
    const outputPath = path.join(__dirname, 'output')

    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, 0744);
    }

    const filePath = path.join(outputPath, fileName)

    fs.writeFileSync(filePath, htmlFile, (err) =>
        err ? console.log(err) : console.log(`Successfully created ${fileName}!`)
    )
}


promptQuestions()
