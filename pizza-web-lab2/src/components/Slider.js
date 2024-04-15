import React from "react";
import '../App.css';

function Slider() {
    return (
        <div>
            <div className="slide">
                <img src="/images/pizza1.jpg" alt="pizza1" />
                <div className="slide-title">
                    Neapolitan Pizza
                </div>
                <div className="slide-text">
                    If you are looking for a traditional Italian pizza the Neapolitan is the best option
                </div>
            </div>
        </div>
    );
}

export default Slider;