import React, { useState } from 'react';
import './clinic.css';
import one from './images/r1.jpeg';
import two from './images/r2.jpeg';
import three from './images/r3.jpeg';
import four from './images/r4.jpeg';
import five from './images/r5.jpeg';
import six from './images/r6.jpg';

const ImageGallery = () => {
  const [showGallery, setShowGallery] = useState(false);
  const images = [
    { src: one },
    { src: two},
    { src: three},
    { src: four},
    { src: five},
    { src: six}
  ];

  const handleClick = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div>
      <div>
        <h5 className="buttooooo" onClick={handleClick}>
          Open Gallery
        </h5>
      </div>
      {showGallery && (
        <div className="rt">
          {images.map((image, index) => (
            <div key={index}>
              <img className="ff" src={image.src} alt={`Imag ${index + 1}`} />
              {/* <h6>{image.description}</h6> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
