import React, { Component } from 'react'

export default class Header extends Component {
    state = {};
  render() {
    return (
      <header className='header'>
        <a href="#">Creative Movie App</a>
        <ul>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Serials</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
      </header>
    )
  }
}
