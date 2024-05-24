import React, { useEffect, useRef, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

import { useCards } from "../hooks/useCards";
import useDebounce from "../hooks/useDebounce";
import { Media, MediaResponse } from "../types";

import "../styles/Search.css";

async function fetchSearch(search: string): Promise<MediaResponse> {
  const response = await axios.get(
    `https://kinolib-backend-homer.fly.dev/parse/search/${search}`
  );
  return response.data;
}

const Search = () => {
  const { cards, setCards, setCountOfPages } = useCards();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchValue = useDebounce(value, 100);

  const isListVisible = cards.length > 0 && isFocused;

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (wrapperRef.current === null || e.target === null) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    window.addEventListener("click", clickHandler);

    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  useEffect(() => {
    if (!debouncedSearchValue.trim()) return;

    fetchSearch(debouncedSearchValue)
      .then(({ media, countOfPages }) => {
        setCards(media);
        setCountOfPages(countOfPages);
      })
      .catch((e) => console.log(e));
  }, [debouncedSearchValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleOpen = () => {
    setIsFocused(true);
    document.body.classList.add("no-scroll");
  };

  const handleClose = () => {
    setIsFocused(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <div
      onFocus={handleOpen}
      className={`search-container ${isFocused ? "focused" : ""}`}>
      <div ref={wrapperRef}>
        <IconField iconPosition="left" className="input-container">
          <InputIcon className="pi pi-search text-white" />
          <InputText
            value={value}
            placeholder="Пошук фільмів, серіалів, аніме, мультфільмів тощо..."
            className="w-full border-round-3xl search_bg border-none placeholder-color h-3rem custom-input"
            style={{ color: "white" }}
            onChange={handleInputChange}
          />
          {value ? (
            <span
              className="pi pi-times-circle clear-icon"
              onClick={() => setValue("")}></span>
          ) : null}
        </IconField>
        {isListVisible ? (
          <div className="suggestion-list-wrapper">
            <div className="suggestion-list">
              {cards.map((suggestion: Media) => (
                <div
                  onClick={handleClose}
                  key={suggestion.id}
                  className="suggestion-item">
                  <Link to={`details${suggestion.id}`}>{suggestion.title}</Link>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
