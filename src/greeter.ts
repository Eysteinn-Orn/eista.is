interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) { //D
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Eysteinn", lastName: "Orn"};

document.body.textContent = greeter(user);