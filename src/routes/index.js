import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from '../components/LandingPage'

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={LandingPage} />
            </BrowserRouter>
        )
    }
}

export default Index