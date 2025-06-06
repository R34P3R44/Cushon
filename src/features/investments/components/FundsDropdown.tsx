import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Fund } from "../dataTypes";

type FundsDropdownProps = {
  options: [];
  label: string
  selectedFund: string;  //selectedFund object
  handleSelect: (value: string) => void;
}

const FundsDropdown: React.FC<FundsDropdownProps> = ({selectedFund, handleSelect}) => {

  return (
    <FormControl fullWidth required>
      <InputLabel id="fund-label" size="medium">Select Fund</InputLabel>
      <Select
        className="bg-white"
        labelId="fund-label"
        value={selectedFund}
        label="Select Fund"
        onChange={(e) => handleSelect(String(e.target.value))}
        required
      >
        {Object.entries(Fund).map(([key ,label]) => (
          <MenuItem value={key}>{label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
};

export default FundsDropdown;


