
import React from "react";
import Clinic from "./Clinic";
import ChatBot from "./ChatBox";
import Advanced from "./Carousel";
import Nav from 'react-bootstrap/Nav';
import pic from './images/photw.jpg';
import { scroller, animateScroll } from 'react-scroll';
import Map from "./Map";
import DropdawnQuestions from "./DropdawnQuestions";
import Contact from "./Contact";
import Services from "./Services";
import "../style/home.css";


function Home() {


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
                            style={{ width: "130px" }}
                            onClick={scrollToTop}
                        />
                        <button class="navbar-toggler" style={{ border: "none" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-lg-0 p-2">
                                    <li class="nav-item">
                                        <a class="nav-link mx-1" aria-current="page" href="/" onClick={scrollToTop}><h6 class="nav-text" style={{ color: '#039dfc' }}>Home</h6></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-1" aria-current="page" href="/gallery"><h6 class="nav-text">Gallery</h6></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-1" aria-current="page" href="/aboutus" onClick={scrollToTop}><h6 class="nav-text">AboutUs</h6></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-1" aria-current="page" href="https://maps.app.goo.gl/5NPMoY3nmSbquKcg8"><h6 class="nav-text">Location</h6></a>
                                    </li>
                                    <li class="nav-item" onClick={scrollToContact}>
                                        <a href="#" class="nav-link mx-1"><h6 class="nav-text">Contact Us</h6></a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </nav>
            </header>
            <Clinic />
            <ChatBot />
            <Advanced />
            <br></br>
            <br></br>
            <br></br>
            <Services />
            <br />
            <Map />
            <DropdawnQuestions
            />
            <Contact />
            <br></br>
        </div >
    );
}

export default Home;