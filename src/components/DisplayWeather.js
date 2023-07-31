import React from "react";
import "./displayweather.css";
function DisplayWeather(props) {
    console.log('props' + props);
    const {data} = props;
    return (
        <div className="displayweather">

        </div>
    );
}

export default DisplayWeather;