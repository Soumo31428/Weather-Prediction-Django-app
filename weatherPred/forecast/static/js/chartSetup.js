document.addEventListener('DOMContentLoaded', () => {
    const chartElement = document.getElementById('chart');
    if (!chartElement) {
        console.error('Canvas element not found.')
        return;
    }


    chartElement.style.height = '150px';

    const ctx = chartElement.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');  // Changed gradient colors
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');

    const forecastItems = document.querySelectorAll('.forecast-item');
    const temps = [];
    const times = [];

    forecastItems.forEach(item => {
        const time = item.querySelector('.forecast-time').textContent;
        const temp = parseFloat(item.querySelector('.forecast-temparatureValue').textContent); // Added parseFloat
        const hum = item.querySelector('.forecast-humidityValue').textContent;

        if (time && !isNaN(temp) && hum) {  // Added isNaN check
            times.push(time);
            temps.push(temp);
        }
    });

    if (temps.length === 0 || times.length === 0) {
        console.error("Temperature or time values are missing.");
        return;
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: 'Temperature (°C)',
                data: temps,
                borderColor: 'rgba(255, 255, 255, 0.8)',  // Changed to white
                backgroundColor: gradient,
                borderWidth: 1.5,
                tension: 0.4,
                pointRadius: 3,
                pointBackgroundColor: '#fff',
                pointBorderColor: 'rgba(255, 255, 255, 0.8)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.8)',  // White text
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    display: true,
                    grid: {
                        display: false
                    },
                }
            },
            layout: {
                padding: {
                    top: 10,
                    right: 10,
                    bottom: 10,
                    left: 10
                }
            }
        }
    });
});

