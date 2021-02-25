import React, { Component } from 'react';
import Navigation from './Navigation';
import FullArticle from './FullArticle';
import Footer from './Footer';
import '../assets/scss/landing.scss';

export class Article extends Component {
  render() {
    const postId = this.props.match.params.id;
    return (
      <div>
        {console.log(this.props.match.params.id)}
        <Navigation />
        <FullArticle id={postId} />
        <Footer />
      </div>
    );
  }
}

export default Article;
