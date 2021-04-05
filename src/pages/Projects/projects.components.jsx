import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardActions, CardTitle, Button, CardMenu, IconButton, CardText, CardMedia } from 'react-mdl'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Calc from '../../assets/img/projects/calc.webp';
import Schedule from '../../assets/img/projects/Process_scheduler.webp'
import MST from '../../assets/img/projects/MST.png'
import OBST from '../../assets/img/projects/OBST.png'
import KNN from '../../assets/img/projects/sentiment.png'
import Risk from '../../assets/img/projects/risk.jpg'
import Cluster from '../../assets/img/projects/clustering.png'
import Recommender from '../../assets/img/projects/recommender_system.jpg'
import Kinship from '../../assets/img/projects/kinship.jpg'
import Pos from '../../assets/img/projects/Pos.jpg'
import Hsd from '../../assets/img/projects/hsd.jpg'



class Projects extends Component
{   
    constructor(props)
    {
        super(props);
        this.state={activeTab :0};
    }
    toggleCategories()
    {
        if(this.state.activeTab === 0)
        {
            return (
             <div className="projects-grid">
                 <Container>
                    <Row>
                        <Col md={4}>
                            <Card shadow={5} style={{minWidth:'450', margin:'auto', height:'450px'}}>
                            <CardTitle style={{color:"black", height:'70px'}}> 
                                CPU Process Scheduler
                            </CardTitle>
                            <img src={Schedule} width="327px" height="250px" ></img>
                            <CardText>
                                Implementation of a Process Scheduler for an operating system using a LinkedList in C. 
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://github.com/kpratyush95/Data_Structures/tree/master/Linked_lists" target="_blank"> Github</a>
                                </Button>
                            </CardActions>
                            </Card>
                        </Col>
                        <Col md={4}>   
                            <Card shadow={5} style={{minWidth:'450', margin:'auto', height:'450px'}}>
                                <CardTitle style={{color:"black", height:'70px'}}>RNP Calculator</CardTitle>
                                    <img src={Calc} width="327px" height="250px" ></img>
                                <CardText>
                                    Implementation of a Postfix-notation(RPN) Calculator using Stack and Hashtable in C. 
                                </CardText>
                                <CardActions border>
                                    <Button colored>
                                        <a href="https://github.com/kpratyush95/Data_Structures/tree/master/Hash_Table" target="_blank">
                                        Github
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card> 
                        </Col>
                        <Col md={4}>
                            <Card shadow={5} style={{minWidth:'450', margin:'auto', height:'450px'}}>
                            <CardTitle style={{color:"black", height:'70px', background:'center/cover',}}>Graph Library in C</CardTitle>
                            <img src={MST} width="327px" height="250px" ></img>
                            <CardText>
                                Implementation of custom graph library that contatins various graph functions in C. 
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://github.com/kpratyush95/Data_Structures/tree/master/Graph%20with%20adjacency_matrix" target="_blank">
                                    Github
                                    </a>
                                 </Button>
                            </CardActions>
                            </Card>
                        </Col>
                    </Row> 
                 </Container>
             </div>   
            )
        }
        else if(this.state.activeTab === 1)
        {
            return (
                <div className="projects-grid">
                    <Container>
                      <Row>
                          <Col md={4}>

                          </Col>
                      <Col md={4}>
                            <Card shadow={5} style={{minWidth:'450', margin:'auto', height:'450px'}}>
                                <CardTitle style={{color:"black",  height:'70px'}}>Self Organising Trees</CardTitle>
                                <img src={OBST} width="327px" height="250px" ></img>
                                <CardText>
                                     Implementation of self organising tress and then comparing their performance to the optimal BST in Java. 
                                </CardText>
                                <CardActions border>
                                    <Button colored>
                                        <a href="https://github.com/kpratyush95/Algorithms/tree/master/BST" target="_blank"> Github</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col md={4}>
                        </Col>
                      </Row>  
                    </Container>
                </div>
            )
        }
        else if(this.state.activeTab === 2)
        {
            return (
                <div className="projects-grid">
                    <Container>
                        <Row>
                            <Col md={4}>
                                <Card shadow={5} style={{minWidth:'450', margin:'auto', height:'450px'}}>
                                    <CardTitle style={{color:"black",  height:'90px'}}>Amazon Reviews - KNN classification</CardTitle>
                                        <img src={KNN} width="327px" height="230px" ></img>
                                        <CardText>
                                            Implementation of K-Nearest Neighbours from scratch in Python and then using the algorithm to predict reviews if they would be positive or negative. 
                                        </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/kpratyush95/Data-Mining-CS-584/tree/master/Assignment/Amazon%20Reviews%20-%20KNN%20classification" target="_blank"> Github</a>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card shadow={5} style={{minWidth:'450', margin:'auto', height:'450px'}}>
                                    <CardTitle style={{color:"black",  height:'70px'}}>Credit Risk Prediction</CardTitle>
                                        <img src={Risk} width="327px" height="250px" ></img>
                                    <CardText>
                                        Predicting the risk of lending a loan to a potential customer using Decision Trees and Random Forest on an imbalanced Dataset using Python
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/kpratyush95/Data-Mining-CS-584/tree/master/Assignment/Credit%20Risk%20prediction" target="_blank"> Github</a>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card shadow={5} style={{minWidth:'450', margin:'auto', height:'450px'}}>
                                    <CardTitle style={{color:"black",  height:'70px'}}>Image Clustering</CardTitle>
                                    <img src={Cluster} width="327px" height="250px" ></img>
                                    <CardText>
                                        Implemented K-Means Clustering from scratch to predict the similarities of images and then classify them into different clusters using Python.
                                    </CardText>
                                <CardActions border>
                                    <Button colored>
                                        <a href="https://github.com/kpratyush95/Data-Mining-CS-584/tree/master/Assignment/Image%20Clustering" target="_blank"> Github</a>
                                    </Button>
                                </CardActions>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <br/>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Card shadow={5} style={{minWidth:'450', margin:'auto', height:'450px'}}>
                                    <CardTitle style={{color:"black", height:'70px'}}>Recommender Systems</CardTitle>
                                        <img src={Recommender} width="327px" height="250px" ></img>
                                        <CardText>
                                            Built a movie Recommender System based on the given rating information using Python.
                                        </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/kpratyush95/Data-Mining-CS-584/tree/master/Assignment/Recommender%20Systems" target="_blank"> Github</a>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card shadow={5} style={{minWidth:'450', margin:'auto', height:'450px'}}>
                                    <CardTitle style={{color:"black",  height:'70px'}}>Kinship Classifier</CardTitle>
                                        <img src={Kinship} width="327px" height="250px" ></img>
                                    <CardText>
                                        Implemented Kinship classifier which predict if two people are related by blood just by looking at their facial features using RESNET-50 and VGGFaceNet in Python.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/kpratyush95/Data-Mining-CS-584/tree/master/Project" target="_blank"> Github</a>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md={4}>

                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }

        else if(this.state.activeTab === 3)
        {
            return (
                <div className="projects-grid">
                    <Container>
                        <Row>
                            <Col md={4}>
                                <Card shadow={5} style={{minWidth:'450', margin:'auto', height:'450px'}}>
                                    <CardTitle style={{color:"black",  height:'70px'}}>Parts of Speech Tagger</CardTitle>
                                        <img src={Pos} width="327px" height="250px" ></img>
                                        <CardText>
                                            Built a Parts of Speech Tagging using LSTM and Bi-LSTM from scratch, which identifies the parts of speech on languages that have low resources in Python.
                                        </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/kpratyush95/NLP" target="_blank"> Github</a>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card shadow={5} style={{minWidth:'450', margin:'auto', height:'450px'}}>
                                    <CardTitle style={{color:"black",  height:'90px'}}>Multi Lingual Hate Speech Detector</CardTitle>
                                        <img src={Hsd} width="327px" height="250px" ></img>
                                        <CardText>
                                            Collected real-time tweets from Twitter, and used different models to detect hate speech from those tweets using Python.
                                        </CardText>
                                    <CardActions border>
                                    <Button colored>
                                        <a href="https://github.com/samsumankumar/Multilingual-HateSpeech-Detection" target="_blank"> Github</a>
                                    </Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md={4}></Col>
                        </Row>
                            
                    </Container>
                </div>
            )
        }
    }

    render()
    {
        return(
           
            <div className="projects" id="projects">
                 <h1 className="pt-3 text-center font-details pb-3">Projects</h1>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                    <Tab><strong>Data Structures in C</strong></Tab>
                    <Tab><strong>Algorithms</strong></Tab>
                    <Tab><strong>Data Mining</strong></Tab>
                    <Tab><strong>NLP</strong></Tab> 
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}   
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }

}  


export default Projects
