import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../Styles/about.scss'
import '../../Styles/base.scss'
import { Button, Card, Image, ListGroup } from "react-bootstrap";
import {ConcordiaDetails,  MumbaiDetails} from "./details"


const Education = (props) => {
    return (    
        <Card style={{display: 'flex', flexType: 'wrap', alignItems: 'stretch', 
        justifyContent: 'space-around', minHeight: props.visible === true ? '26rem': 'auto'}}>
                <Image className="customThumbnail" src={props.image}></Image>
                <Card.Body>
                        
                        <span>
                            <div>
                                <b> Qualification: {props.qualification}</b> 
                            </div>

                            <div>
                                <b> Institution: </b> {props.instition}
                            </div>

                            { props.issued != null && 
                                <div>
                                   <b>Issued: </b> {props.issued}
                                </div>
                            }

                            {
                                props.certificateID != null && 
                                <div>
                                    <b>Credential ID:</b> {props.certificateID}
                                </div>
                            }

                            
                            {props.address != null && 
                                <div>
                                    <b> Address: </b> {props.address}
                                </div>
                            }
                            
                            {props.modules === true &&
                                <div>
                                <Card.Header style={{marginTop: '1rem'}}>
                                    <span>
                                    <b>Relevant Modules </b>
                                    </span>
                                    
                                </Card.Header>
                                    
                                    <ListGroup variant="flush">
                                        { props.courses != null && props.courses.map(function(course) {
                                            return (
                                                <ListGroup.Item key={course.id}> • {course} </ListGroup.Item>
                                            ) 
                                        })}
                                    </ListGroup>
                                </div>
                            }       
                        </span>

                </Card.Body>

            {props.visible === true &&
                <Button disabled={false} style={{margin: '0.5rem'}} href={props.credLink}> {props.bnttitle} </Button>
            }
        </Card>
    )
}


const About = () => {
    return(
        <div >
            <Container  style={{marginTop: '2rem'}}> 
                <Row >
                    <Col  sm={12} md={12} lg={5} style={{paddingTop: '3rem'}}>
                        <center>
                        <h2> Education Background </h2>
                        <hr className="customline"></hr>

                        <Container>
                            <Education 
                                image={ConcordiaDetails.image}
                                qualification={ConcordiaDetails.qualification} 
                                instition={ConcordiaDetails.instition} 
                                address={ConcordiaDetails.address}  
                            />
                        </Container>
                        <div style={{height: '55px'}}></div>

                        <Container>
                            <Education style={{marginTop: '2px'}}
                                image={MumbaiDetails.image}
                                qualification={MumbaiDetails.qualification} 
                                instition={MumbaiDetails.instition} 
                                address={MumbaiDetails.address}  
                            />
                        </Container>
                        
                    </center>
                    </Col>

                    <Col sm={12} md={12} lg={7}>
                        <div className='aboutSection' style={{padding: 0, margin: '1rem'}}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <h2> About Me </h2>
                            </div>
                            <hr />
                            <div>
                            
                                <p>
                                I am Passionate and enthusiastic Software Development Engineer creating impactful software and web applications using Agile methodologies across academic and professional environments. Currently, pursuing a Master's degree in Applied Computer Science at Concordia University, consistently engage in diverse academic projects covering Web Technologies, Data Structures and Algorithms, Distributed Systems, Problem Solving, and Applied Artificial Intelligence.
                                </p>
                                <p>
                                With over two years of professional experience as a Software Engineer, I've significantly contributed to the development of robust and scalable applications. Collaborating seamlessly with cross-functional teams, I drive the implementation of features, functional enhancements, and issue resolutions, building strong bridges between business and technology stakeholders. Proficient in creating RESTful APIs, ETL process, database integration, migration, and ensuring application performance. Moreover, I consistently deliver high-quality, dependable code within tight project timelines utilizing an agile methodologies. Committed to provide impact and quality through my work on timely manner. I believe in adapting to the right tools and technology for each project and being open to different options.
                                </p>
                                <p>
                                Feel free to reach out via email or the provided contact form.
                                </p>
                            </div>
                            
                        </div>
                    </Col>
                </Row> 
        </Container>
        </div>
        
    )
}

export default About
export {Education}