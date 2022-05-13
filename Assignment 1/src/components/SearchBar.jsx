import { useState } from "react";

export default function SearchBar(props) {
  const countriesSelect = document.getElementById('countries');
  /*Add countries to the mb-4 */
  props.selectCountry.map((country)=>{
    if (countriesSelect!==null) {
      let option;
      option = document.createElement("option");
      option.text = country;
      option.value = country;
      countriesSelect.add(option);
    }
  });

  return (
    <div className="container">
      <ul>
        <h1 className="country__title">Country : </h1>
        <div className="mb-4">
          <select 
            name="countries" 
            id="countries"
            onChange={(event) => {
              props.onChange(event.target.value);
            }}>
            <option 
              value='all'
              >Country</option>
          </select>
        </div>
      </ul>
    </div>
  );
}