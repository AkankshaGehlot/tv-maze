import React, {Component} from 'react';
import '../style.css';


class Footer extends Component{
    
    render(){
        return(
                <footer>
                    <ul className="contact">
                        <li className="links"><a href="https://www.instagram.com/">Instagram</a></li> 
                        <li className="links"><a href="https://twitter.com/explore">Twitter</a></li>
                        <li className="links"><a href="https://www.facebook.com/">Facebook</a></li>
                    </ul>
                </footer>
        )
    }
}

export default Footer;