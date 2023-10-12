import { Box, Divider, Grid } from "@mui/material";
import FilterPanel from "@/components/Home/FilterPanel";
import ResultList from "@/components/Home/ResultList";
import SearchBar from "@/components/Home/SearchBar";

export default function Home() {
  return (
    <Box>
      <SearchBar />
      <Divider />
      <Grid container>
        <Grid item sx={{ width: 300 }}>
          <FilterPanel />
        </Grid>
        <Grid item xs>
          <ResultList />
        </Grid>
      </Grid>
    </Box>
  );
}
