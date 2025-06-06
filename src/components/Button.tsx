import Button from "@mui/material/Button";
import React from "react";

type ButtonProps = {
  text: string;
  error: React.RefObject<boolean>;
  
}

const Buttons: React.FC<ButtonProps> = ({error}) => {
  return (
    <div className="w-auto flex justify-end">
      <Button type="submit" variant="contained" color="primary" disabled={error.current}>
        Invest Now
      </Button>
    </div>
  )
};

export default Buttons;