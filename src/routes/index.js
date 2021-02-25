import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from '../components/LandingPage'
import Article from '../components/Article'
import DisplayArticles from '../components/DisplayArticles'
import HomePage from '../components/HomePage'

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={HomePage} />
                <Route path="/blogs" exact component={LandingPage} />
                <Route path="/blogs/:id" exact component={Article} />
            </BrowserRouter>
        )
    }
}

export default Index
