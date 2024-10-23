import Variable from "../Variable/Variable"
import { useState, useEffect } from 'react';
import './Temperatures.css';

function Temperatures() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);
    const [kelvin, setKelvin] = useState(0);

    function celsiusToFahrenheit(celsius) {
        return celsius * 9 / 5 + 32;
    }

    function celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }

    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    function fahrenheitToKelvin(fahrenheit) {
        return (fahrenheit + 459.67) * 5 / 9;
    }

    function kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }

    function kelvinToFahrenheit(kelvin) {
        return (kelvin * 9 / 5) - 459.67;
    }

    useEffect(() => {
        setFahrenheit(celsiusToFahrenheit(celsius));
        setKelvin(celsiusToKelvin(celsius));
    }, [celsius]);

    // useEffect(() => {
    //     setCelsius(fahrenheitToCelsius(fahrenheit));
    //     setKelvin(fahrenheitToKelvin(fahrenheit));
    // }, [fahrenheit]);

    // useEffect(() => {
    //     setCelsius(kelvinToCelsius(kelvin));
    //     setFahrenheit(kelvinToFahrenheit(kelvin));
    // }, [kelvin]);

    return ( 
    <div className="temperatures-container">
        <h3 className="temperatures-title">Temperatures</h3>
        <h3 className="temperatures-display">
            <span className="badge bg-primary">Celsius</span>
            <span className="badge bg-primary">Fahrenheit</span>
            <span className="badge bg-primary">Kelvin</span>
        </h3>
        <div className="temperatures-variables">
            <Variable type={'celsius'} name={celsius.toFixed(2) + "°C" || "0 °C"} value={celsius} setValue={setCelsius} />
            <Variable type={'fahrenheit'} name={fahrenheit.toFixed(2) + "°F" || "32 °F"} value={fahrenheit} setValue={setFahrenheit} />
            <Variable type={'kelvin'} name={kelvin.toFixed(2) + "°K" || "273.15 °K"} value={kelvin} setValue={setKelvin} />
        </div>
    </div>
    )
}

export default Temperatures;