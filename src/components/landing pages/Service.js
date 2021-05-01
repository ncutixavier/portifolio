import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import PublicIcon from '@material-ui/icons/Public';

const services = [
    {
        id: 1,
        image: 'http://',
        text: 'We develop a Web site for the Internet either static or dynamic web application.',
        title: 'Web Development',
        icon: <PublicIcon className="ss-icon" />
    },
    {
        id: 2,
        image: 'http://',
        icon: <PhoneIphoneIcon className="ss-icon" />,
        title: 'Mobile Application',
        text: 'We create software applications that run on a mobile device.'
    },
    {
        id: 3,
        image: 'http://',
        icon: <DesktopWindowsIcon className="ss-icon" />,
        title: 'Desktop Application',
        text: 'We make software applications that run natively on operating systems like Windows.'
    }
]

const service = () => {
    let cards = services.map((s, i) =>
        <Col key={i} className="s-card" sm="12" md="4">
            <div className="face front">
                <div className="s-icon text-center">{s.icon}</div>
                <h2 className="text-center">{s.title}</h2>
            </div>
            <div className="s-text face back">
                <p>{s.text}</p>
            </div>
        </Col>
    )
    return (
        <div className="service" name='sevice'>
            <Container>
                <div className="service-title">What can <span>I do for you?</span></div>
                <Row className="no-hide mx-0">{cards}</Row>
            </Container>
        </div>
    )
}

export default service
