const Component =  require('./component');

// How will I implement the cli.js into here with the names? Could I put this into the cli?
class Triangle extends Component {

    render({  shapeColor, textColor, text  }) {

        return `
        <svg id="triangle" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" width="30%" height="30%" viewBox="0 0 100 100">
                       
        <polygon fill = "${shapeColor}" points="50 15, 100 100, 0 100"/>
                       
        <text x="52" y="75" text-anchor="middle" fill="${textColor}" font-size="25">${text}</text>
       
        </svg>`
    }
}

module.exports = Triangle;