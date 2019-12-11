import React, { Component } from 'react'
import './header.css'
import HomeButton from '../input/button/button'

class Header extends Component {
  render() {
    return(
      <div>
        <HomeButton 
          ButtonClassName="HomeButton"
          ButtonLabel={this.props.Title}
        />
      </div>
    )
  }
}

export default Header