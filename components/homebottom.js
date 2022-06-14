import {Container,Col,Row, Form} from 'react-bootstrap'
import styles from '../styles/homebottom.module.css'
import styles2 from '../styles/homebottommobile.module.css'
import AllCards from './AllCards';
import comp from "../data/all_companies.json";
import { useEffect, useState } from 'react';

export async function getStaticProps() {
    return {
      props: { comp,
      },
    };
  }



const sectors=['AgriTech','B2B','Consumer','Creator Community','Cyber Security','D2C','DeepTech','Dev Tools',
               'E-Commerce','EdTech','FinTech','Gaming,Media & Ent','HealthTech','SaaS']

const stages=['All','Early','Growth','Unicorn','Bootstrapped']


const Homebottom=()=>{

    const [sector,setSector]=useState('');
    const [stage,setStage]=useState('');


    return(
        <div>
        <Container className={styles.container}>
            <Row>
            <Col md={4} className={styles.leftcontainer}>
                <div>
                <Row className={styles.headings}>
                    <center>Startups by sector</center>
                </Row>
                <Container>
                    {
                        sectors.map((sector,key)=>{
                            return(
                            <Row key={key}>
                                <center>
                                <button className={styles.sidebarrows} value={sector} onClick={(e)=>{
                                            setSector(e.target.value)
                                            }}>
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
                            stages.map((stage,key)=>{
                                return(
                                    <Col key={key}>
                                        <button className={styles.rightbarcols} value={stage} onClick={(e)=>{
                                            setStage(e.target.value)
                                            }}>
                                            {stage}
                                        </button>
                                    </Col>   
                                );
                               
                            })
                        }
                    </Row>
                    <Row className={styles.headings}>
                        <span>Companies</span>
                    </Row>
                    <Row>
                        <AllCards comp={comp}/>
                    </Row>
                </div>
            </Col>

            </Row>
            
        </Container>   
        </div>
        
    );
}

const Homebottommobile=()=>{
    return(
        <div>
            <Container>
                <Row style={{'paddingBottom':'2vh','paddingTop':'2vh'}}>
                    <center>
                        <Form.Select className={styles2.form} size='lg'>
                            <option>All Sectors</option>
                            {
                                sectors.map((sector,key)=>{
                                    return(
                                        <option value={key} key={key}>{sector}</option>
                                    );
                                })
                            }
                        </Form.Select>
                    </center>
                </Row>
                <Row style={{'backgroundColor':'white'}}>
                    {
                        stages.map((stage,key)=>{
                            return(
                                <Col key={key}>
                                    <button className={styles2.rightbarcols}>
                                        <center>{stage}</center>
                                    </button>
                                </Col>   
                            );
                            
                        })
                    }
                </Row>
                <Row>
                    <center><AllCards comp={comp}/></center>
                </Row>
            </Container>
        </div>
    );
}

module.exports={
    Homebottom,
    Homebottommobile
}