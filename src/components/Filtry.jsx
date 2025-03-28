import { useState } from "react";
import { kategorie, uwiwOptions } from "./Consts";

export const filterDevices = (devices, selectedCategory) => {
    console.log (selectedCategory);
    return devices.filter(device => 
      (selectedCategory === "Wszystkie" || device.kategoria === selectedCategory) 
    );
  };

const SelectKategoria = ({ selectedCategory, setSelectedCategory }) => {
    return (
      <div>
        Wybierz kategorię
        <select 
          className="filtr-select" 
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            console.log("test");
          }}
          >
          {kategorie.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  };
  const SelectUwiw = () => {
    return (
      <div>
        Ewidencja/UWIW
        <select name="uwiw" className="filtr-select">
          {uwiwOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };



export const Filtry = ({ selectedCategory, setSelectedCategory }) => {
    return <div>
        <SelectKategoria 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
        />
        <SelectUwiw />
        ...
    </div>;
};