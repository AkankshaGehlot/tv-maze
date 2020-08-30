import React, {Component} from 'react';
import DisplayReview from './DisplayReview';
import AddReview from './AddReview';
import '../style.css';

class Reviews extends Component{
    state ={
        reviews: [
            {name:'Akanksha Gehlot', title:'Nice content', comment:'Got to know about some really amazing shows', id:101}
        ]
    }

    addReview = (newReview) =>{
        newReview.id = Math.floor(Math.random() * 10);
        console.log(newReview);

        let reviews = [...this.state.reviews, newReview];

        console.log(reviews);
        this.setState({
            reviews : reviews
        })
    }

    deleteReview = (id) =>{
        console.log(id);
        let newData = this.state.reviews.filter(review =>{
            return review.id !== id;
        })
        console.log(newData);

        this.setState({
            reviews: newData
        })
    }

    render(){
        return(
            <div id='review-section'>
                <DisplayReview reviews = {this.state.reviews} deleteReview = {this.deleteReview}/>
                <AddReview addReview = {this.addReview} />
            </div>
        )
    }
}

export default Reviews;
