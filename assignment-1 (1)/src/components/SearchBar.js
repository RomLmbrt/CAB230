import { useState } from "react";

export default function SearchBar() {
  const [innerSearch, setInnerSearch] = useState("");

  return (
    <div class="container">
      <div class="mb-4">
          <select 
          name="countries" 
          id="countries">
            <option 
            value="all"
            >Country</option>
          </select>
        </div>
    </div>
  );
}