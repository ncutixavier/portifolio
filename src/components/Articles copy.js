import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../store/actions/articlesAction';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  media: {
    height: 200,
    width: 200,
    borderRadius: '50%',
  },
}));

export default function Articles() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const articlesListData = useSelector((state) => state.articlesList);
  const { loading, error, articles } = articlesListData;
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);
  console.log("art >>:", articles)
  return (
    <div className='articles'>
      {loading
        ? 'Loading...'
        : error
          ? error.message
          : articles.data.articles.map((article) => {
            <h3>{article.author}</h3>
          })}
      <Container>
        <Col>
          <Row lg={12} md={12} sm={12}>
            <Col lg={4} md={4} sm={4}>
              <CardMedia
                className='article-img'
                image='https://cdn.mos.cms.futurecdn.net/a2U6bn6dhqRpoTjtjbQhdB-650-80.jpg.webp'
                title='Paella dish'
              />
            </Col>
            <Col lg={8} md={8} sm={8}>
              <CardContent>
                <Typography gutterBottom variant='h4'>
                  Best Code Editors for developers in 2020
                </Typography>
                <Typography
                  color='textSecondary'
                  component='p'
                  className='article-text'
                >
                  Finding the best code editor for your workflow can have a huge
                  impact on your productivity. There's no shortage of code
                  editors on the market and selecting the one that is right for
                  your developer needs can transform your workflow. Typically,
                  developers...
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom component='p'>
                  Edited by Ncuti Xavier on Aug 26, 2018
                </Typography>
              </CardContent>
            </Col>
          </Row>
          <Row lg={12} md={12} sm={12}>
            <Col lg={4} md={4} sm={4}>
              <CardMedia
                className='article-img'
                image='https://cdn.mos.cms.futurecdn.net/a2U6bn6dhqRpoTjtjbQhdB-650-80.jpg.webp'
                title='Paella dish'
              />
            </Col>
            <Col lg={8} md={8} sm={8}>
              <CardContent>
                <Typography gutterBottom variant='h4'>
                  Best Code Editors for developers in 2020
                </Typography>
                <Typography
                  color='textSecondary'
                  component='p'
                  className='article-text'
                >
                  Finding the best code editor for your workflow can have a huge
                  impact on your productivity. There's no shortage of code
                  editors on the market and selecting the one that is right for
                  your developer needs can transform your workflow. Typically,
                  developers...
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom component='p'>
                  Edited by Ncuti Xavier on Aug 26, 2018
                </Typography>
              </CardContent>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}


