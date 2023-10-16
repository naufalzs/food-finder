import { Checkbox, FormControlLabel } from "@mui/material";

export const CheckboxAllProton = ({ checkboxArray, checkboxHandler }) => {
  return (
    <FormControlLabel
      label="all"
      control={
        <Checkbox
          size="small"
          color="warning"
          checked={checkboxArray
            .map((item) => item.checked)
            .every((checked) => checked === true)}
          indeterminate={
            checkboxArray
              .map((item) => item.checked)
              .some((checked) => checked === true) &&
            checkboxArray
              .map((item) => item.checked)
              .some((checked) => checked === false)
          }
          onChange={checkboxHandler}
        />
      }
    />
  );
};
