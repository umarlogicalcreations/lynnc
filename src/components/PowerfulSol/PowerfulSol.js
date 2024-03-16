import { Container } from "react-bootstrap";
import "./PowerSol.css";
import TitleAndDescriptionForSection from "../TextTitleForHomePage/TittleHomePage"

const PowerSol = () => {
    return (

        <div className="powerful-content-main">
            <Container>
            <TitleAndDescriptionForSection icon={true} title={"LYNCC Solutions"} description={"Our Powerful Solutions"} />
                {/* <div className="powerful-content-main-heading">
                    
                    <span>Our Powerful Solutions</span>
                    
                </div> */}
                <div className="main-outer">
                    <div className="powerful-content-main-description">
                        <div className="man-with-cap">
                            <img src="./man_with_cap.jpg" alt="man_with_cap" />
                        </div>
                        <div className="text-menu-engineering">
                            <div className="text-menu-engineering-section">
                                <div className="menu-engineering-text">
                                    <span>Menu Engineering</span>
                                </div>
                                <div className="menu-text-description">
                                    <span>Stay competitive by keeping your menus updated across all delivery platforms. Attract more customers and drive higher sales with current and compelling offerings</span>

                                </div>
                            </div>
                            <div>
                                <button className="read-more-green">
                                    <span>Read More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="image-section">
                        <div className="img-1">
                            <div className="box_1_text">
                                <span>order management</span>
                            </div>
                        </div>
                        <div className="laptop-1">
                            <div className="box_1_text">
                                <span>analytical dashboard</span>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>

    )
}

export default PowerSol;