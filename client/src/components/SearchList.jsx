import React, { Component } from 'react';
 
 
export default class SearchList extends Component {
    constructor(props) {
        super(props);
        this.deleteSearch = this.deleteSearch.bind(this);    
    }
    deleteSearch(id){
        console.log("delete serach")
        this.props.onSearchDelete({id:id})
        
    }
    
    render() {
        let searchNodes = this.props.data.map(search => {
            return (
                <div key={search._id} className="panel panel-primary">
                    Title : {search.title} <button onClick={ this.deleteSearch.bind(null, search._id) }> </button>
                </div>
            )
        })
        return (
 
            <div className="panel panel-success">
                <h1> Previous Searches </h1>
                { searchNodes }
            </div>
        )
    }
}