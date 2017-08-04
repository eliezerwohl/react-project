import React, { Component } from 'react';
 
 
export default class SearchList extends Component {
    render() {
        let searchNodes = this.props.data.map(search => {
            return (
                <div key={search._id} className="panel panel-primary">
                    Title : {search.title}
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