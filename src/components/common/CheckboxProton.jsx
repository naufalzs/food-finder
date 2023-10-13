import { Checkbox, FormControlLabel } from "@mui/material";

export const CheckboxProton = ({ checkboxItem, checkboxHandler }) => {
  const { id, label, checked } = checkboxItem;

  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          size="small"
          checked={checked}
          onChange={() => checkboxHandler(id)}
          color="warning"
        />
      }
      sx={{
        ".MuiTypography-root": {
          fontSize: 14,
        },
      }}
    />
  );
};
