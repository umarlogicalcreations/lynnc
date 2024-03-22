'use client'
import { useEffect, useRef, useState } from "react";
import Header from "../../components/HeaderMenu1/header"
import PowerfulSol from "../../components/PowerfulSol/PowerfulSol"
import Container from 'react-bootstrap/Container';
import "./home.css"

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Footer from "../../components/Footer/footer"
import TitleAndDescriptionForSection from "../../components/TextTitleForHomePage/TittleHomePage"


const clientExperienseCommentsList = [
    {
        name: "daisy welch",
        designation: "expert",
        comment: "Iusto quia perspiciatis inventore tempora. Velit vitae tempora et laborum id soluta est ut laboriosam. Eveniet possimus autem ratione aliquid in sunt tempora. Amet rerum suscipit distinctio voluptas. In quis voluptas necessitatibus et aut dolor ut quod. Sapiente et adipisci tenetur voluptatibus qui.",
        profPicPath: "./client.png",
        companyLogo: "./exp_1.png"
    },
    {
        name: "QB",
        designation: "chief branding producer",
        comment: "Iusto quia perspiciatis inventore tempora. Velit vitae tempora et laborum id soluta est ut laboriosam. Eveniet possimus autem ratione aliquid in sunt tempora. Amet rerum suscipit distinctio voluptas. In quis voluptas necessitatibus et aut dolor ut quod. Sapiente et adipisci tenetur voluptatibus qui.",
        profPicPath: "./client2.jpg",
        companyLogo: "./exp_2.png"
    },
    {
        name: "Mike Murphey",
        designation: "manager",
        comment: "Iusto quia perspiciatis inventore tempora. Velit vitae tempora et laborum id soluta est ut laboriosam. Eveniet possimus autem ratione aliquid in sunt tempora. Amet rerum suscipit distinctio voluptas. In quis voluptas necessitatibus et aut dolor ut quod. Sapiente et adipisci tenetur voluptatibus qui.",
        profPicPath: "./client3.png",
        companyLogo: "./exp_3.png"
    },
]

const iconsList = [
    {
        companyLogo: "./exp_1.png"
    },
    {
        companyLogo: "./exp_2.png"
    },
    {
        companyLogo: "./exp_3.png"
    },
    {
        companyLogo: "./exp_1.png"
    },
    {
        companyLogo: "./exp_2.png"
    },
    {
        companyLogo: "./exp_3.png"
    },
]

