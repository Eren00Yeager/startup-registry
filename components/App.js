import React, { useState } from "react";
import styles from "../styles/page.module.css";
import Image from "next/image";
import g1 from "../images/g1.svg";
import g2 from "../images/g2.svg";
import g3 from "../images/g3.svg";
import p1 from "../images/p1.svg";
import p2 from "../images/p2.svg";
import p3 from "../images/p3.svg";

function App() {
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    };

    return (

        <div className={styles.Border}>
            <div className={styles.DivFlex}>
                <div className={styles.g}>
                    <div>
                        <div className={styles.d1}>Total Unicorns</div>
                        <div style={{ fontSize: "49px" }} className={styles.check} >100<span style={{ fontSize: "20px" }}>+1</span></div>
                        <Image src={g1} />
                    </div>
                    <span className={isActive ? styles.hide : ""}>
                        <div>
                            <div className={styles.d1}>Total Unicorns</div>
                            <div style={{ fontSize: "49px" }} className={styles.check} >100<span style={{ fontSize: "20px" }}>+1</span></div>
                            <Image src={g2} />
                        </div>
                        <div>
                            <div className={styles.d1}>Total Unicorns</div>
                            <div style={{ fontSize: "49px" }} className={styles.check} >100<span style={{ fontSize: "20px" }}>+1</span></div>
                            <Image src={g3} />
                        </div>
                        <div>
                            <div className={styles.d1}>Total Unicorns</div>
                            <div style={{ fontSize: "49px" }} className={styles.check} >100<span style={{ fontSize: "20px" }}>+1</span></div>
                            <Image src={g1} />
                        </div>
                    </span>
                </div>
                <div className={styles.allBoxes}>
                    <div className={styles.twoBoxes}>
                        <div className={isActive ? styles.halfb1 : styles.b1}>
                            <div className={styles.boxheading}>Funding Tracker</div>
                            <div className={styles.boxcontent}>
                                <div className={styles.svgs}><Image src={p1} /> <div style={{fontWeight: "500"}}>Pepper Content raised $14.3 M</div></div>
                                <div className={styles.svgs}><Image src={p2} /> <div>Samudai web3 startup raised $2.5 M</div></div>
                                <div className={styles.svgs}><Image src={p3} /> <div>Fintech startup Jiraaf raised $7.5M</div></div>
                            </div>
                        </div>
                        <div className={isActive ? styles.halfb1 : styles.b1}>
                            <div className={styles.boxheading}>Startup of the Week</div>
                            {/* <div>
                                Startup of the Week
                                <br />
                                Startup of the Week
                                <br />
                                Startup of the Week
                            </div> */}
                        </div>
                    </div>
                    <div className={isActive ? styles.hide : styles.twoBoxes}>
                        <div className={styles.b2}>
                            <div className={styles.boxheading}>Startups in News</div>
                        </div>
                        <div className={styles.b2}>
                            <div className={styles.boxheading}>Concepts you  may or may not know</div>
                        </div>
                    </div>
                    <button onClick={ToggleClass}>Click Me!</button>
                </div>
            </div>
        </div>



    );
}

export default App;

