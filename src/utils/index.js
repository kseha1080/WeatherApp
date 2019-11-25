import moment from 'moment';

// Weather data from API reconstructed for grouping and easier access to data
export const recontructWeatherData = (weatherData) => {
  let groupedWeatherData = [];
  let dayWeatherData = [];

  // Give date and time to each weather info object
  const newWeatherData = weatherData.map((weatherObj) => {
    const weatherObjDate = moment
      .unix(weatherObj.dt)
      .utc()
      .format('YYYY-MM-DD');
    const weatherObjTime = moment
      .unix(weatherObj.dt)
      .utc()
      .format('HH:mm A');
    weatherObj.date = weatherObjDate;
    weatherObj.time = weatherObjTime;
    return weatherObj;
  });

  // Group each weather obj by day
  for (let weatherObj of newWeatherData) {
    if (!dayWeatherData.length) {
      dayWeatherData.push(weatherObj);
    } else {
      if (dayWeatherData[0].date === weatherObj.date) {
        dayWeatherData.push(weatherObj);
        if (newWeatherData.indexOf(weatherObj) === newWeatherData.length - 1) {
          groupedWeatherData.push(dayWeatherData);
        }
      } else {
        groupedWeatherData.push(dayWeatherData);
        dayWeatherData = [];
        dayWeatherData.push(weatherObj);
      }
    }
  }

  // Return the grouped arrays as objects for easier access to data
  // Append useful information for each day
  const finalWeatherData = groupedWeatherData.map((weatherArray) => {
    let meanTemp = 0;
    let meanHumidity = 0;
    for (let weatherObj of weatherArray) {
      meanTemp += weatherObj.main.temp;
      meanHumidity += weatherObj.main.humidity;
    }
    meanTemp = meanTemp / weatherArray.length;
    meanHumidity = meanHumidity / weatherArray.length;
    meanTemp = Math.round(meanTemp);
    meanHumidity = Math.round(meanHumidity);
    return {
      date: weatherArray[0].date,
      meanTemp,
      meanHumidity,
      weatherDescription: weatherArray[0].weather[0].main,
      weatherDataByTime: weatherArray,
    };
  });

  return finalWeatherData;
};
