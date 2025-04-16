import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";


const Board = ({ city }) => {
  const { data, loading, error } = useFetch(city)
  const showAlert = ()=>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error,
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
  if (loading)
    return (
      <div className="text-center text-gray-600">
        <img
          className="loader h-60 w-60"
          src={
            "https://i.pinimg.com/originals/36/3c/2e/363c2ec45f7668e82807a0c053d1e1d0.gif"
          }
          alt=""
        />
      </div>
    );
  
  
  const today = data?.days[0]
  return (
    <>
    {data?<div className="max-w-md mx-auto font-semibold mt-10 p-6 bg-transparent main  rounded-2xl shadow-lg ">
      
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">{data?.resolvedAddress}</h1>
          <p className="text-sm text-gray-600">{data?.timezone}</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-semibold">{today?.temp}°F</p>
          <p className="text-sm">{today?.conditions}</p>
        </div>
      </div>

      <div className="border-t border-white/40 my-4"></div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex justify-between">
          <span>Feels Like:</span>
          <span>{today?.feelslike}°F</span>
        </div>
        <div className="flex justify-between">
          <span>Humidity:</span>
          <span>{today?.humidity}%</span>
        </div>
        <div className="flex justify-between">
          <span>Wind Speed:</span>
          <span>{today?.windspeed} mph</span>
        </div>
        <div className="flex justify-between">
          <span>UV Index:</span>
          <span>{today?.uvindex}</span>
        </div>
        <div className="flex justify-between">
          <span>Sunrise:</span>
          <span>{today?.sunrise}</span>
        </div>
        <div className="flex justify-between">
          <span>Sunset:</span>
          <span>{today?.sunset}</span>
        </div>
      </div>

      <p className="mt-6 text-center italic text-sm text-gray-700">
        {data?.description}
      </p>
    </div>:<h1>{error}</h1>}
    </>
  );
};

export default Board;
