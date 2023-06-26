const inquirer = require('inquirer');
const { join } = require('path');
const { writeToFile } = require('fs/promises')
const { createDocument } = reuire('./document')

class CLI {
    constructor() {
        this.answer = '';
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
        .then (() => console.log('Generated logo.svg!'))
        .catch((err) => {
            console.log(err);
            console.log('Something went wrong.')
        });
    }
}

module.exports = CLI;