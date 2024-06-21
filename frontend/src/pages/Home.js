import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import resume from '../MeghanaGopannagari_Resume_2024.pdf';
import Introduction from './Introduction.js'
import Education from './Education.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
function Home() {
    return (
        
        <div className="Home">
        <header className="Home-header">
            <div>
                <Introduction  style={{maxWidth:'800px', paddingLeft: '5vw', paddingRight: '5vw', height: '100vh', display: 'flex', alignItems: 'center', margin: '0 auto'}}/>
            </div>
        </header>
        </div>

    );
}
export default Home;