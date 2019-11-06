import React from "react"
import PropTypes from "prop-types"

class HelloWorld extends React.Component {

  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}

        <button className='btn btn-primary'>yaKnopka</button>

      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
