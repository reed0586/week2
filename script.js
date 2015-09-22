
var map = L.map('map-container');

map.setView([44.971724, -93.243239], 16);

L.tileLayer ('http://{s}.tile.osm.org/{z}/{x}/{y}.png' ).addTo(map);

$.getJSON('https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson', function(data){
    var geojson = new L.geoJson(data) 
        .addTo(map);});

		
$(".red.box").click(function(e){alert("Hello")});		