import React, { useState, useEffect } from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import "../styles/Search.css";

const fetchAllCards = async (query: string) => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/all/?query=${query}`
  );
  return response.data;
};

const Search = () => {
  const [value, setValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<{ label: string; value: string; }[]>([]);
  const [isListVisible, setIsListVisible] = useState<boolean>(false);

  useEffect(() => {
    if (value) {
      fetchAllCards(value).then((data) => {
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
      {/* Отображение предложений, только если список видим */}
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
