import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Divider,
  Drawer,
  Fab,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Close, FilterList } from "@mui/icons-material";

import FilterPanel from "@/components/Home/FilterPanel";
import ResultList from "@/components/Home/ResultList";
import SearchBar from "@/components/Home/SearchBar";
import EmptyList from "@/components/Home/EmptyList";

import { categoryList, dataList, ratingList } from "@/constants";

export default function Home() {
  const allCategory = categoryList.map((item) => item.value);

  const newRatingList = ratingList.map((item) => ({
    ...item,
    value: parseInt(item.value),
  }));
  const allRating = newRatingList.map((item) => item.value);

  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(allCategory);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [selectedRating, setSelectedRating] = useState(allRating);

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

  const handleSearch = (event) => setSearchInput(event.target.value);

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

  const handleSelectRating = (event, value) => setSelectedRating(value);

  const applyFilter = () => {
    let updatedList = dataList;

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter((item) => {
        return (
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
        );
      });
    }

    // Category Filter
    if (selectedCategory.length > 0) {
      updatedList = updatedList.filter((item) => {
        return selectedCategory.includes(item.category);
      });
    }

    // Cuisine Filter
    const selectedCuisine = cuisineType
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (selectedCuisine.length > 0) {
      updatedList = updatedList.filter((item) => {
        return selectedCuisine.includes(item.cuisine);
      });
    }

    // Price Range Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter((item) => {
      return item.price >= minPrice && item.price <= maxPrice;
    });

    // Rating Filter
    if (selectedRating.length > 0) {
      updatedList = updatedList.filter((item) => {
        return selectedRating.includes(item.rating);
      });
    }

    setList(updatedList);
  };

  useEffect(() => {
    applyFilter();
  }, [
    searchInput,
    selectedCategory,
    cuisineType,
    selectedPrice,
    selectedRating,
  ]);

  // Responsive function
  const isLaptop = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [isDrawer, setIsDrawer] = useState(false);

  const toggleDrawer = (isOpen) => setIsDrawer(isOpen);

  return (
    <Container disableGutters maxWidth="xl">
      <Box>
        <SearchBar value={searchInput} changeInput={handleSearch} />
        <Divider />
        <Grid container>
          <Grid item sx={{ width: 300, display: isLaptop ? "none" : "block" }}>
            <FilterPanel
              categoryList={categoryList}
              selectedCategory={selectedCategory}
              selectCategory={handleSelectCategory}
              cuisineType={cuisineType}
              selectCuisineType={handleCuisineType}
              selectAllCuisineType={handleAllCuisineType}
              selectedPrice={selectedPrice}
              selectPrice={handleSelectPrice}
              ratingList={newRatingList}
              selectedRating={selectedRating}
              selectRating={handleSelectRating}
            />
          </Grid>
          <Grid item xs>
            {list.length > 0 ? <ResultList list={list} /> : <EmptyList />}
          </Grid>
        </Grid>

        {/* Mobile Section */}
        <Fab
          size="medium"
          color="warning"
          aria-label="filter"
          sx={{
            position: "fixed",
            top: 85,
            left: 14,
            display: isLaptop ? "flex" : "none",
          }}
          onClick={() => toggleDrawer(true)}
        >
          <FilterList />
        </Fab>
        <Drawer
          anchor={"left"}
          open={isDrawer}
          onClose={() => toggleDrawer(false)}
        >
          <Box
            sx={{ width: isMobile ? "100vw" : 300 }}
            role="presentation"
            p={2}
          >
            <Box mb={1}>
              <Stack
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mb={0.5}
              >
                <Typography variant="h5" fontWeight={700}>
                  Filters
                </Typography>
                <Close onClick={() => toggleDrawer(false)} />
              </Stack>
              <Divider />
            </Box>
            <FilterPanel
              categoryList={categoryList}
              selectedCategory={selectedCategory}
              selectCategory={handleSelectCategory}
              cuisineType={cuisineType}
              selectCuisineType={handleCuisineType}
              selectAllCuisineType={handleAllCuisineType}
              selectedPrice={selectedPrice}
              selectPrice={handleSelectPrice}
              ratingList={newRatingList}
              selectedRating={selectedRating}
              selectRating={handleSelectRating}
            />
          </Box>
        </Drawer>
      </Box>
    </Container>
  );
}
