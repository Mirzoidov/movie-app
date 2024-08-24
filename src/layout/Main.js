import React, { Component } from 'react'

export default class Main extends Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a2a16f69&=black')
       .then(response => response.json())
       .then(data => this.setState({movies: data.Search}))
    }

  render() {
    return (
      <main className='container'>
        
      </main>
    )
  }
}
