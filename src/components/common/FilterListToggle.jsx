import { ToggleButton, ToggleButtonGroup, styled } from "@mui/material";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  "&.MuiToggleButtonGroup-root": {
    width: "100%",
    justifyContent: "space-between",
    "& .MuiToggleButtonGroup-grouped": {
      borderRadius: "10px",
      "&:not(:first-of-type)": {
        borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
      },
    },
  },
});

export const FilterListToggle = ({ options, value, selectToggle }) => {
  return (
    <StyledToggleButtonGroup
      value={value}
      onChange={selectToggle}
      aria-label="category filter"
    >
      {options.map((item) => (
        <ToggleButton key={item.id} value={item.value}>
          {item.label}
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
};
