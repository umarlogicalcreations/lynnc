import "./homemenu.css"
import LynccLogo from "../lyncc-logo/LynccLogo"

import Link from "next/link" 


export default function HomeMenu() {
    return (
        <>
            <div className="home-menu-outer">

                <div className="home-menu-inner">
                    <div className="logo-lyncc">

                        <LynccLogo />

                    </div>
                    <div className="menu-section">
                        <div className="main-menu-btns">
                            <div>
                                <Link href="/" >
                                   <span className="menu-item">Home</span> 
                                </Link>
                            </div>
                            <div>
                            <Link href="/Pricing">
                                   <span className="menu-item">Solution</span> 
                                </Link></div>
                            <div>
                            <Link href="/Pricing">
                                   <span className="menu-item">Integration</span> 
                                </Link>
                            </div>
                            <div><Link href="/Pricing">
                                   <span className="menu-item">Benefits</span> 
                                </Link></div>
                            <div><Link href="/Pricing">
                                   <span className="menu-item">Resources</span> 
                                </Link></div>
                            <div>
                                <Link href="/Pricing">
                                   <span className="menu-item">Pricing</span> 
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="language-dropdown">
                        <p style={{color:"white"}}>العربية</p>
                    </div>
                </div>
            </div>
        </>
    );
}
