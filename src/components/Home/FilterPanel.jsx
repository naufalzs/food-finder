import { Box, Typography } from "@mui/material";
import { FilterListToggle } from "../common/FilterListToggle";

export default function FilterPanel() {
  return (
    <Box p={2}>
      <Box mb={4}>
        <Typography variant="h6" fontWeight={600} mb={1}>
          Category
        </Typography>
        <FilterListToggle />
      </Box>
      <Box mb={4}>
        <Typography variant="h6" fontWeight={600} mb={1}>
          Category
        </Typography>
        <FilterListToggle />
      </Box>
    </Box>
  );
}
