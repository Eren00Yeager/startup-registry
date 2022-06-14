import {Homebottom,Homebottommobile} from "../components/homebottom";
import AllCards from "../components/AllCards";

const home=()=>{
    return(
        <>
            <div className="d-none d-md-block" style={{'backgroundColor':'#F5F5F5'}}>
                <Homebottom/>
            </div>
            <div className="d-xs-block d-md-none" style={{'backgroundColor':'#F5F5F5'}}>
                <Homebottommobile/>
            </div>
            
        </>
    );
}

export default home;