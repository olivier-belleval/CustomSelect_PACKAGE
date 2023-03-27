export interface CustomSelectProps {
  multiple?: boolean;
  options: OptionObject[];
  hasSelectAll?: boolean;
  isCreatable?: boolean;
  closeOnChange?: boolean;
  onChange?: (selectedOptions: OptionObject[]) => void;
  isLoading?: boolean;
  className?: string;
  classNameSearchBar?: string;
  classNameDropdown?: string;
  classNameOption?: string;
  placeholder?: string;
}

export interface OptionObject {
  id: string;
  label: string;
  group?: string;
  new?: boolean;
}
