const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// link to page creation
// const generateHTML = require('./src/generateHTML');

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
            validate: (value) =>{ if(value !== "") {return true} else {return 'Please choose a role to continue'}}
        },
        {
            type: "list",
            name: "role",
            message: "What is your ID?",
            validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter ID to continue'}}
        },
        {
            type: "list",
            name: "email",
            message: "What is your email?",
            validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter email to continue'}}
        },

        ]).then(data => {
            switch (data.role) {
                case "Manager":
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your office number?",
                        name: "office",
                        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter office number to continue'}}
                    },
                ]).then[addEmployee => {
                    ` <!DOCTYPE html>
                    <html lang="en">
                    <head>
                      <meta charset="UTF-8">
                      <meta http-equiv="X-UA-Compatible" content="ie=edge">
                      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
                      <link rel="stylesheet" href="fontawesome.min.css">
                      <link rel="stylesheet" href="style.css">
                      <title>Team Profile Generator</title>
                    </head>
                    <body>
                        <header>
                            <h1>My Team</h1>
                        </header>
                        <div class="container">
                        <div class="card">
                            <div class="card-title-bg">
                            <h1 class="card-title">${answers.name}</h1>
                            </div>
                            <div class="card-info">
                              <i class="fas fa-tasks"></i>
                              <p class="id">ID: ${answers.id}</p>
                              <p class="email">Email: <a href="mailto:${answers.email}">${answers.email}</a></p>
                              <p class="office">Office Number: ${answers.office}</p>
                              </div>
                          </div>
                        </div>
                    </body>
                    </html>`;
                    addEmployee(Manager.answers);
                }]
            }
            switch (data.role) {
                case "Engineer":
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your github username?",
                        name: "github",
                        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter github username to continue'}}
                    },
                ]);
                addEmployee(Engineer.answers);
            }
            switch (data.role) {
                case "Intern":
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What school did you study at?",
                        name: "school",
                        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter school to continue'}}
                    },
                ]);
                addEmployee(Intern.answers);
            }
        })
    }
  const generateHTML = (answers) =>
  ` <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="fontawesome.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator</title>
  </head>
  <body>
      <header>
          <h1>My Team</h1>
      </header>
      <div class="container">
      <div class="card">
          <div class="card-title-bg">
          <h1 class="card-title">${answers.name}</h1>
          </div>
          <div class="card-info">
            <i class="fas fa-tasks"></i>
            <p class="id">ID: ${answers.id}</p>
            <p class="email">Email: <a href="mailto:${answers.email}">${answers.email}</a></p>
            <p class="office">Office Number: ${answers.office}</p>
            </div>
        </div>
      </div>
  </body>
  </html>`;


//   const init = () => {
//     promptQuestions()
//       .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//       .then(() => console.log('Successfully made your team!'))
//       .catch((err) => console.error(err));
//   };

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
  
