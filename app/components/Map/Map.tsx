'use client';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import styles from './style.module.scss'
import 'leaflet/dist/leaflet.css';
import endpointImage from '../../assets/images/hero-bg.png';

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const imagesSrc = ['https://spb.ros-spravka.ru/upload/iblock/77c/trk-uljnka.jpg','https://avatars.mds.yandex.net/get-altay/14209766/2a000001933056926a96e79f842cafdbd820/XXXL'];


  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([59.83400, 30.20472], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    const points = [
      { lat: 59.83400, lng: 30.20472, title: 'ТРК Ульянка 1 этаж левое крыло', image: endpointImage },
      { lat: 59.970092, lng: 30.405691, title: 'Ремонт ключей проспект металлистов 65', image: endpointImage}
    ];

    points.forEach((point,index) => {
      L.marker([point.lat, point.lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(`
            <p>${point.title}</p>
            <img src="${imagesSrc[index]}" alt="Местоположение" width="200px" height="100%" />
        `);
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
