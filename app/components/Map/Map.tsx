'use client'; 
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import styles from './style.module.scss'
import 'leaflet/dist/leaflet.css';


const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    if (!mapRef.current) return; 

    const map = L.map(mapRef.current).setView([59.83400, 30.20472], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', // Путь к картинке иконки
      iconSize: [32, 32], 
      iconAnchor: [16, 32], 
      popupAnchor: [0, -32],
    });

    const points = [
        { lat: 59.83400, lng: 30.20472, title: 'Магазин Новая Позодка, ремонт обуви ' },
      ];

    points.forEach((point) => {
      L.marker([point.lat, point.lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(`${point.title}`);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className={styles.block}>
        <h1 className={styles.text}>Местополжение</h1>
        <div className={styles.map}>
        <div ref={mapRef} style={{ height: '400px', width: '100%' }} />
        </div>
    </div>
  );
};

export default MapComponent;
