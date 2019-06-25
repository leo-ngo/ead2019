var source = new EventSource("server_time.php")
source.onmessage = function(event) {
  $("#clock").text(event.data)
  console.log(event.data)
}