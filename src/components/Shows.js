import React from 'react';
import ShowList from './ShowList';

const Shows = ({shows}) =>{

    const showList = shows.length ? shows.map( show =>{

        const genres = show.genres.join(' | ');
        let str = show.summary;
        //console.log(str);
        if(str){
            str = str.replace(/(<([^>]+)>)/ig, ' ' );
            str = str.replace(/&amp;/gi, 'and');
        }

        return(
            <ShowList show={show} genres={genres} str={str} id={show.id}/>
        )
    }) : (<p>Data not available</p>);

    return(
         <div className='main-section'>
             {showList}
         </div>
    )
}

export default Shows;
