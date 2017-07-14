import React, { Component } from 'react';
import TodoForm from '../components/TodoForm.jsx';
import TodoList from '../components/TodoList.jsx';
import axios from 'axios';
 
class AppMain extends Component {
 
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadTodosFromServer = this.loadTodosFromServer.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        // this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
        // this.handleTodoDelete = this.handleTodoDelete.bind(this);
        // this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
    }
    loadTodosFromServer() {
      debugger
      axios.post('/mainapi' )
       .then(res => {
                console.log(res)
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
        // axios.post(this.props.url + '/mainapi'+'/todo/'+comment.id, comment)
        axios.post('/mainapi', comment)
            .catch(err => {
                console.error(err);
                this.setState({ data: comments });
            });
    }
    // handleTodoDelete(id) {
    //     axios.delete(`${this.props.url + '/api'}/${id}`)
    //         .then(res => {
    //             console.log('Comment deleted');
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    // }
    // handleTodoUpdate(id, comment) {
    //     //sends the comment id and new author/text to our api
    //     axios.put(`${this.props.url + '/api'}/${id}`, comment)
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }
    componentDidMount() {
        this.loadTodosFromServer();
        // setInterval(this.loadTodosFromServer, this.props.pollInterval);
    }
 
 
   render() {
    return (
      <div className="App">
        <div className="App-header">
  
          <h2>Welcome to React+ Express +Mongo</h2>
        </div>
         <TodoList data={ this.state.data }/>
         <TodoForm onCommentSubmit={ this.handleCommentSubmit }/>


 
 
      </div>
    );
  }
}
 
export default AppMain;