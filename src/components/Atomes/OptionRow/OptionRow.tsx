// Import modules
import React, { FC } from "react";

// Import components

// Import contexts

// Import Hooks

// Import locals

// Import interfaces
import { OptionRowProps } from "./types/OptionRow";

export const OptionRow: FC<OptionRowProps> = ({ option, selected, multiple, onClick, className }) => {
  return (
    <div className={`OptionRow ${className}`} onClick={onClick}>
      {multiple && <input type="checkbox" checked={selected} onChange={() => {}} />}
      {option.label}
    </div>
  );
};
