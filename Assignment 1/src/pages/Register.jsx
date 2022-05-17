import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Register() {
  const [countries, setCountries] = useState([]);

  /*useEffect(() => {
    fetch(`http://sefdb02.qut.edu.au:3001/countries`)
      .then((res) => res.json())
      .then((res) => {
        if ("error" in res) {
          throw new Error(res.error.message);
        }
      })
      .then((countries) =>{setCountries(countries)});
  }, []);*/
  const Http = new XMLHttpRequest();
  const url = 'http://sefdb02.qut.edu.au:3001/countries' ;
  Http.open("GET",url);
  Http.send();
  console.log(Http.responseText);

  return (
    <main>
      <h1>{countries}</h1>
    </main>
  );
}