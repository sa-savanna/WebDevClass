
var olview = new ol.View({ center: [0, 0], zoom: 2 }),
    baseLayer = new ol.layer.Tile({ source: new ol.source.OSM() }),
    map = new ol.Map({
        target: document.getElementById('map'),
        view: olview,
        layers: [baseLayer]
    });

// popup
var popup = new ol.Overlay.Popup();
map.addOverlay(popup);

async function postAddress(addr) {
    let response = await fetch('http://localhost:3000/report', {
        method: 'POST',
        body: JSON.stringify(addr),
        headers: {
            'Content-Type': 'application/json'
        },
        cache:"default"
    })
    let data = response.json();
    return data

}

//Instantiate with some options and add the Control
var geocoder = new Geocoder('nominatim', {
    provider: 'osm',
    lang: 'en',
    placeholder: 'Search for ...',
    limit: 5,
    debug: false,
    autoComplete: true,
    keepOpen: true
});
map.addControl(geocoder);


//Listen when an address is chosen
geocoder.on('addresschosen', function (evt) {
    let address = evt.address.formatted.slice(23, evt.address.formatted.length - 7);

   // localStorage.setItem('address',JSON.stringify(obj))
    
    window.setTimeout(function () {
        popup.show(evt.coordinate, evt.address.formatted);
        postAddress({
            location: address
        })
    }, 5000);
  
});




