import React, { Component } from 'react';
import SearchForm from '../components/SearchForm.jsx';
import SearchList from '../components/SearchList.jsx';
import axios from 'axios';
 
class AppMain extends Component {
 // var elementPos = this.state.data.map(function(x) {return x._id; }).indexOf("59849076d726590490d5179f");
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadSearchsFromServer = this.loadSearchsFromServer.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        // this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleSearchDelete = this.handleSearchDelete.bind(this);
        // this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
    }
    handleSearchDelete(id) {
        var elementPos = this.state.data.map(function(x) {return x._id; }).indexOf(id.id);
        var newArray = this.state.data;
       newArray.splice(elementPos, 1)
       this.setState({ data: newArray });
        console.log("Handled")

        
    }
    loadSearchsFromServer() {
    axios.get("/mainapi/view/search")
            .then(res => {
                this.setState({ data: res.data });
            })
            .catch(err => {
                console.error(err);
            });
  
        

    }
    handleCommentSubmit(comment) {
        // let comments = this.state.data;
        // comment.id = Date.now();
        // let newComments = comments.concat([comment]);
        // this.setState({ data: newComments });
        // axios.post(this.props.url + '/mainapi'+'/Search/'+comment.id, comment)
        axios.post('/mainapi/create/search', comment)
            .then(data => {
              let comments = this.state.data;
              let newComments = comments.concat([data.data]);
        this.setState({ data: newComments });
            })
            .catch(err => {
                console.error(err);
            });
    }
    // handleSearchDelete(id) {
    //     axios.delete(`${this.props.url + '/api'}/${id}`)
    //         .then(res => {
    //             console.log('Comment deleted');
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    // }
    // handleSearchUpdate(id, comment) {
    //     //sends the comment id and new author/text to our api
    //     axios.put(`${this.props.url + '/api'}/${id}`, comment)
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }
    componentDidMount() {
        this.loadSearchsFromServer();
        //setinterval is throwing an error
        setInterval(this.loadSearchsFromServer, 20000);
    }
 
 
   render() {
    return (
      <div className="App">
        <div className="App-header">
  
          <h2>Pick a search or add a new one</h2>
        </div>
         <SearchList onSearchDelete={this.handleSearchDelete } data={ this.state.data }/>
         <SearchForm onCommentSubmit={ this.handleCommentSubmit }/>


 
 
      </div>
    );
  }
}
 
export default AppMain;