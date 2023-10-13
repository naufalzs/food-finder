import { Box, Typography } from "@mui/material";
import { FilterListToggle } from "../common/FilterListToggle";
import { categoryList } from "@/constants";

export default function FilterPanel({selectedCategory, selectCategory}) {
  return (
    <Box p={2}>
      <Box mb={4}>
        <Typography variant="h6" fontWeight={600} mb={1}>
          Category
        </Typography>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectCategory}
        />
      </Box>
    </Box>
  );
}
