document.addEventListener('DOMContentLoaded', () => {
  //Coordenadas de mi negocio
  const negocioLatLng = [38.9861, -3.927263];

  //Crear el mapa
  const map = L.map('map').setView(negocioLatLng, 13);

  //Agregar capa base de OpenStreetMap

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);

  //Marcador del negocio
  L.marker(negocioLatLng).addTo(map).bindPopup('Mi negocio').openPopup();

  //Obtener ubicación del cliente
  map.locate({ setView: true, maxZoom: 14 });

  function onLocationFound(e) {
    const clienteLatLng = [e.latitude, e.longitude];

    //Ruta desde el cliente hasta el negocio
    L.Routing.control({
      waypoints: [L.latLng(clienteLatLng), L.latLng(negocioLatLng)],
      router: new L.Routing.OpenRouteService({
        serviceUrl:
          'https://api.openrouteservice.org/v2/directions/foot-walking',
        apiKey: '5b3ce3597851110001cf6248f159a235b5064e40a3a9f7695e2216b1', // 🔐 Reemplaza con tu clave real
      }),
      lineOptions: {
        styles: [{ color: 'blue', opacity: 0.6, weight: 5 }],
      },
      show: false,
    }).addTo(map);
  }
  map.on('locationfound', onLocationFound);
});
