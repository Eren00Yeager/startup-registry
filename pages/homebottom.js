import {Container,Col,Row, Form} from 'react-bootstrap'
import styles from '../styles/homebottom.module.css'

const sectors=['AgriTech','B2B','Consumer','Creator Community','Cyber Security','D2C','DeepTech','Dev Tools',
               'E-Commerce','EdTech','FinTech','Gaming,Media & Ent','HealthTech','SaaS']

const stages=['All','Early','Growth','Unicorn','Bootstrapped']

const homebottom=()=>{
    return(
        <div>
        <Container className={styles.container}>
            <Row>
            <Col md={4} classname={styles.leftcontainer}>
                <div className={styles.leftcontainer}>
                <Row className={styles.headings}>
                    <center>Startups by sector</center>
                </Row>
                <Container>
                    {
                        sectors.map((sector)=>{
                            return(
                            <Row>
                                <Container className={styles.sidebarrows}>
                                    &emsp;{sector}
                                </Container>
                            </Row>    
                            );
                            
                        })
                    }
                </Container>
                </div>
            </Col>

            <Col >
                <div className={styles.rightcontainer}>
                    <Row  className={styles.headings}>
                        <center>Startups by Stage</center>
                    </Row>
                    <Row>
                        {
                            stages.map((stage)=>{
                                return(
                                    <Col>
                                        <Container className={styles.rightbarcols}>
                                            <center>{stage}</center>
                                        </Container>
                                    </Col>   
                                );
                               
                            })
                        }
                    </Row>
                    <Row className={styles.headings}>
                        <span>Companies</span>
                    </Row>
                </div>
            </Col>

            </Row>
            
        </Container>   
        </div>
        
    );
}

export default homebottom;