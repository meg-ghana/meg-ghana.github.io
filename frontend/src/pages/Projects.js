import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Nav from './nav.js'
import Contact from './Contact.js'
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
const Projects = (props) => {
const project_names = ["Capital One SWE Intern", "3D Platformer Game", "Game Development Final Project", "Table for Two", "JPMC Code for Good Hackathon", "ClassTranscribe", "UDL and Accessibility Group Research", "Embodied and Immersive Technologies (EmIT) Lab", "Cargill SWE Intern", "Rhythm Scribe", "CS 341 Mini-Projects", "SpeechToSign", "Three Men's Morris", "Ethikal"];
const project_descriptions = ["Incoming SWE Intern - will insert info later",
  "I designed a 3D platformer level game with moving obstacles and a maze. Also built 3 unique enemies: an AI pursuer enemy, a mortar enemy, and a guard enemy. I developed the health system, gameplay, and enemy functionailities using the Unreal game engine.",
  "I worked with a team to design and develop a 3D game where players collect ingredients to build a cake (lv1 1) pizza (lvl 2) plate of pasta (lvl 3). Heavily involved with the level design to make the game enjoyable and challenging to play. Applied game design skills I've learned from previous game design courses.",
  "I worked with my team to develop a full-stack website where users got paired up with other users and restaurants in NYC based on the users' culinary preferences, ideal budgets, dietary preferences, and other attributes. Implemented the frontend using React and used NodeJS for the backend. We designed and the backend database tables and implemented them using SQL. I integreated the frotnend with the database and helped develop the queries.",
  "My team and I created a full-stack application for the non-profit \"Rebuilding Aurora\". We designed a volunteer and admin dashboard to improve communication between volunteers and authories. Also implemented gamification features such as rewards systems and points to improve engagement. Implemented the features using React and sotred data in a Firebase database. Our team was awarded first place for our intensive design process and use of human-centered design.",
  "I work on the frontend of ClassTranscribe, a digital notes platform that allows students to access lecture videos and create digital notes based on them in an accesible and adaptable manner. The platform is used across the Grainger College of Engineering (1000+ students). Over the past few semesters, I've added additional customizations such as adding minimum word counts to chapters, combining multiple views into a more intuitive layout, and debugged the notes download feature.",
  "I've been part of the UDL and Accessibility group for the past three semesters, primarily working on collecting data from student users of ClassTranscribe and using natural language processing and machine learning methods to analyze the data. I've presented our research in the 2023 and 2024 undergraduate research symposium, and I have published multiple papers with the team through the ASEE national conference. I will also be presenting my research on using NLP and ML to analyze survey data in the ASEE 2024 conference in Portland, Oregon.",
  "As a memeber of the Embodied and Immersive Technologies Lab, I work with PhD students and Professor Lindgren to better understand how to apply educational theories to the design of educational technologies. [expand maybe later when you have more time?]",
  "At the Cargill Innovation Lab, I worked with my team to create a dashboard for executives at Cargill to better visualize the risk of Cargill protein plants across the US. We developed SQL commands to query from real-time data from 100+ plants and created data visualizations for 50+ key risk indicators (KRIs). We incorporated human-centered design principles and accessibility guidelines to ensure that the dashboards were intuitive while also being inclusive of the various employees and plant managers at Cargill.",
  "I worked with a team of other game design students to design a prototype for Rhythm Scribe, an educational game for students to learn how to sight-read music. Implemented interactivity design principles and educational theories to design a gamified learning enviornment.",
  "Through the systems programming class at UIUC, I used processes in linux to create a shell from scratch, used threads to develop a program implementing the make command by identifying deadlocks and handling other concurrency problems, implemented a client and server using web scokets and epoll.",
  "[insert speechtosign description here]",
  "I worked with my team to create the Android application Three Men's Morris - a more complex ancestor of tic-tac toe. I developed the AI player through using min-max pruning in order to predict future player moves. Also learned about version control and how to create pull-requests to maintain an easy way to collaborate on code.",
  "[Insert ethikal description from somewhere]"]
const tags = [[3,12],[0,4,9,11],[0,4,9,11],[1,3,12],[9,3,12],[3,9,10],[5,8,9,10],[0,8],[1,9,10,12],[0,8,9],[6],[2,5,7,10,12],[2,11,12],[2,7,9,12]];
const alltags = ["Game Design", 
                "Databases (SQL)", 
                "Mobile App Dev", 
                "Frontend Web Dev", 
                "Unreal", 
                "Natural Language Processing", 
                "Systems Programming", 
                "Webscraping", 
                "Educational Tech Design",
                "Human Centered Design",
                "Accessibility", 
                "Artificial Intelligence",
                "Backend Dev"
              ]; 

const [checkboxes, setCheckboxes] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1]);
const [descriptions, setDescriptions] = useState([]);

