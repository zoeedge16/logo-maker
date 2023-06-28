const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises')
const { createDocument } = require('./document')
const Component = require('./component')

class CLI {
    run() {
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter your logo text: ',
                name: 'text',
                validate: (input) => input.length >= 3 || 'Text must be up to three characters.',
            },
            {
                type: 'input',
                message: 'What color would you like your text to be?',
                name: 'textColor'
            },
            {
                type: 'list',
                message: 'Choose a shape for your logo from the list.',
                name: 'shape',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                message: 'What color would you like the shape of your logo to be?',
                name: 'shapeColor'
            }
        ])
        .then ((answers) => {
            return writeFile(
                join(__dirname, '..', 'output', 'answer.html' ),
                createDocument(answers)
            )
        })
        .then (() => console.log('Generated logo.svg!'))
        .catch((err) => {
            console.log(err);
            console.log('Something went wrong.')
        });
    }
}


module.exports = CLI;