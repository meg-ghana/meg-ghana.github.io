import React from 'react';
import resume from '../MeghanaGopannagari_Resume_2024.pdf';
import Nav from './nav.js'
import Contact from './Contact.js'
const Introduction = (props) => {
    return (
        <>
        <Nav/>
        <div className="Introduction" style={{maxWidth:'800px', paddingLeft: '5vw', paddingRight: '5vw', height: '80vh', display: 'flex', alignItems: 'center', margin: '0 auto'}}>
        
        <header className="Introduction-header" >
            <h1>Hi, I'm Meghana Gopannagari</h1>
            <p>she/her < span style={{color: "#9D6A53"}}>&emsp; may · guh · nuh &emsp; goh · pun · nuh · gahr · ee </span></p><br/>
            <h3 style={{ fontWeight: "normal"}}>
                I’m a <strong style={{color: "#9D6A53"}}>computer science</strong> student at the University 
                of Illinois Urbana-Champaign with a minor in <strong style={{color: "#9D6A53"}}>game studies and
                design</strong>. I’m interested in using my technical skills 
                to build <strong style={{color: "#9D6A53"}}>interactive</strong> technologies for 
                individuals of <strong style={{color: "#9D6A53"}}>all</strong> abilities and backgrounds.
            </h3><br/><br/>
            
            <a href={resume} target="_blank" rel="noopener noreferrer" >Resume/CV</a>&emsp;
            <a href="/education" >Education + Skills</a>&emsp;
            <a href="/projects" >Projects</a>&emsp;
            <a href="/contact" >Contact</a>
        </header>
        </div>
        <Contact/>
        </>

    );
}
export default Introduction;