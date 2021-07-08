const titleProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let mymap = L.map('mymap').setView([-2.2175001,-79.9092901],16); 

L.tileLayer(titleProvider,{
    maxZoom :16,
}).addTo(mymap)

let marker= L.marker([-2.2175001,-79.9092901]).addTo(mymap)