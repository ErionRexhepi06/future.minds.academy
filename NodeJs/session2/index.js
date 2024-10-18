const inquirer = require("@inquirer/prompts");

const users = {};

async function run() {
    const action = await inquirer.select({
        message: "Would you like to log in or register?",
        choices: [
            { name: "Login", value: "login" },
            { name: "Register", value: "register" }
        ],
    });

    if (action === "register") {
        await register();
        await postRegistrationOptions();
    } else if (action === "login") {
        await login();
    }
}

async function register() {
    const name = await inquirer.input({
        message: "Enter a username to register:",
    });

    if (users[name]) {
        console.log("Username already exists. Please try a different one.");
        return;
    }

    const password = await inquirer.password({
        message: "Enter a password:",
        mask: true,
    });

    users[name] = password;
    console.log("Registration successful! You can now log in.");
}

async function login() {
    const name = await inquirer.input({
        message: "Username:",
    });

    const password = await inquirer.password({
        message: "Password:",
        mask: true,
    });

    if (users[name] && users[name] === password) {
        console.log("Login successful! Hello, " + name);
    } else {
        console.log("Wrong credentials. Please try again.");
    }
}

async function postRegistrationOptions() {
    const option = await inquirer.select({
        message: "What would you like to do next?",
        choices: [
            { name: "Log in", value: "login" },
            { name: "Exit", value: "exit" }
        ],
    });

    if (option === "login") {
        await login();
    } else {
        console.log("Exiting the application. Goodbye!");
        process.exit(); 
    }
}

run();
