import React from 'react'
import Home from './Home'
import About from './About'
import Service from './Service'
import Footer from './Footer'
import Project from './Project'
import Contact from './Contact'
import '../../assets/scss/home.scss';

const Main = () => {
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
