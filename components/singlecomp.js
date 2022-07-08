import Link from "next/link";
import Image from 'next/image';
// import { comp, isLoading } from './home.js';/
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import iw from "../pic/web.svg";
import il from "../pic/lin.svg";
import tl from "../pic/tim.svg";
import bl from "../pic/bl.svg";
import fn from "../pic/fun.svg";
import nav from "../pic/nav.svg";
import dt from "../pic/dot.svg";
import S from "../styles/startup.module.css";
import tl2 from "../pic/tim2.svg";
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from "react-bootstrap";


export default function SingleComp(props) {


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

    let str = props.sp.Logo;
    let obj = props.sp;
    str = str.slice(32, 65);

    const des = props.sp.Shortbrief;
    let s = "";
    if (des) {
        const iterator = des[Symbol.iterator]();
        let theChar = iterator.next();

        while (!theChar.done && (theChar.value !== '.' || (s.length < 10))) {
            s = s + theChar.value
            theChar = iterator.next();
        }
    }
    const des1 = props.sp.funding;
    let s1 = "";
    if (des1) {
        const iterator1 = des1[Symbol.iterator]();
        let theChar1 = iterator1.next();

        while (!theChar1.done && (theChar1.value !== 'B' && theChar1.value !== 'M')) {
            s1 = s1 + theChar1.value;
            theChar1 = iterator1.next();
            if (theChar1.value == 'B' || theChar1.value == 'M') {
                s1 = s1 + theChar1.value;
            }

        }
    }

    const fun = () => {
        const main =
            Object.entries(obj).map(([key, value]) => {
                if (Number(key.substr(key.indexOf("S") + 1)) > 0 && value != "") {
                    return (
                        <>
                            <div className={S.y}>{value.substr(0, 4)}</div>
                        </>
                    )
                }
            })
        return main;
    }

    const fun1 = () => {
        const main =
            Object.entries(obj).map(([key, value]) => {
                if (Number(key.substr(key.indexOf("S") + 1)) > 0 && value != "") {
                    return (
                        <>
                            <div className={S.cir}><Image src={dt}></Image></div>
                        </>
                    )
                }
            })
        return main;
    }

    const fun2 = () => {
        const main =
            Object.entries(obj).map(([key, value]) => {
                if (Number(key.substr(key.indexOf("S") + 1)) > 0 && value != "") {
                    if (value.indexOf(",") != -1) {
                        return (
                            <>
                                <div className={S.y}>{value.substr(6)}</div>
                            </>
                        )
                    }
                    else {
                        return (
                            <>
                                <div className={S.y}>{value.substr(5)}</div>
                            </>
                        )
                    }

                }
            })
        return main;
    }
    const keyc = () => {
        const keyc1 = props.comp.filter(st => st.Sector === props.sp.Sector && st.Valuation && st.Name != props.sp.Name);
        if (keyc1.length) {

            const ikey = keyc1.map((st) => {
                return (
                    <>
                        <div className={`${S.krow}`}>
                            <div className={S.nm}>{st.Name}</div>
                            <div className={S.bil}>{st.Valuation}</div>
                        </div>
                        <div className={S.hr}><Image src={bl}></Image> </div>
                    </>
                )
            })
            return (
                <div className={S.keycomp}>
                <div className={S.kt}>Key Competitors</div>
                <div className={S.ktab}>
                    <div className={`${S.krow} ${S.spd}`}>
                        <div className={`${S.nm1}`}>Startup Name</div>
                        <div className={S.nm1}>Valuation</div>
                    </div>
                    <div className={S.ktab2}>
                        {ikey}
                    </div>
                    </div>
                    </div>


            )
        }
    }
    return (
        <>

            <div className={S.bd}>
                <div className={S.container}>
                    <div style={{ padding: "0 0 0 20px", cursor: "pointer" }}><div onClick={()=>props.setSinglecomp('')}><Image src={nav}></Image></div></div>
                    <div className={S.info}>
                        <div className={S.r1}>
                            <div className={S.card1}>
                                <div style={{ width: '100%', height: '100%' }}>
                                    <Image
                                        src={`http://drive.google.com/uc?export=view&id=${str}`}
                                        alt="Picture of the author"
                                        width={300}
                                        height={300}
                                        style={{ borderRadius: "20px 20px 0px 0px" }}

                                    />
                                </div>
                                <a href={props.sp.Website} tclassName={S.naam}> <span className={S.uni}>{props.sp.Name} {props.sp.Stage == "Unicorn" ? "(Unicorn)" : ""}</span></a>
                                <span className={S.uni}>{props.sp.Sector}</span>
                                <div className={S.det}>
                                    <div className={S.hed}>{s}</div>
                                    {/* <div className={S.key}>Key offerings :  The brand offers headphones, earphones, speakers, to travel chargers & premium cables. </div> */}
                                </div>
                            </div>
                            <div className={S.card2}>
                                <div className={S.m1}>
                                    <div className={S.st}>The Story</div>
                                    <div className={S.timlin}>
                                        <div className={S.year1}>
                                            {fun()}
                                        </div>
                                        <div className={S.tim}>

                                            {(windowSize.width > 1300) ?
                                                <div className={S.img}><Image src={tl}></Image></div>
                                                :
                                                <div style={{ width: "4px", height: '100%', position: 'absolute' }} className={S.img}></div>
                                            }
                                            {fun1()}
                                        </div>
                                        <div className={S.year}>
                                            {fun2()}
                                        </div>
                                    </div>


                                </div>

                                {obj.funding || obj.Valuation ?
                                    <div className={S.m1}>
                                        <div className={S.st}>Key Metrics</div>
                                        <div className={S.val}>
                                            <div className={S.v1}>
                                                {obj.Valuation ? <div className={S.vt}>Valuation</div> : ""}
                                                {obj.funding ? <div className={S.vt}>Funds raised</div> : ""}
                                            </div>
                                            <div className={S.v1}>
                                                {obj.Valuation ? <div className={S.vt1}>{obj.Valuation}</div> : ""}
                                                {obj.funding ? <div className={S.vt1}>{s1}</div> : ""}

                                            </div>
                                        </div>
                                    </div>
                                    : ""}


                                <div className={S.m2}>
                                    {/* <div className={S.st}>Key Investors</div>
                                    <div className={S.vt2}>Qualcomm Ventures | Warburg Pincus | InnoVen Capital | Navi Technologies</div> */}
                                    <div className={S.v}>
                                        <a href={props.sp.Website} className={S.w}>
                                            <Image src={iw}></Image><div>Web</div>
                                        </a>
                                        <a href={props.sp.LinkedIn} className={S.w}>
                                            <Image src={il}></Image><div>Job Opening</div>

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={S.r}>
                            {/* <div className={S.c1}>
                                <div className={S.ft}>Know the founder</div>
                                <div className={S.ff}>
                                    <div className={S.pic}>
                                        
                                    </div>
                                    <div className={S.foun}>
                                        <div className={S.fc}>
                                            <div>
                                                <span className={S.fat}>Aman Gupta</span><br></br>
                                                <span className={S.fct}> Cofounder & CMO </span>
                                            </div>
                                            <div className={S.fdes}>
                                                After completing his education from ISB, he worked at HARMAN as director of sales and as a consultant at KPMG.In 2013 he founded boat and lead at as CMO.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div> */}
                            {keyc()}

                        </div>
                        {/* <div className={S.fn}>
                            <Image src={fn}></Image>
                            Fun Fact - Boat is the world’s 5th largest  and India’s no.1 wearable brand by units sold.
                        </div> */}
                    </div>
                    {/* <div className={S.nws}>
                        <div className={S.boat}>Boat in News</div>
                        <div className={S.nar}>
                            <div className={S.n1}>Our focus this year will be on growing the wearables category”: boAt’s co-founder Aman Gupta"Our focus this year will be on growing the wearables category</div>
                            <div className={S.n1}>India wearables market records double-digit growth in January-March, BoAT, Noise on top</div>
                        </div>
                    </div> */}
                </div>

            </div>

        </>
    )
}