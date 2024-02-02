// Objeto que contiene las veredas o localidades de cada municipio y su tipo de territorio
var municipiosData = {
    'BOGOTÁ': [
        ['ENGATIVA', 'URBANO'],
        ['FONTIBON', 'URBANO'],
        ['VEREDA EL VERJON DE TEUSACA', 'RURAL CON DIFICULTAD'],
        ['LLANITOS', 'RURAL CON DIFICULTAD'],
        ['AURAS', 'RURAL'],
        ['BARRIOS UNIDOS', 'URBANO'],
        ['CANDELARIA', 'URBANO'],
        ['CHAPINERO', 'URBANO'],
        ['PUENTE ARANDA', 'URBANO'],
        ['SANTA FE', 'URBANO'],
        ['TEUSAQUILLO', 'URBANO'],
        ['MÁRTIRES', 'URBANO'],
        ['SUBA', 'URBANO'],
        ['USAQUEN', 'URBANO'],
        ['BOSA', 'URBANO'],
        ['KENNEDY', 'URBANO'],
        ['CIUDAD BOLIVAR', 'URBANO'],
        ['TUNJUELITO', 'URBANO'],
        ['USME', 'URBANO'],
        ['ANTONIO NARIÑO', 'URBANO'],
        ['SAN CRISTOBAL', 'URBANO'],
        ['RAFAEL URIBE', 'URBANO'],
        ['DISTRITO CAPITAL - CIUDAD BOLIVAR LOS PATICOS', 'RURAL'],
        ['DISTRITO CAPITAL - CIUDAD BOLIVAR MOCHUELO ALTO', 'RURAL'],
        ['DISTRITO CAPITAL - CIUDAD BOLIVAR PASQUILLITA', 'RURAL'],
        ['DISTRITO CAPITAL - CIUDAD BOLIVAR QUIBA', 'RURAL'],
        ['DISTRITO CAPITAL - CIUDAD BOLIVAR SANTA ROSA', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ BETANIA', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ CAPITOLIO', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ CHORRERAS', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ EL PILAR', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ EL RAIZAL', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ EL SALITRE', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ EL TOLDO', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ GRANADA', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ ISTMO', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ LA UNION', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ LAGUNA VERDE', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ LAGUNITAS', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ PALMAS', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ PEÑALIZA', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ RIOS', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ SAN ANTONIO', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ SAN JOSE', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ SANTA ROSA ALTA', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ SANTO DOMINGO', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ SIN VEREDAS', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ TABACO', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ TUNAL ALTO', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ TUNAL BAJO', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ VEGAS', 'RURAL'],
        ['MOCHUELO BAJO', 'RURAL'],
        ['NAZARETH', 'RURAL CON DIFICULTAD'],
        ['PASQUILLA', 'RURAL'],
        ['SAN JUAN DE SUMAPAZ', 'RURAL CON DIFICULTAD']
    ],
    'BOJACÁ': [
        ['FUTE', 'RURAL CON DIFICULTAD'],
        ['BARRO BLANCO', 'RURAL CON DIFICULTAD'],
        ['SANTA BARBARA', 'RURAL CON DIFICULTAD'],
        ['SAN ANTONIO', 'RURAL CON DIFICULTAD'],
        ['CORTES', 'RURAL CON DIFICULTAD'],
        ['CUBIA', 'RURAL CON DIFICULTAD'],
        ['BOBACE', 'RURAL CON DIFICULTAD']
    ],
    'CAJICA': [
        ['CASCO URBANO', 'URBANO'],
        ['CANELON', 'URBANO'],
        ['CHUNTAME', 'URBANO CON DIFICULTAD'],
        ['RIO GRANDE', 'URBANO'],
        ['CALAHORRA', 'URBANO'],
        ['LA ESTACION', 'URBANO'],
        ['EL MISTERIO', 'URBANO CON DIFICULTAD'],
        ['PUERTA DEL SOL', 'URBANO CON DIFICULTAD'],
        ['GRAN COLOMBIA', 'URBANO CON DIFICULTAD'],
        ['GRANJITAS', 'URBANO CON DIFICULTAD'],
        ['EL PRADO', 'URBANO'],
        ['SANTA INES', 'URBANO'],
        ['SANTA CRUZ', 'URBANO'],
        ['EL ROCIO', 'URBANO'],
        ['LA PALMA', 'URBANO CON DIFICULTAD'],
        ['LAS VILLAS', 'URBANO'],
        ['RIO FRIO LA FLORIDA', 'URBANO CON DIFICULTAD'],
        ['PUENTE VARGAS', 'URBANO CON DIFICULTAD']
    ],
    'CHIA': [
        ['CASCO URBANO CHÍA', 'URBANO'],
        ['CERCA DE PIEDRA', 'URBANO'],
        ['FAGUA', 'URBANO'],
        ['FONQUETÁ', 'URBANO'],
        ['FUSCA', 'URBANO'],
        ['LA BALSA', 'URBANO'],
        ['SAMARIA', 'URBANO'],
        ['TÍQUIZA', 'URBANO'],
        ['YERBABUENA', 'URBANO'],
        ['BOJACA', 'URBANO']
    ],
    'CHIPAQUE': [
        ['QUENTE', 'RURAL CON DIFICULTAD'],
        ['CALDERITAS', 'RURAL CON DIFICULTAD'],
        ['POTRERO GRANDE', 'RURAL CON DIFICULTAD']
    ],
    'CHOACHÍ': [
        ['LAS JUNTAS', 'RURAL CON DIFICULTAD'],
        ['CARTAGENA', 'RURAL CON DIFICULTAD'],
        ['SAN FRANCISCO', 'RURAL CON DIFICULTAD']
    ],
    'COGUA': [
        ['PARAMO ALTO', 'RURAL CON DIFICULTAD'],
        ['RODAMONTAL', 'RURAL CON DIFICULTAD'],
        ['SUSAGUA', 'RURAL CON DIFICULTAD'],
        ['RINCÓN SANTO', 'RURAL CON DIFICULTAD'],
        ['CASCO URBANO COGUA', 'RURAL CON DIFICULTAD'],
        ['NEUSA', 'RURAL CON DIFICULTAD'],
        ['MORTIÑO', 'RURAL CON DIFICULTAD']
    ],
    'COTA': [
        ['CASCO URBANO COTA', 'URBANO CON DIFICULTAD'],
        ['CETIME', 'URBANO CON DIFICULTAD'],
        ['EL ABRA', 'URBANO CON DIFICULTAD'],
        ['LA MOYA', 'URBANO CON DIFICULTAD'],
        ['PARCELAS', 'URBANO CON DIFICULTAD'],
        ['PUEBLO VIEJO', 'URBANO CON DIFICULTAD'],
        ['ROZO', 'URBANO CON DIFICULTAD'],
        ['SIBERIA', 'URBANO CON DIFICULTAD'],
        ['VUELTA GRANDE', 'URBANO CON DIFICULTAD']
    ]
    
        
    
    
    
};

