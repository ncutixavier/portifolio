import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    grey: {
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
        marginRight: '2rem',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className="ft">
            <Container>
                <Row className="mx-0">
                    <Col>© {(new Date().getFullYear())} ncutixavier</Col>
                    <Col>
                        <div className="d-flex">
                            <a href="https://web.facebook.com/ndagijimana.xavier.1" target="_blank">
                                <Avatar className={classes.grey}>
                                    <FacebookIcon />
                                </Avatar></a>
                            <a href="https://twitter.com/ncutixavier" target="_blank">
                                <Avatar className={classes.grey}>
                                    <TwitterIcon />
                                </Avatar></a>
                            <a href="https://www.instagram.com/ncutixavier/?hl=en" target="_blank">
                                <Avatar className={classes.grey}>
                                    <InstagramIcon />
                                </Avatar></a>
                            <a href="http://linkedin.com/in/ncuti-xavier-979284197" target="_blank">
                                <Avatar className={classes.grey}>
                                    <LinkedInIcon />
                                </Avatar></a>
                            <a href="https://github.com/ncutixavier" target="_blank">
                                <Avatar className={classes.grey}>
                                    <GitHubIcon />
                                </Avatar>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
