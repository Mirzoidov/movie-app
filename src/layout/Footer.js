import React, { Component } from 'react'

export default class Footer extends Component {
    state = {  }
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright">
            <div className="container">
                <h3>&copy; {new Date().getFullYear()} Copyright Reserved</h3>
            </div>
        </div>
      </footer>
    )
  }
}
