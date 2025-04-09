// thunk actions 
import { forecastSliceActions } from "./Forecast-slice";
import request from "../src/API";

const forecastActions = {}

forecastActions.getForecast = () => {
    return async (dispatch, getState) => {
        const response = await request('get','https://api.weather.gov/gridpoints/HGX/65,97/forecast')
        if (response.status !== 200){
            console.error('There was an error fetching the forecast data:', response?.data);
            return
        }
        console.log('Forecast data:', response.data.properties.periods);
        dispatch(forecastSliceActions.setForecastData(response.data.properties.periods));
    };
}

export default forecastActions