import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
            history.push('/blogs');
        }, 1000);
    }, [history]);
    return (
        <div className="homepage">
            <div id='animate-bg'>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div id='title'>
                    <div><a href="/blogs">WELCOME TO MY BLOG</a></div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
