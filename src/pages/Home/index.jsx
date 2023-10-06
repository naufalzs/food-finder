import { Box, Grid } from "@mui/material";
import FilterPanel from "@/components/Home/FilterPanel";
import ResultList from "@/components/Home/ResultList";
import SearchBar from "@/components/Home/SearchBar";

export default function Home() {
  return (
    <Box>
      <SearchBar />
      <Grid container>
        <Grid item xs={3}>
          <FilterPanel />
        </Grid>
        <Grid item xs>
          <ResultList />
        </Grid>
      </Grid>
    </Box>
  );
}
