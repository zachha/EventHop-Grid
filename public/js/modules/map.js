import { $ } from './bling';

const durham = { lat: 35.997, lng: -78.904 };
const mapOptions = {
    center: durham,
    zoom: 15
};
/* Initializes the location map.
let map = new google.maps.Map(document.getElementById("map"), {
    center: durham,
    zoom: 15
});
*/

// Create the google directions services
const directionsService = new google.maps.DirectionsService();
const directionsDisplay = new google.maps.DirectionsRenderer();

function makeMap(mapDiv) {
    if (!mapDiv) return;
    // create our map
    const map = new google.maps.Map(mapDiv, mapOptions);
    // Create the google places service.
    const service = new google.maps.places.PlacesService(map);
}

export default makeMap;