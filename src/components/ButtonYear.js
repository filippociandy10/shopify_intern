import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export default function ButtonYear({ changeYear }) {
  const YearArray = [];
  for (let i = 0; i < 25; i++) {
    YearArray[i] = i + 1997;
  }
  return (
    <ButtonGroup>
      {YearArray.map((num) => (
        <Button
          onClick={(num) => {
            changeYear(num);
          }}
          key={num}
        >
          {num}
        </Button>
      ))}
    </ButtonGroup>
  );
}
