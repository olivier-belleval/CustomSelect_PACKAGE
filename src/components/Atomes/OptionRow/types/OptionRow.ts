import {OptionObject} from "../../../Molecules";


export interface OptionRowProps {
  option: OptionObject;
  selected: boolean;
  multiple: boolean;
  onClick: () => void;
  className?: string;
}
