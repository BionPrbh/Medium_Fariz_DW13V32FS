import React, { Component } from 'react'
import './button.css'

class Button extends Component {
  render() {
    return (
      <div>
        <button className={this.props.ButtonClassName}>
          {this.props.ButtonLabel}
        </button>
      </div>
    )
  }
}

export default Button