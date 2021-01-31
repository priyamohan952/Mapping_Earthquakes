let map = L.map("mapid", {
    center: [
        33.9416,-118.4085
    ],
    zoom: 6
  }); 


  // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });
    // Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);



// // //Coordinates for each point to be used in the polyline.
let line = [
[33.9416,-118.4085],
[30.1900,-97.6687],
[43.679370880,-79.629409790],
[40.6398262,-73.7787443]
 ];


//   // Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
    color: "Blue",
    weight:7,
    opacity:0.5,
    dashArray: '10,20'
 }).addTo(map);