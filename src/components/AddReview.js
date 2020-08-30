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

        this.props.addReview(this.state);
        this.setState({
            name:'',
            title:'',
            comment:''
        })
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
