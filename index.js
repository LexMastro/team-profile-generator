const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { data } = require('autoprefixer');

// link to page creation
const generateHTML = require('./src/generateHTML');

// // team profiles
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern'); 


const writeFilesync = util.promisify(fs.writeFile);

const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is your job role?",
            choices: ["Manager", "Engineer", "Intern"],
            validate: (value) => { if (value !== "") { return true } else { return 'Please choose a role to continue' } }
        },
        {
            type: "input",
            name: "role",
            message: "What is your ID?",
            validate: (value) => { if (value !== "") { return true } else { return 'Please enter ID to continue' } }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            validate: (value) => { if (value !== "") { return true } else { return 'Please enter email to continue' } }
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
                ])
                break;
            case "Engineer":
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your github username?",
                        name: "github",
                        validate: (value) => { if (value !== "") { return true } else { return 'Please enter github username to continue' } }
                    },
                ]);
                addEmployee(Engineer.answers);
                break;
            case "Intern":
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What school did you study at?",
                        name: "school",
                        validate: (value) => { if (value !== "") { return true } else { return 'Please enter school to continue' } }
                    },
                ]);
                addEmployee(Intern.answers);
        }
    });
}
    function init() {
        promptQuestions()
            .then((answers) => {

                const htmlFile = generateHTML(answers);
                const fileName = "index.html"
                const outputPath = path.join(__dirname, 'output')

                if (!fs.existsSync(outputPath)) {
                    fs.mkdirSync(outputPath, 0744);
                }

                const filePath = path.join(outputPath, fileName)

                fs.writeFilesync(filePath, htmlFile, (err) =>
                    err ? console.log(err) : console.log(`Successfully created ${fileName}!`)
                )
            });
    };

    init();