export default function generateTemperatureGraph(
    forecast,
    lineColor = 'rgba(227,227,227,0.8)',
    areaFillColor = null,
    yAxisIncrement = 0
) {
    const periods = forecast.slice(0, 14)
    const temps = periods.map(p => p.temperature)
    const minTemp = Math.min(...temps)
    const maxTemp = Math.max(...temps)
    const width = 500  // fixed width for the graph
    const height = 100 // fixed height for the graph
    const n = temps.length
    const dx = width / (n - 1)
    // For each temperature, compute an (x,y) pair.
    const points = temps.map((temp, i) => {
        const x = i * dx
        // Normalize temperature: top is min, bottom is max.
        const y = height - ((temp - minTemp) / (maxTemp - minTemp)) * height
        return `${x},${y}`
    }).join(" ")

    // Create the SVG content.
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`
    
    // If areaFillColor is provided, add a polygon to fill below the line.
    if (areaFillColor) {
        // Construct polygon points: start from bottom left, then along the polyline, finally to bottom right.
        const polygonPoints = `0,${height} ${points} ${width},${height}`
        svg += `<polygon fill="${areaFillColor}" points="${polygonPoints}" />`
    }
    
    // Add horizontal grid lines if yAxisIncrement is provided.
    if (yAxisIncrement > 0) {
        // Start from the smallest multiple above (or equal to) minTemp up to maxTemp.
        for (let temp = Math.ceil(minTemp); temp <= maxTemp; temp += yAxisIncrement) {
            const yPos = height - ((temp - minTemp) / (maxTemp - minTemp)) * height;
            svg += `<line x1="0" y1="${yPos}" x2="${width}" y2="${yPos}" stroke="#aaaaaa4a" stroke-dasharray="2,2" stroke-width="1" />`
        }
    }
    
    // Draw the polyline that represents the temperature graph.
    svg += `<polyline fill="none" stroke="${lineColor}" stroke-width="2" points="${points}" />`
    svg += `</svg>`
    
    const encodedSVG = encodeURIComponent(svg)
    return `url("data:image/svg+xml,${encodedSVG}")`
}