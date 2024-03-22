import "./scrollUpBtn.css";

const ScrollUpBtn = () => {
    const gotoTopWindow = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        // <button className="FooterScrollUpBtnBtnStyle" onClick={gotoTopWindow}>
        //     <div className="btn-arrow-style">
        //         <img className="arrow-style" src="./arrow-up.png"alt="arrow-up" />
        //     </div>
        // </button>
            <button className="FooterScrollUpBtnBtnStyle" onClick={gotoTopWindow}>
            
            <div className="btn-arrow-style">
            <div className="btn-arrow-border">
                <img className="arrow-style" src="./arrow-up.png"alt="arrow-up" />
            </div>
            </div>
        </button>
        )
}

export default ScrollUpBtn