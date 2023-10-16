import { Box } from "@mui/material";

export default function EmptyList() {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{
      height: "100%"
    }}>
      <img src="/images/gif/empty.gif" alt="Empty List gif" style={{
        maxWidth: "500px",
        maxHeight: "500px",
      }}/>
    </Box>
  );
}
