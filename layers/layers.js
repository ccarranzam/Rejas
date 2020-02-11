var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Inventariorejas_1 = new ol.format.GeoJSON();
var features_Inventariorejas_1 = format_Inventariorejas_1.readFeatures(json_Inventariorejas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inventariorejas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inventariorejas_1.addFeatures(features_Inventariorejas_1);
var lyr_Inventariorejas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Inventariorejas_1, 
                style: style_Inventariorejas_1,
                interactive: true,
                title: '<img src="styles/legend/Inventariorejas_1.png" /> Inventario rejas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Inventariorejas_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Inventariorejas_1];
lyr_Inventariorejas_1.set('fieldAliases', {'ObjectID': 'ObjectID', 'Dni_enc': 'Dni_enc', 'edad_enc': 'edad_enc', 'tipo_admin': 'tipo_admin', 'tipo': 'tipo', 'permiso': 'permiso', 'caseta': 'caseta', 'responsabl': 'responsabl', 'horario': 'horario', 'llave': 'llave', 'lug_coli': 'lug_coli', 'x': 'x', 'y': 'y', });
lyr_Inventariorejas_1.set('fieldImages', {'ObjectID': 'TextEdit', 'Dni_enc': 'TextEdit', 'edad_enc': 'TextEdit', 'tipo_admin': 'TextEdit', 'tipo': 'TextEdit', 'permiso': 'TextEdit', 'caseta': 'TextEdit', 'responsabl': 'TextEdit', 'horario': 'TextEdit', 'llave': 'TextEdit', 'lug_coli': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Inventariorejas_1.set('fieldLabels', {'ObjectID': 'inline label', 'Dni_enc': 'inline label', 'edad_enc': 'inline label', 'tipo_admin': 'inline label', 'tipo': 'inline label', 'permiso': 'inline label', 'caseta': 'inline label', 'responsabl': 'inline label', 'horario': 'inline label', 'llave': 'inline label', 'lug_coli': 'inline label', 'x': 'inline label', 'y': 'inline label', });
lyr_Inventariorejas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});