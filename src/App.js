import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Sehir from './Sehir';

function App() {
  const key ="5cb21ad1cf4772bb75e2786863f3937c";
  const [girilenData,setgGirilenData] = useState("");
  const[sehir,setSehir] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${girilenData}&appid=${key}&lang=tr&units=metric`
        );
        
        setSehir(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [girilenData]);
  
  return (
    <div className="App">
      <div>
        <input id='input'
          onChange={(e) => setgGirilenData(e.target.value)}
          type="text"
          placeholder="Lütfen Sehir Giriniz"
          className=" my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600   bg-black rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
        />
       {sehir && <Sehir sehir={sehir}></Sehir>}
      </div>
    </div>
  );
}

export default App;