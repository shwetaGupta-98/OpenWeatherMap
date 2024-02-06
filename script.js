document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'd9bddf8778aa9fe551dd1a8289292d0b'; 
    const city = 'New York';

    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const { name, main, weather } = data;
            locationElement.textContent = name;
            temperatureElement.textContent = main.temp;
            descriptionElement.textContent = weather[0].description;
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
});
