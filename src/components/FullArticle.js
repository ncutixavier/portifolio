import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArticle } from '../store/actions/articleAction';
import { Spinner } from 'reactstrap';
import { formatDate } from '../utils/helper';
import ReactHtmlParser from 'react-html-parser';
import FullArticleSkeleton from './skeleton/FullArticleSkeleton'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  media: {
    height: 350,
    width: '100%',
    borderRadius: '5px',
    margin: '10px',
  },
}));

export default function Articles(props) {
  const classes = useStyles();
  const paragraphContent = useRef(null);

  const dispatch = useDispatch();
  const postData = useSelector((state) => state.article);
  const { loading, error, post } = postData;

  useEffect(() => {
    dispatch(getArticle(props.id));
    console.log('p>>', paragraphContent);
  }, [dispatch]);

  return (
    <div className='articles'>
      <Container>
        <Col>
          {loading ? (
            <FullArticleSkeleton />
          ) : error ? (
            error.message
          ) : post.data.article ? (
            <div>
              <Link to='/blogs'>
                <Row className='back-btn'>Back</Row>
              </Link>
              <Row lg={12} md={12} sm={12}>
                <CardMedia
                  className={classes.media}
                  image={post.data.article.image}
                  title='Paella dish'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h2'
                    className='full-article-title ma-5'
                  >
                    {post.data.article.title}
                  </Typography>
                  <div className='full-article-text'>
                    {ReactHtmlParser(post.data.article.content)}
                  </div>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom component='p'>
                    Edited by {post.data.article.author} on{' '}
                    {formatDate(post.data.article.date)}
                  </Typography>
                </CardContent>
              </Row>
            </div>
          ) : (
                  <FullArticleSkeleton />
                )}
        </Col>
      </Container>
    </div>
  );
}
