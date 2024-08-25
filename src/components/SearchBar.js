import React, { Component } from 'react';
class SearchBar extends Component {
    state = { 
        search: "",
     } 
    render() { 
        const { search } = this.state;
        return (
            <div className='search-bar'>
                <input 
                    type="search" 
                    name="search" 
                    pattern=".*\S.*" 
                    required value={search} 
                    onChange={(e) => {this.setState({search: e.target.value});
                    }}
                    />
                <button className="search-btn" type="submit">
                    <span>Search</span>
                </button>
            </div>
        );
    }
}
 
export default SearchBar;