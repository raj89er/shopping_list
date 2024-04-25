// import { useState } from 'react';
import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container';
import Home from './views/home';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App(){
    

    return (
        <>
            <Navigation/>
            <Container>
                <Home/>
            </Container>
        </>
    )
}