// node modules
const inquirer = require('inquirer');
const fs = require('fs');

//  Using inquirer to generate questions in the CLI

inquirer.prompt(
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
            type: 'input',
            message: "Which license did you use for this program? If not applicable, please type in N/A.",
            name: 'license',
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
}) => {
    // Generates a template based on user input
    const template = `# ${title}
    # Description
    ${description}
    # Installation
    ${installation}
    # Instructions
    ${instructions}
    # Credits
    ${credits}
    # License
    ${license}
    # 
    `
})