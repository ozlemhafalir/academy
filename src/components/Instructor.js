import React from 'react';
import {useParams} from "react-router";
import Container from "react-bootstrap/Container";

function Instructor(props) {
    const {slug} = useParams();
    return (
        <Container>{slug}</Container>
    );
}

export default Instructor;