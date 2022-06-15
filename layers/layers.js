var wms_layers = [];

var lyr_Norgeibilder_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Norge i bilder",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Norgeibilder_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [723583.095581, 8540686.332354, 727922.348313, 8543841.736639]
                            })
                        });
var format_Deponi_1 = new ol.format.GeoJSON();
var features_Deponi_1 = format_Deponi_1.readFeatures(json_Deponi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deponi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deponi_1.addFeatures(features_Deponi_1);
var lyr_Deponi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Deponi_1, 
                style: style_Deponi_1,
                interactive: true,
    title: 'Deponi<br />\
    <img src="styles/legend/Deponi_1_0.png" /> (enkel bunntetting)<br />\
    <img src="styles/legend/Deponi_1_1.png" /> (dobbel bunntetting)<br />'
        });
var format_Gips__Asbest_2 = new ol.format.GeoJSON();
var features_Gips__Asbest_2 = format_Gips__Asbest_2.readFeatures(json_Gips__Asbest_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gips__Asbest_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gips__Asbest_2.addFeatures(features_Gips__Asbest_2);
var lyr_Gips__Asbest_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gips__Asbest_2, 
                style: style_Gips__Asbest_2,
                interactive: true,
                title: '<img src="styles/legend/Gips__Asbest_2.png" /> Gips__Asbest'
            });
var format_Brnner_Bjrke_3 = new ol.format.GeoJSON();
var features_Brnner_Bjrke_3 = format_Brnner_Bjrke_3.readFeatures(json_Brnner_Bjrke_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnner_Bjrke_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnner_Bjrke_3.addFeatures(features_Brnner_Bjrke_3);
var lyr_Brnner_Bjrke_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Brnner_Bjrke_3, 
                style: style_Brnner_Bjrke_3,
                interactive: true,
    title: 'Brønner_Bjørke<br />\
    <img src="styles/legend/Brnner_Bjrke_3_0.png" /> <br />\
    <img src="styles/legend/Brnner_Bjrke_3_1.png" /> <br />\
    <img src="styles/legend/Brnner_Bjrke_3_2.png" /> <br />\
    <img src="styles/legend/Brnner_Bjrke_3_3.png" /> <br />'
        });
var format_Konduktivitetsmling_4 = new ol.format.GeoJSON();
var features_Konduktivitetsmling_4 = format_Konduktivitetsmling_4.readFeatures(json_Konduktivitetsmling_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Konduktivitetsmling_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Konduktivitetsmling_4.addFeatures(features_Konduktivitetsmling_4);
var lyr_Konduktivitetsmling_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Konduktivitetsmling_4, 
                style: style_Konduktivitetsmling_4,
                interactive: true,
    title: 'Konduktivitetsmåling<br />\
    <img src="styles/legend/Konduktivitetsmling_4_0.png" /> 1,0 - 7,0<br />\
    <img src="styles/legend/Konduktivitetsmling_4_1.png" /> 7.0 - 15.0<br />\
    <img src="styles/legend/Konduktivitetsmling_4_2.png" /> 15.0 - 50.0<br />\
    <img src="styles/legend/Konduktivitetsmling_4_3.png" /> 50.0 - 500.0<br />'
        });
var format_Grunnvann_5 = new ol.format.GeoJSON();
var features_Grunnvann_5 = format_Grunnvann_5.readFeatures(json_Grunnvann_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grunnvann_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grunnvann_5.addFeatures(features_Grunnvann_5);
var lyr_Grunnvann_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Grunnvann_5, 
                style: style_Grunnvann_5,
                interactive: true,
    title: 'Grunnvann<br />\
    <img src="styles/legend/Grunnvann_5_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/Grunnvann_5_1.png" /> 0.0 - 0.0<br />'
        });
var format_Renseanlegg_6 = new ol.format.GeoJSON();
var features_Renseanlegg_6 = format_Renseanlegg_6.readFeatures(json_Renseanlegg_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Renseanlegg_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Renseanlegg_6.addFeatures(features_Renseanlegg_6);
var lyr_Renseanlegg_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Renseanlegg_6, 
                style: style_Renseanlegg_6,
                interactive: true,
                title: '<img src="styles/legend/Renseanlegg_6.png" /> Renseanlegg'
            });

