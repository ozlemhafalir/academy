import React from 'react';
import Banner from "../components/Banner";
import {Container} from "react-bootstrap";
import CategoryList from "../components/CategoryList";
import SeeAll from "../components/SeeAll";

function Index() {
    return (
        <>
            <Banner headline={"Learn something new, today!"}/>
            <Container>
                <CategoryList title={'Featured Categories'} query={'featured=1'}/>
                <SeeAll href={'/categories'}/>
            </Container>
        </>
    );
}

export default Index;