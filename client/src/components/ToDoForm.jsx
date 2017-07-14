import React, { Component } from 'react';
 
export default  class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '', description: '' };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     handleTitleChange(e) {
 			this.setState({ title: e.target.value });
 }
   handleDescriptionChange(e) {
 			this.setState({ description: e.target.value });
 }

 
    handleSubmit(e) {
        e.preventDefault();
        debugger
        let title = this.state.title.trim();
        let description = this.state.description.trim();
        if (!description || !title) {
            return;
        }
        this.props.onCommentSubmit({ title: title, description: description });
        this.setState({ title: '', description: '' });
    }
    render() {
        return (
 
       <div>
            <h1> Add new Todo</h1>
            <form  onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input value={ this.state.title } onChange={ this.handleTitleChange } />
 
                </div>
                 <div className="form-group">
                    <label for="">Description</label>
                    <input value={ this.state.description } onChange={ this.handleDescriptionChange } />
                </div>
          
                <button type="submit" className="btn btn-primary">Add</button>
                <button type="cancel" className="btn btn-danger">Cancel</button>
            </form>
           </div>
        )
    }
}