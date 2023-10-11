import React from "react";
import { Box, Grid } from "@mui/material";
import { getDayMonthFromDate } from "../../../utils/DatetimeUtils";
import { weatherIcon } from "../../../utils/IconsUtils";
import ErrorBox from "../../shared/ErrorBox";
import CityDateDetail from "./CityDateDetail";
import TemperatureWeatherDetail from "./TemperatureWeatherDetail";
import WeatherIconDetail from "./WeatherIconDetail";
import Layout from "../../shared/Layout";
import AirConditions from "../AirConditions/AirConditions";

const dayMonth = getDayMonthFromDate();

const Details = ({ data }) => {
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === "404";

  let content = <ErrorBox flex="1" type="error" />;

  if (!noDataProvided)
    content = (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          padding: 2,
          borderRadius: "20px",
        }}
      >
        <Box
          item
          xs={4}
          sx={{
            height: "80px",
          }}
        >
          <CityDateDetail city={data.city} date={dayMonth} />
        </Box>{" "}
        <Box
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
          }}
        >
          <WeatherIconDetail src={weatherIcon(`${data.weather[0].icon}.png`)} />
        </Box>
        <Box
          item
          xs={4}
          sx={{
            height: "80px",
          }}
        >
          <TemperatureWeatherDetail
            temperature={data.main.temp}
            description={data.weather[0].description}
          />
        </Box>
        <AirConditions data={data} />
      </Box>
    );

  return <Layout title="CURRENT WEATHER" content={content} />;
};

export default Details;
