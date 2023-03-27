// Import modules
import React, { FC, useState, useRef, useEffect } from "react";

// Import components

// Import contexts

// Import Hooks

// Import locals
import "../../../styles/CustomSelect.css";

// Import interfaces
import { CustomSelectProps, OptionObject } from "./types/CustomSelect";
import {AddNewOption, OptionRow, SearchBar} from "../../Atomes";

export const CustomSelect: FC<CustomSelectProps> = ({
  multiple = true,
  options,
  hasSelectAll = true,
  isCreatable = false,
  closeOnChange,
  onChange,
  selectedOptions,
  isLoading = false,
  className = "",
  classNameSearchBar = "",
  classNameDropdown = "",
  classNameOption = "",
  placeholder = "Search or Select",
  }) => {
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return;
  }, []);

  const handleOptionClick = (option: OptionObject) => {
    if (multiple) {
      onChange(selectedOptions.some(o => o.id === option.id)
                   ? selectedOptions.filter(o => o.id !== option.id)
                   : [...selectedOptions, option])
    } else {
      onChange([option]);
      if (closeOnChange) {
        setIsOpen(false);
      }
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleCreateOption = () => {
    const newOption: OptionObject = { id: Date.now().toString(), label: search, new: true };
    onChange([...selectedOptions, newOption])
    options.push(newOption);
    setSearch("");
  };

  useEffect(() => {
    const filteredOptions = options.filter(option => option.label.toLowerCase().includes(search.toLowerCase()));
    setFilteredOptions(filteredOptions);
  }, [search]);

  const groupedOptions = filteredOptions.reduce<{ [key: string]: OptionObject[] }>((groups, option) => {
    const groupName = option.group || "";
    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    groups[groupName].push(option);
    return groups;
  }, {});

  const renderGroupedOptions = () => {
    return Object.keys(groupedOptions).map(groupName => (
        <li key={groupName} className={`group ${classNameDropdown}`}>
          <label className="group-label">{groupName}</label>
          <ul className="group-options">
            {groupedOptions[groupName].map(option => (
                <OptionRow
                    key={option.id}
                    className={classNameOption}
                    option={option}
                    selected={selectedOptions.some(o => o.id === option.id)}
                    multiple={multiple}
                    onClick={() => handleOptionClick(option)}
                />
            ))}
          </ul>
        </li>
    ));
  };

  const handleSelectAll = () => {
    if (selectedOptions.length === filteredOptions.length) {
      onChange([]);
    } else {
      onChange(filteredOptions);
    }
  };

  return (
      <div ref={selectRef} className={`CustomSelect ${className}`} onClick={() => setIsOpen(true)}>
        <SearchBar
            value={isOpen ? search : selectedOptions.map(o => o.label).join(", ")}
            onChange={handleSearchChange}
            className={classNameSearchBar}
            placeholder={placeholder}
        />
        {isOpen && (
            <ul className={`dropdown ${classNameDropdown}`}>
              {hasSelectAll && (
                  <div className="select-all" onClick={handleSelectAll}>
                    {multiple && (
                        <input
                            type="checkbox"
                            checked={selectedOptions.length === filteredOptions.length}
                            onChange={() => {}}
                        />
                    )}
                    Select All
                  </div>
              )}

              {renderGroupedOptions()}
              {isCreatable && filteredOptions.length === 0 && search !== "" && (
                  <AddNewOption label={search} onClick={handleCreateOption} className={classNameOption} />
              )}
              {isLoading && <div className="loading">Loading...</div>}
            </ul>
        )}
      </div>
  );
};
