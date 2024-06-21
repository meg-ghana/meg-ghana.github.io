import React from 'react';
import resume from '../MeghanaGopannagari_Resume_sp24.pdf';
import HomeIcon from '@mui/icons-material/Home';
const Nav = (props) => {
    return (
        <div className="nav" style={{position: 'fixed', zIndex: 10, width: '100vw', height: '30px', top: 0, left: 0, paddingTop:'20px', margin: '0 auto'}}>
            <header className="nav-header" style={{maxWidth:'800px', paddingLeft: '5vw', paddingRight: '5vw', margin: '0 auto'}}>
            <a href="/" style = {{float:'left'}}><HomeIcon/></a>&emsp;
                <div style = {{float:'right'}}>
                <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>&emsp;
                <a href="/education">Education + Skills</a>&emsp;
                <a href="/projects">Projects</a>&emsp;
                </div>
            </header>
        </div>

    );
}
export default Nav;