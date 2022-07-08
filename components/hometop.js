import React, { useState, useEffect } from "react";
import styles from "../styles/page.module.css";
import Image from "next/image";
import g1 from "../images/g1.svg";
import g2 from "../images/g2.svg";
import g3 from "../images/g3.svg";
import p1 from "../images/p1.svg";
import p2 from "../images/p2.svg";
import p3 from "../images/p3.svg";
import plus from "../images/plus.svg";
import minus from "../images/minus.svg";

function Hometop({keynum, News}) {
    
    const [windowSize, setWindowSize] = useState({
        width: "",
        height: "",
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount


    const [isActive, setActive] = useState("false");
    const [Text, setText] = useState("Out");
    const ToggleClass = () => {
        setActive(!isActive);
        if(windowSize.width >= 1000)
        {
            if(isActive){
                document.getElementById(styles.box).style= "height: 770px";
            }
            else{
                document.getElementById(styles.box).style= "height:200px";    
            }
        }
        else{
            if(isActive){
                document.getElementById(styles.box).style= "height: 500px";
            }
            else{
                document.getElementById(styles.box).style= "height:130px";    
            }
        }
       
        setText(isActive ? "In" : "Out");
    };



    let oneplus1p= keynum[4];
    let ok1p= true;
    if(oneplus1p.length == 0 || (oneplus1p.length == 1 && oneplus1p[0]=='0'))
    {
        ok1p= false;
    }

    let oneplus1n= keynum[5];
    let ok1n= true;
    if(oneplus1n.length == 0 || (oneplus1n.length == 1 && oneplus1n[0]=='0'))
    {
        ok1n= false;
    }

    let oneplus2p= keynum[6];
    let ok2p= true;
    if(oneplus2p.length == 0 || (oneplus2p.length == 1 && oneplus2p[0]=='0'))
    {
        ok2p= false;
    }

    let oneplus2n= keynum[7];
    let ok2n= true;
    if(oneplus2n.length == 0 || (oneplus2n.length == 1 && oneplus2n[0]=='0'))
    {
        ok2n= false;
    }

    let nut= keynum[3];
    let oknut= true;
    if(nut.length == 1 && nut[0] == '0')
    {
        oknut= false;
    }

    return (
    <div>
        <div className={styles.Border}>
            <div id= {styles.box}>
                <div className={styles.g}>
                    <div className={styles.card}>
                        <div className={styles.d1}>Total Unicorns</div>
                        <div className={styles.d1font} >{keynum[0]}<span className={styles.plusone}> {ok1p ? <>+{oneplus1p}</> : ok1n ? <>-{oneplus1n}</> : ""}</span></div>
                        {windowSize.width > 1000 
                         ? 
                         <Image src={g1} />
                         :
                         <Image height={"33px"} width={"66px"} src={g1} />
                          }
                    </div>
                    {/* <div className={isActive ? styles.hide : styles.duration}> */}
                    <div className={styles.card}>
                        <div className={styles.d2}>Total Funds Raised</div>
                        <div className={styles.d2font} >${keynum[1]}<span className={styles.plusone}>Bn</span></div>
                        {windowSize.width > 1000 
                         ? 
                         <Image src={g2} />
                         :
                         <Image height={"33px"} width={"66px"} src={g2} />
                          }
                    </div>
                    <div className={styles.card}>
                        <div className={styles.d3}>Total  Startups</div>
                        <div className={styles.d3font} >{keynum[2]}<span className={styles.plusone}> {ok2p ? <>+{oneplus2p}</> : ok2n ? <>-{oneplus2n}</> : ""}</span></div>
                        {windowSize.width > 1000 
                         ? 
                         <Image src={g3} />
                         :
                         <Image height={"33px"} width={"66px"} src={g3} />
                          }
                    </div>
                    <div className={styles.card}>
                        <div className={styles.d4}>About to be Unicorns</div>
                        <div className={styles.d4font} >{keynum[3]}<span className={styles.plusone}>{oknut ? <>+</> : ""}</span></div>
                    </div>
                    {/* </div> */}
                </div>
                <div className={styles.allBoxes}>
                    <div className={styles.twoBoxes}>
                        <div className={styles.b1}>
                            <div className={styles.boxheading}>Funding Tracker</div>
                            <div className={styles.boxcontent}>
                                {News.map((item,key)=>{
                                    if(key!=0){
                                    return(
                                        <div className={styles.svgs}> {windowSize.width > 1000 ? <Image src= {key%3 == 0 ? p3 : key%3 == 1 ? p1 : p2} height={"30px"} width={"30px"} />:<Image height={"20px"} width={"20px"} src= {key%3 == 0 ? p3 : key%3 == 1 ? p1 : p2} />}<div className={styles.content}>{item[0]}</div></div>
                                    )
                                    }
                                })}
                            </div>
                        </div>
                        <div className={styles.b1}>
                            <div className={styles.boxheading}>Startup of the Week</div>
                            <div className={styles.boxcontent}>
                            {News.map((item,key)=>{
                                    if(key!=0){
                                    return(
                                        <div className={styles.svgs}> {windowSize.width > 1000 ? <Image src= {key%3 == 0 ? p3 : key%3 == 1 ? p1 : p2} height={"30px"} width={"30px"} />:<Image height={"20px"} width={"20px"}  src= {key%3 == 0 ? p3 : key%3 == 1 ? p1 : p2} />}<div className={styles.content}>{item[1]}</div></div>
                                    )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={styles.twoBoxes}>
                        <div className={styles.b2}>
                            <div className={styles.boxheading}>Startups in News</div>
                            <div className={styles.boxcontent}>
                            {News.map((item,key)=>{
                                    if(key!=0){
                                    return(
                                    <div className={styles.svgs}> {windowSize.width > 1000 ? <Image src= {key%3 == 0 ? p3 : key%3 == 1 ? p1 : p2} height={"30px"} width={"30px"} />:<Image height={"20px"} width={"20px"} src= {key%3 == 0 ? p3 : key%3 == 1 ? p1 : p2} />}<div className={styles.content}>{item[2]}</div></div>
                                    )
                                    }
                                })}
                            </div>
                        </div>
                        <div className={styles.b2}>
                            <div className={styles.boxheading}>Did you know?</div>
                            <div className={styles.boxcontent}>
                            {News.map((item,key)=>{
                                    if(key!=0){
                                    return(
                                    <div className={styles.svgs}> {windowSize.width > 1000 ? <Image src= {key%3 == 0 ? p3 : key%3 == 1 ? p1 : p2} height={"30px"} width={"30px"} />:<Image height={"20px"} width={"20px"} src= {key%3 == 0 ? p3 : key%3 == 1 ? p1 : p2} />}<div className={styles.content}>{item[3]}</div></div>
                                    )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className={styles.check} onClick={ToggleClass}><div className={styles.check2}>Nerd {Text}! <div><Image src={isActive ? plus : minus} /></div></div></button>
        </div>
    </div>


    );
}

export default Hometop;

