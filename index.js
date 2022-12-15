// node modules
const inquirer = require('inquirer');
const fs = require('fs');

//  Using inquirer to generate questions in the CLI

inquirer
    .prompt(
        [
            {
                type: 'input',
                message: "What is your project's name?",
                name: 'title',
                // Using a validate function to ensure no prompt is empty!
                validate: (value) => { if (value) { return true } else { return 'please type in a response to continue' } },
            },
            {
                type: 'input',
                message: "Please provide a basic description for your program",
                name: 'description',
                validate: (value) => { if (value) { return true } else { return 'please type in a response to continue' } }
            },
            {
                type: 'input',
                message: "How do you install this program? If not applicable, type in N/A",
                name: 'installation',
                validate: (value) => { if (value) { return true } else { return 'please type in a response to continue' } }
            },
            {
                type: 'input',
                message: "How do you use this program?",
                name: 'instructions',
                validate: (value) => { if (value) { return true } else { return 'please type in a response to continue' } }
            },
            {
                type: 'input',
                message: "Who has helped you throughout the process of making this? If not applicable, type in N/A",
                name: 'credits',
                validate: (value) => { if (value) { return true } else { return 'please type in a response to continue' } }
            },
            {
                type: 'list',
                message: "Which license did you use for this program?",
                choices: ['None', 'MIT', 'GPL v3.0', 'Apache 2.0'],
                name: 'license',
                validate: (value) => { if (value) { return true } else { return 'please choose a response to continue' } }
            },
            {
                type: 'input',
                message: "Please type in your GitHub username",
                name: 'username',
                validate: (value) => { if (value) { return true } else { return 'please type in a response to continue' } }
            },
            {
                type: 'input',
                message: "Please type in your email",
                name: 'email',
                validate: (value) => { if (value) { return true } else { return 'please type in a response to continue' } }
            },
        ]
    ).then(({
        title,
        description,
        installation,
        instructions,
        credits,
        license,
        username,
        email,
    }) => {
        // Generates a template based on user input
        const template = `# ${title}

*[Description](#description)
*[Installation](#installation)
*[Usage](#usage)
*[Credits](#credits)
*[License](#license)

# Description
${description}
## Installation
${installation}
## Instructions
${instructions}
## Credits
${credits}
## License
${license}
## Contact
For further information and/or questions, you can contact me:
Github: ${username}
Email : ${email}`;
        // function used to create the README file with fs
        createNewFile(template);
    }
    );


// the aforementioned function, now fleshed out
function createNewFile(data) {
    fs.writeFile(`./README.md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your README has been generated!');
    })

};
