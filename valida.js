// Objeto que contiene las veredas o localidades de cada municipio y su tipo de territorio
var municipiosData = {
    'BOGOTA': [
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
    'BOJACA': [
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
    'CHOACHI': [
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
    ],
    'EL ROSAL': [
        ['CAMPO ALEGRE', 'RURAL CON DIFICULTAD'],
        ['SAN ANTONIO', 'RURAL CON DIFICULTAD'],
        ['SANTA BARBARA', 'RURAL CON DIFICULTAD'],
        ['EL RODEO', 'RURAL CON DIFICULTAD'],
        ['LA CUESTA', 'RURAL CON DIFICULTAD']
    ],
    'FACATATIVA': [
        ['EL CORZO', 'RURAL CON DIFICULTAD'],
        ['MOYANO', 'RURAL CON DIFICULTAD'],
        ['PASO ANCHO', 'RURAL CON DIFICULTAD']
    ],
    'FUNZA': [
        ['CACIQUE', 'URBANO CON DIFICULTAD'],
        ['CASCO URBANO FUNZA', 'URBANO CON DIFICULTAD'],
        ['EL CERRITO', 'URBANO CON DIFICULTAD'],
        ['EL CLOCLI', 'URBANO CON DIFICULTAD'],
        ['FLORIDA', 'URBANO CON DIFICULTAD'],
        ['FRAGUA', 'URBANO CON DIFICULTAD'],
        ['LA FRAGUA', 'URBANO CON DIFICULTAD'],
        ['SIETE TROJES', 'URBANO CON DIFICULTAD']
    ],
    'FUSAGASUGA': [
        ['LOS ROBLES', 'RURAL CON DIFICULTAD']
    ],
    'GACHANCIPA': [
        ['SAN JOSÉ', 'RURAL CON DIFICULTAD'],
        ['SAN MARTÍN', 'RURAL CON DIFICULTAD'],
        ['CASCO URBANO GACHANCIPÁ', 'RURAL CON DIFICULTAD'],
        ['EL ROBLE', 'RURAL CON DIFICULTAD'],
        ['SANTA BÁRBARA', 'RURAL CON DIFICULTAD'],
        ['SAN BARTOLOMÉ', 'RURAL CON DIFICULTAD']
    ],
    'GRANADA': [
        ['CARRIZAL', 'RURAL CON DIFICULTAD'],
        ['SABANETA', 'RURAL CON DIFICULTAD'],
        ['SANTAFE', 'RURAL CON DIFICULTAD']
    ],
    'GUASCA': [
        ['SANTUARIO', 'RURAL CON DIFICULTAD'],
        ['MARIANO OSPINA', 'RURAL CON DIFICULTAD'],
        ['SAN ISIDRO', 'RURAL CON DIFICULTAD'],
        ['SANTA LUCIA', 'RURAL CON DIFICULTAD'],
        ['SALITRE', 'RURAL CON DIFICULTAD'],
        ['SANTA ISABEL', 'RURAL CON DIFICULTAD'],
        ['TRINIDAD', 'RURAL CON DIFICULTAD']
    ],
    'LA CALERA': [
        ['ALTAMAR', 'RURAL'],
        ['AURORA BAJA', 'RURAL'],
        ['AURORA ALTA', 'RURAL'],
        ['BUENOS AIRES', 'RURAL CON DIFICULTAD'],
        ['CAMINO AL META', 'RURAL CON DIFICULTAD'],
        ['EL HATO', 'RURAL CON DIFICULTAD'],
        ['EL LIBANO', 'RURAL CON DIFICULTAD'],
        ['EL MANZANO', 'RURAL CON DIFICULTAD'],
        ['EL RODEO', 'RURAL'],
        ['EL SALITRE', 'RURAL CON DIFICULTAD'],
        ['EL TRIUNFO', 'RURAL'],
        ['EL VOLCAN', 'RURAL CON DIFICULTAD'],
        ['FRAILEJONAL', 'RURAL CON DIFICULTAD'],
        ['JERUSALEN', 'RURAL CON DIFICULTAD'],
        ['LA HOYA', 'RURAL CON DIFICULTAD'],
        ['LA JANGADA', 'RURAL CON DIFICULTAD'],
        ['LA JUNIA', 'RURAL CON DIFICULTAD'],
        ['LA POLONIA', 'RURAL CON DIFICULTAD'],
        ['LA PORTADA', 'RURAL CON DIFICULTAD'],
        ['LA RAMADA', 'RURAL'],
        ['LA TOMA', 'RURAL'],
        ['MARQUEZ', 'RURAL'],
        ['MUNDO NUEVO', 'RURAL CON DIFICULTAD'],
        ['QUISQUIZA', 'RURAL CON DIFICULTAD'],
        ['SAN CAYETANO', 'RURAL CON DIFICULTAD'],
        ['SAN JOSE LA CONCEPCION', 'RURAL CON DIFICULTAD'],
        ['SAN RAFAEL', 'RURAL CON DIFICULTAD'],
        ['SANTA HELENA', 'RURAL CON DIFICULTAD'],
        ['TREINTA Y SEIS', 'RURAL CON DIFICULTAD'],
        ['TUNJAQUE', 'RURAL CON DIFICULTAD']
    ],
    'MADRID': [
        ['CASCO URBANO MADRID', 'URBANO'],
        ['LOS ÁRBOLES', 'RURAL'],
        ['LA CUESTA', 'RURAL'],
        ['CARRASQUILLITA', 'RURAL'],
        ['VALLE DEL ABRA', 'RURAL'],
        ['PUENTE PIEDRA', 'RURAL'],
        ['CHAUTA (SECTOR LA ISLA)', 'RURAL'],
        ['LAS MERCEDES', 'RURAL'],
        ['LA ESTANCIA', 'RURAL'],
        ['BOYERO', 'RURAL'],
        ['BEBEDEROS', 'RURAL'],
        ['LAGUNA LARGA (EL PORVENIR)', 'RURAL'],
        ['EL MOYANO', 'RURAL'],
        ['SANTA CRUZ', 'RURAL'],
        ['LA PUNTA', 'RURAL'],
        ['POTREROGRANDE (EL PEDREGAL)', 'RURAL'],
        ['EL CORZO', 'RURAL']
    ],
    'MOSQUERA': [
        ['BALSILLAS', 'RURAL'],
        ['CASCO URBANO MOSQUERA', 'URBANO'],
        ['LOS PUENTES', 'RURAL'],
        ['SAN FRANCISCO', 'RURAL'],
        ['SAN JOSE - EL PLAYON', 'RURAL'],
        ['SAN JOSE - LA MAJADA', 'RURAL'],
        ['SAN JOSE - PARCELAS', 'RURAL'],
        ['SIETE TROJES', 'RURAL'],
        ['EL DIAMANTE', 'RURAL'],
        ['LA VICTORIA', 'RURAL'],
        ['SAN JORGE', 'RURAL'],
    ],
    'PACHO': [
        ['CANADÁ', 'RURAL CON DIFICULTAD'],
        ['CERRO NEGRO', 'RURAL CON DIFICULTAD'],
        ['EL BOSQUE', 'RURAL CON DIFICULTAD']
    ],
    'PASCA': [
        ['COLORADOS ALTO', 'RURAL CON DIFICULTAD'],
        ['COLORADOS BAJO', 'RURAL CON DIFICULTAD']
    ],
    'SAN ANTONIO DEL TEQUENDAMA': [
        ['LA RÁPIDA', 'RURAL CON DIFICULTAD'],
        ['ARRACACHAL', 'RURAL CON DIFICULTAD'],
        ['CUSIO', 'RURAL CON DIFICULTAD'],
        ['CHICAQUE', 'RURAL CON DIFICULTAD']
    ],
    'SIBATE': [
        ['CASCO URBANO SIBATÉ', 'URBANO CON DIFICULTAD'],
        ['ALTO CHARCO', 'RURAL'],
        ['BRADAMONTE', 'RURAL'],
        ['EL PEÑON', 'RURAL'],
        ['LA CHACUA', 'RURAL'],
        ['LA UNION', 'RURAL'],
        ['LAS DELICIAS', 'RURAL'],
        ['PERICO', 'RURAL'],
        ['ROMERAL', 'RURAL'],
        ['SAN BENITO', 'RURAL'],
        ['SAN EUGENIO', 'RURAL'],
        ['SAN FORTUNATO', 'RURAL'],
        ['SAN MIGUEL', 'RURAL'],
        ['SAN RAFAEL', 'RURAL'],
        ['USABA', 'RURAL'],
        ['EL PEÑÓN', 'RURAL CON DIFICULTAD']
    ],
    'SILVANIA': [
        ['AGUA BONITA', 'RURAL CON DIFICULTAD'],
        ['VICTORIA ALTA', 'RURAL CON DIFICULTAD'],
        ['FU', 'RURAL CON DIFICULTAD'],
        ['JALISCO', 'RURAL CON DIFICULTAD'],
        ['NORUEGA ALTA', 'RURAL CON DIFICULTAD']
    ],
    'SOACHA': [
        ['ALTO DE LA CRUZ', 'URBANO CON DIFICULTAD'],
        ['ALTO DEL CABRA', 'URBANO CON DIFICULTAD'],
        ['BOCHICA', 'URBANO CON DIFICULTAD'],
        ['BOSATOMA', 'URBANO CON DIFICULTAD'],
        ['BOSATOMA - POTRERO - SAN JOSE', 'URBANO CON DIFICULTAD'],
        ['CANOAS SAENZ', 'URBANO CON DIFICULTAD'],
        ['CARRIZAL', 'URBANO CON DIFICULTAD'],
        ['CHACUA', 'URBANO CON DIFICULTAD'],
        ['EL CHARQUITO', 'URBANO CON DIFICULTAD'],
        ['EL ROMERAL', 'URBANO CON DIFICULTAD'],
        ['GRANADA', 'URBANO CON DIFICULTAD'],
        ['GUASIMAL', 'URBANO CON DIFICULTAD'],
        ['LA CABRERA LOTE. 19 MZ J.', 'URBANO CON DIFICULTAD'],
        ['LA HUNGRIA', 'URBANO CON DIFICULTAD'],
        ['PANAMA', 'URBANO CON DIFICULTAD'],
        ['SABANETA', 'URBANO CON DIFICULTAD'],
        ['SAN FRANCISCO', 'URBANO CON DIFICULTAD'],
        ['SAN JORGE', 'URBANO CON DIFICULTAD'],
        ['SAN JOSE ALTO', 'URBANO CON DIFICULTAD'],
        ['SAN JOSE BAJO', 'URBANO CON DIFICULTAD'],
        ['SAN RAIMUNDO', 'URBANO CON DIFICULTAD'],
        ['SANTA FE', 'URBANO CON DIFICULTAD'],
        ['SANTA HELENA', 'URBANO CON DIFICULTAD'],
        ['TINZUQUE O VILLA NUEVA', 'URBANO CON DIFICULTAD']
    ],
    'SOPO': [
        ['HATO GRANDE', 'URBANO CON DIFICULTAD'],
        ['APOSENTOS', 'URBANO CON DIFICULTAD'],
        ['CASCO URBANO SOPO', 'URBANO CON DIFICULTAD'],
        ['PUEBLO VIEJO', 'URBANO CON DIFICULTAD'],
        ['LA CAROLINA', 'URBANO CON DIFICULTAD'],
        ['CENTRO ALTO', 'URBANO CON DIFICULTAD'],
        ['EL CHUSCAL', 'URBANO CON DIFICULTAD'],
        ['GRATAMIRA', 'URBANO CON DIFICULTAD'],
        ['LA VIOLETA', 'URBANO CON DIFICULTAD'],
        ['MERCENARIO', 'RURAL'],
        ['MEUSA', 'URBANO CON DIFICULTAD'],
        ['EL HOYITO', 'URBANO CON DIFICULTAD'],
        ['BELLAVISTA', 'URBANO CON DIFICULTAD'],
        ['SAN GABRIEL', 'RURAL']
    ],
    'SUBACHOQUE': [
        ['SANTUARIO LA CUESTA', 'RURAL CON DIFICULTAD'],
        ['GALDÁMEZ', 'RURAL CON DIFICULTAD'],
        ['CANICA BAJA', 'RURAL CON DIFICULTAD'],
        ['CANICA ALTA', 'RURAL CON DIFICULTAD'],
        ['LA UNIÓN', 'RURAL CON DIFICULTAD']
    ],
    'SUMAPAZ': [
        ['SANTA ROSA ALTA', 'RURAL CON DIFICULTAD'],
        ['SANTA ROSA BAJA', 'RURAL CON DIFICULTAD']
    ],
    'TABIO': [
        ['LLANO GRANDE', 'RURAL'],
        ['RIO FRIO OCCIDENTAL', 'RURAL'],
        ['RIO FRIO ORIENTAL', 'URBANO CON DIFICULTAD'],
        ['SALITRE', 'RURAL'],
        ['CENTRO', 'URBANO CON DIFICULTAD'],
        ['LOURDES', 'URBANO CON DIFICULTAD'],
        ['JUAICA', 'URBANO CON DIFICULTAD'],
        ['PALO VERDE', 'URBANO CON DIFICULTAD']
    ],
    'TENJO': [
        ['CASCO URBANO DE TENJO', 'URBANO'],
        ['CARRASQUILLITA', 'RURAL'],
        ['CHINCE', 'RURAL'],
        ['CHITASUGA', 'RURAL'],
        ['CHUCUA', 'RURAL'],
        ['CHURUGUACO ALTO', 'RURAL'],
        ['CHURUGUACO BAJO', 'RURAL'],
        ['EL CHACAL', 'RURAL'],
        ['EL ESTANCO', 'RURAL'],
        ['GUANGATA', 'RURAL'],
        ['JACALITO', 'RURAL'],
        ['JUAICA', 'RURAL'],
        ['LA PUNTA', 'RURAL'],
        ['MARTIN Y ESPINO', 'RURAL'],
        ['POVEDA1', 'RURAL'],
        ['POVEDA2', 'RURAL'],
        ['SANTA CRUZ', 'RURAL']
    ],
    'TOCANCIPA': [
        ['CANAVITA', 'URBANO CON DIFICULTAD'],
        ['CASCO URBANO TOCANCIPA', 'URBANO CON DIFICULTAD'],
        ['EL PORVENIR', 'URBANO CON DIFICULTAD'],
        ['LA ESMERALDA', 'URBANO CON DIFICULTAD'],
        ['LA FUENTE', 'URBANO CON DIFICULTAD'],
        ['TIBITOC', 'URBANO CON DIFICULTAD'],
        ['VERGANZO', 'URBANO CON DIFICULTAD']
    ],
    'ZIPAQUIRA': [
        ['BARRO BLANCO', 'URBANO CON DIFICULTAD'],
        ['CASCO URBANO ZIPAQUIRÁ', 'URBANO CON DIFICULTAD'],
        ['EL EMPALIZADO', 'RURAL'],
        ['EL RUDAL', 'URBANO CON DIFICULTAD'],
        ['EL TUNAL', 'RURAL'],
        ['LA GRANJA', 'URBANO CON DIFICULTAD'],
        ['LOTEO BANOY', 'URBANO CON DIFICULTAD'],
        ['LOTEO MALAGÓN', 'URBANO CON DIFICULTAD'],
        ['LOTEO PEDROZA', 'URBANO CON DIFICULTAD'],
        ['LOTEO SUSAGUA', 'URBANO CON DIFICULTAD'],
        ['PÁRAMO DE GUERRERO', 'RURAL CON DIFICULTAD'],
        ['SANTA ISABEL I', 'URBANO CON DIFICULTAD'],
        ['PASOANCHO', 'URBANO CON DIFICULTAD'],
        ['RÍO FRÍO', 'RURAL'],
        ['RIVERA DE SUSAGUA', 'URBANO CON DIFICULTAD'],
        ['SAN GABRIEL', 'URBANO CON DIFICULTAD'],
        ['SAN ISIDRO', 'RURAL'],
        ['SAN JORGE', 'URBANO CON DIFICULTAD'],
        ['SAN MIGUEL', 'URBANO CON DIFICULTAD'],
        ['SANTIAGO PÉREZ', 'URBANO CON DIFICULTAD'],
        ['VENTALARGA', 'URBANO CON DIFICULTAD'],
        ['SANTA CLARA', 'RURAL'],
        ['PRADOS DEL MIRADOR', 'URBANO CON DIFICULTAD'],
        ['SAN LUIS', 'URBANO CON DIFICULTAD'],
        ['LA LOMITA', 'URBANO CON DIFICULTAD'],
        ['EL MORTIÑO', 'URBANO CON DIFICULTAD']
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
        ['OA0001', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada {área arborizada} el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada. La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0002', 'PODA TECNICA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación técnica de árbol aislado en línea de media tensión, para cualquier altura o diámetro,  con la finalidad de obtener el control de altura y/o cercanía a las Redes Eléctricas. La actividad comprende la poda y/o desramificación en la copa del árbol aislado con la finalidad de control de altura y/o cercanía a las Redes Eléctricas. El presente baremo comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. El presente baremo es pagado por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0003', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0004', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro. La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada.'],
        ['OA0005', 'LEVANTAMIENTO DE DATOS DE VEGETACIÓN EN LA LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Levantamiento, en sitio, de datos relativos a las áreas arborizadas que atraviesan las líneas aéreas de media tensión en conductores desnudos y cables aéreos, y datos relativos a árboles aislados con interferencia fuera de las áreas arborizadas; los datos a levantar son: • Longitud de las áreas arborizadas en la línea principal o líneas de derivación. • Tipo de conductor (desnudo o cable aéreo) de la línea que pasa por el área arborizada. • Presencia de área arborizada bilateral o de un lado solamente. • Especie principal de las áreas arborizadas y de los árboles aislados. • Número de árboles aislados, que interfieren con la franja de ancho comisionado, existentes fuera de las áreas arborizadas. Los datos se presentan por el contratista en el formato preparado por el Mandante; el contratista también deberá informar sobre la planimetría, proporcionada por el Mandante a una escala adecuada, evidencia de las áreas arborizadas levantadas en correlación con el consecutivo de las áreas arborizadas y no colocado en el formato antes mencionado. La longitud de las áreas no arborizadas es levantada sobre la planimetría a escala adecuada suministrada por el Mandante, después de haber levantado las áreas arborizadas. esta voz se paga por cada km levantado de líneas aéreas de media tensión.'],
        ['OA0006', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada. La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0007', 'PODA TECNICA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación tecnica de árbol aislado en línea de media tensión, para cualquier altura o diámetro, con la finalidad de obtener el control de altura y/o cercanía a las Redes Eléctricas. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. El presente baremo NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. El presente baremo es pagado por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0008', 'TALA DE ÁREA ARBORIZADA PARA CONSTRUCCIÓN DE NUEVA LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de área arborizada para construcción de nueva línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0009', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE BAJA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de baja tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada. La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0010', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de árbol aislado en línea de baja tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0011', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN con residuos', 'PROXI-LM', 'Tala de árbol aislado en línea de baja tensión, para cualquier altura o diámetro. La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada.'],
        ['OA0012', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE BAJA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de baja tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada. La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0013', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de árbol aislado en línea de baja tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0014', 'PAGO ADICIONAL POR TRABAJOS RELIZADOS EN HORARIO NOCTURNO O EN DIAS FESTIVOS', 'PROXI-LM', 'Esta actividad reconoce el sobrecoste asociado a la realización de trabajos en horario nocturno o en días festivos. • Se aplica sólo cuando el servicio es solicitado por la Distribuidora. No aplica por tanto, para los trabajos en que el contratista tiene posibilidad de su propia programación. • El número de puntos que se debe pagar por esta actividad, se calcula multiplicando la cantidad de puntos de esta actividad, por la suma total de puntos asociados a la actividad o trabajo que fue realizado en horario nocturno o en días festivos. • En las Especificacion Tecnica de la Licitacion puede ser indicado un tiempo limite de antelacion por el aviso segun el cual no se aplica esta voz'],
        ['OA0015', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro. La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada.'],
        ['OA0016', 'TALA SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'La tala comprende el corte total del tronco matriz de un árbol, que por inclinación o mal estado de conservación presenta peligro de daños en su proyección de caída a las redes eléctricas. Este tipo de tala considera un corte del tronco a 60 cm bajo la red BT o AP. Si existe solamente red MT se considera que el corte se deberá realizar a la distancia que garantice que las Redes no sufran daño al caer dicho árbol. Toda Tala debe ser autorizada por el Mandante. La tala está compuesta por las siguientes actividades: • Tramitar en la Municipalidad que corresponda los permisos necesarios para ejecutar el trabajo, el valor cancelado a la Municipalidad será de cargo del mandante. • Contar con la ubicación exacta del árbol en la zona donde se ejecutará el Trabajo. • Movilización a la zona de trabajo y contar con los elementos necesarios para realizar la tala como por ejemplo: camión elevador, motosierra, • Coordinar con el Centro de Operación correspondiente el inicio y el fin de actividades. • Delimitar zona de trabajo, de acuerdo a manual de señalización vial. • Las cuadrillas de podas deben contar con movilización propia, además de algún medio de comunicación con su base y el Mandante. Cada árbol intervenido se considera un evento. Una vez finalizado el trabajo debe elaborar informe y registros ambientales, según el formato contenido en el procedimiento de mantenimiento o definido por el Mandante, el cual deberá ser enviado en el plazo que indique este último.'],
        ['OA0017', 'SUMINISTRO DE ESPECIES ARBÓREAS POR COMPENSACIÓN', 'PROXI-LM', 'Esta actividad contempla el suministro de una (1) especie arbórea como medida de compensación. Considera las siguientes actividades: • Suministro y siembra de especie nativa (altura del árbol: 50 a 70 cm) según requerimiento de la distribuidora o autoridad ambiental. Incluye toma de registros fotográficos antes y después de realizar la siembra. • Elaboración previa del informe para la autoridad ambiental, plano de acuerdo al requerimiento, levantamiento topográfico, siembra en el sitio asignado por la distribuidora o autoridad ambiental. • Instalación de plaqueta de identificación, riego, abono y adecuación del terreno inicial. • Riego y cuidado cuatrimestral del árbol en plantación por un (1) año (3 intervenciones). Incluye replante (resiembra) por muerte de arboles hasta 10% de la siembra. • Visitas de seguimiento con la autoridad ambiental. • Elaboración de fichas y presentación y digitación de informes periódicos requeridos por la distribuidora, además de actualización de la información en la base de datos de la distribuidora o autoridad ambiental para inventarios.'],
        ['OA0018', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS', 'PROXI-LM', 'Retiro de árbol por cortes progresivos de acuerdo a las mejores prácticas Arboriculturales definidas en las Normas Técnicas y demás documentos aplicables del Sistema Gestión de la Distribuidora y/o solicitadas por la autoridad ambiental. incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por la distribuidora, digitación y actualización de la información en las bases de datos de la distribuidora o autoridad ambiental para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental. Este aplicara para aquellas situaciones en las que se defina que el grado de complejidad de los trabajos excede las características normales de una tala normal o común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logístico necesario para su ejecución, así como tiempo requerido para la ejecución del mismo. Las talas especializadas deben contar con la implementación de los sistemas de cordaje especializados, como los son cuerdas y dispositivos de poleas, cuerdas tubulares, manilas, anillos, platos, bloques, etc., para todas las partes a remover. Todas las actividades de tala especializada deben ser previamente aprobadas y contar con los respectivos soportes de implementación de las técnicas y establecidos en los procedimientos y documentos técnicos de la contratante. La altura mínima para considerar la actividad es de 15 metros, sin embargo, no todo árbol superior a esta altura se pagará como tala especializada, por lo cual los aspectos de complejidad y variables de sistemas de cordaje se verificarán por parte de la distribuidora. Arboles superiores a 15 metros que no cumplan las condiciones para ser especializadas y/o que no sean aprobadas como tal, serán pagadas como talas normales según corresponda. Las talas especializadas están sujetas a aprobación por parte de la distribuidora y la no aprobación no es conciliables con el contratista para su ejecución. No aplica para trabajos no programados y/o emergencias. Se paga por árbol individual e incluye la recolección y disposición de residuos Incluye garantía de intervención de 8 meses, en los cuales, si se genera una falla o afectación al servicio por el árbol y/o vegetación intervenida, la corrección debe ser asumida por el contratista (aplican los respectivos apremios). Incluye visita preoperativa, levantamiento de información para gestionar los descargos y normalización de desviaciones informáticas en los sistemas de la distribuidora.'],
        ['OA0019', 'MANTENIMIENTO DE PLANTACIÓN FORESTAL POR ÁRBOL 0,3<=H<=2 M', 'PROXI-LM', 'Mantenimiento de plantación forestal por árbol hasta 2 m incluye: plateo 1 m de diámetro, riego y abono La resiembra por muerte de arboles se pagara por ítem baremado De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o solicitadas por la autoridad ambiental ,incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, tratamiento de cortes con cicatrizante, Georeferenciación del árbol, toma de datos dasométricos, elaboración de fichas técnicas por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; suministro e instalación de placas de marcación en especies intervenidas., presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados La Distribuidora o por la autoridad ambiental'],
        ['OA0020', 'VISITA TÉCNICA A TERRENO PARA LA ATENCIÓN DE SOLICITUDES FORESTALES', 'PROXI-LM', 'Visita técnica a terreno a solicitudes forestales válido como tarea única no aplica como visita previa a labores de mantenimiento, esta actividad va orientado a resolver inquietudes de la autoridad ambiental o de terceros sobre árboles que tengan o puedan tener incidencia con las redes de distribución, incluye: levantamiento en terreno, conceptos técnicos, toma de registros fotográficos, elaboración de fichas técnicas cuando se requiera, información técnica del árbol, Estado Fitosanitario, datos dasométricos, nivel de interferencia con la red, Georeferenciación, identificación e instalación de plaquetas si aplica planos físicos y magnéticos, presentación de informes periódicos requeridos por la Distribuidora según norma técnica ambiental, digitación y actualización de la información en las bases de datos de la compañía para inventarios. Se hace claridad que sólo aplica esta voz para las actividades previamente avaladas por parte de La Distribuidora.'],
        ['OA0021', 'RETIRO DE ÁRBOL POR VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN', 'PROXI-LM', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de media y/o baja tensión, para cualquier altura o diámetro. La actividad comprende la supresión total (a ras de suelo) del árbol volcado. La presente voz comprende el tratamiento, retiro y adecuada disposición de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento. La presente voz es pagada por cada árbol retirado.'],
        ['OA0022', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada. Esta actividad se realiza haciendo uso del equipo de trabajo en tensión (línea viva). La presente voz contempla el tratamiento, retiro y adecuada disposición de residuos generados durante la actividad de poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0023', 'PAGO ADICIONAL POR TRABAJOS REALIZADOS EN HORARIO NOCTURNO O EN DÍAS FESTIVOS', 'LV', 'Esta actividad reconoce el sobrecoste asociado a la realización de trabajos en horario nocturno o en días festivos. Se aplica sólo cuando el servicio es solicitado por la Distribuidora. No aplica, por tanto, para los trabajos en que el contratista tiene posibilidad de su propia programación. El número de puntos que se debe pagar por esta actividad se calcula multiplicando la cantidad de puntos de esta actividad por la suma total de puntos asociados a la actividad o trabajo que fue realizado en horario nocturno o en días festivos. En las Especificaciones Técnicas de la Licitación puede ser indicado un tiempo límite de antelación por el aviso según el cual no se aplica esta voz.'],
        ['OA0024', 'LIMPIEZA DE ENREDADERAS, CON RETIRO DE RESIDUOS', 'PROXI-LM', 'Consiste en la remoción total de enredaderas ubicadas en postes, estructuras y/o conductores. Todas las operaciones de remoción total de enredaderas deben ser autorizadas por parte de la distribuidora. La ejecución del servicio comprende las siguientes actividades: Tener la ubicación exacta del área donde se realizará el servicio. Movilización del área de trabajo y contar con los elementos necesarios para realizar el servicio. Coordinar con el centro de operaciones el inicio y el final de las actividades (si aplica). La unidad de medida será por m² (largo x ancho de área intervenida). No aplica para cercas vivas. Contempla la recolección y disposición de residuos vegetales. Toma de registros fotográficos con fecha, hora y georeferenciados antes y después de realizar la actividad.'],
        ['OA0025', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Por desgajes Progresivos De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o solicitadas por la autoridad ambiental, incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental. Este aplicará para aquellas situaciones en las que a partir de la visita conjunta en terreno, se defina que el grado de complejidad de los trabajos excede las características normales de una tala especializada común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logístico necesario para su ejecución, así como tiempo requerido para la ejecución del mismo.'],
        ['OA0026', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS SIN RETIRO DE RESIDUOS CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Por desgajes Progresivos De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o solicitadas por la autoridad ambiental, incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental. Este aplicará para aquellas situaciones en las que a partir de la visita conjunta en terreno, se defina que el grado de complejidad de los trabajos excede las características normales de una tala especializada común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logístico necesario para su ejecución, así como tiempo requerido para la ejecución del mismo.'],
        ['OA0027', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro. La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada.'],
        ['OA0028', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro. La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada.'],
        ['OA0029', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Tala de área arborizada, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0030', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Tala de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz es pagada por cada metro cuadrado talado en área arborizada.']
        
        // Agrega más actividades según sea necesario
    ];
    // Agregar las filas al cuerpo de la tabla
    var tbody = actividadesUrbanasTable.getElementsByTagName('tbody')[0];
    for (var i = 0; i < actividades.length; i++) {
        var row = tbody.insertRow(i);
        for (var j = 0; j < actividades[i].length - 1; j++) {
            var cell = row.insertCell(j);
            cell.textContent = actividades[i][j];
        }

        // Agregar botón en la última columna
        var botonCell = row.insertCell(actividades[i].length - 1);
        var boton = document.createElement("button");
        boton.setAttribute("type", "button");
        boton.setAttribute("class", "btn btn-info");
        boton.setAttribute("data-bs-toggle", "modal");
        boton.setAttribute("data-bs-target", "#modalDetalles_" + i);
        boton.textContent = "Ver Detalles";
        botonCell.appendChild(boton);

        // Agregar modal al final del documento
        var modal = document.createElement("div");
        modal.setAttribute("class", "modal fade");
        modal.setAttribute("id", "modalDetalles_" + i);
        modal.setAttribute("tabindex", "-1");
        modal.setAttribute("aria-labelledby", "modalDetallesLabel_" + i);
        modal.setAttribute("aria-hidden", "true");

        var modalDialog = document.createElement("div");
        modalDialog.setAttribute("class", "modal-dialog");

        var modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");

        // Contenido del modal
        var modalHeader = document.createElement("div");
        modalHeader.setAttribute("class", "modal-header");
        var modalTitle = document.createElement("h5");
        modalTitle.setAttribute("class", "modal-title");
        modalTitle.setAttribute("id", "modalDetallesLabel_" + i);
        modalTitle.textContent = "Detalles de la Actividad";
        modalHeader.appendChild(modalTitle);

        var modalBody = document.createElement("div");
        modalBody.setAttribute("class", "modal-body");
        // Aquí se agrega el contenido específico de la actividad
        modalBody.textContent = actividades[i][actividades[i].length - 1];

        var modalFooter = document.createElement("div");
        modalFooter.setAttribute("class", "modal-footer");
        var closeButton = document.createElement("button");
        closeButton.setAttribute("type", "button");
        closeButton.setAttribute("class", "btn btn-secondary");
        closeButton.setAttribute("data-bs-dismiss", "modal");
        closeButton.textContent = "Cerrar";
        modalFooter.appendChild(closeButton);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);
        document.body.appendChild(modal);
    }

    // Mostrar la tabla de actividades urbanas
    actividadesUrbanasTable.style.display = 'table';
}
