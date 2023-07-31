import React, {useState} from 'react'
import './weather.css'
import DisplayWeather from "./DisplayWeather";

function Weather() {

    const APIKEY = "5584a44cbca255724022cd13e71780c3";

    const [form, setForm] = useState({
        city: "",
        country: ""
    })

    const [weather, setWeather] = useState([]);

    async function weatherData(event){
        event.preventDefault();
        if(form.city === ""){
            alert("Add Values");
        }else{
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
            ).then((res) => res.json()
            ).then((data) => data);

            setWeather({
                data: data
            });
        }
    }

    const handleChange = (event) => {
         let name = event.target.name;
         let value = event.target.value;

         if(name === "city"){
             setForm({...form, city: value});
         }

         if(name === "country"){
            setForm({...form, country: value});
         }
         console.log(form.city, form.country);
    }

    return (
        <div className="weather">
            <span className="title">Weather App</span>
            <br/>

            <form>
                <input
                    type="text"
                    name="city"
                    placeholder="city"
                    onChange={event => handleChange(event)}/>
                <input
                    type="text"
                    name="country"
                    placeholder="country"
                    onChange={event => handleChange(event)}/>
                <button
                    className="getweather"
                    onClick={(event) => weatherData(event)}>
                    Submit
                </button>
            </form>

            {
                weather.data !== undefined ?
                <div>
                    <DisplayWeather data={weather.data} />
                </div>
                : null
            }
        </div>
    )
}

export default Weather