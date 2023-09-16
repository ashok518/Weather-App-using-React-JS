import React, { useEffect, useState } from 'react'
import "./style.css";

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=df935c12b8d2c3c91da227a77a882fbb`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson);
        };
        fetchApi();
    }, [search])
    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input
                        type='search'
                        value={search}
                        className='inputField'
                        onChange={(event) => { setSearch(event.target.value) }} />
                </div>

                <div>
                    <div className='info'>
                        <h2 className='Location'>
                            <i class="fas fa-street-view"></i>{search}</h2>
                        <h1 className='temp'>
                           5.25° Cel </h1>
                        <h1 className='tempmin-max'>Min :5.25°Cel | Max : 5.25° Cel</h1>
                    </div>

                    <div className='wave -one'></div>
                    <div className='wave -two'></div>
                    <div className='wave -three'></div>
                </div>
            </div>
        </>
    )
}

export default Tempapp
