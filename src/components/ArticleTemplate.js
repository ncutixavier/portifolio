import React from 'react';
import { Row, Col } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

const ArticleTemplate = ({ article, handleClick }) => {
  const formatDate = (dt) => {
    const months = [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    const subDate = dt.split('T')[0].split('-');
    return `${months[Number(subDate[1]) - 1]} ${subDate[2]}, ${subDate[0]}`;
  };
  return (
    <Row
      lg={12}
      md={12}
      sm={12}
      key={article._id}
      onClick={() => handleClick(article)}
    >
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
          >
            {ReactHtmlParser(article.content.substr(0, 250) + '...')}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography gutterBottom>
            Edited by {article.author} on {formatDate(article.date)}
          </Typography>
        </CardContent>
      </Col>
    </Row>
  );
};

export default ArticleTemplate;
