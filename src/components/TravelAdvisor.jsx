import { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Component to dynamically update map view
function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 13);
  return null;
}

export default function TravelAdvisor() {
  const [city, setCity] = useState("Manila");
  const [weather, setWeather] = useState(null);
  const [coords, setCoords] = useState([14.5995, 120.9842]);
  const [places, setPlaces] = useState([]);

  // Fetch location, weather, and nearby places
  const fetchData = async (query) => {
    const encoded = encodeURIComponent(query);
    try {
      // Geocoding (Nominatim)
      const geoRes = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encoded}`,
        { headers: { "Accept-Language": "en" } }
      );
      if (!Array.isArray(geoRes.data) || geoRes.data.length === 0) {
        alert("Location not found. Try a different city.");
        return;
      }
      const { lat, lon } = geoRes.data[0];
      setCoords([parseFloat(lat), parseFloat(lon)]);

      // Weather (OpenWeather) — optional if no key provided
      const openWeatherKey = import.meta.env.VITE_OPENWEATHER_KEY;
      if (openWeatherKey && openWeatherKey !== "") {
        try {
          const weatherRes = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${encoded}&appid=${openWeatherKey}&units=metric`
          );
          setWeather(weatherRes.data);
        } catch (weatherErr) {
          console.warn("Weather fetch failed:", weatherErr);
          alert("Unable to load weather. Check your OpenWeather API key.");
        }
      } else {
        console.warn("VITE_OPENWEATHER_KEY is missing. Skipping weather fetch.");
        setWeather(null);
      }

      // Nearby places (Overpass)
      try {
        const overpassRes = await axios.get(
          `https://overpass-api.de/api/interpreter?data=[out:json];node(around:1500,${lat},${lon})["amenity"="restaurant"];out;`
        );
        setPlaces(Array.isArray(overpassRes.data.elements) ? overpassRes.data.elements : []);
      } catch (overpassErr) {
        console.warn("Overpass fetch failed:", overpassErr);
        alert("Unable to load nearby places right now. Please try again later.");
        setPlaces([]);
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching location data. Please try again.");
    }
  };

  useEffect(() => {
    fetchData(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    fetchData(city);
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-6xl w-full text-center mb-10">
        <h1 className="text-4xl font-bold mb-3 text-cyan-400">
          🌍 Travel Advisor Dashboard
        </h1>
        <p className="text-gray-400">
          Search a place to view live weather, explore nearby restaurants, and
          navigate interactively.
        </p>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-3 w-full max-w-md mb-10"
      >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city..."
          className="flex-1 p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-400 transition transform hover:scale-105"
        >
          Search
        </button>
      </form>

      {/* Weather Card */}
      {weather && (
        <div className="bg-gray-900/70 p-6 rounded-2xl shadow-xl mb-10 border border-gray-800 backdrop-blur-sm max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="text-gray-400 text-sm mb-3 capitalize">
            {weather.weather[0].description}
          </p>
          <p className="text-5xl font-bold text-cyan-400">
            {Math.round(weather.main.temp)}°C
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm text-gray-300">
            <span>💧 {weather.main.humidity}%</span>
            <span>🌬️ {weather.wind.speed} m/s</span>
          </div>
        </div>
      )}

      {/* Map Section */}
      <div className="w-full max-w-5xl h-[500px] rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
        <MapContainer
          center={coords}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          />
          <ChangeView coords={coords} />

          {places.map((p) => (
            <Marker key={p.id} position={[p.lat, p.lon]} icon={markerIcon}>
              <Popup>
                🍽️ <strong>{p.tags.name || "Unnamed Restaurant"}</strong>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <p className="text-gray-500 mt-6 text-sm">
        🔍 Tip: Drag or zoom the map to explore nearby places.
      </p>
    </section>
  );
}
