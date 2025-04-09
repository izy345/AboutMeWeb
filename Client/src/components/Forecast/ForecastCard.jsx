import Icon from '../../ui/Icon'
import styles from './Forecast.module.css'

function getIconForForecast(shortForecast) {
    const forecast = shortForecast.toLowerCase()
    if (forecast.includes("mostly clear")) return "LuCloudMoon"
    if (forecast.includes("thunder")) return "WiThunderstorm"
    if (forecast.includes("isolated thunder")) return "WiThunderstorm"
    if (forecast.includes("scattered thunder")) return "WiThunderstorm"
    if (forecast.includes("showers")) return "WiShowers"
    if (forecast.includes("rain")) return "WiRain"
    if (forecast.includes("fog")) return "WiFog"
    if (forecast.includes("snow")) return "WiSnow"
    if (forecast.includes("partly")) return "WiDayCloudy"
    if (forecast.includes("cloudy")) return "WiCloudy"
    if (forecast.includes("overcast")) return "WiCloudy"
    if (forecast.includes("mostly sunny")) return "WiDaySunnyOvercast"
    if (forecast.includes("sunny")) return "WiDaySunny"
    if (forecast.includes("clear")) return "AiOutlineMoon"
    return "WiDaySunny"  // default icon
}

function ForecastCard({Date, High, Low, ShortForecast, PrecipitationChance, DayName}) {

    const iconName = getIconForForecast(ShortForecast)

    // Calculate a dynamic font size for DayName:
    const baseSize = 16; 
    const extraChars = DayName.length > 7 ? DayName.length - 7 : 0;
    const effectiveFontSize = `${Math.max(baseSize - extraChars, 13.5)}px`;

    return (
    <section className={styles.ForecastCardRoot}>
        <div className={styles.centered}>
            <span className='bold-text'>{Date}</span>
        </div>
        <div className={styles.centered}>
            <span className={styles.highText}>{High}°</span>
        </div>
        <div className={styles.centered}>
            <span className={styles.lowText}>{Low}°</span>
        </div>
        <div className={styles.centered}>
            <Icon type={iconName} size={50} />
        </div>
        <div className={styles.centered}>
            {PrecipitationChance}%
        </div>
        <div className={styles.centered}>
            <span className={styles.dateText} style={{ fontSize: effectiveFontSize }}>{DayName}</span>
        </div>
    </section>
    )
}

export default ForecastCard