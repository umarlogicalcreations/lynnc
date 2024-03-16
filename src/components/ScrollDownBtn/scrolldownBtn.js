import "./scrolldownBtn.css";

const ScrollDown = () => {
    const gotoBottomWindow = () =>{
        window.scroll({
            top:document.body.scrollHeight,
            behavior: "smooth",
        })
    }
    return (
        // <button className="scrolldownBtnStyle" onClick={gotoBottomWindow}>
        //     <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <path d="M25.5995 20.4426L17.0003 29.0417L8.40112 20.4426" stroke="white" stroke-width="2.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        //         <path d="M17 4.95828L17 28.8008" stroke="white" stroke-width="2.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        //     </svg>

        // </button>
        <button className="scrolldownBtnStyle" onClick={gotoBottomWindow}>
            <div className="btn-arrow-style">
                <img src="./arrow-up.png"alt="arrow-up" />
            </div>
        </button>
    )
}

export default ScrollDown