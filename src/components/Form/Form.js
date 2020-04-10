import React from 'react';
import classes from './Form.module.css';

const Form = (props) => (
    <div>
        <h2>Find Current Weather Conditions</h2>
        <form onSubmit={props.getForecast}>
            <input
                type="text"
                placeholder="Enter City"
                maxLength="50"
                className={classes.TextInput}
                value={props.city}
                onChange={(e) => props.setCity(e.target.value)}
                />
            <label className={classes.Radio}>
                <input
                    type="radio"
                    name="units"
                    checked={props.unit === "metric"}
                    value="metric"
                    onChange={(e) => props.setUnit(e.target.value)}
                    />
                    Celsius
            </label>
            <label className={classes.Radio}>
                <input
                    type="radio"
                    name="units"
                    checked={props.unit === "imperial"}
                    value="imperial"
                    onChange={(e) => props.setUnit(e.target.value)}
                    />
                    Fahrenheit
            </label>

            <button className={classes.Button} type="submit">Get Forecast</button>

        </form>
    </div>
)

export default Form;