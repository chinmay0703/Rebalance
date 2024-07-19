
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
import { Link } from "react-router-dom";


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
                {/* <div className="row" style={{ backgroundColor: '#eee' }}>
                    <div className="col-lg-9" style={{paddingLeft:'30px'}}>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <p className="poppins-light" style={{ display: 'inline-block', marginLeft: '10px' }}>
                            610, 2nd floor, AECS Layout - C Block, AECS Layout, Brookefield
                        </p>
                    </div>
                    <div className="col-lg-3 text-end">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span className="poppins-light" style={{ marginLeft: '10px' }}>Call 7721099005</span>
                    </div>
                </div> */}
                <nav className="navbar navbar-expand-lg navbar-light px-4 py-3" style={{ backgroundColor: "white" }}>
                    <div className="container-fluid">
                        <img
                            className='img-fluid'
                            src={pic}
                            alt="Your_image"
                            style={{ width: "150px" }}
                            onClick={scrollToTop}
                        />
                        <button className="navbar-toggler" style={{ border: "none" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-lg-0 p-2">
                                <li className="nav-item">
                                    <Link className="nav-link mx-1" aria-current="page" to="/" onClick={scrollToTop}>
                                        <h6 className="nav-text" style={{ color: '#039dfc' }}>Home</h6>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-1" aria-current="page" to="/gallery">
                                        <h6 className="nav-text">Gallery</h6>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-1" aria-current="page" to="/aboutus" onClick={scrollToTop}>
                                        <h6 className="nav-text">About Us</h6>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-1" aria-current="page" to="https://maps.app.goo.gl/5NPMoY3nmSbquKcg8">
                                        <h6 className="nav-text">Location</h6>
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={scrollToContact}>
                                    <Link href="#" className="nav-link mx-1">
                                        <h6 className="nav-text">Contact Us</h6>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <Clinic />
            <ChatBot />
            <div className="mx-0" style={{ backgroundColor: '#eee' }}>
                <Advanced />
            </div>

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