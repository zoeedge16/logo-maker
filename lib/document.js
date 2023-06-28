const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');


// see zoom video minute 26:33 to finish this up!
function createDocument(answers = {}) {
  let logo;

  // Check the user's choice and load the corresponding SVG
  if (answers.shape === 'circle') {
    logo = new Circle().render(answers);
  } else if (answers.shape === 'triangle') {
    logo = new Triangle().render(answers);
  } else if (answers.shape === 'square') {
    logo = new Square().render(answers);
  } else {
    // Load a default SVG or show an error message
    logo = '<svg>...</svg>'; // Replace with the contents of a default SVG or an error message
  }

    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> SVG logo </title>
        <link rel="stylesheet" href="../dist/style.css" />
      </head>
      <body>
        <div class="card">
          ${logo}
        </div>
      </body>
    </html>`;
}

module.exports = { createDocument };