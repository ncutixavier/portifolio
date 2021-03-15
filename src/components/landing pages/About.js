import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardMedia from '@material-ui/core/CardMedia';
import about_img from '../../assets/img/about_img.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  media: {
    height: 350,
    width: '100%',
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <div className='about' name='about'>
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <CardMedia className={classes.media} image={about_img} title='' />
          </Col>
          <Col lg={6} md={12}>
            <div className='display-3 mb-3'>Who I am?</div>
            <div className='about-text'>
              <p>
                I'm a software engineer / developer based in Kigali, Rwanda. I
                have a passion for software development and I like to work with
                others to solve the real world problems.
              </p>
              <p>
                I know how to create web based application from scratch. My goal
                is to be focused and help you to convey the message you want to
                send.
              </p>
              <p>
                I'm currently available for freelancer work. If you have a
                project that you want to get started, think you need my help
                with something or just fancy saying hey, then <a href="mailto:ncuti60@gmail.com">get in touch.</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
