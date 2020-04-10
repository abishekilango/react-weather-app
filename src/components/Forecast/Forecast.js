import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import Form from '../Form/Form';

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    function getForecast(e) {
        e.preventDefault();

        if (city.length === 0) {
            setError(true);
            return;
        }

        setError(false);
        setResponseObj({});
        setLoading(true);

        const uriEncodedCity = encodeURIComponent(city);

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        })
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error();
            }

            setResponseObj(response);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.log(err.message);
        });
    }

    return (
        <div>
            <Form
                getForecast={getForecast}
                city={city}
                setCity={setCity}
                unit={unit}
                setUnit={setUnit}
                />
            <Conditions
                responseObj={responseObj}
                error={error}
                loading={loading}
                />
        </div>
    );
}

export default Forecast;