import {Homebottom,Homebottommobile} from "../components/homebottom";
import AllCards from "../components/AllCards";
import styles from '../styles/Home.module.css';
import SearchBar from "../components/SearchBar";
import comp from "../data/all_companies.json";

export async function getStaticProps() {
    return {
      props: { comp,
      },
    };
  }

const home=()=>{
    return(
        <div style={{'backgroundColor':'#F5F5F5'}}>
            <SearchBar comp={comp}/>
            <div className={styles.explore}><center>Explore</center></div>
            <div className="d-none d-md-block">
                <Homebottom comp={comp}/>
            </div>
            <div className="d-xs-block d-md-none">
                <Homebottommobile comp={comp}/>
            </div>
            
        </div>
    );
}

export default home;