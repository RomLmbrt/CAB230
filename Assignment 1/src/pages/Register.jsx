import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Register() {
  var [countries, setCountries] = useState([]);
/*
  useEffect(() => {
      fetch(`http://sefdb02.qut.edu.au:3001/countries`)
      .then((res) => res.json())
      .then((volcanoList) => {
        setCountries(volcanoList);
      });
  }, []);*/

  const Http = new XMLHttpRequest();
  const url='https://jsonplaceholder.typicode.com/posts';
  Http.open("GET", url);
  Http.responseType = 'list';
  Http.onload = function() {
    setCountries(Http.response);
  };
  Http.send();

  console.log(countries);
  return ( 
    <main>
      <h1>{}</h1>
    </main>
  );
}
