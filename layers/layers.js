var wms_layers = [];

var lyr_PlanIGN_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r",
                              attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Plan IGN',
                            popuplayertitle: 'Plan IGN',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGN_0, 0]);
var format_Tracduparcours_1 = new ol.format.GeoJSON();
var features_Tracduparcours_1 = format_Tracduparcours_1.readFeatures(json_Tracduparcours_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tracduparcours_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tracduparcours_1.addFeatures(features_Tracduparcours_1);
var lyr_Tracduparcours_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tracduparcours_1, 
                style: style_Tracduparcours_1,
                popuplayertitle: 'Tracé du parcours',
                interactive: true,
    title: 'Tracé du parcours<br />\
    <img src="styles/legend/Tracduparcours_1_0.png" /> Difficile<br />\
    <img src="styles/legend/Tracduparcours_1_1.png" /> Facile<br />\
    <img src="styles/legend/Tracduparcours_1_2.png" /> Intermédiaire<br />\
    <img src="styles/legend/Tracduparcours_1_3.png" /> Très difficile<br />\
    <img src="styles/legend/Tracduparcours_1_4.png" /> <br />' });
var format_Gare_2 = new ol.format.GeoJSON();
var features_Gare_2 = format_Gare_2.readFeatures(json_Gare_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gare_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gare_2.addFeatures(features_Gare_2);
var lyr_Gare_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gare_2, 
                style: style_Gare_2,
                popuplayertitle: 'Gare',
                interactive: true,
                title: '<img src="styles/legend/Gare_2.png" /> Gare'
            });

lyr_PlanIGN_0.setVisible(true);lyr_Tracduparcours_1.setVisible(true);lyr_Gare_2.setVisible(true);
var layersList = [lyr_PlanIGN_0,lyr_Tracduparcours_1,lyr_Gare_2];
lyr_Tracduparcours_1.set('fieldAliases', {'fid': 'fid', 'Randonnée': 'Randonnée', 'duree': 'duree', 'denivele': 'denivele', 'distance': 'distance', 'layer': 'layer', 'path': 'path', 'niveau': 'niveau', 'popup': 'popup', });
lyr_Gare_2.set('fieldAliases', {'fid': 'fid', 'nom_gare': 'nom_gare', 'Ligne de train': 'Ligne de train', 'temps_trajet': 'temps_trajet', 'altitude_gare': 'altitude_gare', 'commune': 'commune', 'Temps de trajet': 'Temps de trajet', 'Altitude de la gare': 'Altitude de la gare', });
lyr_Tracduparcours_1.set('fieldImages', {'fid': 'TextEdit', 'Randonnée': 'TextEdit', 'duree': 'Range', 'denivele': 'Range', 'distance': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', 'niveau': 'TextEdit', 'popup': 'TextEdit', });
lyr_Gare_2.set('fieldImages', {'fid': 'TextEdit', 'nom_gare': 'TextEdit', 'Ligne de train': 'TextEdit', 'temps_trajet': 'Range', 'altitude_gare': 'Range', 'commune': 'TextEdit', 'Temps de trajet': 'TextEdit', 'Altitude de la gare': 'Range', });
lyr_Tracduparcours_1.set('fieldLabels', {'fid': 'hidden field', 'Randonnée': 'hidden field', 'duree': 'hidden field', 'denivele': 'hidden field', 'distance': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'niveau': 'hidden field', 'popup': 'no label', });
lyr_Gare_2.set('fieldLabels', {'fid': 'hidden field', 'nom_gare': 'hidden field', 'Ligne de train': 'inline label - visible with data', 'temps_trajet': 'inline label - visible with data', 'altitude_gare': 'hidden field', 'commune': 'hidden field', 'Temps de trajet': 'inline label - visible with data', 'Altitude de la gare': 'inline label - visible with data', });
lyr_Gare_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});