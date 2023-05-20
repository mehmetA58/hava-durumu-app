import React from "react";

const Sehir = ({sehir})=>{
    return (
    <div className="flex justify-center items-center h-screen">
  <div className="w-[350px] rounded-md shadow p-8 bg-black">
    <h1 className="text-5xl font-bold mb-4">{sehir.main.temp} °C</h1>
    <h2 className="text-2xl font-semibold mb-3">{sehir.name}</h2>
    <h2 className="text-2xl font-semibold mb-4">Hissedilen : {sehir.main.feels_like} °C</h2>
    <h3 className="text-2xl font-medium">{sehir.weather[0].description}</h3>
    <h4 className="text-5xl font-bold mb-4">Nem : {sehir.main.humidity}%</h4>
  </div>
</div>

      );
    };
export default Sehir;