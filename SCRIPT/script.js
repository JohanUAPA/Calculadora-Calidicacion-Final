function validarYCalcular() {
    let esValido = true;

    // Obtener los campos
    const actividades = document.getElementById('actividades').value;
    const actitudes = document.getElementById('actitudes').value;
    const evaluacion = document.getElementById('evaluacion').value;
    const trabajo = document.getElementById('trabajo').value;
    const participacion = document.getElementById('participacion').value;

    // Limpiar mensajes de error
    document.getElementById('actividadesError').innerText = '';
    document.getElementById('actitudesError').innerText = '';
    document.getElementById('evaluacionError').innerText = '';
    document.getElementById('trabajoError').innerText = '';
    document.getElementById('participacionError').innerText = '';

    // Validaciones
    if (!actividades || actividades < 0 || actividades > 100) {
        document.getElementById('actividadesError').innerText = 'Debe ingresar un número entre 0 y 100';
        esValido = false;
    }
    if (!actitudes || actitudes < 0 || actitudes > 100) {
        document.getElementById('actitudesError').innerText = 'Debe ingresar un número entre 0 y 100';
        esValido = false;
    }
    if (!evaluacion || evaluacion < 0 || evaluacion > 100) {
        document.getElementById('evaluacionError').innerText = 'Debe ingresar un número entre 0 y 100';
        esValido = false;
    }
    if (!trabajo || trabajo < 0 || trabajo > 100) {
        document.getElementById('trabajoError').innerText = 'Debe ingresar un número entre 0 y 100';
        esValido = false;
    }
    if (!participacion || participacion < 0 || participacion > 100) {
        document.getElementById('participacionError').innerText = 'Debe ingresar un número entre 0 y 100';
        esValido = false;
    }

    // Si todo es válido, calcular
    if (esValido) {
        calcularCalificacion(actividades, actitudes, evaluacion, trabajo, participacion);
    }
}

function calcularCalificacion(actividades, actitudes, evaluacion, trabajo, participacion) {
    // Convertir valores a números
    actividades = parseFloat(actividades);
    actitudes = parseFloat(actitudes);
    evaluacion = parseFloat(evaluacion);
    trabajo = parseFloat(trabajo);
    participacion = parseFloat(participacion);

    // Calculamos el porcentaje basado en los pesos asignados
    const actividadesPorcentaje = (actividades * 0.30);
    const actitudesPorcentaje = (actitudes * 0.05);
    const evaluacionPorcentaje = (evaluacion * 0.40);
    const trabajoPorcentaje = (trabajo * 0.15);
    const participacionPorcentaje = (participacion * 0.10);

    // Sumamos todos los porcentajes
    const calificacionFinal = actividadesPorcentaje + actitudesPorcentaje + evaluacionPorcentaje + trabajoPorcentaje + participacionPorcentaje;

    // Mostrar el resultado en pantalla
    document.getElementById('calificacionFinal').innerText = calificacionFinal.toFixed(2); // Limitar a 2 decimales
}