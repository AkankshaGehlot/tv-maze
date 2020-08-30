import React from 'react';
import '../style.css';

const DisplayReview = ({reviews, deleteReview}) =>{

    const reviewList = reviews.length ? reviews.map( review =>{
        let {name, title, comment, id} = review;

        return(
          <div className="card review-element" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{comment}</p>
                <p className="card-text blockquote-footer" style={{fontSize:'1.2em'}}><small className="text-muted">{name}</small></p>
                <button className="btn btn-outline-danger" onClick = { () => {deleteReview(id)}}>Delete</button>
            </div>
            </div>
        )
    }) : <p>No reviews yet</p>

    return(
        <div className='review-display'>
            {reviewList}
        </div>
    )

}

export default DisplayReview;