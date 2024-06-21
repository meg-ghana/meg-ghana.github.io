import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Contact = (props) => {
    return (
      <div style={{ height: '50px', paddingBottom: '35px', zIndex: 100, position: 'fixed', width: '100vw', height: '30px', bottom: 0, left: 0, margin: '0 auto'}}>
        <div style={{maxWidth:'800px', paddingLeft: '5vw', zIndex: 100, paddingRight: '5vw', alignItems:"center", margin: '0 auto'}}>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <p>meghana.gopannagari @ gmail . com &emsp;
          <a href="https://github.com/meg-ghana" target="_blank" rel="noopener noreferrer">GitHub</a>&emsp;
          <a style={{color:'#0077B5', fontSize: '20px', textDecoration: 'none'}}href="https://www.linkedin.com/in/meghana-gopannagari-a63a781a7/" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin-square"></a>
          </p>
        </div>  
      </div>
    );
  }
  
export default Contact;