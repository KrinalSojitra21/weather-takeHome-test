import { Box, Typography } from "@mui/material";
import React from "react";

const CityDateDetail = (props) => {
  return (
    <Box className="flex justify-between">
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: { xs: "12px", sm: "14px", md: "16px" },
          color: "#000000",
          textTransform: "uppercase",
          lineHeight: 1,
          marginBottom: "8px",
        }}
      >
        {props.city}
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: { xs: "10px", sm: "12px", md: "14px" },
          color: "#000000",
          lineHeight: 1,
          letterSpacing: { xs: "1px", sm: "0" },
          fontFamily: "Roboto Condensed",
        }}
      >
        Today {props.date}
      </Typography>
    </Box>
  );
};

export default CityDateDetail;
