import React, { useEffect,useState,useRef } from 'react';
import Typed from 'typed.js';
import './Body.css';

export default function Body() {

    // This is Typing of what I am?
    useEffect(() => {
        const typed = new Typed(".text", {
            strings: ["Programmer", "Java Developer","Web Developer"],
            typeSpeed: 70,
            backSpeed: 20,
            backDelay: 400,
            loop: true
        });
        return () => {
            typed.destroy();
        };
    }, []);

   
    
    return (
        <>
            <div id='home' className="middle">
                <div className="about-section">
                    <h3>Hello, It's Me</h3>
                    <h1>Raviranjan Kumar</h1>
                    <h3>Computer Science Engineer</h3>
                    <h3>And I'm a <span className="text"></span></h3>
                    <span className='icon'>
                        <a href="https://www.facebook.com/" ><i className="bx bxl-facebook" style={{ color: 'blue' }}></i></a>
                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" style={{color: 'red'}}></i></a>
                        <a href="https://in.linkedin.com/in/raviranjan-kumar-18b5652b5" ><i className="fa-brands fa-linkedin-in" style={{color: 'rgb(30,40,80)'}}></i></a>
                        <a href="https://github.com/"><i className="fa-brands fa-github" style={{color: 'black'}}></i></a>
                        <a href="https://twitter.com/?lang=en" ><i className="fa-brands fa-x-twitter"></i></a>
                    </span>
                    <span className='hire'>
                        <a href="https://in.linkedin.com/in/raviranjan-kumar-18b5652b5">Hire Me</a>
                    </span>
                </div>
                <span className='image1'>
                    <img src="/image-removebg-preview.png" alt="" />
                </span>
            </div>
            <div id='about' className="about">
                <span className='heading'>
                    <h1>About Me</h1>
                    <hr className='hr2'/>
                    <hr className='hr1'/>
                </span>
                <div className="about-myself">
                    <div className="paragraph">
                        <p> I am in second year student at NIT Mizoram, where I am pursuing a 
                            Bachelor's Program in Computer Science and Engineering. 
                            I'll be graduating in 2026. 
                            My long-term goal is to become a Senior Software 
                            engineer with the best knowledge in this field.
                            I would love to share my resume with you for any opportunity.
                            I aim to use my strong skills in solving complex problems with Data 
                            Structures and Algorithms (DSA), showcased through over 100 problem-solving 
                            instances on GeeksforGeeks. I want to apply this expertise to
                            create reliable backend systems using technologies like Node.js, 
                            Express.js,React.js, and SQL. Additionally, Design and implement machine 
                            learning algorithms to optimize predictive models for diverse applications.
                        </p>
                    </div>
                </div>
                <span className='resume'>
                        <a href="https://drive.google.com/file/d/1ZO9Pcv5P64_AdrIQ49qqBb2lMtrcxdbQ/view?usp=sharing">
                        Download Resume <i className="fa-solid fa-file-arrow-down"></i></a>
                </span>
            </div>
            <div className="education-data">
                <div className="education-title">EDUCATION</div>
                <div className="edu-card-all">
                    <div className="edu1">
                    <div className="college-img">
                        <img className="college-imgpic" src="/nitmz.png" alt="college"/>
                    </div>
                    <div className="edu-card">
                        <h1 className="cllg-name">National Institute of Technology, Mizoram</h1>
                        <h2 className="cllg-course">Bachelor of Technology in Computer Science and Engineering</h2>
                        <h2 className="cllg-date">DECEMBER 2022 - MAY 2026 (Expected)</h2>
                        <ul>
                        <li>Scored 9.0 CGPA at the end of 4th sem</li>
                        </ul>
                    </div>
                    </div>
                    <div className="line-break"></div>
                </div>

                <div className="edu-card-all">
                    <div className="edu1">
                    <div className="college-img">
                        <img className="college-imgpic" src="/GSD.png" alt="college"/>
                    </div>
                    <div className="edu-card">
                        <h1 className="cllg-name">+2 G S D High School Ballipur, Samastipur</h1>
                        <h2 className="cllg-course">XII</h2>
                        <h2 className="cllg-date">FEBRUARY 2019 - MARCH 2021</h2>
                        <ul>
                        <li>Scored 79.2% in 12th Board</li>
                        <li>BSEB Patna</li>
                        </ul>
                    </div>
                    </div>
                    <div className="line-break"></div>
                </div>

                <div className="edu-card-all">
                    <div className="edu1">
                    <div className="schl2img">
                        <img className="schl2imgpic" src="/GSD.png" alt="college"/>
                    </div>
                    <div className="edu-card">
                        <h1 className="cllg-name">G S D High School Ballipur, Samastipur</h1>
                        <h2 className="cllg-course">X</h2>
                        <h2 className="cllg-date">FEBRUARY 2018</h2>
                        <ul>
                        <li>Scored 84.6% in 10th Board</li>
                        <li>BSEB Patna</li>
                        </ul>
                    </div>
                    </div>
                    <div className="line-break"></div>
                </div>
            </div>


            <div id='skill' className="skill-sec" >
                <span className='heading'>
                    <h2>Skills</h2>
                    <hr className='hr2'/>
                    <hr className='hr1'/>
                </span>
                <div className="skills">
                    <div className="tech-skill_1">
                        <div className="skill-bar">
                            <div className="info"> <i className='bx bxl-html5' style={{color: 'green'}}></i>
                                <p>HTML</p> 
                            </div>
                            <div className="bar">
                                <span className="html"></span>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div className="info"> <i className='bx bxl-css3' style={{color: 'yellow'}}></i>
                                <p>CSS</p> 
                            </div>
                            <div className="bar">
                                <span className="css"></span>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div className="info"> <i className='bx bxl-javascript'style={{color: '#e5a154'}}></i>
                                <p>JavaScript</p>
                            </div>
                            <div className="bar">
                                <span className="javascript"></span>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div className="info"> <i className='bx bxl-c-plus-plus' style={{color: 'gray'}}></i>
                                <p>C++</p> 
                            </div>
                            <div className="bar">
                                <span className="cpp"></span>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div className="info"> <i className='bx bxl-python' style={{color: '#f230ad'}}></i>
                                <p>Python</p> 
                            </div>
                            <div className="bar">
                                <span className="python"></span>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div className="info"> <i className='bx bxl-java' style={{color: 'red'}}></i>
                                <p>Java</p> 
                            </div>
                            <div className="bar">
                                <span className="java"></span>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div className="info"> <i className='bx bxl-react' style={{color: 'blue'}}></i>
                                <p>ReactJS</p> 
                            </div>
                            <div className="bar">
                                <span className="react"></span>
                            </div>
                        </div>
                    </div>
                    <div className="tech-skill_2">
                        <div className="skill-bar">
                            <div className="info"> <i className='bx bxl-nodejs' style={{color: '#19ff19'}}></i>
                                <p>NodeJS</p> 
                            </div>
                            <div className="bar">
                                <span className="node"></span>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div className="info"> <i className='bx bxl-git' style={{color: '#1138b0'}}></i>
                                <p>Git</p> 
                            </div>
                            <div className="bar">
                                <span className="git"></span>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div className="info"> <i className='bx bx-code icon-generic'style={{color: 'gray'}}></i>
                                <p>LaTeX</p>
                            </div>
                            <div className="bar">
                                <span className="latex"></span>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div className="info"> <i className='bx bxl-docker' style={{ color: '#00979c' }}></i>
                                <p>Docker</p> 
                            </div>
                            <div className="bar">
                                <span className="docker"></span>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div className="info"> <i className='bx bx-server icon-expressjs' style={{color: '#2ac987'}}></i>
                                <p>ExpressJS</p> 
                            </div>
                            <div className="bar">
                                <span className="express"></span>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div className="info"> <i className='bx bxl-bootstrap' style={{color: 'blue'}}></i>
                                <p>Bootstrap</p> 
                            </div>
                            <div className="bar">
                                <span className="bootstrap"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='project' className="project-sec">
                <span className="projects">
                    <h1>Projects</h1>
                    <hr className='hr2'/>
                    <hr className='hr1'/>
                </span>
                <div className="all-project">
                    <div className="project">
                        <span className="icon">
                            <i className="fas fa-robot"></i>
                        </span>
                        <span className="head-line">
                            <h2>Gold Price Prediction <a href='https://raviranjankumar-portfolio.netlify.app/' target="_blank" className="fa-solid fa-arrow-up-right-from-square"></a></h2>
                        </span>
                        <span className="details">
                            <p>
                            A gold price prediction machine learning project involves building a model 
                            that can forecast future gold prices based on historical data and various 
                            influencing factors.
                            Gold price prediction involves forecasting future gold prices based on 
                            historical data and various economic indicators. One effective method for 
                            this is using machine learning algorithms, such as Random Forest.we use Random Forest for 
                            gold price prediction Here's a high-level outline of gold price prediction is 
                            data collection, data processing, model selection, and
                            Model Training and Evaluation.
                            </p>
                        </span>
                    </div>
                    <div className="project">
                        <span className="icon">
                            <i className="fas fa-paint-brush"></i>
                        </span>
                        <span className="head-line">
                            <h2>Credit Card Prediction<a href='https://github.com/kumarranjan78084/Gold_price_prediction' target="_blank" className="fa-solid fa-arrow-up-right-from-square"></a></h2>
                        </span>
                        <span className="details">
                            <p>
                            Credit card default prediction is an essential task in the financial industry, 
                            aiming to anticipate the likelihood that a customer will fail to make their 
                            required credit card payments. This predictive modeling is crucial for banks 
                            and financial institutions to manage risk, improve lending decisions, and 
                            reduce potential losses. By leveraging historical data and advanced machine 
                            learning algorithms, institutions can build models that assess creditworthiness 
                            and identify high-risk customers.
                            </p>
                        </span>
                    </div>
                    <div className="project">
                        <span className="icon">
                            <i className="fas fa-desktop"></i>
                        </span>
                        <span className="head-line">
                            <h2>Web Development<a href='https://raviranjankumar-portfolio.netlify.app/' target="_blank" className="fa-solid fa-arrow-up-right-from-square"></a></h2>
                        </span>
                        <span className="details">
                            <p>
                            Creating a personal portfolio using React.js and CSS is a great 
                            way to showcase your skills, projects, and experience in a modern, 
                            dynamic way. React.js allows for a component-based architecture that 
                            can help manage your portfolio's various sections efficiently, while 
                            CSS ensures that the site is visually appealing and responsive across 
                            different devices. our CSS uses flexible layouts and media queries to 
                            adapt to different screen sizes. For example, the navigation menu might 
                            switch to a column layout on smaller screens.
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
