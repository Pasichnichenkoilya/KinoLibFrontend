import React, { useState } from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import "../styles/Search.css";

const Search = () => {
  const [value, setValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<{ label: string; value: string; }[]>([]);
  const [isListVisible, setIsListVisible] = useState<boolean>(false); // Состояние для отслеживания видимости списка

  const staticSuggestions = [
    { label: "Фильм 1", value: "Фильм 1" },
    { label: "Фильм 2", value: "Фильм 2" },
    { label: "Фильм 3", value: "Фильм 3" },
    { label: "Фильм 4", value: "Фильм 4" },
    { label: "Фильм 5", value: "Фильм 5" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);

    // Фильтрация предложений на основе введенного значения
    const filteredSuggestions = staticSuggestions.filter(suggestion =>
      suggestion.label.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);

    // Установка видимости списка в зависимости от наличия фильтрованных предложений
    setIsListVisible(value.trim() !== '' && filteredSuggestions.length > 0);
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
