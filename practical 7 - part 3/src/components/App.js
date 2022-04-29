import Headline from "./Headline";
import SearchBar from "./SearchBar";
import { useWeather } from "../api";
import React, { useState } from "react";

export default function App() {
  const [search,setSearch] = useState("");
  const { loading, headlines, error } = useWeather(setSearch);
  
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="App">
      <h1>Brisbane Weather Forecast Today</h1>
      <SearchBar onSubmit={setSearch} />
      {headlines.map((headline) => (
        <Headline key={headline.time} {...headline} />
      ))}
    </div>
  );
}

/*
export default function App() {
  const { loading, headlines, error } = useWeather();
  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Brisbane Weather Forecast Today</h1>
          {headlines.map((headline) => (
            <Headline key={headline.time} {...headline} />
          ))}
        </div>
      )}
    </div>
  );
}
*/
