import React, { useState, useEffect } from 'react';

import { Carousel } from 'primereact/carousel';

export default function Review() {
    const [images, setImages] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        
        const importedImages = [
            require('../components/images/1.jpg'), // Adjust the path accordingly
            require('../components/images/2.jpg'),
            require('../components/images/2.png'),
            require('../components/images/1.jpg'), // Adjust the path accordingly
            require('../components/images/2.jpg'),
            require('../components/images/2.png'),
            require('../components/images/1.jpg'), // Adjust the path accordingly
            require('../components/images/2.jpg'),
            require('../components/images/2.png'),
            require('../components/images/1.jpg'), // Adjust the path accordingly
            require('../components/images/2.jpg'),
            require('../components/images/2.png'),
         
        ];

        setImages(importedImages);
    }, []);

    const imageTemplate = (image) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={image} alt={`Image`} className="w-6 shadow-2" />
                </div>
                <div>
                    {/* You can add additional information if needed */}
                    {/* <h4 className="mb-1">Image Title</h4> */}
                    {/* <h6 className="mt-0 mb-3">$19.99</h6> */}
                    {/* Example of a button */}
                   
                </div>
            </div>
        );
    };

    return (
        <div className="car">
            <Carousel value={images} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                autoplayInterval={3000} itemTemplate={imageTemplate} />
        </div>
    );
}
