import {Homebottom,Homebottommobile} from "../components/homebottom";
import AllCards from "../components/AllCards";
import styles from '../styles/Home.module.css';
import SearchBar from "../components/SearchBar";
import Hometop from "../components/hometop";
import { Container,Row,Spinner } from "react-bootstrap";
import { useState,useEffect } from "react";
import axios from 'axios';

const SpinnerComp=()=>{
    return(
        <span style={{height:'100vh',marginTop:'45vh'}}>
            <center style={{paddingTop:'45vh'}}>
                <Spinner animation="grow" style={{color:'rgba(67, 44, 206, 0.8)',height:'5vh',width:'5vh'}}/>
            </center>
        </span>
    );
}

const Main=()=>{
    const [comp,setComp]=useState('')
    const [isLoading,setIsLoading]=useState(true)

    useEffect(() => {
        axios
          .get("/api/datasheets")
          .then((res) => {
            console.log(res.data)
            setComp(res.data);
            setIsLoading(false)
          })
          .catch((err)=>{
            console.log("error")
            console.log(err)
          });
      }, []);

    return(
        <>
        {isLoading? <SpinnerComp/>:
        <div style={{'backgroundColor':'#F5F5F5'}}>
            <Row style={{'padding':'3vh 0 3vh 0'}}>
                <center><span className={styles.insidr}>insid<span style={{'color':'#432cce'}}>r</span></span></center>
            </Row>
            <Row style={{'padding':'3vh 0 3vh 0'}}>
                <SearchBar comp={comp}/>
            </Row>
            <Container>
                <Row style={{'padding':'3vh 0 3vh 0'}}>
                    <Hometop/>
                </Row>  
            </Container>
            <Row style={{'padding':'3vh 0 3vh 0'}}>
                <div className={styles.explore}><center>Explore</center></div> 
            </Row>
            <Row style={{'padding':'3vh 0 3vh 0'}}>
                <div className="d-none d-md-block">
                    <Homebottom comp={comp}/>
                </div>
                <div className="d-xs-block d-md-none">
                    <Homebottommobile comp={comp}/>
                </div>    
            </Row>
        </div>
        }
        </>
    );
}

export default Main;