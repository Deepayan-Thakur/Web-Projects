function initMap() {
    // The location of your area
    const location = { lat: 23.0225, lng: 72.5714 }; // Example: Ahmedabad, Gujarat

    // The map, centered at the location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location,
    });

    // The marker, positioned at the location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Load the map when the window loads
window.onload = initMap;