function cargarVeredas() {
    var municipioSeleccionado = document.getElementById('municipios').value;
    var veredasSelect = document.getElementById('veredas');
    var tipoTerritorioSpan = document.getElementById('tipoTerritorio');
    var actividadesUrbanasTable = document.getElementById('actividadesUrbanas');

    // Limpiar las opciones anteriores y el tipo de territorio
    veredasSelect.innerHTML = '<option value="">-- Selecciona --</option>';
    tipoTerritorioSpan.textContent = '';

    // Ocultar la tabla de actividades urbanas
    actividadesUrbanasTable.style.display = 'none';

    // Verificar si se seleccionó un municipio
    if (municipioSeleccionado && municipiosData[municipioSeleccionado]) {
        // Obtener las veredas o localidades del municipio seleccionado
        var veredas = municipiosData[municipioSeleccionado];

        // Agregar las opciones al elemento select
        for (var i = 0; i < veredas.length; i++) {
            var option = document.createElement('option');
            option.value = veredas[i][0];
            option.text = veredas[i][0];
            veredasSelect.add(option);
        }

        // Mostrar el tipo de territorio de la primera vereda o localidad
        tipoTerritorioSpan.textContent = 'Tipo Territorio: ' + veredas[0][1];

        // Verificar si el tipo de territorio es URBANO para mostrar la tabla de actividades
        if (veredas[0][1] === 'URBANO') {
            cargarActividadesUrbanas();
        }
    }
}

// Función para cargar el tipo de territorio al seleccionar una vereda
function cargarTipoTerritorio() {
    var municipioSeleccionado = document.getElementById('municipios').value;
    var veredaSeleccionada = document.getElementById('veredas').value;
    var tipoTerritorioSpan = document.getElementById('tipoTerritorio');
    var actividadesUrbanasTable = document.getElementById('actividadesUrbanas');

    // Ocultar la tabla de actividades urbanas
    actividadesUrbanasTable.style.display = 'none';

    // Verificar si se seleccionó un municipio y una vereda
    if (municipioSeleccionado && veredaSeleccionada && municipiosData[municipioSeleccionado]) {
        // Buscar el tipo de territorio correspondiente a la vereda seleccionada
        var veredas = municipiosData[municipioSeleccionado];
        for (var i = 0; i < veredas.length; i++) {
            if (veredas[i][0] === veredaSeleccionada) {
                // Mostrar el tipo de territorio
                tipoTerritorioSpan.textContent = 'Tipo Territorio: ' + veredas[i][1];

                // Verificar si el tipo de territorio es URBANO para mostrar la tabla de actividades
                if (veredas[i][1] === 'URBANO') {
                    cargarActividadesUrbanas();
                }

                break;
            }
        }
    }
}

// Función para cargar las actividades urbanas
function cargarActividadesUrbanas() {
    var actividadesUrbanasTable = document.getElementById('actividadesUrbanas');
    // Limpiar las filas anteriores
    actividadesUrbanasTable.getElementsByTagName('tbody')[0].innerHTML = '';

    // Aquí puedes agregar las filas de la tabla según tus necesidades
    // Ejemplo:
    var actividades = [
        ['OA0001', 'T0', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN'],
        ['OA0002', 'T0', 'PODA TECNICA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN'],
        ['OA0003', 'T0', 'SS'],

        // Agrega más actividades según sea necesario
    ];

    // Agregar las filas al cuerpo de la tabla
    var tbody = actividadesUrbanasTable.getElementsByTagName('tbody')[0];
    for (var i = 0; i < actividades.length; i++) {
        var row = tbody.insertRow(i);
        for (var j = 0; j < actividades[i].length; j++) {
            var cell = row.insertCell(j);
            cell.textContent = actividades[i][j];
        }
    }

    // Mostrar la tabla de actividades urbanas
    actividadesUrbanasTable.style.display = 'table';
}