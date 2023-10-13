import { useEffect, useState } from "react";
import { Box, Divider, Grid } from "@mui/material";

import FilterPanel from "@/components/Home/FilterPanel";
import ResultList from "@/components/Home/ResultList";
import SearchBar from "@/components/Home/SearchBar";

import { categoryList, dataList } from "@/constants";

export default function Home() {
  const allCategory = categoryList.map((item) => item.value);

  const [selectedCategory, setSelectedCategory] = useState(allCategory);
  const [list, setList] = useState(dataList);

  const handleSelectCategory = (event, value) => setSelectedCategory(value);

  const applyFilter = () => {
    let updatedList = dataList;

    if (selectedCategory.length > 0) {
      updatedList = updatedList.filter((item) => {
        return selectedCategory.includes(item.category);
      });
    }

    setList(updatedList);
  };

  useEffect(() => {
    applyFilter();
  }, [selectedCategory]);

  return (
    <Box>
      <SearchBar />
      <Divider />
      <Grid container>
        <Grid item sx={{ width: 300 }}>
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
          />
        </Grid>
        <Grid item xs>
          <ResultList />
        </Grid>
      </Grid>
    </Box>
  );
}
