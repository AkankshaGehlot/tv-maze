import React from 'react';

class ShowList extends React.Component{
        state ={
            isFavourite: false,
            isInfoVisible: false
        }

        handleClick = (e) =>{
            if(e.target.id === 'fav'){
                this.setState(prevProps =>{
                    return{
                        isFavourite : !prevProps.isFavourite
                    }
                })
            }else{
                this.setState(prevProps =>{
                    return{
                        isInfoVisible : !prevProps.isInfoVisible
                    }
                })
            }
            
        }

        render(){
            const {show, genres, str} = this.props;
            let myStyle ={
                display: this.state.isInfoVisible?'block':'none'
            }

            return(
                <div className ='main-section-item' key = {show.id}>
                    <div className='image-div'>
                    <img src= {show.image !== null? show.image.medium : '#'} className="img-fluid  shadow p-3 mb-5 bg-white rounded" alt='Not found'/>
                    </div>
                    
                    
                    <div className='info'>
                        <h2 onClick={this.handleClick} title = "Know more">{show.name}&nbsp;<span>{this.state.isFavourite? '|Favourite|': ''}</span></h2>
                        <p>({show.network !== null ? show.network.name + ", " + show.premiered : show.premiered })</p>
                        <div>
                            <h3>Show Info</h3>
                            <ul>
                                <li>
                                    <span className='span-1'>Status: </span>
                                    <span>{show.status}</span>
                                </li>
                                <li>
                                    <span className='span-1'>Genres: </span>
                                    <span>{genres? genres: 'not available'}</span>
                                </li>
                                <li>
                                    <span className='span-1'>Type: </span>
                                    <span>{show.type}</span>
                                </li>
                                <li>
                                    <span className='span-1'>Language: </span>
                                    <span>{show.language}</span>
                                </li>
                            </ul>
                        </div>
                        <br></br>
                        <button id='fav' className="btn btn-outline-dark" onClick ={this.handleClick}>{this.state.isFavourite? 'Remove ': 'Add '}Favourite</button>
                    </div>
               
                    <div className='main-section-text' style={myStyle}>
                        <p>{str}</p>
                    </div>    
                </div>
            )
        }
}

export default ShowList;