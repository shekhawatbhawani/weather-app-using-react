import Card from "./Components/Card";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("sikar");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [pressure, setPressure] = useState("");
  const [date, setDate] = useState("");
  let [src ,setSrc] = useState("")

  useEffect(() => {
    fetchData();
    time();
  }, [input]);

  const inputValue = (e) => {
    setInput(e.target.value === "" ? "jaipur" : e.target.value);
  };

  const time = () => {
    let date = new Date();
    let day = date.getDay();
    let raj = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let time = `${hours}:${minutes}`;
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    let dayArray = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let monthArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let dayName = dayArray[day];
    let monthName = monthArray[month];
    let finalDate = `${dayName}, ${monthName} ${raj}, ${year} at ${time} ${ampm}`;
    setDate(finalDate);
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=b87abf895c511c59dbf662c17d489357`
    );
    const data = await response.json();

    // Set all state variables based on the fetched data
    setCity(data.name);
    setWeather(data.weather[0].main);
    setTemp((parseInt(data.main.temp) - 273.15).toFixed(2));
    setMinTemp((parseInt(data.main.temp_min) - 273.15).toFixed(2));
    setMaxTemp((parseInt(data.main.temp_max) - 273.15).toFixed(2));
    setFeelsLike((parseInt(data.main.feels_like) - 273.15).toFixed(2));
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setPressure(data.main.pressure);
    setSrc(`https://openweathermap.org/img/wn/${data.weather?.[0]?.icon}@4x.png`)
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-indigo-400">
      <div className="bg-white p-6 rounded-xl shadow-lg md:w-[400px]">
        <input
          type="text"
          placeholder="Search your city"
          className="w-full p-3 rounded-lg mb-5 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={inputValue}
        />
        <Card
          city={city}
          weather={weather}
          temp={temp}
          minTemp={minTemp}
          maxTemp={maxTemp}
          feelsLike={feelsLike}
          humidity={humidity}
          wind={wind}
          pressure={pressure}
          date={date}
          src={src}
        />
      </div>
    </div>
  );
}

export default App;
