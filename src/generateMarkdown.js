class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

    };
    getId() {

    };
    getEmail() {

    };
    getRole() {
        return Employee;
    };

};

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name);
        super(id);
        super(email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return Manager;
    };
    officeNumber() {
        return this.officeNumber;
    };
}


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name);
        super(id);
        super(email);
        this.github = github;
    }

    getGitgub() {
        return this.github;
    }
    getRole() {
        return Engineer;
    }
};

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name);
        super(id);
        super(email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return Intern;
    }
};


function generateMarkdown(data) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>My Team!</title>
</head>
<body>
<box> 
    <h1 class="title"> Team Members </h1>
</box>
<box class="Managerbox">
    <box class="innerbox">
        <h1 class="innerbox1">${data.Manager}</h1>
        <h2 class="innerbox2">Manager</h3>
    </box>
    <box class="info">
        <h3>ID: ${data.ManagerID}</h2>
    </box>
    <box class="info">
        <h3>Email: ${data.Manageremail}</h3>
    </box>
    <box class="info">
        <h3>Office number: ${data.Managerofficenumber}</h3>
    </box>
</box>
<box class="container">
<box class="box">
<box class="innerbox">
        <h1 class="innerbox1">${data.EngineerUsername}</h1>
        <h2 class="innerbox2">Engineer</h3>
    </box>
    <box class="info">
        <h3>ID: ${data.EngineerID}</h2>
    </box>
    <box class="info">
        <h3>Email: ${data.EngineerEmail}</h3>
    </box>
    <box class="info">
        <h3>Office number: ${data.EngineerGithub}</h3>
    </box>
</box>
<box class="box">
<box class="innerbox">
        <h1 innerbox="innerbox1">${data.InternUsername}</h1>
        <h2 class="innerbox2">Intern</h3>
    </box>
    <box class="info">
        <h3>ID: ${data.InternID}</h2>
    </box>
    <box class="info">
        <h3>Email: ${data.InternEmail}</h3>
    </box>
    <box class="info">
        <h3>Office number: ${data.InternGithub}</h3>
    </box>
</box>
</box>
</body>
</html>
`;
}

module.exports = generateMarkdown;