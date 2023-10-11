import { Grid } from "@mui/material";
import React from "react";
import Details from "./Details/Details";

const TodayWeather = ({ data, forecastList }) => {
  return (
    <Grid container>
      <Details data={data} />
    </Grid>
  );
};

export default TodayWeather;
