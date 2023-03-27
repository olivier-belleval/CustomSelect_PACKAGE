// Import modules
import React, { FC } from "react";

// Import components

// Import contexts

// Import Hooks

// Import locals

// Import interfaces
import { SearchBarProps } from "./types/SearchBar";

export const SearchBar: FC<SearchBarProps> = ({ value, onChange, className, placeholder = "Search ..." }) => {
  return <input className={`SearchBar ${className}`} value={value} placeholder={placeholder} onChange={onChange} />;
};
