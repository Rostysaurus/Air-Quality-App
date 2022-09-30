import "./footer.scss"

export default function Footer() {
  return (
    <div data-testid="footer" className="footer">
      <a href="https://www.weatherapi.com/" title="Free Weather API">Powered by </a>
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"></img>
      </a>
    </div>
  )
}
