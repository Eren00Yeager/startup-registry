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



const sectors=['All'].concat([...new Set(comp.map(item => item['Sector']))].sort())

const stages=['All'].concat([...new Set(comp.map(item => item['Stage']))])


const Homebottom=()=>{

    const [sector,setSector]=useState('');
    const [stage,setStage]=useState('');
    const [companies,setCompanies]=useState(comp)

    useEffect(()=>{
        filterComp(comp)
    },[stage,sector])

    const filterComp=(array)=>{
        array=array.filter(item => {
          return ((stage? item['Stage']==stage : true) && (sector? item['Sector']==sector : true))
        });
        setCompanies(array)
        var unchecked=document.getElementsByTagName('button')
        console.log(unchecked)
      }


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
                                    <button className={styles.sidebarrows} value={sector=='All'? '' : sector} onClick={(e)=>{
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
                

                <Col className={styles.rightcontainer}>
                    <div>
                        <Row  className={styles.headings}>
                            <center>Startups by Stage</center>
                        </Row>
                        <Row>
                            {
                                stages.map((stage,key)=>{
                                    return(
                                        <Col key={key}>
                                            <button className={styles.rightbarcols} value={stage=='All'? '' : stage} onClick={(e)=>{
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
                            <div>&emsp;Companies  &emsp;<span className={styles.demo}>{sector==''?'All':sector}</span>  &emsp;<span className={styles.demo}>{stage==''?'All':stage}</span></div>
                        </Row>
                        <Row>
                            <AllCards comp={companies}/>
                        </Row>
                    </div>
                </Col>
            </Row>     
        </Container>   
        </div>
        
    );
}

const Homebottommobile=()=>{

    const [sector,setSector]=useState('');
    const [stage,setStage]=useState('');
    const [companies,setCompanies]=useState(comp)

    useEffect(()=>{
        filterComp(comp)
    },[stage,sector])

    const filterComp=(array)=>{
        array=array.filter(item => {
          return ((stage? item['Stage']==stage : true) && (sector? item['Sector']==sector : true))
        });
        setCompanies(array)
      }

    return(
        <div>
            <Container>
                <Row style={{'paddingBottom':'2vh','paddingTop':'2vh'}}>
                    <center>
                        <Form.Select className={styles2.form} size='lg' onChange={(e)=>setSector(e.target.value)}>
                            {
                                sectors.map((sector,key)=>{
                                    return(
                                        <option value={sector=='All'? '' : sector} key={key} >{sector=='All'?'All Sectors':sector}</option>
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
                                    <button className={styles2.rightbarcols} value={stage=='All'? '' : stage} onClick={(e)=>{
                                        setStage(e.target.value)
                                        }}>
                                        {stage}
                                    </button>
                                </Col>   
                            );
                            
                        })
                    }
                </Row>
                <Row className={styles2.headings}>
                <div>&emsp;Companies  &emsp;<span className={styles.demo}>{sector==''?'All':sector}</span>  &emsp;<span className={styles.demo}>{stage==''?'All':stage}</span></div>
                </Row>
                <Row>
                    <center><AllCards comp={companies}/></center>
                </Row>
            </Container>
        </div>
    );
}

module.exports={
    Homebottom,
    Homebottommobile
}