import React from "react";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./pages/index";
import {Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import Instructors from "./pages/Instructors";
import Categories from "./pages/Categories";
import Footer from "./components/Footer";
import Category from "./components/Category";
import Instructor from "./components/Instructor";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Container fluid className={"p-0"}>
                <Routes>
                    <Route exact path="/" element={<Index/>}/>
                    <Route exact path="/categories" element={<Categories/>}/>
                    <Route exact path="/category/:slug" element={<Category/>}/>
                    <Route exact path="/instructors" element={<Instructors/>}/>
                    <Route exact path="/instructor/:slug" element={<Instructor/>}/>
                    <Route exact path="/signin" element={<Signin/>}/>
                    <Route exact path="/signup" element={<Signup/>}/>
                </Routes>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
