var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FIXEDKALADYPANCHAYAT_1 = new ol.format.GeoJSON();
var features_FIXEDKALADYPANCHAYAT_1 = format_FIXEDKALADYPANCHAYAT_1.readFeatures(json_FIXEDKALADYPANCHAYAT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIXEDKALADYPANCHAYAT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIXEDKALADYPANCHAYAT_1.addFeatures(features_FIXEDKALADYPANCHAYAT_1);
var lyr_FIXEDKALADYPANCHAYAT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIXEDKALADYPANCHAYAT_1, 
                style: style_FIXEDKALADYPANCHAYAT_1,
                popuplayertitle: 'FIXED KALADY PANCHAYAT',
                interactive: true,
                title: '<img src="styles/legend/FIXEDKALADYPANCHAYAT_1.png" /> FIXED KALADY PANCHAYAT'
            });
var format_ROAD_2 = new ol.format.GeoJSON();
var features_ROAD_2 = format_ROAD_2.readFeatures(json_ROAD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_2.addFeatures(features_ROAD_2);
var lyr_ROAD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_2, 
                style: style_ROAD_2,
                popuplayertitle: 'ROAD',
                interactive: false,
                title: '<img src="styles/legend/ROAD_2.png" /> ROAD'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_FIXEDKALADYPANCHAYAT_1.setVisible(true);lyr_ROAD_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_FIXEDKALADYPANCHAYAT_1,lyr_ROAD_2];
lyr_FIXEDKALADYPANCHAYAT_1.set('fieldAliases', {'id': 'id', 'polygonn': 'polygonn', });
lyr_ROAD_2.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_FIXEDKALADYPANCHAYAT_1.set('fieldImages', {'id': '', 'polygonn': '', });
lyr_ROAD_2.set('fieldImages', {'NAME': '', 'Length': '', });
lyr_FIXEDKALADYPANCHAYAT_1.set('fieldLabels', {'id': 'no label', 'polygonn': 'no label', });
lyr_ROAD_2.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_ROAD_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});