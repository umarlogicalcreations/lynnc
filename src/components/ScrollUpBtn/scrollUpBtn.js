import "./scrollUpBtn.css";

const ScrollUpBtn = () => {
    const gotoTopWindow = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        <button className="ScrollUpBtnBtnStyle" onClick={gotoTopWindow}>
            <div className="btn-arrow-style">
                <img src="./arrow-up.png"alt="arrow-up" />
            </div>
        </button>
    )
}

export default ScrollUpBtn