import React from 'react'
import Clinic from './Clinic';
import ImageGallery from './ImageGallery';
import Map from './Map';
import Contact from './Contact';
import ChatBot from './ChatBox';
import Nav from 'react-bootstrap/Nav';
import pic from './images/photw.jpg';
import { scroller, animateScroll } from 'react-scroll';
import { Link } from 'react-router-dom';
function Gallery() {

    const scrollToContact = () => {
        scroller.scrollTo('contact', {
            duration: 800,
            smooth: true,
        });
    };
    const scrollToTop = () => {
        animateScroll.scrollToTop({
            duration: 800,
            smooth: true,

        });
    };
    return (
        <div>
            <header className='sticky-header'>
                <nav class="navbar navbar-expand-lg navbar-light px-4 py-3" style={{ backgroundColor: "white" }}>
                    <div class="container-fluid">
                        <img
                            className='img-fluid '
                            src={pic}
                            alt="Your_image"
                            style={{ width: "150px" }}
                            onClick={scrollToTop}
                        />
                        <button class="navbar-toggler" style={{ border: "none" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-lg-0 p-2">
                                    <li class="nav-item">
                                        <Link class="nav-link mx-1" aria-current="page" to="/" onClick={scrollToTop}><h6 class="nav-text" >Home</h6></Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link mx-1" aria-current="page" to="/gallery"><h6 class="nav-text" style={{ color: '#039dfc' }}>Gallery</h6></Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link mx-1" aria-current="page" to="/aboutus" onClick={scrollToTop}><h6 class="nav-text">AboutUs</h6></Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link mx-1" aria-current="page" to="https://maps.app.goo.gl/5NPMoY3nmSbquKcg8"><h6 class="nav-text">Location</h6></Link>
                                    </li>
                                    <li class="nav-item" onClick={scrollToContact}>
                                        <Link href="#" class="nav-link mx-1"><h6 class="nav-text">Contact Us</h6></Link>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </nav>
            </header>

            <Clinic />
            <br></br>
            <br></br>
            <ImageGallery></ImageGallery>
            <Map />
            <br></br>
            <Contact />
            <ChatBot />
            <br></br>
        </div>
    );
}


export default Gallery