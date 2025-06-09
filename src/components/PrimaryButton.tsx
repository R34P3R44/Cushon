import type { Theme } from "@emotion/react";
import type { SxProps } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean; 
  onClick?: () => void;
  error?: boolean;
  sx?: SxProps<Theme>;
  type?: 'button' | 'submit';
};

const PrimaryButton: React.FC<ButtonProps> = (
  { 
    children, 
    disabled = false, 
    onClick,
    sx,
  }
) => {
  
  return (
    <>
      <Button
        type="submit"
        variant="contained"
        disabled={disabled}
        onClick={onClick}
        sx={{
          backgroundColor: 'rgba(220,30,131,1)',
          '&:hover': {
            scale: 1.03,
            transition: 'ease-in-out 0.2s'
          },
          width: 'auto',
          ...sx
        }}
      >
        {children}
      </Button>
    </>
  );
};

export default PrimaryButton;