import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
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

function Icons() {
    const classes = useStyles();

    const icons = [
      {
        icon: <FacebookIcon />,
        link: 'https://www.facebook.com/ndagijimana.xavier.1',
      },
      {
        icon: <TwitterIcon />,
        link: 'https://twitter.com/ncutixavier',
      },
      {
        icon: <InstagramIcon />,
        link: 'https://www.instagram.com/ncutixavier/?hl=en',
      },
      {
        icon: <LinkedInIcon />,
        link: 'http://linkedin.com/in/ncuti-xavier-979284197',
      },
      {
        icon: <GitHubIcon />,
        link: 'https://github.com/ncutixavier',
      },
    ];

    return (
      <div className='icons'>
        {icons.map((icon, index) => (
          <a
            rel='noreferrer'
            href={icon.link}
            target='_blank'
          >
            <Avatar className={classes.grey}>
              {icon.icon}
            </Avatar>
          </a>
        ))}
      </div>
    );
}

export default Icons
