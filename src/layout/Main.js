import React, { Component } from 'react'
import Movies from '../components/Movies';
import SearchBar from '../components/SearchBar';

export default class Main extends Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=a2a16f69&s=black')
       .then(response => response.json())
       .then((data) => this.setState({movies: data.Search}));
    }

    searchMovies = (text, type = "all" ) => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=a2a16f69&s=${text}${type !== "all" ? `&type=${type}` : ""}`)
       .then(response => response.json())
       .then((data) => this.setState({movies: data.Search}));
    }

  render() {    
    return (
      <main className='container'>
        <img src="" alt="" />
        <SearchBar  searchMovies={this.searchMovies}/>
        <Movies movies={this.state.movies}/>
      </main>
    )
  }
}
