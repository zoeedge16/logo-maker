const Component =  require('./component');

// How will I implement the cli.js into here with the names? Could I put this into the cli?
class Circle extends Component {

    render({  shapeColor, textColor, text  }) {

        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill=${shapeColor} />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>

</svg> 
        `
    }
}

module.exports = Circle;