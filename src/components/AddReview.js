import React, {Component} from 'react';
import '../style.css';

class AddReview extends Component{

    state = {
        name: '',
        title: '',
        comment: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();

        let contentOfReview = this.state.title.concat(this.state.name);
        contentOfReview = contentOfReview.concat(this.state.comment);
        let emptyString = contentOfReview.replace(/ /g, "");
        console.log(emptyString);

        //removing blank spaces to check for empty string
        let newTitle = this.state.title.replace(/ /g, "");
        let newName = this.state.name.replace(/ /g, "");
        let newComment = this.state.comment.replace(/ /g, "");

        if(emptyString && newTitle && newName && newComment){
            this.props.addReview(this.state);
            this.setState({
                name:'',
                title:'',
                comment:''
            })
        }
        
    }

    render(){
        return(
            <div className='review-form'>
                <h2>Write your reviews here</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' id='name' placeholder='Enter name' onChange={this.handleChange} value = {this.state.name}></input><br/>
                    <input type='text' id='title' placeholder='Enter title' onChange={this.handleChange} value = {this.state.title}></input><br/>
                    <textarea id='comment' placeholder='Comment here' onChange={this.handleChange} value = {this.state.comment}></textarea><br/>
                    <input className="btn btn-danger"type='submit' value='Add Review'></input>
                </form>
            </div>
        )
        
    }
}

export default AddReview;
