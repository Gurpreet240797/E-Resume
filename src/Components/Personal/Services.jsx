import React, {useEffect} from 'react';
import service from '../../Assets/experience.svg'
import {Row, Col, Container, Table, Image} from 'react-bootstrap'
import ReactGA from 'react-ga'

const Service = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <Container  style={{marginTop: '1rem', padding: '1rem'}}>
            <Row style={{marginBottom: '3rem'}}>


            <Col sm={12} md={12} lg={12} style={{backgroundColor: 'white'}}>
            <h3> Services Information </h3>
            <hr />
            <Container>
                <p style={{textAlign: 'justify'}}>
                    I specialize in <i> FullStack Application development </i>, providing adaptable solutions tailored to 
                    the unique requirements of each project. My expertise encompasses the realm 
                    of Frontend, Backend Development and ETL process using platforms such as <b>React.js, Bootstrap, Node.js and SpringBoot</b>.
                </p>
            </Container>
            
            <Container style={{padding: '2rem'}}>
                <Image fluid src={service} className= "d-block mx-auto img-fluid w-50" />
            </Container>
            
            <p style={{textAlign: 'justify'}}>
                The skills mentioned in the section reflect the skills and experience I accumulated from the previously applied expertise in professional or academic settings. I strongly believe in adapting to the requirements of projects and offering the most appropriate development services accordingly. Therefore, open to learning or adapting to the existing or new technology as per the business logic.   
            </p>
        </Col>
        <Col sm={12} md={12} lg={12} style={{backgroundColor: 'white'}}>
        <h4 style={{paddingTop: '1rem'}}> Skills & Services </h4>
        <hr/>

       <Table variant='light' striped>
    <thead>
        <tr>
            <th>Type</th>
            <th>Specifics</th>
        </tr>
    </thead>

    <tbody>

        <tr>
            <td>Programming Languages</td>
            <td>
                Java, JavaScript, Python, C, C#
            </td>
        </tr>

        <tr>
            <td>Databases</td>
            <td>
                MySQL, Oracle, SQL Server
            </td>
        </tr>

        <tr>
            <td>Web</td>
            <td>
                HTML 5, CSS 3, PHP, Bootstrap, Bulma
            </td>
        </tr>

        <tr>
            <td>Frameworks</td>
            <td>
                ReactJs, Redux, ExtJs, Spring Boot, Node.js
            </td>
        </tr>

        <tr>
            <td>Data</td>
            <td>
                SQL, Data Warehouse/ETL, PLSQL, JSON, Bash
            </td>
        </tr>

        <tr>
            <td>Tools</td>
            <td>
                Git, GitHub, LaTeX, Maven
            </td>
        </tr>

        <tr>
            <td>DevOps</td>
            <td>
                Docker, Jenkins
            </td>
        </tr>

        <tr>
            <td>Testing</td>
            <td>
                Junit, Mockito
            </td>
        </tr>

    </tbody>
</Table>



        </Col>
                
               
            </Row>

           
        </Container>
    )
}

export default Service;