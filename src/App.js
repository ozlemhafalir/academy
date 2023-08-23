import React from "react";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./pages/index";
import {Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Container fluid className={"p-0"}>
                <Routes>
                    <Route exact path="/" element={<Index/>}/>
                </Routes>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
