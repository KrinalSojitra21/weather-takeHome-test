import React, { useState } from "react";
import { Box, Grid, Link, SvgIcon, Typography } from "@mui/material";
import Search from "./components/Search/Search";
import WeeklyForecast from "./components/WeeklyForecast/WeeklyForecast";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import { fetchWeatherInfo } from "./api/WeatherInfo";
import { transformDateFormat } from "./utils/DatetimeUtils";
import UTCDatetime from "./components/shared/UTCDatetime";
import LoadingBox from "./components/shared/LoadingBox";
import { ReactComponent as SplashIcon } from "./assets/splash-icon.svg";
import Logo from "./assets/logo.svg";
import ErrorBox from "./components/shared/ErrorBox";
import { ALL_DESCRIPTIONS } from "./utils/DateConstants";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  getTodayForecastWeather,
  getWeekForecastWeather,
} from "./utils/DataUtils";
import DailyForecast from "./components/TodayWeather/Forecast/DailyForecast";

function App() {
  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchChangeHandler = async (enteredData) => {
    const [latitude, longitude] = enteredData.value.split(" ");

    setIsLoading(true);

    const currentDate = transformDateFormat();
    const date = new Date();
    let dt_now = Math.floor(date.getTime() / 1000);

    try {
      const [todayWeatherResponse, weekForecastResponse] =
        await fetchWeatherInfo(latitude, longitude);
      const all_today_forecasts_list = getTodayForecastWeather(
        weekForecastResponse,
        currentDate,
        dt_now
      );

      const all_week_forecasts_list = getWeekForecastWeather(
        weekForecastResponse,
        ALL_DESCRIPTIONS
      );

      setTodayForecast([...all_today_forecasts_list]);
      setTodayWeather({ city: enteredData.label, ...todayWeatherResponse });
      setWeekForecast({
        city: enteredData.label,
        list: all_week_forecasts_list,
      });
    } catch (error) {
      setError(true);
    }

    setIsLoading(false);
  };

  let appContent = (
    <Box
      xs={12}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        minHeight: "500px",
      }}
    >
      <SvgIcon
        component={SplashIcon}
        inheritViewBox
        sx={{ fontSize: { xs: "100px", sm: "120px", md: "140px" } }}
      />
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: { xs: "12px", sm: "14px" },
          color: "#000000",
          fontFamily: "Poppins",
          textAlign: "center",
          margin: "2rem 0",
          maxWidth: "80%",
          lineHeight: "22px",
        }}
      >
        Explore current weather data and 6-day forecast of more than 200,000
        cities!
      </Typography>
    </Box>
  );

  if (todayWeather && todayForecast && weekForecast) {
    appContent = (
      <React.Fragment>
        <Grid item xs={12} lg={todayWeather ? 6 : 12}>
          <Grid item xs={12}>
            <TodayWeather data={todayWeather} forecastList={todayForecast} />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={todayWeather ? 6 : 12}
          sx={{
            paddingTop: { xs: "1rem", sm: "15px", lg: "0px" },
          }}
        >
          <WeeklyForecast data={weekForecast} />
        </Grid>
        <Box item xs={12} md={todayWeather ? 6 : 12} sx={{ width: "100%" }}>
          <DailyForecast data={todayWeather} forecastList={todayForecast} />
        </Box>
      </React.Fragment>
    );
  }

  if (error) {
    appContent = (
      <ErrorBox
        margin="3rem auto"
        flex="inherit"
        errorMessage="Something went wrong"
      />
    );
  }

  if (isLoading) {
    appContent = (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "500px",
        }}
      >
        <LoadingBox value="1">
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: { xs: "10px", sm: "12px" },
              color: "#000000",
              lineHeight: 1,
              fontFamily: "Poppins",
            }}
          >
            Loading...
          </Typography>
        </LoadingBox>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        color: "#000000",
        background: "#F3F3F3",
        padding: "20px",

        overflow: "hidden",
        marginBottom: "1rem",
        borderRadius: {
          xs: "none",
          sm: "0 0 1rem 1rem",
        },
      }}
    >
      <Grid container columnSpacing={2}>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            <Box component="img" alt="logo" src={Logo} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                padding: { xs: "15px", md: "0px" },
              }}
            >
              <Search onSearchChange={searchChangeHandler} />
              <Link
                href="https://github.com/KrinalSojitra21/weather-takeHome-test.git"
                target="_blank"
                underline="none"
                sx={{ display: "flex" }}
              >
                <GitHubIcon
                  sx={{
                    fontSize: { xs: "20px", sm: "22px", md: "26px" },
                    color: "#000000",
                    "&:hover": { color: "#000000" },
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Grid>
        {appContent}
      </Grid>
    </Box>
  );
}

export default App;
