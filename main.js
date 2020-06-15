const ACCESS_TOKEN = 'pk.eyJ1IjoiYXRvbWljbm80NyIsImEiOiJja2Jnb3c5N3QxMGJtMnhudWlveWJxM2FtIn0.teti1uOp-ljFqawM8tehoQ';
const MAPBOX_STYLE = 'mapbox://styles/atomicno47/ckbgqpw5z0nin1io16h47uk2c';


mapboxgl.accessToken = ACCESS_TOKEN;

var map = new mapboxgl.Map({
  container: 'map',


  style: 'mapbox://styles/atomicno47/ckbgqpw5z0nin1io16h47uk2c',
  center: [-77.04, 38.907],
  zoom: 14
});


map.addControl(
new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl
})
);


