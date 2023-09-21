
import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import {Education} from '../Personal/About'
import { ConcordiaDetails, SpringBootCertification, 
    MumbaiDetails, DockerCertification, JavaScriptCertification } from './details';
import ReactGA from 'react-ga'

const EducationPage = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <div style={{backgroundColor: 'white', paddingBottom: '5rem'}}>
            <Container style={{marginTop: '2rem'}}>
                <h3 style={{marginTop: '2rem'}}>Education </h3>
                <hr/>
                <Row >
                    
                    <Col sm={12} md={11} lg={6}  style={{marginTop: '1rem'}}>
                        <Education 
                            image={ConcordiaDetails.image}
                            qualification={ConcordiaDetails.qualification} 
                            instition={ConcordiaDetails.instition} 
                            address={ConcordiaDetails.address}
                            modules={true}
                            courses={ConcordiaDetails.course}
                            key={ConcordiaDetails.id}
                        />
                    </Col>
                
                    <Col sm={12} md={11} lg={6} style={{marginTop: '1rem'}} >
                        <Education 
                            
                            image={MumbaiDetails.image}
                            qualification={MumbaiDetails.qualification} 
                            instition={MumbaiDetails.instition} 
                            address={MumbaiDetails.address}
                            modules={true}
                            // visible={true}
                            // bnttitle={"Degree Certificate"}
                            credLink={"https://credentialsareenv.s3.ca-central-1.amazonaws.com/Degreecertificate.pdf"}
                            courses={MumbaiDetails.course}
                            key={MumbaiDetails.id}
                            
                        />
                    </Col>
                </Row>
                <h3 style={{marginTop: '2rem'}}> Certifications </h3>
                <hr/>
                <Row style={{minHeight: '20rem', backgroundColor: 'whitesmoke', padding: '1rem'}}>

                <Col sm={12} md={12} lg={4} style={{marginTop: '1rem'}}>
                    <Education 
                        image={SpringBootCertification.image}
                        qualification={SpringBootCertification.qualification} 
                        instition={SpringBootCertification.instition} 
                        visible={true}
                        bnttitle={'View Credentials'}
                        credLink={SpringBootCertification.credLink}
                        issued={SpringBootCertification.issued}
                        certificateID={SpringBootCertification.certificateID}
                    />
                </Col>
                    
                <Col sm={12} md={12} lg={4} style={{marginTop: '1rem'}}>
                    <Education 
                        image={DockerCertification.image}
                        qualification={DockerCertification.qualification} 
                        instition={DockerCertification.instition} 
                        visible={true}
                        bnttitle={'View Credentials'}
                        credLink={DockerCertification.credLink}
                        issued={DockerCertification.issued}
                        certificateID={DockerCertification.certificateID}
                    />
                </Col>
            
                <Col sm={12} md={12} lg={4} style={{marginTop: '1rem'}}>
                    <Education 
                        image={JavaScriptCertification.image}
                        qualification={JavaScriptCertification.qualification} 
                        instition={JavaScriptCertification.instition} 
                        visible={true}
                        bnttitle={'View Credentials'}
                        credLink={JavaScriptCertification.credLink}
                        issued={JavaScriptCertification.issued}
                        certificateID={JavaScriptCertification.certificateID}
                    />
                </Col>
                
                </Row>
            </Container>

        </div>
    )
}

export default EducationPage;
