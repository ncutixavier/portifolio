import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import { grey, cyan } from '@material-ui/core/colors';
import { BrowserRouter as Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontSize: '1.7rem'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    loginBtn: {
        fontSize: '1.4rem',
    },
    purple: {
        color: theme.palette.getContrastText(cyan[400]),
        backgroundColor: cyan[400],
        width: theme.spacing(5),
        height: theme.spacing(5),
        fontSize: '1.8rem',
        fontWeight: 'bold',
    },
    mainTitle: {
        textAlign: 'center',
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" >
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}

                    <Typography variant="h4" className={classes.title}>
                        <a href="/">
                            <Avatar className={classes.purple}>NX</Avatar>
                        </a>
                    </Typography>

                    <Button color="inherit" variant="outlined" className={classes.loginBtn}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
