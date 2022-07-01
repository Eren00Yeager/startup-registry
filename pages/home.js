import {Homebottom,Homebottommobile} from "../components/homebottom";
import AllCards from "../components/AllCards";
import styles from '../styles/Home.module.css';
import SearchBar from "../components/SearchBar";
import comp from "../data/all_companies.json";
import Hometop from "../components/hometop";
import { Container,Row } from "react-bootstrap";

export async function getStaticProps() {
    return {
      props: { comp,
      },
    };
  }

const home=()=>{
    return(
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
            {/* <Row style={{'padding':'3vh 0 3vh 0'}}>
                <div className={styles.explore}><center>Explore</center></div> 
            </Row>
            <Row style={{'padding':'3vh 0 3vh 0'}}>
                <div className="d-none d-md-block">
                    <Homebottom comp={comp}/>
                </div>
                <div className="d-xs-block d-md-none">
                    <Homebottommobile comp={comp}/>
                </div>    
            </Row> */}
        </div>
    );
}

export default home;