function generateHTML(employees) {
  console.log(employees)
  const start = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="fontawesome.min.css">
      <link rel="stylesheet" href="../src/style.css">
      <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header> 
        <div class="container">`
  const middle = employees.map(employee => {
    const name = employee.getName()
    const id = employee.getId()
    const email = employee.getEmail()
    const role = employee.getRole()
    let e = ""

    if (role === "Manager") {
      const office = employee.getOffice()
      e = (`<p class="attributes">Office Number:${office}</p>`)
    }
    if (role === "Engineer") {
      const github = employee.getGithub()
      e = (`<p class="attributes">GitHub:<a href="${github}">${github}</a></p>`)
    }
    if (role === "Intern") {
      const school = employee.getSchool()
      e = (`<p class="attributes">School:${school}</p>`)
    }
    return addEmployeeInfo(name, role, id, email, e)
  })

  const end = `
        </div>
        <script src="../__tests__/Employee.test.js"></script>
        <script src="../__tests__/Manager.test.js"></script>
        <script src="../__tests__/Engineer.test.js"></script>
        <script src="../__tests__/Intern.test.js"></script>
        </body>
    </html>`

  return start + middle.join('') + end;

}

function addEmployeeInfo(name, role, id, email, e) {
  return `
  <div class="card">
  <div class="card-title-bg">
  <h1 class="card-title">${name}</h1>
  </div>
  <div class="card-info">
    <p class="attributes"><i class="fas fa-tasks"></i>${role}</p>
    <p class="attributes">ID: ${id}</p>
    <p class="attributes">Email: <a href="mailto:${email}">${email}</a></p>
    ${e}
    </div>
</div>`
}

module.exports = generateHTML;