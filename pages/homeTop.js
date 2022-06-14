import { Row, Container } from "react-bootstrap";
import styles from "../styles/page.module.css";
import App from "../components/App.js";





function Header(){
    return (
        <Container  className={styles.wholepage}>
            <br />
            <Row>
                <span className={styles.heading} >insid<span style= {{color: "#432cce"}}>r</span></span> <br></br>
            </Row>
            <br />
            <br />

            <div className={styles.text}>search startups by name/sector</div>

            <div> Include search bar here</div>

            <div style= {{padding: "0.5em 8em 0 8em"}}>

            </div>

            <App />


        </Container>
    )
}

export default Header;