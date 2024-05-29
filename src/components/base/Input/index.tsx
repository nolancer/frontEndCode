"use client";
import * as React from 'react';
import {
  InputLabel,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";

interface InputProps {
  type: string;
  id: string;
  placeholder: string;
  name?: string;
  required?: boolean;
  fullWidth?: boolean;
  label?: string;
  icon?: React.ReactNode;
  variant?: "standard" | "outlined" | "filled";
  className?: string;
  width?: string;
  endAdornment?: React.ReactNode;
  multiline?: boolean;
  rows?: number;
  maxLength?: number;
  value?: string | number;
  customStyles?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  // custom styles
  padding?: string;
  fontSize?: string;
  ref?: any;
}

function Input(props: InputProps) {
  const {
    id,
    type,
    placeholder,
    name,
    required,
    label,
    icon,
    variant,
    fullWidth = true,
    className,
    width,
    endAdornment,
    multiline,
    rows = 4,
    maxLength,
    value,
    customStyles,
    onChange,
    onBlur,
    // custom styles
    padding,
    fontSize,
    ref
  } = props;

  const [inputValue, setInputValue] = React.useState<string>(value?.toString() || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength && event.target.value.length > maxLength) return;
    setInputValue(event.target.value);
    if (onChange) onChange(event);
  };

  return (
    <div>
      {label && (
        <FormControl className="w-full ml-0 p-0">
          <InputLabel htmlFor={id} className='-ml-4 text-black text-lg my-0'>{label}</InputLabel>
        </FormControl>
      )}
      <TextField
        id={id}
        name={name}
        onBlur={onBlur}
        InputProps={{
          startAdornment: (
            (icon && <InputAdornment position="start">{icon}</InputAdornment>)
          ),
          endAdornment: (
            (endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>)
          ),
        }}
        className={`text-gray-900 border border-gray-400 focus:outline-blue-700 ${(customStyles === false) && ("text-sm")} ${className} ${label ? 'mt-7' : 'mt-0'}`}
        variant={variant || "outlined"}
        required={required}
        type={type}
        ref={ref}
        fullWidth={fullWidth}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
        value={inputValue}
        onChange={handleChange}
        sx={{
          "& .MuiInputBase-input": {
            width: width,
            padding: padding ? padding : "auto",
            fontSize: fontSize ? fontSize : "auto",
          },
        }}
      />
      {(multiline && maxLength) && <p className="text-xs mt-1 w-full flex justify-end items-end">{inputValue.length}/{maxLength}</p>}
    </div>
  );
}
export default Input;