import React from "react"
import Card from "../../ui/Card/Card"
import RenderForecast from "./RenderForecast"
import { useSelector } from "react-redux"
import styles from "./Forecast.module.css"
import generateTemperatureGraph from "./generateTemperaturegraph"

function Forecast() {

    const isMobile = useSelector((state) => state.mobile.isMobile);
    const forecast = useSelector((state) => state.forecast.forecastData)

    // Only generate background if we have at least 14 periods.
    const graphBackground = forecast && forecast.length >= 14 ? 
        generateTemperatureGraph(forecast, '#d6ebfc7b', 'rgba(180, 244, 255, 0.224)', 5) : "none"

    return (
        <section className="container">
            <Card style={{ padding: "8px" }}>
                <div className="gradientBackground">
                    <span className="bold-text">
                        Interested? Check out my fully functional weather forecast for Houston, Tx!
                    </span>
                </div>
                <p/>
                <section style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div className={styles.currentForecastContainer}>
                    <span>
                        {forecast && forecast.length > 0
                            ? `${forecast[0].detailedForecast}`
                            : <></>}
                    </span>
                </div>
                </section>
                <p/>
                <div style={{ overflowX: 'auto', width: 'auto' }}>
                    <section 
                        className={styles.forecastGraphContainer}
                        style={{
                            backgroundImage: graphBackground,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            display: "flex",
                            justifyContent: "space-evenly",
                            marginLeft: "8px",
                            marginRight: "8px",
                            paddingTop: "8px",
                            height: '220px',
                            width: isMobile ? '1000px' : 'auto',
                            
                        }}
                    >
                        <RenderForecast />
                    </section>
                </div>
            </Card>
        </section>
    )
}

export default Forecast