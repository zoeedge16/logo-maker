const Logo = require('./logo');


// see zoom video minute 26:33 to finish this up!
function createDocument(answer = []) {
    const logo = new Logo().render();

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