import React, {Component} from 'react';
import '../style.css';

class Navbar extends Component{

    render(){
        return(
            <div className='navigation'>
            <nav>
                <h1>TVMaze</h1>
                
                <div className='menu'>
                    <a href='#review-section' title='Write a review'><span>Write a review</span></a>
                </div>
            </nav>
            </div>
        )
    }
}

export default Navbar;