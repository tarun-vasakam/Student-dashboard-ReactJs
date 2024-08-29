import React from "react";

function Displaybox(props){
    return(
        <div className="display-main" style={props.style}>
            <div className="display-left">
                {props.svg}
            </div>
            <div className="display-right">
                <div className="display-title">
                    <h2>{props.title}</h2>
                </div>
                <div className="display-count">
                    <h1>{props.count}<span>%</span></h1>
                </div>
            </div>
        </div>
    );
}
export default Displaybox;