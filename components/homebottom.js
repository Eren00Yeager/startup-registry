import {Container,Col,Row, Form} from 'react-bootstrap'
import styles from '../styles/homebottom.module.css'

const sectors=['AgriTech','B2B','Consumer','Creator Community','Cyber Security','D2C','DeepTech','Dev Tools',
               'E-Commerce','EdTech','FinTech','Gaming,Media & Ent','HealthTech','SaaS']

const stages=['All','Early','Growth','Unicorn','Bootstrapped']

const Homebottom=()=>{
    return(
        <div style={{'background-color':'gray'}}>
        <Container className={styles.container}>
            <Row>
            <Col md={4} className={styles.leftcontainer}>
                <div>
                <Row className={styles.headings}>
                    <center>Startups by sector</center>
                </Row>
                <Container>
                    {
                        sectors.map((sector)=>{
                            return(
                            <Row>
                                <center>
                                <button className={styles.sidebarrows}>
                                    &emsp;{sector}
                                </button>    
                                </center>
                                
                            </Row>    
                            );
                            
                        })
                    }
                </Container>
                </div>
            </Col>

            <Col  className={styles.rightcontainer}>
                <div>
                    <Row  className={styles.headings}>
                        <center>Startups by Stage</center>
                    </Row>
                    <Row>
                        {
                            stages.map((stage)=>{
                                return(
                                    <Col>
                                        <button className={styles.rightbarcols}>
                                            <center>{stage}</center>
                                        </button>
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

export default Homebottom;