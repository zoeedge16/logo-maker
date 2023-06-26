const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises')
const { createDocument } = reuire('./document')

class CLI {
    constructor() {
        this.answer = [];
    }
    run() {
        return inquirer
        .prompt([
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
        .then ((textColor, shape, shapeColor) => {
            this.answer.push({ textColor, shape, shapeColor});
        })
        .then (() => {
            return writeFile(
                join(__dirname, '..', 'output', 'answer.html' ),
                createDocument(this.answer)
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