function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    let latlon = position.coords.latitude + "," + position.coords.longitude;
  
    let request = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyAxew8B1JBeFKsqFUk3nh3-A5DhNUSYWE8&origin="+latlon+"&destination=RMIT+Vietnam"
  
    $("iframe").src = request;
  }

$(document).ready(() => {
    getLocation()
    var position
    showPosition(position)
})