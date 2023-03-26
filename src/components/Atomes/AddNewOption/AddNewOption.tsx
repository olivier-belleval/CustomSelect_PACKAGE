// Import modules
import React, { FC } from "react";

// Import components

// Import contexts

// Import Hooks

// Import locals

// Import interfaces
import { AddNewOptionProps } from "./types/AddNewOption";

export const AddNewOption: FC<AddNewOptionProps> = ({ label, text = `Create`, onClick, className = `` }) => {
  return (
    <div className={`AddNewOption ${className}`} onClick={onClick}>
      {text} "{label}"
    </div>
  );
};
