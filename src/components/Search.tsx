import React, { useState, useEffect } from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import "../styles/Search.css";
import { Media } from "../types";

const fetchSearch = async (search: string) => {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/search/${search}`
  );
  return response.data;
};

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Search = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<Media[]>([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const debouncedSearchValue = useDebounce(value, 100);

  useEffect(() => {
    if (debouncedSearchValue.trim()) {
      fetchSearch(debouncedSearchValue).then((data) => {
        if (data && Array.isArray(data.media)) {
          setSuggestions(data.media);
          setIsListVisible(true);
        } else {
          console.error('Unexpected data format:', data);
          setSuggestions([]);
          setIsListVisible(false);
        }
      });
    } else {
      setSuggestions([]);
      setIsListVisible(false);
    }
  }, [debouncedSearchValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    document.body.classList.add("no-scroll");
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    document.body.classList.remove("no-scroll");
  };

  const clearInput = () => {
    setValue("");
    setIsListVisible(false);
  };

  return (
    <div className={`search-container ${isFocused ? 'focused' : ''}`}>
      <IconField iconPosition="left" className="input-container">
        <InputIcon className="pi pi-search text-white" />
        <InputText
          value={value}
          placeholder="Пошук фільмів, серіалів, аніме, мультфільмів тощо..."
          className="w-full border-round-3xl search_bg border-none placeholder-color h-3rem custom-input"
          style={{ color: "white" }}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {value && (
          <span className="pi pi-times-circle clear-icon" onClick={clearInput}></span>
        )}
      </IconField>
      {isListVisible && (
        <div className="suggestion-list-wrapper">
          <div className="suggestion-list">
            {suggestions.map((suggestion: Media) => (
              <div key={suggestion.id} className="suggestion-item">
                {suggestion.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
