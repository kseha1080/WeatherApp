const apiKey = process.env.REACT_APP_API_KEY;

export const weatherApi = `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${apiKey}&cnt=40`;
