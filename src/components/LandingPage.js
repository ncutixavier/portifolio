import React, { Component } from 'react'
import Navigation from './Navigation'
import Articles from './Articles'
import Footer from './Footer'

export class LandingPage extends Component {
    render() {
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
