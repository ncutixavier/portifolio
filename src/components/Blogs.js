import React, { Component } from 'react'
import Navigation from './Navigation'
import Articles from './Articles'
import Footer from './Footer'
import '../assets/scss/landing.scss'
import ReactGA from 'react-ga';

export class LandingPage extends Component {
    render() {
        ReactGA.pageview(window.location.pathname + window.location.search);
        return (
            <div>
                <Navigation />
                <Articles />
                <Footer />
            </div>
        )
    }
}

export default LandingPage
