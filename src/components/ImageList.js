import React from 'react';
import "./ImageList.css";

const ImageList = props => {
    const images =  props.images.map(({urls, alt_description}, key) => {
        return <img src={urls.regular} alt={alt_description} key={key} />;
    });   
    
    return <div className="image-list">{images}</div>;
};

export default ImageList;