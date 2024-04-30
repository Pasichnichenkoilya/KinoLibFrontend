import React, { useState, useEffect } from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import "../styles/Search.css";
import { Suggestion } from "../types";

const fetchSearch = async (query: string) => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/search/${query}`
  );
  return response.data;
};

const Search = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    if (value) {
      fetchSearch(value).then((data) => {
        setSuggestions(data.media);
        setIsListVisible(true);
      });
    } else {
      setSuggestions([]);
      setIsListVisible(false);
    }
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search text-white" />
        <InputText
          value={value}
          placeholder="Пошук фільмів, серіалів, аніме, мультфільмів тощо..."
          className="w-full border-round-3xl search_bg border-none placeholder-color h-3rem custom-input"
          style={{ color: "white" }}
          onChange={handleInputChange}
        />
      </IconField>
      {isListVisible && (
        <div className="suggestion-list-wrapper">
          <div className="suggestion-list">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="suggestion-item">
                {suggestion.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
