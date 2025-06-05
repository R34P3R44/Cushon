import React from "react";

type FundDropdownProps = {
  options: [];
  label: string
  selectedFund: string;  //selectedFund object
  onSelect: (value: string) => void;
}

const FundDropdown: React.FC<FundDropdownProps> = () => {
    return (
        <div className="">
        <label htmlFor="fund" className="block text-sm font-medium text-gray-700">Choose a Fund</label>
        <select id="fund" className="mt-1 block w-full rounded border-gray-300 shadow-sm">
          <option>Cushon Equities Fund</option>
          <option>Cushon Balanced Fund</option>
        </select>
      </div>
)
};

export default FundDropdown;