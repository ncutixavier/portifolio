import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Icons from '../Icons'

const Footer = () => {

    return (
        <div className="ft">
            <Container>
                <Row className="mx-0" style={{alignItems: "center"}}>
                    <Col>© {(new Date().getFullYear())} ncutixavier</Col>
                    <Col>
                        <Icons />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
