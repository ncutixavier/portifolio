import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from '../components/Blogs'
import Article from '../components/Article'
import HomePage from '../components/HomePage'
import Main from '../components/landing pages/Main'

class Index extends Component {
    render() {
        return (
          <BrowserRouter>
            <Route path='/home' exact component={HomePage} />
            <Route path='/' exact component={Main} />
            <Route path='/blogs' exact component={LandingPage} />
            <Route path='/blogs/:id' exact component={Article} />
          </BrowserRouter>
        );
    }
}

export default Index
