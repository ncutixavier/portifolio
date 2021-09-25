import React from 'react';
import NavBar from './NavBar';
import { Container } from 'reactstrap';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import waves from '../../assets/img/wave.svg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-scroll";

// const useStyles = makeStyles({
//     media: {
//         height: 350,
//         width: '100%'
//     },
// });

const Home = () => {
    // const classes = useStyles();

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
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}>
                                <Button className="home-btn-hire mr-4" variant="contained" color="primary" disableElevation>Hire Me</Button>
                            </Link>
                            <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1zKwLlkgQ5no-1fRFxx5o8KYPNJYukvuOb44T-LXKrwU/edit?usp=sharing">
                                <Button className="home-btn-cv" variant="outlined" color="primary">Get CV</Button>
                            </a>
                            
                        </div>

                    </div>
                </div>
            </Container>
            <img src={waves} alt="" className="img-wave"/>
        </div>
    );
};

export default Home;
