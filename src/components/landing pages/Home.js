import React from 'react';
import NavBar from './NavBar';
import { Container, Row, Col } from 'reactstrap';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import home_img from '../../assets/img/home_img.png'
import waves from '../../assets/img/wave.svg'
import down_btn from '../../assets/img/down_btn.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-scroll";

const useStyles = makeStyles({
    media: {
        height: 350,
        width: '100%'
    },
});

const Home = () => {
    const classes = useStyles();

    return (
        <div className='home'>
            <NavBar />
            <Link
                className="down-btn"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}>
                <ExpandMoreIcon className="expand" />
            </Link>
            <Container>
                <div className="home-content justify-content-center">
                    <div lg={6} md={12} className="home-intro">
                        <div className="display-4 home-greet mb-4"><span>👋</span></div>
                        <div className="home-name">I'm Ncuti Xavier</div>
                        <div className="h2 my-3">A software developer</div>
                        <div className="home-btn-group mt-5 d-flex">
                            <Button className="home-btn-hire mr-4" variant="contained" color="primary" disableElevation>Hire Me</Button>
                            <Button className="home-btn-cv" variant="outlined" color="primary">Get CV</Button>
                        </div>

                    </div>
                    {/* <Col lg={6} md={12}>
                        <CardMedia
                            className={classes.media}
                            image={home_img}
                            title=''
                        />
                    </Col> */}
                </div>
            </Container>
            <img src={waves} alt="" className="img-wave"/>
        </div>
    );
};

export default Home;
