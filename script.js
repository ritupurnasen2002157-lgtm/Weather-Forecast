        const indianCities = [
            // METRO CITIES (8)
            { name: "Mumbai", state: "Maharashtra", temp: 32, condition: "Partly Cloudy", aqi: 153 },
            { name: "Delhi", state: "Delhi NCR", temp: 38, condition: "Heat Wave", aqi: 312 },
            { name: "Bangalore", state: "Karnataka", temp: 26, condition: "Pleasant", aqi: 42 },
            { name: "Chennai", state: "Tamil Nadu", temp: 35, condition: "Humid", aqi: 98 },
            { name: "Kolkata", state: "West Bengal", temp: 33, condition: "Humid", aqi: 165 },
            { name: "Hyderabad", state: "Telangana", temp: 34, condition: "Sunny", aqi: 87 },
            { name: "Pune", state: "Maharashtra", temp: 30, condition: "Pleasant", aqi: 72 },
            { name: "Ahmedabad", state: "Gujarat", temp: 36, condition: "Sunny", aqi: 134 },

            // NORTH INDIA (25)
            { name: "Jaipur", state: "Rajasthan", temp: 39, condition: "Heat Wave", aqi: 178 },
            { name: "Lucknow", state: "Uttar Pradesh", temp: 37, condition: "Humid", aqi: 198 },
            { name: "Kanpur", state: "Uttar Pradesh", temp: 38, condition: "Hot", aqi: 215 },
            { name: "Agra", state: "Uttar Pradesh", temp: 39, condition: "Sunny", aqi: 188 },
            { name: "Varanasi", state: "Uttar Pradesh", temp: 37, condition: "Humid", aqi: 205 },
            { name: "Meerut", state: "Uttar Pradesh", temp: 37, condition: "Sunny", aqi: 192 },
            { name: "Allahabad", state: "Uttar Pradesh", temp: 38, condition: "Hot", aqi: 208 },
            { name: "Ghaziabad", state: "Uttar Pradesh", temp: 37, condition: "Hazy", aqi: 225 },
            { name: "Amritsar", state: "Punjab", temp: 34, condition: "Sunny", aqi: 145 },
            { name: "Ludhiana", state: "Punjab", temp: 35, condition: "Sunny", aqi: 158 },
            { name: "Jalandhar", state: "Punjab", temp: 34, condition: "Clear", aqi: 142 },
            { name: "Chandigarh", state: "Chandigarh", temp: 32, condition: "Pleasant", aqi: 112 },
            { name: "Dehradun", state: "Uttarakhand", temp: 28, condition: "Cloudy", aqi: 78 },
            { name: "Shimla", state: "Himachal Pradesh", temp: 22, condition: "Cool", aqi: 45 },
            { name: "Dharamshala", state: "Himachal Pradesh", temp: 24, condition: "Pleasant", aqi: 38 },
            { name: "Srinagar", state: "Jammu & Kashmir", temp: 18, condition: "Cool", aqi: 52 },
            { name: "Jammu", state: "Jammu & Kashmir", temp: 32, condition: "Sunny", aqi: 98 },
            { name: "Leh", state: "Ladakh", temp: 12, condition: "Cold", aqi: 25 },
            { name: "Gurugram", state: "Haryana", temp: 37, condition: "Hazy", aqi: 235 },
            { name: "Faridabad", state: "Haryana", temp: 37, condition: "Hazy", aqi: 228 },
            { name: "Panipat", state: "Haryana", temp: 36, condition: "Sunny", aqi: 182 },
            { name: "Hisar", state: "Haryana", temp: 38, condition: "Hot", aqi: 165 },
            { name: "Rohtak", state: "Haryana", temp: 37, condition: "Sunny", aqi: 172 },
            { name: "Kurukshetra", state: "Haryana", temp: 35, condition: "Clear", aqi: 148 },

            // SOUTH INDIA (25)
            { name: "Coimbatore", state: "Tamil Nadu", temp: 32, condition: "Pleasant", aqi: 65 },
            { name: "Madurai", state: "Tamil Nadu", temp: 34, condition: "Sunny", aqi: 82 },
            { name: "Tiruchirappalli", state: "Tamil Nadu", temp: 33, condition: "Sunny", aqi: 75 },
            { name: "Salem", state: "Tamil Nadu", temp: 32, condition: "Partly Cloudy", aqi: 68 },
            { name: "Tirunelveli", state: "Tamil Nadu", temp: 31, condition: "Humid", aqi: 72 },
            { name: "Vellore", state: "Tamil Nadu", temp: 33, condition: "Sunny", aqi: 78 },
            { name: "Erode", state: "Tamil Nadu", temp: 32, condition: "Partly Cloudy", aqi: 64 },
            { name: "Thoothukkudi", state: "Tamil Nadu", temp: 31, condition: "Humid", aqi: 70 },
            { name: "Kochi", state: "Kerala", temp: 29, condition: "Rainy", aqi: 45 },
            { name: "Thiruvananthapuram", state: "Kerala", temp: 28, condition: "Cloudy", aqi: 42 },
            { name: "Kozhikode", state: "Kerala", temp: 30, condition: "Humid", aqi: 48 },
            { name: "Thrissur", state: "Kerala", temp: 29, condition: "Rainy", aqi: 44 },
            { name: "Kollam", state: "Kerala", temp: 29, condition: "Humid", aqi: 46 },
            { name: "Palakkad", state: "Kerala", temp: 30, condition: "Partly Cloudy", aqi: 50 },
            { name: "Mysore", state: "Karnataka", temp: 26, condition: "Pleasant", aqi: 38 },
            { name: "Hubli", state: "Karnataka", temp: 28, condition: "Sunny", aqi: 55 },
            { name: "Mangalore", state: "Karnataka", temp: 29, condition: "Humid", aqi: 48 },
            { name: "Belgaum", state: "Karnataka", temp: 27, condition: "Pleasant", aqi: 52 },
            { name: "Gulbarga", state: "Karnataka", temp: 31, condition: "Sunny", aqi: 62 },
            { name: "Davanagere", state: "Karnataka", temp: 29, condition: "Sunny", aqi: 58 },
            { name: "Vijayawada", state: "Andhra Pradesh", temp: 34, condition: "Humid", aqi: 88 },
            { name: "Visakhapatnam", state: "Andhra Pradesh", temp: 32, condition: "Humid", aqi: 85 },
            { name: "Guntur", state: "Andhra Pradesh", temp: 34, condition: "Sunny", aqi: 82 },
            { name: "Nellore", state: "Andhra Pradesh", temp: 33, condition: "Humid", aqi: 79 },
            { name: "Kurnool", state: "Andhra Pradesh", temp: 35, condition: "Hot", aqi: 84 },
            { name: "Rajahmundry", state: "Andhra Pradesh", temp: 33, condition: "Humid", aqi: 80 },
            { name: "Tirupati", state: "Andhra Pradesh", temp: 32, condition: "Sunny", aqi: 72 },

            // WEST INDIA (20)
            { name: "Surat", state: "Gujarat", temp: 34, condition: "Humid", aqi: 115 },
            { name: "Vadodara", state: "Gujarat", temp: 35, condition: "Sunny", aqi: 122 },
            { name: "Rajkot", state: "Gujarat", temp: 34, condition: "Sunny", aqi: 108 },
            { name: "Bhavnagar", state: "Gujarat", temp: 33, condition: "Sunny", aqi: 98 },
            { name: "Jamnagar", state: "Gujarat", temp: 32, condition: "Sunny", aqi: 95 },
            { name: "Gandhinagar", state: "Gujarat", temp: 35, condition: "Sunny", aqi: 118 },
            { name: "Junagadh", state: "Gujarat", temp: 32, condition: "Sunny", aqi: 88 },
            { name: "Anand", state: "Gujarat", temp: 33, condition: "Sunny", aqi: 102 },
            { name: "Nagpur", state: "Maharashtra", temp: 34, condition: "Sunny", aqi: 125 },
            { name: "Nashik", state: "Maharashtra", temp: 28, condition: "Pleasant", aqi: 68 },
            { name: "Aurangabad", state: "Maharashtra", temp: 32, condition: "Sunny", aqi: 95 },
            { name: "Solapur", state: "Maharashtra", temp: 33, condition: "Hot", aqi: 112 },
            { name: "Kolhapur", state: "Maharashtra", temp: 29, condition: "Pleasant", aqi: 72 },
            { name: "Sangli", state: "Maharashtra", temp: 31, condition: "Sunny", aqi: 85 },
            { name: "Amravati", state: "Maharashtra", temp: 34, condition: "Hot", aqi: 118 },
            { name: "Nanded", state: "Maharashtra", temp: 33, condition: "Sunny", aqi: 105 },
            { name: "Satara", state: "Maharashtra", temp: 29, condition: "Pleasant", aqi: 68 },
            { name: "Ratnagiri", state: "Maharashtra", temp: 30, condition: "Humid", aqi: 62 },
            { name: "Goa", state: "Goa", temp: 30, condition: "Humid", aqi: 55 },

            // EAST INDIA (15)
            { name: "Patna", state: "Bihar", temp: 35, condition: "Humid", aqi: 185 },
            { name: "Gaya", state: "Bihar", temp: 34, condition: "Sunny", aqi: 172 },
            { name: "Bhagalpur", state: "Bihar", temp: 33, condition: "Humid", aqi: 168 },
            { name: "Muzaffarpur", state: "Bihar", temp: 33, condition: "Humid", aqi: 175 },
            { name: "Ranchi", state: "Jharkhand", temp: 29, condition: "Pleasant", aqi: 88 },
            { name: "Jamshedpur", state: "Jharkhand", temp: 31, condition: "Humid", aqi: 112 },
            { name: "Dhanbad", state: "Jharkhand", temp: 32, condition: "Hazy", aqi: 145 },
            { name: "Bhubaneswar", state: "Odisha", temp: 31, condition: "Humid", aqi: 95 },
            { name: "Cuttack", state: "Odisha", temp: 31, condition: "Humid", aqi: 98 },
            { name: "Rourkela", state: "Odisha", temp: 30, condition: "Cloudy", aqi: 88 },
            { name: "Puri", state: "Odisha", temp: 30, condition: "Humid", aqi: 82 },
            { name: "Guwahati", state: "Assam", temp: 28, condition: "Rainy", aqi: 62 },
            { name: "Silchar", state: "Assam", temp: 27, condition: "Rainy", aqi: 58 },
            { name: "Dibrugarh", state: "Assam", temp: 26, condition: "Rainy", aqi: 52 },
            { name: "Shillong", state: "Meghalaya", temp: 22, condition: "Cool", aqi: 35 },

            // CENTRAL INDIA (12)
            { name: "Bhopal", state: "Madhya Pradesh", temp: 34, condition: "Sunny", aqi: 128 },
            { name: "Indore", state: "Madhya Pradesh", temp: 33, condition: "Pleasant", aqi: 115 },
            { name: "Jabalpur", state: "Madhya Pradesh", temp: 34, condition: "Sunny", aqi: 122 },
            { name: "Gwalior", state: "Madhya Pradesh", temp: 37, condition: "Hot", aqi: 155 },
            { name: "Ujjain", state: "Madhya Pradesh", temp: 33, condition: "Sunny", aqi: 118 },
            { name: "Sagar", state: "Madhya Pradesh", temp: 34, condition: "Sunny", aqi: 125 },
            { name: "Raipur", state: "Chhattisgarh", temp: 33, condition: "Sunny", aqi: 108 },
            { name: "Bilaspur", state: "Chhattisgarh", temp: 32, condition: "Sunny", aqi: 102 },
            { name: "Durg", state: "Chhattisgarh", temp: 33, condition: "Sunny", aqi: 105 },
            { name: "Bhilai", state: "Chhattisgarh", temp: 33, condition: "Hazy", aqi: 112 }
        ];

        
        const conditions = [
            "Sunny", "Partly Cloudy", "Cloudy", "Hazy", "Clear Sky",
            "Light Rain", "Heavy Rain", "Thunderstorm", "Heat Wave",
            "Pleasant", "Humid", "Hot", "Cool Breeze", "Dust Storm"
        ];

        
        const citySearch = document.getElementById('citySearch');
        const searchBtn = document.getElementById('searchBtn');
        const refreshBtn = document.getElementById('refreshBtn');
        const locationBtn = document.getElementById('locationBtn');
        const themeToggle = document.getElementById('themeToggle');
        const loading = document.getElementById('loading');
        const modal = document.getElementById('weatherModal');
        const closeModal = document.getElementById('closeModal');
        const cityGrid = document.getElementById('cityGrid');
        const allCitiesDatalist = document.getElementById('all-cities');

        let currentCity = indianCities[0];

        
        function init() {
            populateCityGrid();
            updateWeatherData(currentCity);
            updateLastUpdated();
            document.getElementById('cityCount').textContent = indianCities.length + '+ Cities'; // Fixed: Added semicolon
        }

        
        function populateCityGrid() {
            cityGrid.innerHTML = '';
            allCitiesDatalist.innerHTML = '';
            
            indianCities.forEach(city => {
        
                const chip = document.createElement('div');
                chip.className = 'city-chip';
                chip.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${city.name}`;
                chip.onclick = () => changeCity(city.name);
                cityGrid.appendChild(chip);
                
                
                const option = document.createElement('option');
                option.value = city.name;
                allCitiesDatalist.appendChild(option);
            });
        }

        
        function changeCity(cityName) {
            const city = indianCities.find(c => c.name === cityName) || indianCities[0];
            currentCity = city;
            updateWeatherData(city);
        }

        
        function updateWeatherData(city) {
            showLoading(true);
            
            setTimeout(() => {
        
                const tempVariation = Math.floor(Math.random() * 5) - 2;
                const temp = city.temp + tempVariation;
                const feelsLike = temp + Math.floor(Math.random() * 4);
                const humidity = Math.floor(Math.random() * 30 + 50);
                const windSpeed = Math.floor(Math.random() * 20 + 5);
                const pressure = Math.floor(Math.random() * 30 + 1000);
                const visibility = (Math.random() * 8 + 2).toFixed(1);
                const uvIndex = (Math.random() * 8 + 2).toFixed(1);
                const condition = conditions[Math.floor(Math.random() * conditions.length)];
                
            
                document.getElementById('cityName').textContent = city.name;
                document.getElementById('temperature').textContent = `${temp}°C`;
                document.getElementById('weatherCondition').textContent = condition;
                document.getElementById('feelsLike').textContent = `${feelsLike}°C`;
                document.getElementById('humidity').textContent = `${humidity}%`;
                document.getElementById('windSpeed').textContent = `${windSpeed} km/h`;
                document.getElementById('pressure').textContent = `${pressure} hPa`;
                document.getElementById('visibility').textContent = `${visibility} km`;
                document.getElementById('uvIndex').textContent = uvIndex;
                
            
                const uvElement = document.getElementById('uvIndex');
                uvElement.className = 'uv-index';
                if (uvIndex < 3) uvElement.classList.add('uv-low');
                else if (uvIndex < 6) uvElement.classList.add('uv-moderate');
                else uvElement.classList.add('uv-high');
                
            
                const iconElement = document.getElementById('mainWeatherIcon');
                iconElement.className = 'weather-icon';
                
                if (condition.includes('Rain')) {
                    iconElement.innerHTML = '<i class="fas fa-cloud-rain"></i>';
                    iconElement.classList.add('rain');
                } else if (condition.includes('Cloud') || condition.includes('Hazy')) {
                    iconElement.innerHTML = '<i class="fas fa-cloud"></i>';
                    iconElement.classList.add('cloud');
                } else if (condition.includes('Thunder')) {
                    iconElement.innerHTML = '<i class="fas fa-bolt"></i>';
                    iconElement.classList.add('thunder');
                } else if (condition.includes('Dust')) {
                    iconElement.innerHTML = '<i class="fas fa-smog"></i>';
                    iconElement.classList.add('mist');
                } else {
                    iconElement.innerHTML = '<i class="fas fa-sun"></i>';
                    iconElement.classList.add('sun');
                }
                
            
                const alertElement = document.getElementById('alertMessage');
                if (temp > 38) {
                    alertElement.textContent = '⚠️ Extreme heat warning! Stay hydrated and avoid going out in afternoon.';
                } else if (humidity > 75) {
                    alertElement.textContent = '💧 High humidity. Stay hydrated and use sunscreen.';
                } else if (uvIndex > 8) {
                    alertElement.textContent = '☀️ Very high UV index. Use sunscreen and wear protective clothing.';
                } else if (condition.includes('Rain')) {
                    alertElement.textContent = '☔ Rain expected. Carry umbrella while going out.';
                } else {
                    alertElement.textContent = '✅ Normal weather conditions for this region.';
                }
                
        
                updateAQI(city);
                
        
                updateForecast();
                
            
                document.getElementById('modalCity').textContent = `${city.name}, ${city.state}`;
                
                showLoading(false);
                updateLastUpdated();
            }, 600);
        }

        
        function updateAQI(city) {
            const aqi = city.aqi || Math.floor(Math.random() * 200 + 50);
            let aqiColor = '#4caf50';
            let aqiLevel = 'Good';
            
            if (aqi > 300) { aqiColor = '#9c27b0'; aqiLevel = 'Severe'; }
            else if (aqi > 200) { aqiColor = '#f44336'; aqiLevel = 'Poor'; }
            else if (aqi > 150) { aqiColor = '#ff9800'; aqiLevel = 'Unhealthy'; }
            else if (aqi > 100) { aqiColor = '#ffeb3b'; aqiLevel = 'Moderate'; }
            else if (aqi > 50) { aqiColor = '#8bc34a'; aqiLevel = 'Satisfactory'; }
            
            document.getElementById('aqiGrid').innerHTML = `
                <div class="aqi-item">
                    <div class="aqi-value" style="color: ${aqiColor}">${aqi}</div>
                    <div class="aqi-label">AQI (${aqiLevel})</div>
                </div>
                <div class="aqi-item">
                    <div class="aqi-value">${Math.floor(aqi * 0.6)}</div>
                    <div class="aqi-label">PM2.5</div>
                </div>
                <div class="aqi-item">
                    <div class="aqi-value">${Math.floor(aqi * 0.9)}</div>
                    <div class="aqi-label">PM10</div>
                </div>
                <div class="aqi-item">
                    <div class="aqi-value">${Math.floor(Math.random() * 50 + 20)}</div>
                    <div class="aqi-label">O₃</div>
                </div>
                <div class="aqi-item">
                    <div class="aqi-value">${Math.floor(Math.random() * 40 + 10)}</div>
                    <div class="aqi-label">NO₂</div>
                </div>
                <div class="aqi-item">
                    <div class="aqi-value">${Math.floor(Math.random() * 20 + 5)}</div>
                    <div class="aqi-label">SO₂</div>
                </div>
            `;
        }

    
        function updateForecast() {
            const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
            const forecastGrid = document.getElementById('forecastGrid');
            forecastGrid.innerHTML = '';
            
            days.forEach((day, index) => {
                const max = Math.floor(Math.random() * 8 + 30);
                const min = Math.floor(Math.random() * 6 + 22);
                const condition = conditions[Math.floor(Math.random() * conditions.length)];
                
                let icon = 'fa-sun';
                if (condition.includes('Rain')) icon = 'fa-cloud-rain';
                else if (condition.includes('Cloud')) icon = 'fa-cloud';
                else if (condition.includes('Thunder')) icon = 'fa-bolt';
                else if (condition.includes('Haze') || condition.includes('Dust')) icon = 'fa-smog';
                
                const card = document.createElement('div');
                card.className = 'forecast-card';
                card.onclick = () => {
                    document.getElementById('modalDetails').innerHTML = `
                        <p><strong>Day:</strong> ${day}</p>
                        <p><strong>Condition:</strong> ${condition}</p>
                        <p><strong>Max Temperature:</strong> ${max}°C</p>
                        <p><strong>Min Temperature:</strong> ${min}°C</p>
                        <p><strong>Humidity:</strong> ${Math.floor(Math.random() * 30 + 50)}%</p>
                        <p><strong>Wind Speed:</strong> ${Math.floor(Math.random() * 15 + 8)} km/h</p>
                        <p><strong>Rain Probability:</strong> ${Math.floor(Math.random() * 60)}%</p>
                    `;
                    modal.classList.add('active');
                };
                
                card.innerHTML = `
                    <div class="forecast-date">${day}</div>
                    <div class="forecast-icon">
                        <i class="fas ${icon}"></i>
                    </div>
                    <div class="forecast-temp">
                        <span class="max-temp">${max}°</span>
                        <span class="min-temp">${min}°</span>
                    </div>
                    <div class="forecast-condition">${condition}</div>
                `;
                
                forecastGrid.appendChild(card);
            });
        }

        
        function updateLastUpdated() {
            const now = new Date();
            const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
            document.getElementById('lastUpdated').textContent = `Last updated: ${now.toLocaleTimeString('en-IN', options)} IST`;
        }

    
        function showLoading(show) {
            if (show) {
                loading.classList.add('active');
                document.getElementById('weatherDisplay').style.opacity = '0.5';
            } else {
                loading.classList.remove('active');
                document.getElementById('weatherDisplay').style.opacity = '1';
            }
        }

    
        function searchCity() {
            const searchTerm = citySearch.value.trim();
            const city = indianCities.find(c => c.name.toLowerCase() === searchTerm.toLowerCase());
            
            if (city) {
                changeCity(city.name);
                citySearch.value = '';
            } else if (searchTerm) {
                alert(`City "${searchTerm}" not found. Showing all ${indianCities.length} cities in grid.`);
            }
        }

        
        searchBtn.addEventListener('click', searchCity);
        
        citySearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchCity();
        });

        refreshBtn.addEventListener('click', () => {
            updateWeatherData(currentCity);
        });

        locationBtn.addEventListener('click', () => {
            alert('📍 Using your location... Showing Mumbai as demo.');
            changeCity('Mumbai');
        });


        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        });

    
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

    
        setInterval(() => {
            updateWeatherData(currentCity);
        }, 120000);

        init();