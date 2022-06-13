import { Container,Form,Row ,Col} from "react-bootstrap";
import styles from '../styles/homebottommobile.module.css'

const sectors=['AgriTech','B2B','Consumer','Creator Community','Cyber Security','D2C','DeepTech','Dev Tools',
               'E-Commerce','EdTech','FinTech','Gaming,Media & Ent','HealthTech','SaaS']

const stages=['All','Early','Growth','Unicorn','Bootstrapped']

const Homebottommobile=()=>{
    return(
        <div style={{'backgroundColor':'gray'}}>
            <Container>
                <Row style={{'paddingBottom':'2vh','paddingTop':'2vh'}}>
                    <center>
                        <Form.Select className={styles.form} size='lg'>
                            <option>All Sectors</option>
                            {
                                sectors.map((sector,key)=>{
                                    return(
                                        <option value={key}>{sector}</option>
                                    );
                                })
                            }
                        </Form.Select>
                    </center>
                </Row>
                <Row style={{'backgroundColor':'white'}}>
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
            </Container>
        </div>
    );
}

export default Homebottommobile;