var source = new EventSource("server_time.php")
source.onmessage = function(event) {
  $("#clock").value(event.data)
}