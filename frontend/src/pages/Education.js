import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Nav from './nav.js'
import Contact from './Contact.js'

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import {styled} from '@mui/material/styles';

const Education = (props) => {
    const course_titles = ["Game Development","Database Systems","Systems Programming","Digital Learning Enviornments","Tech-Driven Health Interventions","Algorithms and Models of Computation","Probability and Statistics","Data Structures","Introduction to Computer Science II","Discrete Structures","Computer Architecture", "Introduction to Design Thinking","Linear Algebra with Computational Applications"];
    const course_nums = ["CS 415","CS 411","CS 341","CI 210","KIN 474","CS 374","CS 361","CS 225","CS 128","CS 233", "CS 173", "DTX 251", "MATH 257"];
    const course_descriptions = ["3D Game development, Level design, Unreal","SQL, Relational algebra, Database design, MongoDB, Neo4j","Threads, Processes, Non-blocking I/O","Interactivity theories, Immersion, Evaluation of learning enviornments","Tech for behavioral change, Designing technology-based health solutions","Finite automata, Algorithms, Graphs, NP completeness","Probability theory, Linear regression, Classification","Linked lists, Graphs, Trees","C++, Memory allocation","Logic, Graph theory, Induction proofs","Logic circuits, Assembly, Cache optimization", "Human-centered design, Iterative design, Ideation","Matrices and vectors, NumPy"];
    const skill_progress = [["Python",100],["SQL",100],["C/C++",100],["JavaScript",85],["Java",85],["Unreal",75],["Git",80],["React",80],["Android App Dev",80],["Flask",50]];
    const courses = course_titles.map((course, ind) => 
        <>
            <p><details >
            <summary>{course} - {course_nums[ind]}</summary>
            <ul>
                <li><p>{course_descriptions[ind]}</p></li>
            </ul>
            </details></p>
               
        </>
    );
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 18,
        borderRadius: 0,
        border: theme.palette.mode === 'light'? '2px solid #262223' : '2px solid #DDC6B6',
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.mode === 'light' ? '#F8F7F4' : '#262223',
        },
        [`& .${linearProgressClasses.bar}`]: {
          backgroundColor: theme.palette.mode === 'light' ? '#262223' : '#F8F7F4',
        },
      }));
    const skills = skill_progress.map(skill =>
        // <>
        //     <h3>{skill[0]}</h3>
        //     <p>{skill[1]}</p>
        // </>
        <>
        <Grid item xs={3} sm={3}  sx={{ flexGrow: 1 }}>
            <div sx={{ flexGrow: 1}}>
                <p style={{padding:10, margin:0, textAlign:'right'}}>{skill[0]}</p>
            </div>
        </Grid>
        <Grid item xs={8} sm={8} sx={{ flexGrow: 1}}>
            <div sx={{ flexGrow: 1 }}>
                <BorderLinearProgress variant="determinate" value={skill[1]} />
            </div>
        </Grid>
        </>
    );
    return (
    <>
        <Nav/>
        <div className="Education" style={{maxWidth:'800px', paddingTop: '50px', paddingBottom: '80px', paddingLeft: '5vw', paddingRight: '5vw', margin: '0 auto'}}>
            <h1>Education + Skills</h1>
            <h2>Overview</h2>
            <p>
                University of Illinois Urbana-Champaign<br/><br/>
                B.S. in Computer Science<br/>
                Minor in Game Studies and Design<br/><br/>
                Prior: Thomas Jefferson High School for Science and Technology (2018-2022)
            </p>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ minWidth: 200 }}>
                            <React.Fragment>
                                        <h2>Relevant Courses</h2>
                                            {courses}
                            </React.Fragment>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ minWidth: 200 }}>
                            <React.Fragment>
                                    <h2>Skills</h2>
                                    <Grid container spacing={0} sx={{justifyContent: 'center', alignItems: 'center'}}>
                                        {skills}
                                    </Grid>
                            </React.Fragment>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
        <Contact/>
    </>

    );
}
export default Education;