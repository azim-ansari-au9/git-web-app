import React from 'react';
import giphy from './giphy.gif';


const Giphy = () => {
    return (
        <div>
            <img src={giphy} alt="loading" 
            style={{width:'200px', margin:'auto', display:'block'}} />
        </div>
    )
}
export default Giphy;