import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react';
class SearchBar extends Component {
    state = { 
        search: "black",
        type: "all",
     } 

     handleText = (e) => {
        if(e.key === "Enter") this.props.searchMovies(this.state.search, this.state.type);
     }

     handleCategory = (e) => {
        this.setState(() => ({
            type: e.target.dataset.type,
         }), ()=>{
            this.props.searchMovies(this.state.search, this.state.type);
         });
     }

    render() { 
        const { search } = this.state;
        return (
            <div className="search">
                <div className='search-bar'>
                    <input 
                        type="search" 
                        name="search" 
                        pattern=".*\S.*" 
                        required value={search} 
                        onChange={(e) => {this.setState({search: e.target.value});
                        }}
                        onKeyUp={this.handleText}
                        autoComplete='off'
                        />
                    <button className="search-btn" type="submit">
                        <span>Search</span>
                    </button>
                </div>
                <div className="radio-toggles">
                    <input type="radio" id="option-1" name="radio-options" data-type='movie' onChange={this.handleCategory} checked={this.state.type === "movie"}/>
                    <label htmlFor="option-1">Movie</label>
                    <input type="radio" id="option-2" name="radio-options" data-type='all' onChange={this.handleCategory} checked={this.state.type === "all"}/>
                    <label htmlFor="option-2">All</label>
                    <input type="radio" id="option-3" name="radio-options" data-type='series' onChange={this.handleCategory} checked={this.state.type === "series"}/>
                    <label htmlFor="option-3">Series</label>
                    <div className="slide-item"></div>
                </div>
            </div>
        );
    }
}
 
export default SearchBar;