import React, { useState, useEffect } from 'react'
import { IoMdSunny, IoMdRainy, IoMdCloudy, IoMdSnow, IoMdThunderStrom, IoMdSearch, IoMdMoon, IoIosThunderstorm } from 'react-icons/io';
import { BsCloudHaze2Fill, BsCloudDrizzleFill, BsEye, BsWater, BsThermometer, BsWind, BsCloudy, BsThunderbolt, BsThunderboltFill, BsSearch } from 'react-icons/bs';
import { TbMist, TbTemperatureCelsius } from 'react-icons/tb';
import { ImSpinner8 } from 'react-icons/im';
import axios from 'axios';

const Weather = () => {
    const [data, setData] = useState(null);
    const [location, setLocation] = useState('ahmedabad');
    const [inputValue, setInputvalue] = useState('');
     
    const handleChange = (e) => {
        setInputvalue(e.target.value)
    }
    const handleClick = async (e) => {
        if(inputValue !== '') {
            setLocation(inputValue);
        }
        e.preventDefault();
    }

    useEffect(() => {
        const url = `http://api.weatherapi.com/v1/current.json?key=3ae7829a047d4058a6b154757232404&q=${location}`

        axios.get(url).then(res => {
            setData(res.data);
        })
    }, [location])

    console.log(data)

    if (!data) {
        return (<div>
            <div>
                <ImSpinner8 className='text-5xl animate-spin' />
            </div>
        </div>
        )
    }

    let icon;
    console.log(data.current.condition.text)

    switch (data.current.condition.text) {
        case 'Clouds':
            icon = <IoMdCloudy />;
            break;
        case 'Haze':
            icon = <BsCloudHaze2Fill />;
            break;
        case 'Rain':
            icon = <IoMdRainy />;
            break;
        case 'Sunny':
            icon = <IoMdSunny />;
            break;
        case 'Clear':
            icon = <IoMdMoon />;
            break;
        case 'Drizzle':
            icon = <BsCloudDrizzleFill />;
            break;
        case 'Snow':
            icon = <IoMdSnow />;
            break;
        case 'Thunderstrom':
            icon = <IoMdThunderStrom />;
            break;
        case 'Mist':
            icon = <TbMist />;
            break;
        case 'Partly cloudy':
            icon = <BsCloudy />;
            break;
        case 'Moderate or heavy rain with thunder':
            icon = <IoIosThunderstorm />
            break;
        case 'Overcast':
            icon = <IoMdCloudy />
    }

   
    const date = new Date();

    return (
        <div className='container mx-auto'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col">
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-24 h-full bg-indigo-500"></div>
                        </div>
                        <div className="flex justify-center items-center flex-wrap sm:flex-row flex-col mb-12">
                            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Weatherly</h1>
                            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Search for a location and we will fetch the weather for you.</p>
                            <input onChange={(e) => handleChange(e)} className="w-full rounded-md border-indigo-400 border-2 m-2" type="text" name="search" id="search" />
                            <button onClick={(e) => handleClick(e)} className="flex mx-3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Search <span className='pt-1 pl-2 items-center'><BsSearch/></span></button>
                        </div>
                        {/* {(weather && query.length>0) && <div>The weather of {query} is {weather && weather.current.temp_c} &#8451; and {weather.current.condition.text}</div>}      */}
                    </div>
                    <div className='flex flex-col items-center px-4 lg:px-0'>
                        <div className='w-full max-w-[450px] min-h-[584px] bg-indigo-500 text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6'>
                            <div>
                                <div className='flex items-center gap-x-5'>
                                    <div className='text-[87px]'>{icon}</div>
                                    <div>
                                        <div className='text-2xl font-semibold'>{data.location.country}, {data.location.name}</div>
                                        <div className=''>{date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getFullYear()}
                                        </div>
                                    </div>
                                </div>
                                <div className='my-20'>
                                    <div className='flex justify-center items-center'>
                                        <div className='text-[144px] leading-none font-light'>{data.current.temp_c}</div>
                                        <div className='text-[30px]'><TbTemperatureCelsius />
                                        </div>
                                    </div>
                                    <div className='capitalize text-center'>{data.current.condition.text}</div>

                                </div>
                                <div className='max-w-[378px] mx-auto flex flex-col gap-y-4'>
                                    <div className='flex justify-between'>
                                        <div className='flex text-center gap-x-2'>
                                            <div className='text-[20px]'>
                                                <BsEye />
                                            </div>
                                            <div>
                                                Visibility{' '}
                                                <span className='ml-2'>{data.current.vis_km} km</span>
                                            </div>
                                        </div>
                                        <div className='flex text-center gap-x-2'>
                                            <div className='text-[20px]'>
                                                <BsThermometer />
                                            </div>
                                            <div className='flex'>
                                                Feels like
                                                <span className='flex ml-2'>{parseInt(data.current.feelslike_c)} <TbTemperatureCelsius/></span>
                                            </div>
                                        </div>    
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex text-center gap-x-2'>
                                            <div className='text-[20px]'>
                                                <BsWater />
                                            </div>
                                            <div>
                                                Humidity
                                                <span className='ml-2'>{data.current.humidity} %</span>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <div className='text-[20px]'>
                                                <BsWind />
                                            </div>
                                            <div className='flex'>
                                                Wind
                                                <span className='flex ml-2'>{data.current.wind_kph} k/h</span>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Weather