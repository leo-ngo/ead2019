/*  about.html
    Get the user's current location, then show the direction from there to the Headquarter's location (which is RMIT Saigon)
    Make use of Google Map API
 */
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}
// make Google Map API calls
apiKey = "AIzaSyAxew8B1JBeFKsqFUk3nh3-A5DhNUSYWE8"
function showPosition(position) {
    let latlon = position.coords.latitude + "," + position.coords.longitude;
    let placeIdRequest = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latlon+"&key="+apiKey
    $.get(placeIdRequest, (data) => {
        console.log(data)
        placeId = data["results"][0]["place_id"]
        let directionRequest = "https://www.google.com/maps/embed/v1/directions?key="+apiKey+"&origin=place_id:"+placeId+"&destination=RMIT+Vietnam"
        $("iframe").attr('src', directionRequest)
    })
  }
$(document).ready(() => {
    getLocation()
})