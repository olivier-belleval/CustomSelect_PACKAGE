# Custom Select Component

A customizable and easy-to-use React select component built with TypeScript and following the Atomic Design pattern.

## Features

- Single and multi-select options
- Search and filter options
- Option grouping
- Create new options
- Select/deselect all options

## Installation

Install the package using npm:

```bash
npm install custom-select-component
```

## Usage
Import the CustomSelect component from the package:

```typescript
import { CustomSelect } from 'custom-select-component';
```

Use the CustomSelect component in your React application:

```typescript
<CustomSelect
    multiple={true}
    options={options}
    hasSelectAll={true}
    isCreatable={false}
    closeOnChange={false}
    onChange={(selectedOptions) => console.log(selectedOptions)}
    isLoading={false}
    className=""
    classNameDropdown=""
    classNameOption=""
    placeholder="Select one or more options"
/>
```

## Props
| Prop              | Type                     | Default           | Description                                                                                                                                                 |
|-------------------|--------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| multiple          | boolean                  | true              | Whether multiple options can be selected.                                                                                                                   |
| options           | OptionObject[]           | -                 | An array of option objects. Each object must have an `id` and a `label`, and may also have a `group`.                                                       |
| hasSelectAll      | boolean                  | true              | Whether to display the "Select All" option.                                                                                                                 |
| isCreatable       | boolean                  | false             | Allows the user to create new options if the search does not match any existing options.                                                                    |
| closeOnChange     | boolean                  | -                 | Whether to close the dropdown when an option is selected (only applicable when `multiple` is `false`).                                                      |
| onChange          | function                 | -                 | A callback function called when the selected options change. The function receives an array of selected `OptionObject`s as its argument.                    |
| isLoading         | boolean                  | false             | Whether the component should display a loading state.                                                                                                       |
| className         | string                   | ''                | A custom class name for the main `CustomSelect` component.                                                                                                 |
| classNameDropdown | string                   | ''                | A custom class name for the dropdown containing the options.                                                                                                |
| classNameOption   | string                   | ''                | A custom class name for the option elements.                                                                                                                 |
| placeholder       | string                   | "Select one or more options" | Placeholder text for the search bar when no options are selected.                                                                                         |


## Types
| Type             | Description                                                                                   |
|------------------|-----------------------------------------------------------------------------------------------|
| OptionObject     | An object representing a selectable option. It must have an `id` (string) and a `label` (string), and may also have a `group` (string).               |
| CustomSelectProps| An object containing all the props for the `CustomSelect` component. See the props table for details on each property.                               |
| AddNewOptionProps| An object containing the props for the `AddNewOption` component, including `label` (string), `text` (string), `onClick` (function), and `className` (string).|
| OptionRowProps   | An object containing the props for the `OptionRow` component, including `option` (OptionObject), `selected` (boolean), `multiple` (boolean), `onClick` (function), and `className` (string).|
| SearchBarProps   | An object containing the props for the `SearchBar` component, including `value` (string), `onChange` (function), `className` (string), and `placeholder` (string).|
