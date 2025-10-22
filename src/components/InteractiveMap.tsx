import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon as LeafletIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Place {
  id: number;
  name: string;
  position: [number, number];
  category: string;
  description: string;
}

interface InteractiveMapProps {
  places: Place[];
}

const createCustomIcon = (category: string) => {
  const colors: Record<string, string> = {
    'Архитектура': '#ea580c',
    'Природа': '#16a34a',
    'Музеи': '#9333ea',
    'Развлечения': '#0284c7'
  };
  
  const color = colors[category] || '#ea580c';
  
  return new LeafletIcon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
        <path fill="${color}" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    `)}`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
};

const InteractiveMap = ({ places }: InteractiveMapProps) => {
  const vladimirCenter: [number, number] = [56.1366, 40.3966];

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
      <MapContainer
        center={vladimirCenter}
        zoom={13}
        className="w-full h-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.map((place) => (
          <Marker
            key={place.id}
            position={place.position}
            icon={createCustomIcon(place.category)}
          >
            <Popup className="custom-popup">
              <div className="p-2">
                <h3 className="font-display font-bold text-lg mb-1">{place.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{place.description}</p>
                <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                  {place.category}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
