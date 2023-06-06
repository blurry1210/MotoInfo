import React, { useState } from 'react';
import './App.css';

const Model = ({ imgSrc, name, engine, power, torque, weight, seatHeight }) => {
  return (
    <div className="model">
      <img src={imgSrc} alt={name} />
      <h2>{name}</h2>
      <p>Engine: {engine}</p>
      <p>Power: {power}</p>
      <p>Torque: {torque}</p>
      <p>Weight: {weight}</p>
      <p>Seat Height: {seatHeight}</p>
    </div>
  );
};

const App = () => {
  const [searchInput, setSearchInput] = useState('');

  const models = [
    {
      imgSrc: 'MotocicletePVIR/2023-BMW-M1000RR-21-scaled.jpg',
      name: 'BMW M1000RR',
      engine: '999cc Water/oil-cooled in-line four cylinder four stroke',
      power: '205 horsepower',
      torque: '83 lb-ft',
      weight: '375 lbs (170 kgs)',
      seatHeight: '32.8 inches (833 mm)'
    },
    {
      imgSrc: 'MotocicletePVIR/2000000001.jpg',
      name: 'Ducati Diavel',
      engine: '1,262 cc liquid-cooled, Testastretta DVT V2 engine',
      power: '159 HP',
      torque: '95 lbs-ft',
      weight: '514 lbs (233 kg)',
      seatHeight: '30.7 in (780 mm)'
    },
    // Add more models here
    {
      imgSrc: 'MotocicletePVIR/CocMotors-Ducati-Panigale-V4-R-2021-600x338.jpg',
      name: 'Ducati Panigale V4 R',
      engine: '998 Desmosedici Stradale 90-degree V4 engine',
      power: '221 HP',
      torque: '83 lbs-ft',
      weight: '379 lbs (172 kg)',
      seatHeight: '32.7 in (830 mm)'
    },
    {
      imgSrc: 'MotocicletePVIR/CocMotors-Ducati-Superleggera-V4-2021-2-600x338.jpg',
      name: 'Ducati Superleggera V4',
      engine: '998cc Desmosedici Stradale V4 engine',
      power: '224 HP',
      torque: '85.6 lbs-ft',
      weight: '350 lbs (159 kg)',
      seatHeight: '32.9 in (835 mm)'
    },
    {
      imgSrc: 'MotocicletePVIR/Hayabusa-news-pic-inside-7.jpg',
      name: 'Suzuki Hayabusa',
      engine: '1340cc, 4-stroke, liquid-cooled, 4-cylinder, DOHC engine',
      power: '188 HP',
      torque: '110 lb-ft',
      weight: '582 lbs (264 kg)',
      seatHeight: '31.5 in (800 mm)'
    },
    {
      imgSrc: 'MotocicletePVIR/Suzuki.jpg',
      name: 'Suzuki GSX-S750',
      engine: '749cc Inline four',
      power: '112.6 HP',
      torque: '59 lb-ft',
      weight: '470 lbs (213 kg)',
      seatHeight: '32.2 in (820 mm)'
    },
    {
      imgSrc: 'MotocicletePVIR/Motocicleta Honda CBR1000RR-R Fireblade 2022 - 1-650x1.jpg',
      name: 'Honda CBR1000RR',
      engine: '998cc Four-cylinder',
      power: '183 HP',
      torque: '84 lb-ft',
      weight: '432 lbs (196 kg)',
      seatHeight: '833 mm (32.8 in.) at lowest point'
    },
    {
      imgSrc: 'MotocicletePVIR/harley.jpg',
      name: 'Harley Davidson Freewheeler',
      engine: '114 ci V-twin',
      power: '100.5 HP (estimated)',
      torque: '118 lbs-ft @ 3000 RPM',
      weight: '1,110 lb. (505 kg)',
      seatHeight: '26.2 in. (665 mm)'
    },
    {
      imgSrc: 'MotocicletePVIR/hornet (1).jpg',
      name: 'Honda Hornet',
      engine: '755cc Liquid-cooled OHC 4-stroke 8-valve Parallel Twin with 270° crank and uni-cam',
      power: '90 HP',
      torque: '55 lb-ft',
      weight: '418 lbs (190 kg)',
      seatHeight: '795mm (32 in.) at lowest point'
    },
    {
      imgSrc: 'MotocicletePVIR/ccmub30oxucfzxm-23my-z400-gn1-f39-500x500_300x300.jpg',
      name: 'Kawasaki Z400',
      engine: '399 cc 4-stroke, 2-cylinder, DOHC, liquid-cooled',
      power: '44 horsepower',
      torque: '25 lb-ft',
      weight: '363 lbs (164 kgs)',
      seatHeight: '30.9 inches (784 mm)'
    },
    {
      imgSrc: 'MotocicletePVIR/share_Maisto-1-12-kawasaki-ninja-h2r-model-de-simulare-motocicletă-thumbs.jpg',
      name: 'Kawasaki Ninja H2R',
      engine: '998cc, liquid-cooled, 4-stroke, DOHC 16-valve in-line four',
      power: '310 horsepower',
      torque: '121 lb-ft',
      weight: '476 lbs (216 kgs)',
      seatHeight: '32.7 inches (830 mm)'
    },
    {
      imgSrc: 'MotocicletePVIR/street-triple-765-rs-step-carousel-6-1410x793.jpg',
      name: 'Triumph Street Triple 765 RS',
      engine: '765 cc DOHC, inline 3-cylinder',
      power: '128 HP (estimated)',
      torque: '59 lbs-ft @ 9500 RPM',
      weight: '414 lb (188 kg)',
      seatHeight: '33 in (836 mm)'
    },
    {
      imgSrc: 'MotocicletePVIR/kavasaki ninja 400.jpg',
      name: 'Kawasaki Ninja 400',
      engine: '399 cc liquid-cooled, 4-stroke, DOHC 8-valve parallel twin',
      power: '44.8 horsepower',
      torque: '27 lb-ft',
      weight: '366 lbs (166 kgs)',
      seatHeight: '30.9 inches (785 mm)'
    },
    {
      imgSrc: 'MotocicletePVIR/2000000012.jpg',
      name: 'Ducati Hypermotard 950',
      engine: '937cc L-Twin',
      power: '114 hp',
      torque: '71 lbs-ft at the crank',
      weight: '440 lbs (200 kg)',
      seatHeight: '34.2 inches (870 mm) at lowest point'
    },
    {
      imgSrc: 'MotocicletePVIR/bmwr1250r.jpg',
      name: 'BMW R 1250 R',
      engine: '1,254 cc two-cylinder, air/liquid-cooled, four-stroke',
      power: '136 horsepower',
      torque: '105 lb-ft',
      weight: '527 lbs (240 kgs)',
      seatHeight: '29.9 inches w/ low seat (759 mm)'
    },
    {
      imgSrc: 'MotocicletePVIR/hds750.jpg',
      name: 'Harley Davidson Street 750',
      engine: '750cc, Liquid-cooled, Revolution X™ V-Twin',
      power: '64 horsepower',
      torque: '105 lb-ft',
      weight: '491 lbs (223 kgs)',
      seatHeight: '28.34 inches w/ low seat (720 mm)'
    }
    // Add more models here
  ];

  const filterModels = () => {
    return models.filter(model =>
      model.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  return (
    <div className="App">
      <h1>Motorcycle Information</h1>

      <div className="search-bar">
        <input
          type="text"
          id="search-input"
          placeholder="Search models"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
      </div>

      <div className="container">
        {filterModels().map((model, index) => (
          <Model key={index} {...model} />
        ))}
      </div>
    </div>
  );
};

export default App;
