import React, { Component } from 'react';
import ArticleTemplate from './ArticleTemplate';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { getArticles } from '../store/actions/articlesAction';
import ArticleSkeleton from './skeleton/ArticlesSkeleton';

export class DisplayArticles extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getArticles();
  }

  render() {
    const article = {
      id: 1,
      image:
        'https://cdn.mos.cms.futurecdn.net/a2U6bn6dhqRpoTjtjbQhdB-650-80.jpg.webp',
      title: 'Lorem ipsum dolor sit amet consectetur',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto repellat assumenda, natus fugiat molestias dicta?',
      author: 'Ncuti Xavier',
      date: 'Jan 21, 1998',
    };

    const handleCardClick = (article) => {
      console.log('clicked card is ');
      };
      
    return (
      <div className='articles'>
        <Container>
          <Col>
            {this.props.posts.loading ? (
              <ArticleSkeleton />
            ) : this.props.posts.error.length != 0 ? (
              this.props.posts.error.message
            ) : this.props.posts.posts.data.articles ? (
              this.props.posts.posts.data.articles.map((article, i) => (
                  <ArticleTemplate article={article} key={i} handleClick={handleCardClick}/>
              ))
            ) : (
              <ArticleSkeleton />
            )}
          </Col>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.articlesList,
  };
};

export default connect(mapStateToProps, { getArticles })(DisplayArticles);
