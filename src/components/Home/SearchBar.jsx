import { Search } from "@mui/icons-material";
import { InputBase, Stack } from "@mui/material";

export default function SearchBar({ value, changeInput }) {
  return (
    <Stack direction="row" alignItems="center" px={3} py={2}>
      <Search
        color="primary"
        sx={{
          width: 24,
          height: 24,
          mr: 4,
        }}
      />
      <InputBase
        variant="standard"
        fullWidth
        inputProps={{ style: { fontSize: 24 } }}
        placeholder="Mushroom Risotto"
        value={value}
        onChange={changeInput}
      />
    </Stack>
  );
}
