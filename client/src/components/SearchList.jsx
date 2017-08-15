import React, { Component } from 'react';
 
export default class SearchList extends Component {
    constructor(props) {
        super(props);
        this.deleteSearch = this.deleteSearch.bind(this);    
    }
    deleteSearch(data){
        this.props.onSearchDelete(data)
    }
    render() {
        let searchNodes = this.props.data.map(function(search, i) {
            return (
                <div key={search._id} className="panel panel-primary">
                   Title : {search.title} <button onClick={ this.deleteSearch.bind(null, {id:search._id, index:i}) }> </button>
                </div>
            );
        }, this);
        return (
            <div className="panel panel-success">
                <h1> Previous Searches </h1>
                { searchNodes }
            </div>
        )
    }
}