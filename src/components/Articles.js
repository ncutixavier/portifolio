import React, { useEffect } from 'react';
import { Container, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../store/actions/articlesAction';
import ArticleSkeleton from './skeleton/ArticlesSkeleton';
import ArticleTemplate from './ArticleTemplate';
import { Link } from 'react-router-dom';

export default function Articles() {
  const dispatch = useDispatch();
  const articlesListData = useSelector((state) => state.articlesList);
  const { loading, error, posts } = articlesListData;
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div className='articles'>
      <Container>
        <Col>
          {loading ? (
            <ArticleSkeleton />
          ) : error ? (
            error.message
          ) : posts.data.articles ? (
            posts.data.articles.map((article, i) => (
              <Link
                to={'/blogs/' + article._id}
                key={i}
                className='article-link'
              >
                <ArticleTemplate
                  article={article}
                  key={article._id}
                />
              </Link>
            ))
          ) : (
            <ArticleSkeleton />
          )}
        </Col>
      </Container>
    </div>
  );
}
