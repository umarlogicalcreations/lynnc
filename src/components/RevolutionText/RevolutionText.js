import "./Revolution.css"
import GetStarted from "../GetStarted/GetStarted";
import Social from "../SocialIcons/social";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function RevolutionText() { 
    const changeWordList = ["order","sync","simplified"];
    const [changeWord, setChangeWord] = useState(changeWordList[0]);
    

    const chnageWordAuto = () =>{
        let count = 0;
        setInterval(() => {
            
            setChangeWord(changeWordList[count]); 
            //this is comment
            count = count+1;
            if(count > 2){
                count = 0;
            }     
        }, 2000);
    }
    useEffect(()=>{
        chnageWordAuto()
    },[])
    return (
        <div className="revolution-outer">
            <Container>
                <div className="revolution-inner">
                    <div className="revolution-section">
                        <p className="p1">Revolutionize your business with smart solutions</p>
                        {/* <p className="p2">LYNCC <span className="revo-special">{changeWord}</span></p> */}
                        <p className="p2">LYNCC <div className="revo-special"> <p className="revo-special-text">Order Sync Simplified Order</p> </div></p>
                        <GetStarted />
                    </div>
                    <div>
                        <Social />
                    </div>
                </div>
            </Container>
        </div>
    );
}