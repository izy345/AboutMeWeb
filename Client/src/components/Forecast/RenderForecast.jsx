import ForecastCard from "./ForecastCard"
import forecastThunks from "../../../store/Forecast-thunks"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

function RenderForecast() {
    const dispatch = useDispatch()
    const forecast = useSelector((state) => state.forecast.forecastData)

    useEffect(() => {
        dispatch(forecastThunks.getForecast())
    }, [dispatch])

    if (!forecast || forecast.length < 2) {
        return <div>Loading forecast...</div>
    }

    const forecastCards = []
    let startIndex = 0

    // If the first period is a night forecast, create a card with no high temp.
    if (forecast[0].isDaytime === false) {
        const nightPeriod = forecast[0]
        const formattedDate = new Date(nightPeriod.startTime).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        })
        forecastCards.push(
            <ForecastCard
                key={nightPeriod.number}
                Date={formattedDate}
                High="--"
                Low={nightPeriod.temperature}
                ShortForecast={nightPeriod.shortForecast}
                PrecipitationChance={nightPeriod.probabilityOfPrecipitation.value || 0}
                DayName={nightPeriod.name}
            />
        )
        startIndex = 1
    }

    // Group the remaining periods two-at-a-time (day then night) for up to 7 days.
    for (let i = startIndex; i < forecast.length; i += 2) {
        if (forecastCards.length === 7) break

        const dayPeriod = forecast[i]
        const formattedDate = new Date(dayPeriod.startTime).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        })

        // The next period is the night forecast.
        const nightPeriod = forecast[i + 1]

        forecastCards.push(
            <ForecastCard
                key={dayPeriod.number}
                Date={formattedDate}
                High={dayPeriod.temperature}
                Low={nightPeriod ? nightPeriod.temperature : dayPeriod.temperature}
                ShortForecast={dayPeriod.shortForecast}
                PrecipitationChance={dayPeriod.probabilityOfPrecipitation.value || 0}
                DayName={dayPeriod.name}
            />
        )
    }

    return (
        <>
            {forecastCards}
        </>
    )
}

export default RenderForecast