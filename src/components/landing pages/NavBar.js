import React, { useState, useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { deepPurple, cyan } from '@material-ui/core/colors'
import DehazeIcon from '@material-ui/icons/Dehaze'
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
    purple: {
        color: theme.palette.getContrastText(cyan[300]),
        backgroundColor: cyan[300],
        width: theme.spacing(5),
        height: theme.spacing(5),
        fontSize: '1.8rem',
        fontWeight: 'bold',
    },
    purpleToggle: {
        color: '#000',
        fontSize: '2rem',
    }
}));

const NavBar = (props) => {
    const classes = useStyles()
    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [color, setColor] = useState("");

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset;
            if (currentPosition > 20) {
                setColor("light")
                console.log(scrollTop)
                document.querySelector(".navbar").classList.add("nav-shadow")
                setScrolling(false);
            } else {
                setColor("")
                setScrolling(true);
            }
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div name="home">
            <Navbar fixed="top" color={color} light expand='md'>
                <Typography variant="h4" className="logo">
                    <a href="/">
                        <Avatar className={classes.purple}>NX</Avatar>
                    </a>
                </Typography>
                <NavbarToggler onClick={toggle}>
                    <span className="navbar-toggle-icon">
                        <DehazeIcon className={classes.purpleToggle} />
                    </span>
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='me-auto' navbar>
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={1000}>
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={1000}>
                                About
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="works"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}>
                                Works
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}>
                                Contact
                            </Link>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/blogs'>Blog</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;
