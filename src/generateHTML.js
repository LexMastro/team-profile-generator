function generateHTML(answers) {
    const template = ` <!DOCTYPE html>
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

    return template;

}

module.exports = generateHTML;