function initializeDescriptions() {
  
}
if(descriptions.length === 0) {
  initializeDescriptions();
}
function checkClicked(ind) {
  return (e) => {
    let temp = [...checkboxes];
    temp[ind] = (temp[ind]+1)%2;
    setCheckboxes(temp);
  };
}

const checkbox_vals = alltags.map((tag,ind) => 
    <input type="checkbox" label = {tag} style={{display:"none"}}/>
    // <Chip label={tag} deleteIcon={<DoneIcon />} style={{backgroundColor:"#000000"}}onClick={checkClicked(ind)}  />
);
const tag_menu = alltags.map((tag,ind) => 
  checkboxes[ind] == 0?
  <button onClick={checkClicked(ind)} style={{backgroundColor:"#fbfbf6", border: '2px solid #262223',  color: "#fbfbf6", height:"auto", float: "left", width: "auto",display: "flex", textColor: "#fbfbf6", padding:"7px", borderRadius:"2%", margin: "6px"}} >
    <div style={{ backgroundColor:"#fbfbf6", color:"#262223", height:"20px", display: "flex", textColor: "#fbfbf6", alignItems:"center",}}>
      <AddIcon style={{ height: "20px", backgroundColor: "#fbfbf6",color:"#9D6A53"}}/> {tag}
    </div>
  </button>:
  <button onClick={checkClicked(ind)} style={{backgroundColor:"#262223", border: '2px solid #262223',  color: "#262223", height:"auto", float: "left", width: "auto",display: "flex", textColor: "#262223", padding:"7px", borderRadius:"2%", margin: "6px"}} >
  <div style={{ backgroundColor:"#262223", color:"#fbfbf6", height:"20px", display: "flex", textColor: "#262223", alignItems:"center",}}>
    <CloseIcon style={{ height: "20px", backgroundColor: "#262223",color:"#fbfbf6"}}/> {tag}
  </div>
</button>
  // <button onClick={checkClicked(ind)}  style={{backgroundColor:"#FFFFFF", border: '2px solid #262223', color: "#000000", height:"auto", float: "left", width: "auto",display: "flex", padding:"7px", borderRadius:"2%", margin: "6px"}} >
  //   <div style={{ height: "20px", backgroundColor:"#9D6A53", color:"#000000", height:"25px", display: "flex", alignItems:"center", }}>
  //     {checkbox_vals[ind]}
  //     <AddIcon style={{ color:"#000000"}}/> {tag}
  //   </div>
  // </button>
);

const each_tag = [];
for(let i = 0; i < tags.length; i++) {
  const tag = tags[i].map((name) => 
    <label>{alltags[name]}, </label>
  );
  each_tag.push(tag);
}
//need to only filter the relevant ones
const cards = [];
for(let i = 0; i < tags.length; i++) {
  
  let s = false;
  for(let j = 0; j < tags[i].length; j++) {
    if(checkboxes[tags[i][j]] === 1)
      s = true;
  }
  const tag =
  s ?
    <Grid item xs={12} sm={4}>
      <Box sx={{ minWidth: 200 }}>
        <Card variant="outlined" style={{ borderLeft: "none", borderRight: "none", borderBottom: "none", borderColor: "#262223",  borderRadius: "0px",borderWidth: "2px"}}>
          <React.Fragment>
            <CardContent sx = {{minHeight: 200}}>
              <h3>{project_names[i]}</h3>
              <p>{each_tag[i]}</p>
              <p><details>
                <summary>< span style={{color: "#262223"}}>Project Description</span></summary>
                <p style={{color: "#262223"}}>{project_descriptions[i]}</p>
              </details></p>
            </CardContent>
          </React.Fragment>
        </Card>
      </Box>
    </Grid>
   : <></>
  cards.push(tag)
  
}  

return (
    <>
      <Nav/>
      <div style={{maxWidth:'800px', paddingLeft: '5vw', paddingBottom: '80px', paddingRight: '5vw', paddingTop: '50px', margin: '0 auto'}}>
      <header className="Projects-header" >
          <h1>Projects</h1>
          <div>
            {tag_menu}
          </div>
          <Box sx={{ flexGrow: 1 }} style={{marginTop:"230px"}}>
            <Grid container spacing={2}>
            {cards}
            </Grid>
          </Box>
          </header>
      </div>
      <Contact/>
    </>
  );
}

export default Projects;
