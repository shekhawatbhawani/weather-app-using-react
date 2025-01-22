import React from "react";

const Card = (props) => {
  let {
    city,
    weather,
    temp,
    minTemp,
    maxTemp,
    feelsLike,
    humidity,
    wind,
    pressure,
    date,
    src,
  } = props;

  return (
    <div className="mx-auto px-6 bg-white rounded-xl shadow-lg shadow-gray-50">
      <h1 className="text-center text-3xl font-semibold text-gray-900">
        {city}
      </h1>
      <p className="text-center text-sm text-gray-500">{date}</p>

      <div className="text-center mt-4">
        <span className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full uppercase text-sm">
          {weather}
        </span>
      </div>

      <div className="flex justify-center items-center">
        <img src={src} alt="Logo" className="w-20 h-20 object-contain" />
      </div>

      <h1 className="text-center text-3xl mt-2 font-semibold text-gray-800">
        {temp}°C
      </h1>
      <p className="text-center text-base text-gray-600 mt-1">
        Min: {minTemp}°C | Max: {maxTemp}°C
      </p>

      <div className="mt-3 bg-gray-30 p-4 rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center space-x-2">
            <i className="fas fa-sun text-yellow-500 text-2xl"></i>
            <div>
              <p className="font-medium text-gray-700">Feels Like</p>
              <p className="text-lg font-semibold text-gray-900">
                {feelsLike}°C
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <i className="fas fa-tint text-blue-500 text-2xl"></i>
            <div>
              <p className="font-medium text-gray-700">Humidity</p>
              <p className="text-lg font-semibold text-gray-900">{humidity}%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center justify-center space-x-2">
            <i className="fa-solid fa-wind text-green-500 text-2xl"></i>
            <div>
              <p className="font-medium text-gray-700">Wind</p>
              <p className="text-lg font-semibold text-gray-900">{wind} m/s</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <i className="fas fa-tachometer-alt text-gray-700 text-2xl"></i>
            <div>
              <p className="font-medium text-gray-700">Pressure</p>
              <p className="text-lg font-semibold text-gray-900">
                {pressure} hPa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
