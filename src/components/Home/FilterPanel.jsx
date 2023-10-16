import { Box, Stack, Typography } from "@mui/material";
import { FilterListToggle } from "../common/FilterListToggle";
import { CheckboxProton } from "../common/CheckboxProton";
import { CheckboxAllProton } from "../common/CheckboxAllProton";

import { categoryList } from "@/constants";
import { SliderProton } from "../common/SliderProton";

export default function FilterPanel({
  selectedCategory,
  selectCategory,
  cuisineType,
  selectCuisineType,
  selectAllCuisineType,
  selectedPrice,
  selectPrice,
}) {
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
      <Box mb={4}>
        <Typography variant="h6" fontWeight={600} mb={1}>
          Cuisine
        </Typography>
        <Stack>
          <CheckboxAllProton
            checkboxArray={cuisineType}
            checkboxHandler={selectAllCuisineType}
          />
          {cuisineType.map((cuisine) => (
            <CheckboxProton
              key={cuisine.id}
              checkboxItem={cuisine}
              checkboxHandler={selectCuisineType}
            />
          ))}
        </Stack>
      </Box>
      <Box mb={4}>
        <Typography variant="h6" fontWeight={600} mb={5}>
          Price Range
        </Typography>
        <SliderProton value={selectedPrice} selectHandler={selectPrice} />
      </Box>
    </Box>
  );
}
