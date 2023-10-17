import { Grid } from "@mui/material";
import { CardItem } from "./CardItem";

export default function ResultList({ list }) {
  return (
    <Grid container spacing={3} p={2} pl={3} pr={2.5}>
      {list.map((item) => (
        <Grid item xs={4} key={item.id}>
          <CardItem
            title={item.title}
            imgThumb={item.coverSrc}
            price={item.price}
            serviceTime={item.serviceTime}
            deliveryFee={item.deliveryFee}
            rating={item.rating}
          />
        </Grid>
      ))}
    </Grid>
  );
}
