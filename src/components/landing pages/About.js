import React from 'react';
import { Container, Row, Col, Progress } from 'reactstrap';
import CardMedia from '@material-ui/core/CardMedia';
import about_img from '../../assets/img/about_img.png';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

const useStyles = makeStyles({
  media: {
    height: 350,
    width: '100%',
  },
});

const About = () => {
  const classes = useStyles();

  const skills = [
    {
      id: 1,
      name: 'Vue JS, Vuex & Nuxt JS',
      value: 85,
    },
    {
      id: 2,
      name: 'React JS & Redux',
      value: 82,
    },
    {
      id: 3,
      name: 'Node JS & Express',
      value: 84,
    },
    {
      id: 4,
      name: 'Mongo DB, PostgreSQL and SQLite',
      value: 86,
    },
  ];

  return (
    <div className='about' name='about'>
      <Container>
        <Row className=''>
          <Col lg={6} md={12}>
            <CardMedia className={classes.media} image={about_img} title='' />
          </Col>
          <Col lg={6} md={12} className='about-content-text'>
            <div className='display-4 mb-3'>Who I am?</div>
            <div className='about-text'>
              <p>
                I'm a software engineer based in Kigali, Rwanda. I'm currently
                available for freelancer work. If you have a project that you
                want to get started, think you need my help with something or
                just fancy saying hey, then{' '}
                <a href='mailto:ncuti60@gmail.com'>get in touch.</a>
              </p>
            </div>

            <div className=''>
              <div className='display-4 mb-4'>My skills</div>
              <div className='skills'>
                {skills.map((skill) => (
                  <div className='skill-item' key={skill.id}>
                    <p className='skill-title'>{skill.name}</p>
                    <Progress color='info' value={skill.value} />
                  </div>
                ))}
              </div>
            </div>
            <div className='service-btn'>
              <Link
                className='s-button'
                to='service'
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                Look my services
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
