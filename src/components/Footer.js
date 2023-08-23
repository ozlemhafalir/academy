import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function Footer(props) {
    return (
        <footer style={{fontSize: ".8rem", marginTop: "2rem", marginBottom: "2rem"}}>
            <Container fluid>
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={4} xl={3}>
                        </Col>
                        <Col xs={12} sm={6} md={4} xl={3}>
                        </Col>
                        <Col xs={12} sm={6} md={4} xl={3}>
                        </Col>
                        <Col xs={12} sm={6} md={4} xl={3}>
                            <div>Credits</div>
                            <div>
                                <a href="https://www.flaticon.com/free-icons/music-and-multimedia">Multimedia icons
                                    created
                                    by
                                    Flat Icons - Flaticon</a>
                            </div>
                            <div>
                                Banner photo by <a
                                href="https://unsplash.com/@ohhbee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olivia
                                Bauso</a> on <a
                                href="https://unsplash.com/photos/nKWXb8EGzO0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </footer>
    );
}

export default Footer;
