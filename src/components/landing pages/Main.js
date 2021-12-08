import React from 'react'
import Home from './Home'
import About from './About'
import Service from './Service'
import Footer from './Footer'
import Project from './Project'
import Contact from './Contact'
import '../../assets/scss/home.scss';
import ReactGA from 'react-ga';

const Main = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div>
            <Home />
            <About />
            <Service />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default Main
