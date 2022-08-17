import { React, useEffect, useState } from 'react'
import './Covid.css';

const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const data = await res.json();
            //console.log(data.statewise[0]);
            setData(data.statewise[0])
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCovidData();

    }, []);
    return (
        <>
            <div className='header'>
                <h1>Covid-19 Case Tracker</h1>
            </div>
            <div className="container">
                <ul>
                    
                        <li className='card'>
                            <div className='card_main'>
                                <div className='card_inner'>
                                    <p className='card_name'>COUNTRY</p>
                                    <p className='card_total'>India</p>

                                </div>
                            </div>

                        </li>
                        <li className='card'>
                            <div className='card_main'>
                                <div className='card_inner'>
                                    <p className='card_name'>Total Recovered</p>
                                    <p className='card_total'>{data.recovered}</p>

                                </div>
                            </div>

                        </li>
                        <li className='card'>
                            <div className='card_main'>
                                <div className='card_inner'>
                                    <p className='card_name'>Total Confirmed</p>
                                    <p className='card_total'>{data.confirmed}</p>

                                </div>
                            </div>

                        </li>
                        <li className='card'>
                            <div className='card_main'>
                                <div className='card_inner'>
                                    <p className='card_name'>Total Death</p>
                                    <p className='card_total'>{data.deaths}</p>

                                </div>
                            </div>

                        </li>
                        <li className='card'>
                            <div className='card_main'>
                                <div className='card_inner'>
                                    <p className='card_name'>Total Active</p>
                                    <p className='card_total'>{data.active}</p>

                                </div>
                            </div>

                        </li>
                        <li className='card'>
                            <div className='card_main'>
                                <div className='card_inner'>
                                    <p className='card_name'>Total Updated</p>
                                    <p className='card_total'>{data.lastupdatedtime}</p>

                                </div>
                            </div>

                        </li>
                   

                </ul>
            </div>

            <div className="footer">
                <h2>Be Safe & Be Carefull</h2>
            </div>

        </>
    )
}

export default Covid
