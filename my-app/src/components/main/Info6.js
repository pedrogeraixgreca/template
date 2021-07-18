import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
export default class Info6 extends React.Component {

    render(){
        const images = [
            {
                original: '/img/fotos/a.jpg',
                thumbnail: '/img/fotos/a.jpg',
            },
            {
                original: '/img/fotos/b.jpg',
                thumbnail: '/img/fotos/b.jpg',
            },
            {
                original: '/img/fotos/c.jpg',
                thumbnail: '/img/fotos/c.jpg',
            }
        ]
        return(
<div className="barreira2">
  <div className="content2" >
    <h5 className="w6"></h5>
    <ImageGallery items={images} autoPlay={false} />
    <h5 className="w3">       ______        </h5>
    <p className="w5"></p>
        </div>
  </div>

        );
    }
}