import React, { Component } from 'react';
import TodoForm from '../components/TodoForm.jsx';
import TodoList from '../components/TodoList.jsx';
 
class AppMain extends Component {
 
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadTodosFromServer = this.loadTodosFromServer.bind(this);
        // this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
        // this.handleTodoDelete = this.handleTodoDelete.bind(this);
        // this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
    }
    loadTodosFromServer() {
      // axios.get(this.props.url + '/api' )
          const xhr = new XMLHttpRequest();
    xhr.open('post', '/test');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        // this.setState({
        //   errors: {}
        // });

        // set a message
        console.log(xhr.response.message)
        localStorage.setItem('successMessage', xhr.response.message);

        // make a redirect
      } else {
        // failure

        // const errors = xhr.response.errors ? xhr.response.errors : {};
        // errors.summary = xhr.response.message;

        this.setState({
          // errors
        });
      }
    });
    xhr.send("foo=bar&lorem=ipsum");
        

    }
    // handleTodoSubmit(comment) {
    //     let comments = this.state.data;
    //     comment.id = Date.now();
    //     let newComments = comments.concat([comment]);
    //     this.setState({ data: newComments });
    //     axios.post(this.props.url + '/api'+'/todo/'+comment.id, comment)
    //         .catch(err => {
    //             console.error(err);
    //             this.setState({ data: comments });
    //         });
    // }
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

 
 
      </div>
    );
  }
}
 
export default AppMain;