var map;
var marker;
var neighborhoodHotspots = [
    {name: 'Faisal Islamic Bank Cairo', coord:{lng: 31.245765 , lat:30.052753 }},
    {name: 'Banque Misr For Islamic Transactions', coord:{lng: 31.244284 , lat:30.052246 }}

]

function AppViewModel() {
    // Rendering map to page.
    this.initMap = function() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 30.052557, lng: 31.244284},
          zoom: 8,
          mapTypeControl: false
        });
        for (var i = 0; i< neighborhoodHotspots.length;i++){
            marker = new google.maps.Marker({
                position: neighborhoodHotspots[i].coord,
                map:map
            });
        }
      };

    this.initMap();
}


function bind() {
    ko.applyBindings(new AppViewModel());
}