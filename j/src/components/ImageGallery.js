import React from 'react';
import './clinic.css';
import one from './images/r1.jpeg';
import two from './images/r2.jpeg';
import three from './images/r3.jpeg';
import four from './images/r4.jpeg';
import five from './images/r5.jpeg';
import six from './images/r6.jpg';

const ImageGallery = () => {
  const images = [
    { src: one },
    { src: two },
    { src: three },
    { src: four },
    { src: five },
    { src: six },
  ];

  return (
    <div className="rt">
      {images.map((image, index) => (
        <div key={index}>
          <img className="ff" src={image.src} alt={`Imagee ${index + 1}`} />
          {/* <h6>{image.description}</h6> */}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
