$(document).ready(function () {
	/*====================================
		Google Map JS
	======================================*/
	(function () {

		var map;
		map = new GMaps({
			el: '#myMap',
			lat: 51.507351,
			lng: -0.127758,
			scrollwheel: false,
			zoom: 15,
			zoomControl: false,
			panControl: false,
			streetViewControl: true,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});

		var image = 'img/map-marker.png';
		var marker = map.addMarker({
			lat: 51.507351,
			lng: -0.127758,
			icon: image,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'left',
			backgroundColor: '#efece0',
		});

		// Add click event to marker
		google.maps.event.addListener(marker, 'click', function () {
			window.open('https://maps.app.goo.gl/QB1Xg2jVTZLEKFez6', '_blank');
		});


		var styles = [

			{
				"featureType": "road",
				"stylers": [
					{ "color": "#ffffff" }
				]
			}, {
				"featureType": "water",
				"stylers": [
					{ "color": "#bde5f6" }
				]
			}, {
				"featureType": "landscape",
				"stylers": [
					{ "color": "#f2f2f2" }
				]
			}, {
				"elementType": "labels.text.fill",
				"stylers": [
					{ "color": "#FF7550" }
				]
			}, {
				"featureType": "poi",
				"stylers": [
					{ "color": "#e2f0cd" }
				]
			}, {
				"elementType": "labels.text",
				"stylers": [
					{ "saturation": 2 },
					{ "weight": 0.3 },
					{ "color": "#a8a8a8" }
				]
			}

		];

		map.addStyle({
			styledMapName: "Styled Map",
			styles: styles,
			mapTypeId: "map_style"
		});

		map.setStyle("map_style");
	}());

});