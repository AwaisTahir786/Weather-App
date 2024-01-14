"use client";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "./components/weather";
import Spinner from "./components/spinner";

export default function Home() {
  const [city, setcity] = useState("");
  const [weather, setweather] = useState<any>({});
  const [loading, setloading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  // console.log(city)

  function fetchWeather(e: any) {
    e.preventDefault();
    setloading(true);
    axios.get(url).then((response: any) => {
      setweather(response.data);
      // console.log(response.data);
    });
    setcity("");
    setloading(false);
  }

  if (loading) {
    <Spinner />;
  } else {
    return (
      <main className="min-h-screen ">
        <h1>hello world</h1>

        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />

        <Image
          alt="Mountains"
          src="/image/bg.jpg"
          fill
          className="object-cover "
        />

        {/* search  */}
        <div className="relative flex justify-between  max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between  w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
          >
            <div>
              <input
                type="text"
                placeholder="Search City"
                onChange={(e) => setcity(e.target.value)}
                className="bg-transparent text-2xl focus:outline-none text-white border-none "
              />
            </div>

            <button onClick={fetchWeather} type="submit" className="text-white">
              <BsSearch size={20} />
            </button>
          </form>
        </div>

        {/* weather */}
        {weather.main && <Weather data={weather} />}


      
      </main>
    );
  }
}
