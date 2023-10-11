import { Box, Grid, SvgIcon } from "@mui/material";
import React from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
const AirConditionsItem = (props) => {
  let iconContent;

  if (props.type === "temperature")
    iconContent = <ThermostatIcon sx={{ fontSize: "28px" }} />;
  else if (props.type === "wind")
    iconContent = <AirIcon sx={{ fontSize: "28px" }} />;
  else if (props.type === "clouds")
    iconContent = <FilterDramaIcon sx={{ fontSize: "28px" }} />;
  else if (props.type === "humidity")
    iconContent = <InvertColorsIcon sx={{ fontSize: "28px" }} />;

  return (
    <Grid
      item
      xs={3}
      sx={{
        paddingX: "10px",
        paddingY: "5px",
        border: "1px solid #000000",
        borderRadius: "10px",
      }}
    >
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "40px" }}
      >
        <Box
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: { xs: "18px", sm: "20px", md: "22px" },
            color: "#000",
            lineHeight: 1,
          }}
        >
          {props.value}
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100%",
          height: "40px",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            color: "#000000",
            fontSize: { xs: "10px", sm: "12px", md: "14px" },
            paddingLeft: { xs: "0px", sm: "4px", md: "6px" },
            paddingTop: { xs: "2px", sm: "0px" },
            display: "flex",
            alignItems: "center",
          }}
        >
          {props.title}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#000000",
            padding: 0,
          }}
        >
          {iconContent}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AirConditionsItem;
