import {Homebottom,Homebottommobile} from "../components/homebottom";
import AllCards from "../components/AllCards";
import styles from '../styles/Home.module.css';

const home=()=>{
    return(
        <div style={{'backgroundColor':'#F5F5F5'}}>
            <div className={styles.explore}><center>Explore</center></div>
            <div className="d-none d-md-block">
                <Homebottom/>
            </div>
            <div className="d-xs-block d-md-none">
                <Homebottommobile/>
            </div>
            
        </div>
    );
}

export default home;