lyr_Norgeibilder_0.setVisible(true);lyr_Deponi_1.setVisible(true);lyr_Gips__Asbest_2.setVisible(true);lyr_Brnner_Bjrke_3.setVisible(true);lyr_Konduktivitetsmling_4.setVisible(false);lyr_Grunnvann_5.setVisible(false);lyr_Renseanlegg_6.setVisible(false);
var layersList = [lyr_Norgeibilder_0,lyr_Deponi_1,lyr_Gips__Asbest_2,lyr_Brnner_Bjrke_3,lyr_Konduktivitetsmling_4,lyr_Grunnvann_5,lyr_Renseanlegg_6];
lyr_Deponi_1.set('fieldAliases', {'id': 'ID', 'Epoke': 'Tidsperiode i drift', 'Avfall': 'Avfall', 'Areal M^2': 'Areal M^2', 'Kotehøyde': 'Dybde M', 'Mengde M^3': 'Mengde M^3', 'Toppdekke': 'Toppdekke', 'Bunntettin': 'Kjent kunnskap om bunntetting', 'Bilde': 'Info', 'Selskap': 'Selskap', });
lyr_Gips__Asbest_2.set('fieldAliases', {'Avfall': 'Avfall', 'fid': 'fid', 'Areal': 'Areal M^2 ', });
lyr_Brnner_Bjrke_3.set('fieldAliases', {'Brønn': 'Brønn', 'Info': 'Info', 'Type': 'Type', });
lyr_Konduktivitetsmling_4.set('fieldAliases', {'?S/cm': 'Konduktivitet', 'Info': 'Info', });
lyr_Grunnvann_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Renseanlegg_6.set('fieldAliases', {'Info': 'Info', 'Plan': 'Plan', });
lyr_Deponi_1.set('fieldImages', {'id': 'TextEdit', 'Epoke': 'TextEdit', 'Avfall': 'TextEdit', 'Areal M^2': 'TextEdit', 'Kotehøyde': 'TextEdit', 'Mengde M^3': 'TextEdit', 'Toppdekke': 'TextEdit', 'Bunntettin': 'TextEdit', 'Bilde': 'ExternalResource', 'Selskap': 'TextEdit', });
lyr_Gips__Asbest_2.set('fieldImages', {'Avfall': 'TextEdit', 'fid': 'Range', 'Areal': 'Range', });
lyr_Brnner_Bjrke_3.set('fieldImages', {'Brønn': 'TextEdit', 'Info': 'ExternalResource', 'Type': 'Range', });
lyr_Konduktivitetsmling_4.set('fieldImages', {'?S/cm': 'TextEdit', 'Info': 'TextEdit', });
lyr_Grunnvann_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Renseanlegg_6.set('fieldImages', {'Info': 'TextEdit', 'Plan': 'ExternalResource', });
lyr_Deponi_1.set('fieldLabels', {'id': 'inline label', 'Epoke': 'inline label', 'Avfall': 'inline label', 'Areal M^2': 'inline label', 'Kotehøyde': 'inline label', 'Mengde M^3': 'inline label', 'Toppdekke': 'inline label', 'Bunntettin': 'inline label', 'Bilde': 'no label', 'Selskap': 'header label', });
lyr_Gips__Asbest_2.set('fieldLabels', {'Avfall': 'inline label', 'fid': 'header label', 'Areal': 'inline label', });
lyr_Brnner_Bjrke_3.set('fieldLabels', {'Brønn': 'header label', 'Info': 'inline label', 'Type': 'inline label', });
lyr_Konduktivitetsmling_4.set('fieldLabels', {'?S/cm': 'inline label', 'Info': 'inline label', });
lyr_Grunnvann_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Renseanlegg_6.set('fieldLabels', {'Info': 'header label', 'Plan': 'no label', });
lyr_Renseanlegg_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});