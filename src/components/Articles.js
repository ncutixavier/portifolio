import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../store/actions/articlesAction';
import Skeleton from 'react-loading-skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';

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

const formatDate = (dt) => {
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  const subDate = dt.split('T')[0].split('-')
  return `${months[Number(subDate[1]) - 1]} ${subDate[2]}, ${subDate[0]}`
}

export default function Articles() {
  const dispatch = useDispatch();
  const articlesListData = useSelector((state) => state.articlesList);
  const { loading, error, articles } = articlesListData;
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);
  console.log('art >>:', articles);
  return (
    <div className='articles'>
      <Container>
        <Col>
          {loading
            ? (<div style={{textAlign: 'center', height: '60vh'}}><CircularProgress /></div>)
            : error
              ? error.message
              : articles.data.articles.map((article) => (
                <Row lg={12} md={12} sm={12} key={article._id}>
                  <Col lg={4} md={4} sm={4}>
                    <CardMedia
                      className='article-img'
                      image={article.image}
                      title='Paella dish'
                    />
                  </Col>
                  <Col lg={8} md={8} sm={8}>
                    <CardContent>
                      <Typography gutterBottom variant='h4'>
                        {article.title}
                      </Typography>
                      <Typography
                        color='textSecondary'
                        component='p'
                        className='article-text'
                      >{article.content.substr(0, 250) + "..."}</Typography>
                    </CardContent>
                    <CardContent>
                      <Typography gutterBottom>
                        Edited by {article.author} on {formatDate(article.date)}
                      </Typography>
                    </CardContent>
                  </Col>
                </Row>
              ))}
        </Col>
      </Container>
    </div>
  );
}
