import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Link } from 'react-scroll';
// import {NavLink} from 'react-router-dom'

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
    color: '#4dd0e1',
    fontSize: '2rem',
  },
}));

export const NavBar = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  // const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [color, setColor] = useState('');

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > 20) {
        setColor('dark');
        document.querySelector('.down-btn').style.display = 'none';
      } else {
        setColor('');
        document.querySelector('.down-btn').style.display = 'inline';
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const toggle = () => setIsOpen(!isOpen);

  const navLinks = [
    {
      name: 'Home',
      offset: -150,
      to: 'home',
    },
    {
      name: 'About',
      offset: -70,
      to: 'about',
    },
    {
      name: 'Works',
      offset: -40,
      to: 'work',
    },
    {
      name: 'Contact',
      offset: -70,
      to: 'contact',
    },
  ];

  return (
    <div name='home'>
      <Navbar fixed='top' color={color} light expand='md'>
        <Typography variant='h4' className='logo'>
          <a href='/'>
            <Avatar className={classes.purple}>NX</Avatar>
          </a>
        </Typography>
        <NavbarToggler onClick={toggle}>
          <span className='navbar-toggle-icon'>
            <DehazeIcon className={classes.purpleToggle} />
          </span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            {navLinks.map((item, index) => (
              <NavItem key={index}>
                <Link
                  className='nav-link'
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={1000}
                >
                  {item.name}
                </Link>
              </NavItem>
            ))}
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
