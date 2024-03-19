import { useState } from "react"
import "./WebinarTicker.css"

export default function WebinarTicker() {
    const [isOpen, setIsOpen] = useState(true);
    const toggleWebinarTicker = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            {isOpen && <div className="pop-header" onClick={toggleWebinarTicker}>
                <div className="remaining-time"><p>3 Weeks - 2 Days - 10 hours - 45 Minutes</p></div>
                <div className="attend-webinar"><p>To attend our webinar series Need For Speed</p></div>
                <div>
                    <button className="sign-up-btn"><p> Sign Up</p></button>
                </div>
                <div>
                    <button className="cross-btn">
                        <img src="./cross_icon.png" alt="cross" />
                    </button>
                </div>
            </div>}
        </>

    );
}