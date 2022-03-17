function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 13.068799, lng: 74.993599};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Moodabidri, Karnataka' // Title Location
    });
}