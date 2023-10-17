import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

export const CardItem = ({
  title,
  imgThumb,
  price,
  serviceTime,
  deliveryFee,
  rating,
}) => {
  const deliveryTime = serviceTime.replace("-", " - ").replace("m", " m");

  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardMedia component="img" image={imgThumb} height={220} />
      <CardContent
        sx={{
          height: 190,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Typography
            width={"60%"}
            variant="h5"
            component="h2"
            fontWeight={500}
            textTransform={"capitalize"}
          >
            {title}
          </Typography>
          <Box bgcolor={"#d6d3d1"} p={1} borderRadius={2}>
            {[...Array(rating)].map((star, idx) => (
              <span key={idx}>🌟</span>
            ))}
            {/* 🌟🌟🌟🌟🌟 */}
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          {/* left section*/}
          <Box>
            <Typography variant="h6" component="h3" fontWeight={300}>
              Price
            </Typography>
            <Typography variant="subtitle2" fontSize={18}>${price}</Typography>
          </Box>
          {/* right section */}
          <Stack width="55%">
            <Typography variant="h6" component="h3" fontWeight={300}>
              Delivery
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="subtitle2">ETA</Typography>
              <Typography variant="subtitle2">{deliveryTime}</Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="subtitle2">Additional Fee</Typography>
              <Typography variant="subtitle2">${deliveryFee}</Typography>
            </Box>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
