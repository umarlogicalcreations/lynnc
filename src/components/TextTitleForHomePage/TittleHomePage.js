import "./TextTitleForHomePage.css"
const TittleForHomePage = ({ title, description ,icon }) => {
    return (
        <div className="witness_the_efficiency-title-section">
            {title && <div className="witness_the_efficiency-title">
                {icon && <div className="meet-us-arrow">
                    <img src="./arrow_meet_us_btn.png" alt="arrow_meet_us_btn" />
                </div>}
                
                <p>{title}</p>
            </div>}
            {description && <div className="witness_the_efficiency-text1">
                <span>{description}</span>
            </div>}

        </div>
    )
}

export default TittleForHomePage; 