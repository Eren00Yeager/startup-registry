import {Homebottom,Homebottommobile} from "../components/homebottom";
import styles from '../styles/Home.module.css';
import SearchBar from "../components/SearchBar";
import Hometop from "../components/hometop";
import { Container,Row,Spinner } from "react-bootstrap";
import { useState,useEffect } from "react";
import axios from 'axios';
import Main from "../components/home";
import SingleComp from "../components/singlecomp";

const SpinnerComp=()=>{
    return(
        <span style={{height:'100vh',marginTop:'45vh'}}>
            <center style={{paddingTop:'45vh'}}>
                <Spinner animation="grow" style={{color:'rgba(67, 44, 206, 0.8)',height:'5vh',width:'5vh'}}/>
            </center>
        </span>
    );
}



const Home=()=>{
    const [comp,setComp]=useState('');
    const [Key,setkey]=useState('');
    const [News,setNews]=useState('');
    const [singlecomp,setSinglecomp]=useState('');


    useEffect(() => {
        axios
          .get("/api/datasheets")
          .then((res) => {
            setComp(res.data)
          })
          .catch((err)=>{
            console.log("error in datasheets")
            console.log(err)
          });
          
        axios
          .get("/api/keynumbers")
          .then((e) => {
            setkey(e.data)
          })
          .catch((err)=>{
            console.log("error in keynumbers")
            console.log(err)
          });

        axios
          .get("/api/newstrack")
          .then((e) => {
            setNews(e.data)
          })
          .catch((err)=>{
            console.log("error in newstrack")
            console.log(err)
          });

      }, []);


    
    return(
        <>
        {(!comp || !Key || !News)? <SpinnerComp/>:
        <div style={{'backgroundColor':'#F5F5F5'}}>
            <Row style={{'padding':'3vh 0 3vh 0'}}>
                <center><button className={styles.insidr} onClick={()=>setSinglecomp('')}>insid<span style={{'color':'#432cce'}}>r</span></button></center>
            </Row>
            <Row style={{'padding':'3vh 0 3vh 0'}}>
                <SearchBar comp={comp} setSinglecomp={setSinglecomp}/>
            </Row>
            {
              !singlecomp?
              <Main comp={comp} Key={Key} News={News} setSinglecomp={setSinglecomp}/>
              :
              <SingleComp sp={singlecomp} comp={comp} setSinglecomp={setSinglecomp}/>
            }
            
        </div>
        }
        </>
    );
}

export default Home;