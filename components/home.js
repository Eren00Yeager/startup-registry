import {Homebottom,Homebottommobile} from "./homebottom";
import styles from '../styles/Home.module.css';
import Hometop from "./hometop";
import { Container,Row,Spinner } from "react-bootstrap";
import { useState,useEffect } from "react";
import axios from 'axios';


const Main=({comp,Key,News,setSinglecomp})=>{

    
    return(
        <>
            <Container>
                <Row style={{'padding':'3vh 0 3vh 0'}}>
                    <Hometop keynum={Key} News= {News}/>
                </Row>  
            </Container>
            <br/>
            <Row >
                <div className={styles.explore}><center>Explore</center></div> 
            </Row>
            <Row style={{'padding':'3vh 0 3vh 0'}}>
                <div className="d-none d-md-block">
                    <Homebottom comp={comp} setSinglecomp={setSinglecomp}/>
                </div>
                <div className="d-xs-block d-md-none">
                    <Homebottommobile comp={comp} setSinglecomp={setSinglecomp}/>
                </div>    
            </Row>
        </>
    );
}

export default Main;