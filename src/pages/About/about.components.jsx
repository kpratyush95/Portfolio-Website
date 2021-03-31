import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import Profile from '../../assets/img/profile/Prat_charging_bull.webp'

import *as AiIcons from "react-icons/ai";



const About = () => {
    return (
        <div id='about'>
            <div className="about">  
                <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
                    <Container>
                            <Row className="pt-2 pb-2 align-items-left">
                                <Col xs={10} md={4}>
                                    <Row>
                                        <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                                    </Row>
                                    {/* Description */}
                                    <Row style={{textAlign: "justify"}}>
                                    <Col>
                                    Hi there! I am <strong>&nbsp;Venkata Pratyush Kodavanti</strong>
                                     <br />I am a Computer Science Master's student from George Mason University, with an experience of 1 and half year as a software developer.
                                     Currently, I am a Graduate Teaching assistant at George Mason University, where I instruct Programming with Java for undergraduate students. 
                                    </Col>    
                                    </Row>
                                    <Row>
                                        <br/>
                                    </Row>
                                    <Row >
                                        <Col md={3}>
                                            <strong>Address</strong>
                                        </Col>
                                        <Col md={9}>
                                            Fairfax, VA
                                        </Col> 
                                    </Row>
                                    <Row>
                                        <Col md={3}>
                                            <strong>Email:</strong>
                                        </Col>
                                        <Col md={9}>
                                            <a href="mailto:vkodavan@gmu.edu">vkodavan@gmu.edu</a>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}>
                                            <strong>
                                                Phone:
                                            </strong>
                                        </Col>
                                        <Col md={9}>
                                            +1(571)201-2835
                                        </Col>
                                    </Row>
                                    <Row>
                                        <br/>
                                        <br/>
                                    </Row>
                                    <Row>
                                        <Col md={3}></Col>
                                        <Col md={3}>
                                        <a href="">
                                            <Button>Resume</Button>
                                        </a>
                                </Col>
                                    </Row>
                        </Col>
                                <Col xs={1} md={1}></Col>
                                <Col xs={10} md={7}>
                                    <Row>
                                        <Col>
                                            <h2>
                                                Education
                                            </h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col md={12}>
                                         <strong>Masters of Science - Computer Science </strong> 
                                    </Col>
                                        <Col md = {8}>
                                            George Mason University
                                            <Row>
                                                <Col>
                                                    GPA: 3.71
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={3}>
                                            2019-2021
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <strong>Bachelor of Technology - Computer Science </strong>
                                        </Col>
                                    </Row>
                                    <Row>    
                                        <Col md={8}>   
                                            GITAM University
                                            <Row>
                                                <Col>
                                                    GPA 3.25
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={3}>
                                            2012-2016
                                        </Col>
                                    </Row> 
                                    <Row>
                                        <Col md={6}>
                                            <h2>Experience</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <strong>Graduate Teaching Assistant</strong>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={8}>
                                            George Mason University, Fairfax, VA
                                        </Col>
                                        <Col md={4}>
                                            Aug 2020-Present
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <strong>
                                                Assistant Systems Engineer- Software Developer
                                            </strong>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={8}>
                                            Tata Consultancy Services, Hyd, India
                                        </Col>
                                        <Col md={4}>
                                            Mar 2017-Jun 2018 
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <h2>Skills</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col md={4}>
                                        <strong>Languages:</strong>  
                                        </Col>
                                        <Col md={8}>
                                        Java, Python,C, JavaScript.
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>

                                               <strong> Databases:</strong>
                                        </Col>
                                        <Col md={8}>
                                                SQL, PL/SQL
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>

                                            <strong>Web Technologies:</strong> 
                                        </Col>
                                        <Col md={8}>
                                            HTML, CSS, Java Spring, Spring Boot, ReactJs
                                        </Col>
                                    </Row>
                                    <Row>
                                       <Col md={4}>
                                       <strong>Cloud & Tools:</strong> 
                                        </Col>
                                        <Col md={8}>
                                            AWS (EC2, S3, Lambda, Sage maker), Docker, Git, Kubernetes.
                                        </Col>

                                    </Row>
                                    <Row>
                                    <Col md={4}>
                                       <strong>Machine Learning tools, and languages:</strong>
                                    </Col>
                                       <Col md={8}>
                                            Python (NumPy, Pandas, Scikit-Learn), Pytorch, TensorFlow.
                                        </Col>
                                    </Row>
                                    <Row>
                            </Row>
                                </Col>
                            </Row>
                    </Container>  
            </div>
            <div className="icon-stand">
                <div className="icon-outer">
                    <div className="icon"> <a href="https://github.com/kpratyush95" target="_blank">
                                    <AiIcons.AiFillGithub style={{  height: "35px", width: "35px", color:"black"}}></AiIcons.AiFillGithub>
                                    </a></div>
                </div>
                <div className="icon-outer">
                    <div className="icon">
                    <a href="https://www.linkedin.com/in/pratyushkodavanti/" target="_blank">
                                            <AiIcons.AiFillLinkedin style={{  height: "35px", width: "35px", color:"blue"}}></AiIcons.AiFillLinkedin>
                                    </a>
                                    <br/>
                <br/>
                    </div>
               
                </div>
            </div>
        </div>
    )
}

export default About
