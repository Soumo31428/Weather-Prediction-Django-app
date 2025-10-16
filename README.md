# Weather Prediction Django App

A modern weather forecasting application built with Django that provides real-time weather information and forecasts with an interactive chart visualization.

## Features

- Real-time weather data from OpenWeatherMap API
- Interactive temperature chart visualization
- 5-hour weather forecast
- Displays temperature, humidity, wind speed, and cloud coverage
- Responsive design with dynamic background based on weather conditions

## Tech Stack

- **Backend**: Django 4.2.6
- **Frontend**: HTML, CSS, JavaScript
- **Charts**: Chart.js
- **API**: OpenWeatherMap API
- **Machine Learning**: scikit-learn 1.3.1
- **Data Processing**: pandas 2.1.1, numpy 1.26.0
- **Environment Management**: python-dotenv 1.0.0
- **HTTP Client**: requests 2.31.0

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Soumo31428/Weather-Prediction-Django-app.git
   cd Weather-Prediction-Django-app
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a .env file in the root directory and add your OpenWeatherMap API key:
   ```
   API_KEY=your_api_key_here
   ```

5. Run migrations:
   ```bash
   python manage.py migrate
   ```

6. Start the development server:
   ```bash
   python manage.py runserver
   ```

7. Visit http://127.0.0.1:8000 in your browser

## Features in Detail

- **Current Weather**: Displays current temperature, "feels like" temperature, humidity, and weather description
- **Weather Forecast**: Shows 5-hour forecast with temperature and humidity trends
- **Interactive Chart**: Visual representation of temperature changes over time
- **Dynamic UI**: Background and styling adapt to current weather conditions

## Environment Variables

- `API_KEY`: Your OpenWeatherMap API key (required)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Charts powered by [Chart.js](https://www.chartjs.org/)