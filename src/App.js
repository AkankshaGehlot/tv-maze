import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import Shows from './components/Shows';

class App extends Component{
  
  state = {
    shows:[],
    prevEpisodes: []
  }

  componentDidMount(){
    console.log('I am in mounting phase!!');
    axios.get('https://api.tvmaze.com/search/shows?q=friends')
      .then( response => {
          //mapping required data
          const content = response.data.map( item =>{
              return(
                item.show
              )
          })
          this.setState({
            shows: content
          })
          console.log(this.state.shows);

          //mapping previous episodes API's
          const links = content.map( item =>{
            return(
                item._links.previousepisode || item._links.nextepisode
            )
          })
          this.setState({
            links: links
          })
          console.log(this.state.links);
      })    
  }

  render(){
    
    return(
      <div>
        <Navbar />
        <Shows shows = {this.state.shows} />
        <Reviews />
        <Footer />
      </div>
    )
  }
}

export default App;
