import React from "react";

type ButtonProps = {
    text: string;
    onClick: () => void
  }

const Button: React.FC<ButtonProps> = () => {
    return (
        <div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
      </div>
)
};

export default Button;