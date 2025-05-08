document.addEventListener('DOMContentLoaded', () => {
  // Fix para los íconos por defecto de Leaflet
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });

  // Coordenadas del negocio
  const LAT_NEGOCIO = 40.4168;
  const LON_NEGOCIO = -3.7038;

  const map = L.map('contacto-mapa').setView([LAT_NEGOCIO, LON_NEGOCIO], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);

  const negocioCoords = [LAT_NEGOCIO, LON_NEGOCIO];
  L.marker(negocioCoords)
    .addTo(map)
    .bindPopup('<b>SpaCanelita</b><br>Cl. Toledo, 23, 13005 Ciudad Real')
    .openPopup();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userCoords = [
          position.coords.latitude,
          position.coords.longitude,
        ];

        L.marker(userCoords).addTo(map).bindPopup('Aquí estoy').openPopup();

        L.polyline([userCoords, negocioCoords], {
          color: 'blue',
        }).addTo(map);

        const bounds = L.latLngBounds([userCoords, negocioCoords]);

        map.fitBounds(bounds);
      },
      () => {
        alert('No se pudo obtener tu ubicación.');
      }
    );
  } else {
    alert('Tu navegador no admite geolocalización.');
  }
});
