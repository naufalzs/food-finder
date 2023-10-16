import { useEffect, useState } from "react";
import { Box, Divider, Grid } from "@mui/material";

import FilterPanel from "@/components/Home/FilterPanel";
import ResultList from "@/components/Home/ResultList";
import SearchBar from "@/components/Home/SearchBar";

import { categoryList, dataList } from "@/constants";

export default function Home() {
  const allCategory = categoryList.map((item) => item.value);

  const [selectedCategory, setSelectedCategory] = useState(allCategory);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);

  const [cuisineType, setCuisineType] = useState([
    {
      id: 1,
      label: "American",
      checked: true,
    },
    {
      id: 2,
      label: "Chinese",
      checked: true,
    },
    {
      id: 3,
      label: "Italian",
      checked: true,
    },
  ]);

  const [list, setList] = useState(dataList);

  const handleSelectCategory = (event, value) => setSelectedCategory(value);

  const handleCuisineType = (id) => {
    let updatedCuisine = cuisineType.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisineType(updatedCuisine);
  };

  const handleAllCuisineType = (event) => {
    setCuisineType(
      cuisineType.map((item) => ({
        ...item,
        checked: event.target.checked,
      }))
    );
  };

  const handleSelectPrice = (event, value) => setSelectedPrice(value);

  const applyFilter = () => {
    let updatedList = dataList;

    if (selectedCategory.length > 0) {
      updatedList = updatedList.filter((item) => {
        return selectedCategory.includes(item.category);
      });
    }

    const selectedCuisine = cuisineType
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
      
    if (selectedCuisine.length > 0) {
      updatedList = updatedList.filter((item) => {
        return selectedCuisine.includes(item.cuisine);
      });
    }

    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter((item) => {
      return item.price >= minPrice && item.price <= maxPrice;
    });

    setList(updatedList);
  };

  useEffect(() => {
    applyFilter();
  }, [selectedCategory, cuisineType, selectedPrice]);

  return (
    <Box>
      <SearchBar />
      <Divider />
      <Grid container>
        <Grid item sx={{ width: 300 }}>
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            cuisineType={cuisineType}
            selectCuisineType={handleCuisineType}
            selectAllCuisineType={handleAllCuisineType}
            selectedPrice={selectedPrice}
            selectPrice={handleSelectPrice}
          />
        </Grid>
        <Grid item xs>
          <ResultList />
        </Grid>
      </Grid>
    </Box>
  );
}
