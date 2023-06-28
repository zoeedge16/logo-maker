const Component =  require('./component');

// How will I implement the cli.js into here with the names? Could I put this into the cli?
class Square extends Component {

    render({  shapeColor, textColor, text  }) {

        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="300" height="200" style="fill:${shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>

</svg> 
        `
    }
}

module.exports = Square;