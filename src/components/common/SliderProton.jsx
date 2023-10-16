import { Box, Slider, styled } from "@mui/material";

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.warning.main,
  height: 3,
  ".MuiSlider-valueLabel": {
    backgroundColor: "wheat",
    color: "#111827",
    borderRadius: "10px",
  },
}));

export const SliderProton = ({value, selectHandler}) => {
  return (
    <Box sx={{ width: 230, mx: "auto" }}>
      <StyledSlider
        value={value}
        onChange={selectHandler}
        valueLabelDisplay="on"
        marks
        min={1000}
        max={5000}
        step={250}
      />
    </Box>
  );
};
