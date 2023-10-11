import { Box, Typography } from "@mui/material";
import React from "react";
import { weatherIcon } from "../../../utils/IconsUtils";

const DailyForecastItem = (props) => {
  return (
    <Box
      sx={{
        background: "#F8F8F8",
        minHeight: "200px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        textAlign: "center",
        padding: 2,
        width: "100%",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: "400",
          fontSize: { xs: "20px", sm: "22px" },
          color: "#000000",
          lineHeight: 1,
          padding: "4px",
          fontFamily: "Poppins",
        }}
      >
        {props.item.time}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#000000",
          padding: "4px",
        }}
      >
        <Box
          component="img"
          sx={{
            width: { xs: "36px", sm: "42px" },
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            margin: "0 auto",
          }}
          alt="weather"
          src={weatherIcon(`${props.data.weather[0].icon}.png`)}
        />
      </Box>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: "600",
          fontSize: { xs: "32px", sm: "34px" },
          color: "#000000",
          textTransform: "uppercase",
          lineHeight: 1,
          marginBottom: { xs: "8px", md: "0" },
          fontFamily: "Poppins",
        }}
      >
        {props.item.temperature}
      </Typography>
    </Box>
  );
};

export default DailyForecastItem;
