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

function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 13);
  return null;
}

export default function TravelAdvisor() {
  const [city, setCity] = useState("Manila");
  const [coords, setCoords] = useState([14.5995, 120.9842]);
  const [places, setPlaces] = useState([]);

  const fetchData = async (query) => {
    const encoded = encodeURIComponent(query);
    try {
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
      // Fetch nearby places (restaurants)
      try {
        const overpassRes = await axios.get(
          `https://overpass-api.de/api/interpreter?data=[out:json];node(around:1500,${lat},${lon})["amenity"="restaurant"];out;`
        );
        setPlaces(Array.isArray(overpassRes.data.elements) ? overpassRes.data.elements : []);
      } catch {
        setPlaces([]);
      }
    } catch (error) {
      alert("Error fetching location data. Please try again.");
    }
  };

  useEffect(() => {
    fetchData(city);
    // eslint-disable-next-line
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    fetchData(city);
  };

  return (
    <section style={{ width: 260, minWidth: 0 }}>
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search city..."
          style={{ flex: 1, padding: 6, borderRadius: 6, border: '1px solid #ccc', fontSize: 13 }}
        />
        <button type="submit" style={{ padding: '6px 12px', borderRadius: 6, background: '#1976d2', color: '#fff', border: 'none', fontSize: 13 }}>
          Search
        </button>
      </form>
      <div style={{ width: 240, height: 160, borderRadius: 8, overflow: 'hidden', border: '1px solid #eee' }}>
        <MapContainer
          center={coords}
          zoom={13}
          scrollWheelZoom={true}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          />
          <ChangeView coords={coords} />
          {places.map((p) => (
            <Marker key={p.id} position={[p.lat, p.lon]} icon={markerIcon}>
              <Popup>
                <strong>{p.tags.name || "Unnamed Restaurant"}</strong>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
