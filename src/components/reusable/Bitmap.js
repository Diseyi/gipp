import React from 'react';
// import BitmapImage from '../assets/Bitmap.svg';
import arrow from '../assets/arrow-right.svg';

const Bitmap = (props) => {
    return (
        <div className="Bitmap" >
       
            <div className="Bitmap-Flex" >
                <div>
                <h2 className="Bitmap-Flex" >{props.value} </h2>
                <h3 className="Bitmap-Flex" >{props.value2} </h3>
            </div>
                 <img src={ arrow} alt="backgrouond image" />
            
            </div>
        </div>
    )
}

export default Bitmap