const Home = () => {
    const [currencyType, setCurrencyType] = useState("SAR")
    const [selectedClientIndex, setSelectedClientIndex] = useState(1);

    const clientShareExpContentRef = useRef(null);

    const doSliderForClients = () => {



    }
    useEffect(() => {

        setInterval(() => {
            setSelectedClientIndex(prevValue => {
                if (prevValue == 1) {

                    return 0
                }
                if (prevValue == 0) {

                    return 2
                }
                if (prevValue == 2) {
                    // clientShareExpContentRef.current.style.transform = "translate(0px,0px)"
                    return 1
                }
            })
        }, 5000);

    }, [])

    useEffect(() => {
        if (selectedClientIndex == 1) {
            clientShareExpContentRef.current.style.transform = "translate(0px,0px)"
        }
        if (selectedClientIndex == 0) {
            clientShareExpContentRef.current.style.transform = "translate(880px,0px)"
        }
        if (selectedClientIndex == 2) {
            clientShareExpContentRef.current.style.transform = "translate(-880px,0px)"
        }
    }, [selectedClientIndex])
    const selectCurrencyType = (type) => {
        setCurrencyType(type)
    }
    const onEnterMouseSec1 = (secChild) => {

        let sec1C1 = document.getElementById("sec1C1");
        let sec1C2 = document.getElementById("sec1C2");
        if (secChild == "sec1C2") {
            sec1C1.style.height = "15%"
            sec1C2.style.position = "absolute"
            sec1C2.style.height = "80%"
            sec1C2.style.bottom = "0"
        } else {
            sec1C2.style.position = "absolute"
            sec1C2.style.height = "20%"
            sec1C1.style.height = "55%"
        }
    }
    const resetAllCssSec1 = () => {
        let sec1C1 = document.getElementById("sec1C1");
        let sec1C2 = document.getElementById("sec1C2");
        sec1C1.style.position = ""
        sec1C1.style.height = ""
        sec1C2.style.height = ""
        sec1C2.style.bottom = ""
        sec1C2.style.position = ""
    }

    const onEnterMouseSec2 = (secChild) => {

        let sec2C1 = document.getElementById("sec2C1");
        let sec2C2 = document.getElementById("sec2C2");
        if (secChild == "sec2C2") {
            sec2C1.style.height = "15%"
            sec2C2.style.position = "absolute"
            sec2C2.style.height = "80%"
            sec2C2.style.bottom = "0"
        } else {
            sec2C2.style.position = "absolute"
            sec2C2.style.height = "25%"
            sec2C1.style.height = "70%"
        }
    }
    const resetAllCssSec2 = () => {
        let sec2C1 = document.getElementById("sec2C1");
        let sec2C2 = document.getElementById("sec2C2");
        sec2C1.style.position = ""
        sec2C1.style.height = ""
        sec2C2.style.height = ""
        sec2C2.style.bottom = ""
        sec2C2.style.position = ""
    }

    const onEnterMouseSec3 = (secChild) => {

        let sec3C1 = document.getElementById("sec3C1");
        let sec3C2 = document.getElementById("sec3C2");
        if (secChild == "sec3C2") {
            sec3C1.style.height = "15%"
            sec3C2.style.position = "absolute"
            sec3C2.style.height = "80%"
            sec3C2.style.bottom = "0"
        } else {
            sec3C2.style.position = "absolute"
            sec3C2.style.height = "25%"
            sec3C1.style.height = "70%"
        }
    }
    const resetAllCssSec3 = () => {
        let sec3C1 = document.getElementById("sec3C1");
        let sec3C2 = document.getElementById("sec3C2");
        sec3C1.style.position = ""
        sec3C1.style.height = ""
        sec3C2.style.height = ""
        sec3C2.style.bottom = ""
        sec3C2.style.position = ""
        sec3C1.style.top = ""
    }
    return (
        <>
            <div >
                <Header />
                {/* <div className="client-list">
                    <div className="exp-imgs">
                        <img src="./exp_1.png" alt="client-list" />
                        <img src="./exp_2.png" alt="client-list" />
                        <img src="./exp_3.png" alt="client-list" />
                        <img src="./exp_4.png" alt="client-list" />
                    </div>

                </div> */}
                <div className="client-list-outer-after-header">
                    <div className="client-list-after-header">
                        {
                            iconsList.map((el, ind) => {
                                return (
                                    <div className={selectedClientIndex == ind ? "exp-imgs active-exp-img" : "exp-imgs"}>
                                        <img src={el.companyLogo} alt="client-list" />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            <Container>
                <div className="meet-us-home-section">
                    <div className="meet-us-home-section-text">
                        <div>
                            <button className="meet-us-btn">
                                <div className="meet-us-arrow">
                                    <img src="./arrow_meet_us_btn.png" alt="arrow_meet_us_btn" />
                                </div>
                                <span>Meet Us</span>
                            </button>
                            <div className="lyncc-platform-text-1">
                                <span>LYNNC Platform</span>
                            </div>
                        </div>
                        <div className="text-section">

                            <div className="lyncc-platform-text-2">
                                <p>
                                    Lynnc is a powerful (SaaS) platform designed to efficiently manage and track online orders across multiple food delivery apps. With a dedicated focus on optimizing operations in the food and beverage (F&B) and retail industries, Lynnc empowers businesses
                                </p>
                            </div>

                        </div>
                        <div>
                            <button className="download-lyncc-prof">
                                <div className="slide-download-lyncc-prof">
                                    <div className="profile-download-arrow">
                                        <img src="./arrow-up-green.png" alt="arrow" height={"70%"} width={"70%"} />

                                    </div>
                                    <p>Download Lyncc Profile</p>
                                </div>
                                <div className="profile-download-arrow" style={{ color: '#183F30' }}>
                                    <img src="./arrow-up.png" alt="arrow" height={"70%"} width={"70%"} />

                                </div>
                                <p>Download Lyncc Profile</p>


                            </button>
                        </div>

                    </div>
                    <div className="lyncc-platform-img">
                        {/* <img src="./5.jpg" alt="img" /> */}
                        <video autoPlay muted loop width={"100%"}>
                            <source src="./vid_2.mp4"></source>
                        </video>
                    </div>
                </div>
                <div className="tell-story-section">
                    <div className="tell-story-content">
                        <video autoPlay muted loop width={"100%"}>
                            <source src="./tell_story.mp4" />
                        </video>
                    </div>
                    <div className="tell-story-content-inner">
                        <div  style={{display:'flex'}} className="lyncc-tell-story-text">
                            <span className="lyncc-alone">LYNNC</span>

                         
                               <span style={{color:'white'}}>
                            ®  </span>
                            
                            <p style={{marginLeft:'8px'}}> numbers tell the Story!</p>
                        </div>
                        <div className="story-numbers">
                            <div className="story-item">
                                <div>
                                    <span className="story-item-text"><span className="text-platform">+</span>500K</span>
                                </div>
                                <div style={{ textAlign: "center", fontSize: "30px", fontWeight: "400" }}>
                                    <span style={{ color: "white" }}>
                                        orders
                                    </span>
                                </div>
                            </div>
                            <div className="story-item">
                                <div>
                                    <span className="story-item-text"><span className="text-platform">+</span>750</span>
                                </div>
                                <div style={{ textAlign: "center", fontSize: "30px", fontWeight: "400" }}>
                                    <span style={{ color: "white" }}>
                                        location
                                    </span>
                                </div>
                            </div>
                            <div className="story-item">
                                <div>
                                    <span className="story-item-text"><span className="text-platform">+</span>100</span>
                                </div>
                                <div style={{ textAlign: "center", fontSize: "30px", fontWeight: "400" }}>
                                    <span style={{ color: "white" }}>
                                        brands
                                    </span>
                                </div>
                            </div>
                            <div className="story-item">
                                <div>
                                    <span className="story-item-text"><span className="text-platform">+</span>50</span>
                                </div>
                                <div style={{ textAlign: "center", fontSize: "30px", fontWeight: "400" }}>
                                    <span style={{ color: "white" }}>
                                        integration
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="partner-logos">
                <img src="./6.jpg" alt="parnter-logos" />
                {/* <div className="lyncc-logo">
                    <svg width="131" height="19" viewBox="0 0 131 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12.9452V0.00378418H3.6948V12.9452C3.6948 13.9476 4.51415 14.7674 5.51592 14.7674H25.8389V18.4924H5.51592C2.47969 18.4924 0 15.9833 0 12.9452Z" fill="#05D35D" />
                        <path d="M32.0938 10.0644V18.4888H28.3712V10.0644L17.126 0.0032959H22.6697L30.217 6.76327L37.7921 0.0032959H43.3359L32.0907 10.0644H32.0938Z" fill="#05D35D" />
                        <path d="M65.5108 0.0032959H69.2334V15.2682C69.2087 17.0378 67.7555 18.4888 65.9869 18.4888C65.2758 18.4888 64.5616 18.2258 64.0328 17.802L47.0337 4.22635V18.4888H43.3389V3.22395C43.3389 1.42954 44.7921 0.0032959 46.5853 0.0032959C47.2965 0.0032959 47.9829 0.24152 48.5394 0.690122L65.5108 14.2658V0.0032959Z" fill="#05D35D" />
                        <path d="M94.0427 0.0032959H97.7654V15.2682C97.7376 17.0378 96.2875 18.4888 94.5189 18.4888C93.8047 18.4888 93.0935 18.2258 92.5648 17.802L75.5656 4.22635V18.4888H71.8708V3.22395C71.8708 1.42954 73.324 0.0032959 75.1173 0.0032959C75.8285 0.0032959 76.5149 0.24152 77.0714 0.690122L94.0427 14.2658V0.0032959Z" fill="#05D35D" />
                        <path d="M104.098 5.5472V12.9414C104.098 13.9438 104.942 14.7637 105.947 14.7637H126.27V18.4886H105.947C102.886 18.4886 100.403 15.9795 100.403 12.9414V5.5472C100.403 2.48433 102.883 0 105.947 0H126.27V3.6971H105.947C104.945 3.6971 104.098 4.54171 104.098 5.5472Z" fill="#05D35D" />
                        <path d="M131 16.7166C131 17.0106 130.951 17.2735 130.855 17.5056C130.759 17.7376 130.629 17.9294 130.465 18.0903C130.301 18.2512 130.113 18.3718 129.899 18.4554C129.686 18.5389 129.46 18.5822 129.222 18.5822C128.984 18.5822 128.765 18.5389 128.551 18.4554C128.338 18.3718 128.149 18.2481 127.985 18.0903C127.822 17.9294 127.692 17.7345 127.593 17.5056C127.494 17.2766 127.448 17.0136 127.448 16.7166C127.448 16.4196 127.497 16.1628 127.593 15.9308C127.692 15.6988 127.822 15.5039 127.985 15.343C128.149 15.1821 128.338 15.0614 128.551 14.9779C128.765 14.8944 128.99 14.8511 129.222 14.8511C129.454 14.8511 129.686 14.8944 129.899 14.9779C130.113 15.0614 130.301 15.1852 130.465 15.343C130.629 15.5039 130.759 15.6988 130.855 15.9308C130.951 16.1628 131 16.4258 131 16.7166ZM130.552 16.7166C130.552 16.5001 130.518 16.3052 130.453 16.1257C130.388 15.9494 130.295 15.7978 130.178 15.6709C130.06 15.5441 129.918 15.4451 129.757 15.377C129.596 15.309 129.417 15.2749 129.222 15.2749C129.027 15.2749 128.848 15.309 128.687 15.377C128.527 15.4451 128.387 15.5441 128.27 15.6709C128.152 15.7978 128.063 15.9494 127.998 16.1257C127.933 16.3021 127.899 16.5001 127.899 16.7166C127.899 16.9332 127.933 17.1312 127.998 17.3106C128.063 17.4901 128.152 17.6417 128.27 17.7685C128.387 17.8954 128.527 17.9944 128.687 18.0624C128.848 18.1305 129.027 18.1645 129.222 18.1645C129.417 18.1645 129.596 18.1305 129.757 18.0624C129.918 17.9944 130.057 17.8954 130.178 17.7685C130.295 17.6417 130.388 17.4901 130.453 17.3106C130.518 17.1312 130.552 16.9332 130.552 16.7166ZM129.637 17.6695C129.569 17.5241 129.501 17.3942 129.429 17.2766C129.361 17.1591 129.296 17.06 129.235 16.9796H128.956V17.6695H128.523V15.7885C128.629 15.7607 128.734 15.7421 128.839 15.7328C128.944 15.7235 129.034 15.7173 129.111 15.7173C129.395 15.7173 129.612 15.7699 129.757 15.8782C129.902 15.9834 129.977 16.1474 129.977 16.3639C129.977 16.4815 129.949 16.5836 129.893 16.6702C129.838 16.7569 129.754 16.8249 129.649 16.8744C129.717 16.9734 129.791 17.0879 129.872 17.2209C129.952 17.3509 130.026 17.5025 130.103 17.6757H129.64L129.637 17.6695ZM128.956 16.63H129.102C129.235 16.63 129.343 16.6114 129.42 16.5743C129.501 16.5372 129.538 16.466 129.538 16.3547C129.538 16.2588 129.501 16.1907 129.426 16.1505C129.352 16.1102 129.259 16.0917 129.145 16.0917H129.055C129.027 16.0917 128.993 16.0948 128.953 16.101V16.6269L128.956 16.63Z" fill="#05D35D" />
                    </svg>
                </div>
                <div className="wessel">
                    <img src="./wessel.png" alt="wessel.png" />
                </div>
                <div className="mrsool">
                    <img src="./mrsool.png" alt="mrsool.png" />
                </div>
                <div className="shgardi">
                    <img src="./shgardi.png" alt="shgardi.png" />
                </div>
                <div className="hunger_station">
                    <img src="./hunger_station.png" alt="hunger_station.png" />
                </div>
                <div className="uber_eats">
                    <img src="./uber_eats.png" alt="uber_eats.png" />
                </div>
                <div className="jahez">
                    <img src="./jahez.png" alt="jahez.png" />
                </div>
                <div className="to_you">
                    <img src="./to_you.png" alt="to_you.png" />
                </div>
                <div className="talabat">
                    <img src="./talabat.png" alt="talabat.png" />
                </div> */}

            </div>
            <PowerfulSol />
            <Container>
                {/* <div className="witness-efficiency">
                <TitleAndDescriptionForSection title={"witness the efficiency"} description={"addressing your business challenges"} />
                    <div className="witness_the_efficiency-title-section">
                        <div className="witness_the_efficiency-title">
                            <span>witness the efficiency</span>
                        </div>
                        <div className="witness_the_efficiency-text1">
                            <span>witness the efficiency</span>
                        </div>
                        <div className="witness_the_efficiency-text2">
                            <span>See the difference Lynnc can make in your business operations</span>
                        </div>

                    </div>
                    <div className="lyncc-efficiency-vid">
                        <video controls>
                            <source src="./vid_1.mp4" />
                        </video>
                    </div>
                </div> */}
                <div className="business-challenge-outer">
                    <div className="business-challenge">
                        <TitleAndDescriptionForSection icon={true} title={"overcome your challenges"}

                         description={"addressing your business challenges"} />
                  

                        <div  className="challenge-cards">
                            <div className="sec-1">
                                <div id="sec1C1" onMouseLeave={() => resetAllCssSec1("sec1C1")} onMouseEnter={() => onEnterMouseSec1("sec1C1")} className="single-challenge-card">
                                    <div className="challenge_text">
                                        <span className="chanllenge_heading">Challenge</span>
                                        <span className="chanllenge_des">
                                            Manual communication with each delivery platform for menu management
                                        </span>
                                    </div>
                                    <div className="challenge_text_hover">
                                        <span className="chanllenge_heading">Solution</span>
                                        <span className="chanllenge_des">
                                            solution text goes here.solution text goes here.
                                        </span>
                                        <div className="keyboard-img" >
                                            <img src="./keyboard.png" alt="keyboard" />
                                        </div>
                                    </div>

                                    <div className="keyboard-img" >
                                        <img src="./keyboard.png" alt="keyboard" />
                                    </div>

                                </div>
                                <div id="sec1C2" onMouseLeave={() => resetAllCssSec1("sec1C2")} onMouseEnter={() => onEnterMouseSec1("sec1C2")} className="single-challenge-card">
                                    <div className="challenge_text">
                                        <span className="chanllenge_heading">Challenge</span>
                                        <span className="chanllenge_des">
                                            Time-consuming processes to synchronize each delivery app with the POS system
                                        </span>
                                    </div>
                                    <div className="challenge_text_hover">
                                        <span className="chanllenge_heading">Solution</span>
                                        <span className="chanllenge_des">
                                            solution text goes here.solution text goes here.
                                        </span>
                                    </div>
                                    <div className="clock-img" >
                                        <img src="./clock.png" alt="clock" />
                                    </div>
                                </div>
                            </div>
                            <div className="sec-2">
                                <div id="sec2C1" onMouseLeave={() => resetAllCssSec2("sec2C1")} onMouseEnter={() => onEnterMouseSec2("sec2C1")} className="single-challenge-card ">
                                    <div className="challenge_text">
                                        <span className="chanllenge_heading">Challenge</span>
                                        <span className="chanllenge_des">
                                            Complexity on applying discounts and promotions across different brands
                                        </span>
                                    </div>
                                    <div className="challenge_text_hover">
                                        <span className="chanllenge_heading">Solution</span>
                                        <span className="chanllenge_des">
                                            solution text goes here.solution text goes here.
                                        </span>
                                    </div>
                                    <div className="discount_tag-img" >
                                        <img src="./discount_tag.png" alt="discount_tag" />
                                    </div>
                                </div>
                                <div id="sec2C2" onMouseLeave={() => resetAllCssSec2("sec2C2")} onMouseEnter={() => onEnterMouseSec2("sec2C2")} className="single-challenge-card ">
                                    <div className="challenge_text">
                                        <span className="chanllenge_heading">Challenge</span>
                                        <span className="chanllenge_des">
                                            Customer complaints about order rejections due to item unavailability
                                        </span>
                                    </div>
                                    <div className="challenge_text_hover">
                                        <span className="chanllenge_heading">Solution</span>
                                        <span className="chanllenge_des">
                                            solution text goes here.solution text goes here.
                                        </span>
                                    </div>
                                    <div className="caution-img" >
                                        <img src="./caution.png" alt="caution" />
                                    </div>
                                </div>

                            </div>
                            <div className="sec-3">
                                <div id="sec3C1" onMouseLeave={() => resetAllCssSec3("sec3C1")} onMouseEnter={() => onEnterMouseSec3("sec3C1")} className="single-challenge-card">
                                    <div className="challenge_text">
                                        <span className="chanllenge_heading">Challenge</span>
                                        <span className="chanllenge_des">
                                            Inability to track order errors and losses
                                        </span>
                                    </div>
                                    <div className="challenge_text_hover">
                                        <span className="chanllenge_heading">Solution</span>
                                        <span className="chanllenge_des">
                                            solution text goes here.solution text goes here.
                                        </span>
                                    </div>
                                    <div className="delivery_van-img" >
                                        <img src="./delivery_van.png" alt="delivery_van" />
                                    </div>
                                </div>


                                <div id="sec3C2" onMouseLeave={() => resetAllCssSec3("sec3C2")} onMouseEnter={() => onEnterMouseSec3("sec3C2")} className="single-challenge-card ">
                                    <div className="challenge_text">
                                        <span className="chanllenge_heading">Challenge</span>
                                        <span className="chanllenge_des">
                                            Legacy method of extracting reports and performing validations across multiple delivery apps
                                        </span>
                                    </div>
                                    <div className="challenge_text_hover">
                                        <span className="chanllenge_heading">Solution</span>
                                        <span className="chanllenge_des">
                                            solution text goes here.solution text goes here.
                                        </span>
                                    </div>
                                    <div className="challange-img" >
                                        <img src="./challange.png" alt="challange" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="solve-your-challenge-section">
                    <button className="solve-your-challenge-button">
                        <span>solve your challenge</span>
                    </button>
                </div> */}
            </Container>
            <div className="integration-section">
                <div className="intgration-img">
                    <div className="witness_the_efficiency-title-section">
                        <div className="integration-title">
                            <div className="integ-arrow">
                                <img src="./arrow_meet_us_btn.png" alt="arrow_meet_us_btn" />
                            </div>
                            <p>overcome your challenges</p>
                        </div>
                        <div className="witness_the_efficiency-text1">
                            <span style={{ color: "white" }}>Integrate Your Business Seamlessly</span>
                        </div>
                        <div className="dropdown-section">
                            <button className="dropdown-style">
                                <div className="dropdown-style-inner">
                                    <div className="dropdown-text">
                                        <span>select your point of sale</span>
                                    </div>
                                    <div><svg width="25" height="11" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0.801636L11.8438 10.231C12.2201 10.5582 12.7799 10.5582 13.1562 10.231L24 0.801638" stroke="#183F30" stroke-linecap="round" />
                                    </svg>
                                    </div>
                                </div>
                            </button>
                            <button className="dropdown-style">
                                <div className="dropdown-style-inner">
                                    <div className="dropdown-text">
                                        <span>select your delivery point</span>
                                    </div>
                                    <div><svg width="25" height="11" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0.801636L11.8438 10.231C12.2201 10.5582 12.7799 10.5582 13.1562 10.231L24 0.801638" stroke="#183F30" stroke-linecap="round" />
                                    </svg>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="integration-submit">
                            <button className="submit">
                                <div className="slide-integ-submit">

                                    <p className="int-submit-text">submit</p>
                                </div>
                                <p className="int-submit-text">submit</p>
                            </button>
                        </div>

                    </div>
                </div>
                <img src="./integration_img.png" alt="integration_img" />
            </div>
            <div className="core-focus-wrapper__">
                <Container>
                    <div className="core-focus">
                        <div className="section-1">
                            <div className="section-1-upper">
                                {/* <div className="witness_the_efficiency-title">
                                <span>overcome your challenges</span>
                            </div> */}
                                <TitleAndDescriptionForSection icon={true} title={"witness the efficiency"} description={""} />
                                <div>
                                    <span className="focus-text">our core focus</span>
                                </div>
                                {/* <TitleAndDescriptionForSection icon={true} title={"overcome your challenges"} description={"our core focus"}/> */}
                                <div className="focus-dec">
                                    <span>Empowering Food & Beverage and Retail Businesses of All Sizes </span>
                                </div>
                            </div>

                        </div>
                        <div className="section-2">
                            <img src="./core_section_1.png" alt="fb-business" />
                        </div>
                        <div className="section-3">
                            <img src="./core_section_2.png" alt="retail-business" />
                        </div>
                    </div>

                </Container>
            </div>
            <Container>
                <div className="find-your-plan-outer">
                    <div className="find-your-plan-inner">
                        <div className="text-section-find-plan">
                            {/* <div className="witness_the_efficiency-title-section">
                                <div className="witness_the_efficiency-title">
                                    <span>Witness the Efficiency</span>
                                </div>
                                <div className="witness_the_efficiency-text1">
                                    <span>find your ideal plan</span>
                                </div>

                            </div> */}
                            <TitleAndDescriptionForSection icon={true} title={"witness the efficiency"} description={"find your ideal plan"} />

                        </div>
                        <div className="find-your-plan-section">
                            <div className="section-left">
                                <div className="price-cal">
                                    <span>price calculator</span>
                                </div>
                                <div className="slider-section">
                                    <Slider />
                                    <div className="slider-labels">
                                        <div className="label-1">
                                            <div className="label-1-text">
                                                <div>L</div>
                                                <div>0-35</div>
                                            </div>
                                        </div>
                                        <div className="label-1">
                                            <div className="label-1-text">
                                                <div>Y</div>
                                                <div>0-335</div>
                                            </div>
                                        </div>
                                        <div className="label-1">
                                            <div className="label-1-text">
                                                <div>N</div>
                                                <div>0-35</div>
                                            </div>
                                        </div>
                                        <div className="label-1">
                                            <div className="label-1-text">
                                                <div>N+</div>
                                                <div>0-35</div>
                                            </div>
                                        </div>
                                        <div className="label-1">
                                            <div className="label-1-text">
                                                <div>c</div>
                                                <div>0-35</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="avg-order-value">
                                    <div className="avg-order-value-label">
                                        <span>avg. order value</span>
                                    </div>
                                    <div className="avg-order-value-input">
                                        <input />
                                    </div>
                                </div>
                                <div className="avg-order-value">
                                    <div className="avg-order-value-label">
                                        <span>No. of locations</span>
                                    </div>
                                    <div className="avg-order-value-input">
                                        <input />
                                    </div>
                                </div>
                                <div className="avg-order-value">
                                    <div className="avg-order-value-label">
                                        <span>avg. amount of monthly orders</span>
                                    </div>
                                    <div className="avg-order-value-input">
                                        {/* <input /> */}
                                        <InputGroup className="mb-3">
                                            <Form.Control aria-label="Text input with dropdown button" />
                                            <SplitButton
                                                variant="outline-secondary"
                                                title={currencyType}
                                                id="segmented-button-dropdown-2"
                                                alignRight
                                            >
                                                <Dropdown.Item href="#" onClick={() => selectCurrencyType("SAR")}>SAR</Dropdown.Item>
                                                <Dropdown.Item href="#" onClick={() => selectCurrencyType("YEN")}>YEN</Dropdown.Item>
                                                <Dropdown.Item href="#" onClick={() => selectCurrencyType("DOLLAR")}>DOLLAR</Dropdown.Item>
                                            </SplitButton>
                                        </InputGroup>
                                    </div>
                                </div>
                            </div>
                            <div className="section-right">
                                <div className="suggestion-plan">
                                    <span>Your suggested plan</span>
                                </div>
                                <div className="monthly-savings">
                                    <div className="monthly=savings-labels">
                                        <div className="monthly-text">
                                            <span>monthly</span>
                                        </div>
                                        <div className="operational-text">
                                            <span>operational savings</span>
                                        </div>
                                    </div>
                                    <div className="money-sar">
                                        <span>200sar</span>
                                    </div>
                                </div>
                                <div className="annual-savings">
                                    <div className="monthly=savings-labels">
                                        <div className="monthly-text">
                                            <span>Annual</span>
                                        </div>
                                        <div className="operational-text">
                                            <span>operational savings</span>
                                        </div>
                                    </div>
                                    <div className="money-sar">
                                        <span>200sar</span>
                                    </div>
                                </div>
                                <div className="view-plan-section">
                                    <div className="section-main-view-plan">
                                        <div className="plan-label">
                                            <span>view your plan</span>
                                        </div>
                                        <div>
                                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.999967 1.00013L6.92763 10.066C7.23295 10.5329 7.91716 10.5329 8.22249 10.066L14.1501 1.00013" stroke="white" stroke-width="1.54708" stroke-linecap="round" />
                                            </svg>

                                        </div>

                                    </div>
                                    <div className="plan-detail">
                                        <div className="plan-detail-label">
                                            <span>online orders</span>
                                        </div>
                                        <div className="plan-detail-value">
                                            <span>0.0 sar</span>
                                        </div>
                                    </div>
                                    <div className="plan-detail">
                                        <div className="plan-detail-label">
                                            <span>max. orders in your plan</span>
                                        </div>
                                        <div className="plan-detail-value">
                                            <span>0.0 sar</span>
                                        </div>
                                    </div>
                                    <div className="plan-detail">
                                        <div className="plan-detail-label">
                                            <span>cost per extra order</span>
                                        </div>
                                        <div className="plan-detail-value">
                                            <span>0.0 sar</span>
                                        </div>
                                    </div>
                                    <div className="plan-detail">
                                        <div className="plan-detail-label">
                                            <span>setup fee</span>
                                        </div>
                                        <div className="plan-detail-value">
                                            <span>0.0 sar</span>
                                        </div>
                                    </div>
                                    <div className="plan-detail">
                                        <div className="plan-detail-label">
                                            <span>total plan</span>
                                        </div>
                                        <div className="plan-detail-value">
                                            <span>0.0 sar</span>
                                        </div>
                                    </div>

                                </div>
                                <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center" }} className="integration-submit">
                                    <button className="submit">
                                        <div className="slide-integ-submit">

                                            <p className="int-submit-text">submit</p>
                                        </div>
                                        <p className="int-submit-text">submit</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lyncc-blogs-outer">

                    <div className="text-section-find-plan">
                        <div className="witness_the_efficiency-title-section">
                            <TitleAndDescriptionForSection icon={false} title={"stay informed"} description={"lyncc blog"} />
                        </div>
                    </div>
                    <div className="blogs-flexes">
                        <div className="blog-card blog-card-small">
                            <img src="./blog_4.png" alt="blog-1" style={{ boxShadow: '3px 3px 3px ', filter: 'blur(3px)', position: "absolute", background: 'linear-gradient(186deg, rgba(0, 0, 0, 0) 4%, black 100%)' }} />
                            <div className="blog-content-text">
                                <div className="event-wrapper">
                                    <div className="event-blog">
                                        <p>event</p>
                                    </div>
                                </div>
                                <div className="blog-content-inner">
                                    <div className="blog-main-text">
                                        <span style={{ color: 'white', fontSize: 18, fontWeight: '400', wordWrap: 'break-word' }}>The Future of Order Management in Food & Beverage and Retail</span>
                                    </div>
                                    <div className="blog-other-info">
                                        <div className="blog-post-read-more">
                                            <span>read more</span>
                                        </div>
                                        <div className="blog-posting-date">
                                            <span>2 jan 2024</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <img src="./blog_4.png" alt="blog-1" /> */}
                        </div>
                        <div className="blog-card blog-card-big">
                            <div className="blog-content-text">
                                <div className="event-wrapper">
                                    <div className="event-blog">
                                        <p>event</p>
                                    </div>
                                </div>
                                <div className="blog-content-inner">
                                    <div className="blog-main-text">
                                        <span>The Future of Order Management in Food & Beverage and Retail</span>
                                    </div>
                                    <div className="blog-other-info">
                                        <div className="blog-post-read-more">
                                            <span>read more</span>
                                        </div>
                                        <div className="blog-posting-date">
                                            <span>2 jan 2024</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <img src="./blog_2.png" alt="blog-1" />
                        </div>
                        <div className="blog-card blog-card-small">
                            <img src="./blog_3.png" alt="blog-1" style={{ filter: 'blur(3px)', position: "absolute" }} />
                            <div className="blog-content-text">
                                <div className="event-wrapper">
                                    <div className="event-blog">
                                        <p>event</p>
                                    </div>
                                </div>
                                <div className="blog-content-inner">
                                    <div className="blog-main-text">
                                        <span style={{ color: 'white', fontSize: 18, fontWeight: '400', wordWrap: 'break-word' }}>The Future of Order Management in Food & Beverage and Retail</span>
                                    </div>
                                    <div className="blog-other-info">
                                        <div className="blog-post-read-more">
                                            <span>read more</span>
                                        </div>
                                        <div className="blog-posting-date">
                                            <span>2 jan 2024</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <div style={{ filter: 'blur(3px)', position: 'absolute' }}>
                                <img src="./blog_3.png" alt="blog-1" />
                            </div> */}

                        </div>
                        {/* <div className="blog-card">
                            <div className="blog-content-text">
                                <div className="blog-content-inner">
                                    <div className="blog-main-text">
                                        <span>The Future of Order Management in Food & Beverage and Retail</span>
                                    </div>
                                    <div className="blog-other-info">
                                        <div className="blog-posting-date">
                                            <span>2 jan 2024</span>
                                        </div>
                                        <div className="blog-post-read-more">
                                            <span>read more</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="./blog_4.png" alt="blog-1" />
                        </div> */}
                    </div>
                </div>

            </Container>
            <div className="learn-from-industory">
                <div className="blog-intro-content">
                    <div className="text-section-find-plan">
                        <TitleAndDescriptionForSection icon={true} title={"join our events"} description={"learn from industory experts"} />
                        {/* <div className="witness_the_efficiency-title-section">
                            <div className="witness_the_efficiency-title">
                                <span>join our events</span>
                            </div>
                            <div className="witness_the_efficiency-text1">
                                <span>learn from industory experts </span>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="industory-section-main">
                    <div className="industory-content">
                        <div className="industory-content-inner">
                            <div className="ind-content-1">
                                <div className="ind-text-left">
                                    <p className="ind-text-left-1">Join Our Upcoming Events:</p>
                                    <p className="ind-text-left-2">The Future of Order Management
                                        in Food & Beverage and Retail.</p>
                                </div>
                                <div className="ind-text-right">

                                    <div className="count-down-sec">
                                        <p className="num-count-down">03</p>
                                        <p className="value-count-down">days</p>
                                    </div>
                                    <div className="count-down-sec">
                                        <p className="num-count-down">03</p>
                                        <p className="value-count-down">hours</p>
                                    </div>
                                    <div className="count-down-sec">
                                        <p className="num-count-down">03</p>
                                        <p className="value-count-down">minutes</p>
                                    </div>
                                    <div className="count-down-sec">
                                        <p className="num-count-down">03</p>
                                        <p className="value-count-down">seconds</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ind-content-2 integration-submit">
                                <button className="submit">
                                    <div className="slide-integ-submit">

                                        <p style={{ textTransform: "uppercase" }} className="int-submit-text">sign up now</p>
                                    </div>
                                    <p style={{ textTransform: "uppercase" }} className="int-submit-text">sign up now</p>
                                </button>
                            </div>
                        </div>

                    </div>
                    <img src="./industory.png" alt="industory" />
                </div>
            </div>

            <div className="client-share-exp">
                <div className="client-share-exp-text">
                    <TitleAndDescriptionForSection icon={false} title={"satisfied clients share their experience"} description={"hear from our customers"} />
                    {/* <div className="witness_the_efficiency-title-section">
                            <div className="witness_the_efficiency-title">
                                <span>hear from our customers</span>
                            </div>
                            <div className="witness_the_efficiency-text1">
                                <span>Satisfied Clients Share Their Experience</span>
                            </div>
                        </div> */}
                </div>
                <div ref={clientShareExpContentRef} className="client-share-exp-slider">

                    {clientExperienseCommentsList.map((comm, index) => {
                        return (
                            <div className={index == selectedClientIndex ? "client-share-exp-content active-comment" : "client-share-exp-content"}>
                                <div className="client-img">
                                    <img src={comm.profPicPath} alt="client-img" />
                                </div>
                                <div className="client-centent">
                                    <div className="_comma_">
                                        <img src="./coma_letter.png" alt="coma_letter.png" />
                                    </div>
                                    <div>
                                        <p className="client-centent-detail">{comm.comment}</p>
                                        <div>
                                            <p className="comp-name">{comm.name}</p>
                                            <p className="client-occ">{comm.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                    }

                    {/* <div className="client-share-exp-content">
                        <div className="client-img">
                            <img src="./client.png" alt="client-img" />
                        </div>
                        <div className="client-centent">
                            <div className="_comma_">
                                <img src="./coma_letter.png" alt="coma_letter.png" />
                            </div>
                            <div>
                                <p className="client-centent-detail">Iusto quia perspiciatis inventore tempora. Velit vitae tempora et laborum id soluta est ut laboriosam. Eveniet possimus autem ratione aliquid in sunt tempora. Amet rerum suscipit distinctio voluptas. In quis voluptas necessitatibus et aut dolor ut quod. Sapiente et adipisci tenetur voluptatibus qui.</p>
                                <div>
                                    <p className="comp-name">Daisy Welch</p>
                                    <p className="client-occ">Chief Branding Producer</p>
                                </div>
                            </div>

                        </div>
                    </div> */}
                    {/* <div className="client-share-exp-content">
                        <div className="client-img">
                            <img src="./client.png" alt="client-img" />
                        </div>
                        <div className="client-centent">
                        <div className="_comma_">
                                <img src="./coma_letter.png" alt="coma_letter.png" />
                            </div>
                            <div>
                                <p className="client-centent-detail">Iusto quia perspiciatis inventore tempora. Velit vitae tempora et laborum id soluta est ut laboriosam. Eveniet possimus autem ratione aliquid in sunt tempora. Amet rerum suscipit distinctio voluptas. In quis voluptas necessitatibus et aut dolor ut quod. Sapiente et adipisci tenetur voluptatibus qui.</p>
                                <div>
                                    <p className="comp-name">Daisy Welch</p>
                                    <p className="client-occ">Chief Branding Producer</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="client-list-outer">
                    <div className="client-list">
                        {
                            iconsList.map((el, ind) => {
                                return (
                                    <div className={selectedClientIndex == ind ? "exp-imgs active-exp-img" : "exp-imgs"}>
                                        <img src={el.companyLogo} alt="client-list" />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            <Container>
                <div className="ready-transform-business">
                    <img src="./laptop_with_boxes.png" alt="laptop_with_boxes" width={"100%"} height={"100%"} />
                    <div className="overlay-content-transform-business">

                        <div className="v-slider">

                            <div className="v-slider-1">
                                <div className="main-slider-section">
                                    <img src="./slider_1.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_2.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_3.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_4.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_5.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_6.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_7.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_8.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_9.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_10.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_1.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_2.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_3.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_4.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_5.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_6.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_7.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_8.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_9.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_10.png" alt="cards_playing" />
                                </div>
                            </div>
                            <div className="v-slider-2">
                                <div className="main-slider-section">
                                    <img src="./slider_1.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_2.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_3.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_4.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_5.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_6.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_7.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_8.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_9.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_10.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_1.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_2.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_3.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_4.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_5.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_6.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_7.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_8.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_9.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_10.png" alt="cards_playing" />
                                </div>
                            </div>
                            <div className="v-slider-3">
                                <div className="main-slider-section">
                                    <img src="./slider_1.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_2.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_3.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_4.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_5.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_6.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_7.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_8.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_9.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_10.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_1.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_2.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_3.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_4.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_5.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_6.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_7.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_8.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_9.png" alt="cards_playing" />
                                </div>
                                <div className="main-slider-section">
                                    <img src="./slider_10.png" alt="cards_playing" />
                                </div>
                            </div>
                        </div>
                        <div className="transform-business-content">
                            <div>
                                <p className="transform-business-content-para-1">Ready to <span className="text-platform">Transform</span>  Your Business?</p>
                                <p className="transform-business-content-para-2">Take the next step towards transforming your business with Lynnc. Contact us today to discuss your organization's specific needs and requirements</p>
                            </div>
                            <div>
                                {/* <button className="req-demo-btn">

                                    <svg width="241" height="57" viewBox="0 0 241 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="241" height="57" rx="28.5" fill="#183F30" />
                                        <path d="M63.24 21.6132C65.1524 21.6132 66.6121 21.9638 67.6193 22.6651C68.6393 23.3663 69.1493 24.4372 69.1493 25.8779C69.1493 27.6755 68.2632 28.8931 66.491 29.5306C66.7333 29.8238 67.0074 30.1808 67.3134 30.6015C67.6193 31.0222 67.9317 31.4812 68.2504 31.9784C68.5692 32.4629 68.8751 32.9665 69.1684 33.4892C69.4616 33.9992 69.723 34.5028 69.9525 35H67.256C67.0138 34.541 66.7524 34.0821 66.4719 33.6231C66.1914 33.1514 65.9046 32.6988 65.6113 32.2653C65.3308 31.8191 65.0504 31.4047 64.7699 31.0222C64.4894 30.627 64.228 30.2764 63.9858 29.9704C63.8073 29.9832 63.6543 29.9895 63.5268 29.9895C63.3993 29.9895 63.2782 29.9895 63.1635 29.9895H61.9969V35H59.5873V21.9383C60.1738 21.8109 60.7985 21.728 61.4614 21.6897C62.1244 21.6387 62.7172 21.6132 63.24 21.6132ZM63.4121 23.6978C62.9021 23.6978 62.4304 23.7169 61.9969 23.7551V28.0389H63.0487C63.6352 28.0389 64.1515 28.007 64.5978 27.9433C65.044 27.8795 65.4137 27.7648 65.7069 27.599C66.0129 27.4333 66.2424 27.2102 66.3954 26.9297C66.5484 26.6492 66.6249 26.2922 66.6249 25.8588C66.6249 25.4508 66.5484 25.1065 66.3954 24.8261C66.2424 24.5456 66.0193 24.3225 65.7261 24.1567C65.4456 23.991 65.1077 23.8762 64.7125 23.8125C64.3173 23.736 63.8838 23.6978 63.4121 23.6978ZM71.1505 30.0469C71.1505 29.1672 71.278 28.3959 71.533 27.7329C71.8008 27.0699 72.1514 26.5217 72.5848 26.0882C73.0183 25.642 73.5155 25.3105 74.0765 25.0938C74.6375 24.8643 75.2112 24.7496 75.7977 24.7496C77.1746 24.7496 78.2455 25.1767 79.0105 26.0309C79.7882 26.8851 80.177 28.16 80.177 29.8557C80.177 29.9832 80.1707 30.1298 80.1579 30.2955C80.1579 30.4485 80.1515 30.5887 80.1388 30.7162H73.541C73.6048 31.5194 73.8853 32.1442 74.3825 32.5904C74.8925 33.0239 75.6255 33.2406 76.5817 33.2406C77.1427 33.2406 77.6527 33.1896 78.1117 33.0876C78.5834 32.9856 78.9531 32.8772 79.2209 32.7625L79.5268 34.6558C79.3993 34.7195 79.2209 34.7896 78.9914 34.8661C78.7746 34.9299 78.5196 34.9873 78.2264 35.0382C77.9459 35.102 77.6399 35.153 77.3085 35.1912C76.977 35.2295 76.6391 35.2486 76.2949 35.2486C75.4152 35.2486 74.6502 35.1211 74 34.8661C73.3498 34.5984 72.8143 34.235 72.3936 33.7761C71.9729 33.3043 71.6605 32.7561 71.4565 32.1314C71.2525 31.4939 71.1505 30.7991 71.1505 30.0469ZM77.8631 29.0142C77.8631 28.6955 77.8184 28.3959 77.7292 28.1154C77.6399 27.8221 77.5061 27.5735 77.3276 27.3695C77.1618 27.1528 76.9515 26.9871 76.6965 26.8723C76.4543 26.7448 76.161 26.6811 75.8168 26.6811C75.4598 26.6811 75.1475 26.7512 74.8797 26.8914C74.612 27.0189 74.3825 27.1911 74.1913 27.4078C74.0128 27.6245 73.8725 27.8731 73.7705 28.1536C73.6685 28.4341 73.5984 28.721 73.5602 29.0142H77.8631ZM84.4472 30.0469C84.4472 31.0158 84.6385 31.7872 85.0209 32.3609C85.4162 32.9346 86.0345 33.2215 86.876 33.2215C87.2584 33.2215 87.6154 33.1641 87.9469 33.0494C88.2911 32.9219 88.5652 32.788 88.7692 32.6478V26.9297C88.6035 26.8914 88.3931 26.8596 88.1381 26.8341C87.8959 26.7958 87.5772 26.7767 87.1819 26.7767C86.3277 26.7767 85.6584 27.0699 85.1739 27.6564C84.6895 28.2301 84.4472 29.027 84.4472 30.0469ZM82.0758 30.0087C82.0758 29.2182 82.1906 28.5042 82.4201 27.8668C82.6623 27.2166 83.0002 26.6683 83.4336 26.2221C83.8799 25.7631 84.4153 25.4125 85.0401 25.1703C85.6648 24.9153 86.3724 24.7878 87.1628 24.7878C87.9533 24.7878 88.6927 24.8452 89.3812 24.9599C90.0697 25.0747 90.637 25.1958 91.0832 25.3233V38.5379H88.7692V34.6558C88.5015 34.796 88.17 34.9235 87.7748 35.0382C87.3923 35.153 86.9652 35.2104 86.4935 35.2104C85.7795 35.2104 85.1484 35.0892 84.6002 34.847C84.052 34.592 83.593 34.235 83.2233 33.7761C82.8536 33.3171 82.5667 32.7689 82.3627 32.1314C82.1715 31.4939 82.0758 30.7864 82.0758 30.0087ZM102.227 34.694C101.781 34.8088 101.2 34.9235 100.487 35.0382C99.7726 35.1657 98.9885 35.2295 98.1343 35.2295C97.3311 35.2295 96.6554 35.1147 96.1071 34.8853C95.5717 34.6558 95.1382 34.337 94.8067 33.9291C94.488 33.5211 94.2585 33.0366 94.1183 32.4756C93.978 31.9019 93.9079 31.2772 93.9079 30.6015V24.9982H96.2219V30.2381C96.2219 31.3091 96.3749 32.074 96.6809 32.533C96.9996 32.992 97.5478 33.2215 98.3255 33.2215C98.606 33.2215 98.8992 33.2087 99.2052 33.1832C99.524 33.1577 99.7598 33.1259 99.9128 33.0876V24.9982H102.227V34.694ZM104.617 30.0469C104.617 29.1672 104.745 28.3959 105 27.7329C105.268 27.0699 105.618 26.5217 106.052 26.0882C106.485 25.642 106.982 25.3105 107.543 25.0938C108.104 24.8643 108.678 24.7496 109.265 24.7496C110.641 24.7496 111.712 25.1767 112.477 26.0309C113.255 26.8851 113.644 28.16 113.644 29.8557C113.644 29.9832 113.638 30.1298 113.625 30.2955C113.625 30.4485 113.618 30.5887 113.606 30.7162H107.008C107.072 31.5194 107.352 32.1442 107.849 32.5904C108.359 33.0239 109.092 33.2406 110.049 33.2406C110.61 33.2406 111.12 33.1896 111.579 33.0876C112.05 32.9856 112.42 32.8772 112.688 32.7625L112.994 34.6558C112.866 34.7195 112.688 34.7896 112.458 34.8661C112.242 34.9299 111.987 34.9873 111.693 35.0382C111.413 35.102 111.107 35.153 110.775 35.1912C110.444 35.2295 110.106 35.2486 109.762 35.2486C108.882 35.2486 108.117 35.1211 107.467 34.8661C106.817 34.5984 106.281 34.235 105.86 33.7761C105.44 33.3043 105.127 32.7561 104.923 32.1314C104.719 31.4939 104.617 30.7991 104.617 30.0469ZM111.33 29.0142C111.33 28.6955 111.285 28.3959 111.196 28.1154C111.107 27.8221 110.973 27.5735 110.794 27.3695C110.629 27.1528 110.418 26.9871 110.163 26.8723C109.921 26.7448 109.628 26.6811 109.284 26.6811C108.927 26.6811 108.614 26.7512 108.347 26.8914C108.079 27.0189 107.849 27.1911 107.658 27.4078C107.48 27.6245 107.339 27.8731 107.237 28.1536C107.135 28.4341 107.065 28.721 107.027 29.0142H111.33ZM118.603 33.3362C119.215 33.3362 119.661 33.2661 119.941 33.1259C120.222 32.9729 120.362 32.7179 120.362 32.3609C120.362 32.0294 120.209 31.7553 119.903 31.5386C119.61 31.3218 119.119 31.086 118.43 30.831C118.01 30.678 117.621 30.5186 117.264 30.3529C116.92 30.1744 116.62 29.9704 116.365 29.7409C116.11 29.5114 115.906 29.2373 115.753 28.9186C115.613 28.5871 115.543 28.1855 115.543 27.7138C115.543 26.7958 115.881 26.0755 116.556 25.5528C117.232 25.0173 118.15 24.7496 119.31 24.7496C119.897 24.7496 120.458 24.8069 120.993 24.9217C121.529 25.0237 121.93 25.1257 122.198 25.2277L121.777 27.1018C121.522 26.9871 121.197 26.8851 120.802 26.7958C120.407 26.6938 119.948 26.6428 119.425 26.6428C118.953 26.6428 118.571 26.7257 118.277 26.8914C117.984 27.0444 117.838 27.2867 117.838 27.6182C117.838 27.7839 117.863 27.9305 117.914 28.058C117.978 28.1855 118.08 28.3066 118.22 28.4214C118.36 28.5234 118.545 28.6317 118.775 28.7465C119.004 28.8485 119.285 28.9568 119.616 29.0716C120.164 29.2756 120.63 29.4796 121.012 29.6835C121.395 29.8748 121.707 30.0979 121.949 30.3529C122.204 30.5951 122.389 30.8756 122.504 31.1943C122.619 31.5131 122.676 31.8955 122.676 32.3418C122.676 33.298 122.319 34.0247 121.605 34.5219C120.904 35.0064 119.897 35.2486 118.583 35.2486C117.704 35.2486 116.996 35.1721 116.461 35.0191C115.925 34.8789 115.549 34.7641 115.332 34.6749L115.734 32.7434C116.078 32.8836 116.486 33.0175 116.958 33.145C117.442 33.2725 117.991 33.3362 118.603 33.3362ZM124.723 22.3591L127.037 21.9766V24.9982H130.594V26.9297H127.037V31.0031C127.037 31.8063 127.164 32.38 127.419 32.7243C127.674 33.0685 128.108 33.2406 128.72 33.2406C129.14 33.2406 129.51 33.196 129.829 33.1067C130.16 33.0175 130.422 32.9346 130.613 32.8581L130.995 34.694C130.728 34.8088 130.377 34.9235 129.944 35.0382C129.51 35.1657 129 35.2295 128.414 35.2295C127.7 35.2295 127.101 35.1339 126.616 34.9426C126.144 34.7514 125.768 34.4773 125.488 34.1203C125.207 33.7506 125.01 33.3107 124.895 32.8007C124.78 32.278 124.723 31.6852 124.723 31.0222V22.3591ZM140.813 33.3745C141.527 33.3745 142.069 33.3362 142.439 33.2597V30.6971C142.311 30.6589 142.126 30.6206 141.884 30.5824C141.642 30.5441 141.374 30.525 141.081 30.525C140.826 30.525 140.564 30.5441 140.297 30.5824C140.042 30.6206 139.806 30.6907 139.589 30.7927C139.385 30.8947 139.219 31.0413 139.092 31.2326C138.964 31.4111 138.901 31.6406 138.901 31.921C138.901 32.4693 139.073 32.8517 139.417 33.0685C139.761 33.2725 140.227 33.3745 140.813 33.3745ZM140.622 24.7496C141.387 24.7496 142.031 24.8452 142.553 25.0364C143.076 25.2277 143.49 25.4954 143.796 25.8396C144.115 26.1839 144.338 26.6046 144.466 27.1018C144.606 27.5863 144.676 28.1218 144.676 28.7082V34.7705C144.319 34.847 143.777 34.9363 143.051 35.0382C142.337 35.153 141.527 35.2104 140.622 35.2104C140.023 35.2104 139.474 35.153 138.977 35.0382C138.48 34.9235 138.053 34.7386 137.696 34.4837C137.352 34.2287 137.078 33.8972 136.874 33.4892C136.682 33.0812 136.587 32.5776 136.587 31.9784C136.587 31.4047 136.695 30.9202 136.912 30.525C137.141 30.1298 137.447 29.811 137.83 29.5688C138.212 29.3138 138.652 29.1353 139.149 29.0333C139.659 28.9186 140.188 28.8612 140.737 28.8612C140.992 28.8612 141.259 28.8803 141.54 28.9186C141.82 28.9441 142.12 28.9951 142.439 29.0716V28.6891C142.439 28.4214 142.407 28.1664 142.343 27.9241C142.279 27.6819 142.165 27.4715 141.999 27.2931C141.846 27.1018 141.635 26.9552 141.368 26.8532C141.113 26.7512 140.788 26.7002 140.392 26.7002C139.857 26.7002 139.366 26.7385 138.92 26.815C138.474 26.8914 138.11 26.9807 137.83 27.0827L137.543 25.2085C137.836 25.1065 138.263 25.0046 138.824 24.9026C139.385 24.8006 139.984 24.7496 140.622 24.7496ZM154.498 33.0111C154.638 33.0239 154.823 33.0366 155.052 33.0494C155.282 33.0494 155.594 33.0494 155.989 33.0494C157.609 33.0494 158.813 32.6414 159.604 31.8254C160.407 30.9967 160.809 29.8429 160.809 28.364C160.809 26.8596 160.42 25.7058 159.642 24.9026C158.864 24.0994 157.66 23.6978 156.028 23.6978C155.314 23.6978 154.804 23.7169 154.498 23.7551V33.0111ZM163.333 28.364C163.333 29.5114 163.155 30.5122 162.798 31.3665C162.441 32.2079 161.931 32.9155 161.268 33.4892C160.617 34.0502 159.827 34.4709 158.896 34.7514C157.978 35.0191 156.958 35.153 155.836 35.153C155.301 35.153 154.695 35.1275 154.02 35.0765C153.344 35.0382 152.7 34.949 152.088 34.8088V21.9383C152.7 21.7981 153.35 21.7089 154.039 21.6706C154.727 21.6324 155.339 21.6132 155.875 21.6132C156.984 21.6132 157.997 21.7471 158.915 22.0148C159.833 22.2698 160.617 22.6778 161.268 23.2388C161.931 23.787 162.441 24.4882 162.798 25.3424C163.155 26.1839 163.333 27.1911 163.333 28.364ZM165.295 30.0469C165.295 29.1672 165.422 28.3959 165.677 27.7329C165.945 27.0699 166.296 26.5217 166.729 26.0882C167.163 25.642 167.66 25.3105 168.221 25.0938C168.782 24.8643 169.356 24.7496 169.942 24.7496C171.319 24.7496 172.39 25.1767 173.155 26.0309C173.933 26.8851 174.321 28.16 174.321 29.8557C174.321 29.9832 174.315 30.1298 174.302 30.2955C174.302 30.4485 174.296 30.5887 174.283 30.7162H167.685C167.749 31.5194 168.03 32.1442 168.527 32.5904C169.037 33.0239 169.77 33.2406 170.726 33.2406C171.287 33.2406 171.797 33.1896 172.256 33.0876C172.728 32.9856 173.097 32.8772 173.365 32.7625L173.671 34.6558C173.544 34.7195 173.365 34.7896 173.136 34.8661C172.919 34.9299 172.664 34.9873 172.371 35.0382C172.09 35.102 171.784 35.153 171.453 35.1912C171.121 35.2295 170.783 35.2486 170.439 35.2486C169.56 35.2486 168.795 35.1211 168.144 34.8661C167.494 34.5984 166.959 34.235 166.538 33.7761C166.117 33.3043 165.805 32.7561 165.601 32.1314C165.397 31.4939 165.295 30.7991 165.295 30.0469ZM172.007 29.0142C172.007 28.6955 171.963 28.3959 171.873 28.1154C171.784 27.8221 171.65 27.5735 171.472 27.3695C171.306 27.1528 171.096 26.9871 170.841 26.8723C170.599 26.7448 170.305 26.6811 169.961 26.6811C169.604 26.6811 169.292 26.7512 169.024 26.8914C168.756 27.0189 168.527 27.1911 168.336 27.4078C168.157 27.6245 168.017 27.8731 167.915 28.1536C167.813 28.4341 167.743 28.721 167.704 29.0142H172.007ZM182.474 29.7409C182.474 28.6955 182.34 27.9433 182.072 27.4843C181.817 27.0126 181.333 26.7767 180.619 26.7767C180.364 26.7767 180.083 26.7958 179.777 26.8341C179.471 26.8723 179.242 26.9042 179.089 26.9297V35H176.775V25.3233C177.221 25.1958 177.801 25.0747 178.515 24.9599C179.242 24.8452 180.007 24.7878 180.81 24.7878C181.498 24.7878 182.059 24.8771 182.493 25.0556C182.939 25.234 183.309 25.4699 183.602 25.7631C183.742 25.6611 183.921 25.5528 184.137 25.438C184.354 25.3233 184.596 25.2213 184.864 25.132C185.132 25.0301 185.412 24.9472 185.706 24.8834C186.012 24.8197 186.318 24.7878 186.624 24.7878C187.401 24.7878 188.039 24.9026 188.536 25.132C189.046 25.3488 189.441 25.6611 189.722 26.0691C190.015 26.4643 190.213 26.9488 190.315 27.5225C190.429 28.0835 190.487 28.7018 190.487 29.3776V35H188.173V29.7409C188.173 28.6955 188.045 27.9433 187.79 27.4843C187.535 27.0126 187.044 26.7767 186.318 26.7767C185.948 26.7767 185.597 26.8405 185.266 26.9679C184.934 27.0827 184.686 27.1974 184.52 27.3122C184.622 27.6309 184.692 27.9688 184.73 28.3257C184.769 28.6827 184.788 29.0652 184.788 29.4732V35H182.474V29.7409ZM202.367 29.9895C202.367 30.78 202.252 31.5003 202.023 32.1505C201.793 32.8007 201.468 33.3553 201.048 33.8143C200.627 34.2733 200.117 34.6303 199.518 34.8853C198.931 35.1402 198.281 35.2677 197.567 35.2677C196.853 35.2677 196.203 35.1402 195.616 34.8853C195.03 34.6303 194.526 34.2733 194.106 33.8143C193.685 33.3553 193.353 32.8007 193.111 32.1505C192.882 31.5003 192.767 30.78 192.767 29.9895C192.767 29.1991 192.882 28.4851 193.111 27.8476C193.353 27.1974 193.685 26.6428 194.106 26.1839C194.539 25.7249 195.049 25.3743 195.635 25.132C196.222 24.8771 196.866 24.7496 197.567 24.7496C198.268 24.7496 198.912 24.8771 199.498 25.132C200.098 25.3743 200.608 25.7249 201.028 26.1839C201.449 26.6428 201.774 27.1974 202.004 27.8476C202.246 28.4851 202.367 29.1991 202.367 29.9895ZM199.996 29.9895C199.996 28.9951 199.779 28.211 199.345 27.6373C198.925 27.0508 198.332 26.7576 197.567 26.7576C196.802 26.7576 196.203 27.0508 195.769 27.6373C195.349 28.211 195.138 28.9951 195.138 29.9895C195.138 30.9967 195.349 31.7936 195.769 32.38C196.203 32.9665 196.802 33.2597 197.567 33.2597C198.332 33.2597 198.925 32.9665 199.345 32.38C199.779 31.7936 199.996 30.9967 199.996 29.9895Z" fill="#C2C8B6" />
                                        <g clip-path="url(#clip0_3320_16811)">
                                            <path d="M38.2956 33.4672L37.444 32.6306L40.7907 29.2839H33.5146V28.0886H40.7907L37.444 24.7419L38.2956 23.9053L43.0766 28.6863L38.2956 33.4672Z" fill="#C2C8B6" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3320_16811">
                                                <rect width="9.56197" height="9.56197" fill="white" transform="translate(33.5146 23.9053)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button> */}
                                <button className="download-lyncc-prof">
                                    <div className="slide-download-lyncc-prof">
                                        {/* <div className="profile-download-arrow">
                                            <img src="./arrow-up.png" alt="arrow" height={"100%"} width={"100%"} />

                                        </div> */}
                                        <p>Request a Demo</p>
                                    </div>
                                    <div style={{ transform: "rotate(270deg)" }} className="profile-download-arrow">
                                        <img src="./arrow-up.png" alt="arrow" height={"50%"} width={"50%"} />

                                    </div>
                                    <p>Request a Demo</p>


                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="footer-outer">
                <Footer />
            </div>

        </>
    )
}

export default Home;