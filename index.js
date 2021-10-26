const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// link to page creation
// const generateHTML = require('./src/generateHTML');

// // team profiles
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern'); 


const writeFileAsync = util.promisify(fs.writeFile);

const teamManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Who is the Manager of this team?',
        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter a manager to continue'}}
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter the managers ID.',
        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter a managers ID to continue'}}
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter the managers email.',
        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter a managers email to continue'}}
      },
      {
        type: 'input',
        name: 'office',
        message: 'Please enter the managers office number',
        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter a managers office number to continue'}}
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
    ]);
  };

  const generateHTML = (answers) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator</title>
  </head>
  <body>
      <header>
          <h1>My Team</h1>
      </header>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="display-4">${answers.name}</h1>
            <p class="lead">ID: ${answers.id}.</p>
            <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
            <ul class="list-group">
              <li class="list-group-item">My GitHub username is ${answers.github}</li>
              <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
  </html>`;


  const init = () => {
    teamManager()
    teamEngineer()
    teamIntern()
      .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();
  