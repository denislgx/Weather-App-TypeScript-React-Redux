import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store/index";
import {
    WeatherAction,
    WeatherData,
    WeatherError,
    GET_WEATHER,
    SET_ERROR,
    SET_LOADING,
} from "../types";

export const getWeather = (
    city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
            );

            if (!res.ok) {
                const resData: WeatherError = await res.json();
            }

            const resData: WeatherData = await res.json();
            dispatch({
                type: GET_WEATHER,
                payload: resData,
            });
        } catch (err) {
            dispatch({
                type: SET_ERROR,
                payload: "An error has occurred! Please try again.",
            });
        }
    };
};

export const setLoading = (): WeatherAction => {
    return {
        type: SET_LOADING,
    };
};

export const setError = (): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: "",
    };
};
