import { useState, useEffect } from 'react';
import Footer from '../footer/footer';
import Actividad from '../Actividad/Actividad';
import '../registros/test.css'
import { useParams } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;
const API_URL_proyectos = process.env.REACT_APP_API_URL_PROYECTOS;
const API_URL_ACT = process.env.REACT_APP_API_URL_ACT;


const fetchData = async (fechaDesde, fechaHasta, proyectoid) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fecha_desde: fechaDesde, fecha_hasta: fechaHasta, proyectoid }),
        });
        if (!response.ok) throw new Error('Error en la solicitud de datos');
        const data = await response.json();
        return data.query || []; // Maneja caso sin datos en `query`
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return [];
    }
};

const fetchProyectos = async () => {
    try {
        const response = await fetch(API_URL_proyectos);
        if (!response.ok) throw new Error('Error en la solicitud de datos');
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return [];
    }
};


const fetchActividades = async (id) => {
    try {
        const response = await fetch(`${API_URL_ACT}/${id}`);
        if (!response.ok) throw new Error('Error en la solicitud de actividades');
        const data = await response.json();
        return data; // Devuelve el arreglo de actividades para el proyecto
    } catch (error) {
        console.error('Error al obtener actividades:', error);
        return [];
    }
};


/* const getFechaDesdeInicial = () => {
  const fecha = new Date();
  fecha.setDate(fecha.getDate() - 30);
  return fecha.toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'
}; */

const getFechaDesdeInicial = () => {
    // Fecha fija: 01/10/2022
    const fechaInicial = new Date('2022-10-01');
    return fechaInicial.toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'
  };
  
const DetalleProyectoNov = () => {

    const { id } = useParams();


    const [fechaDesde, setFechaDesde] = useState(getFechaDesdeInicial());
    const [fechaHasta, setFechaHasta] = useState(new Date().toISOString().split('T')[0]);

    const [actividades, setActividades] = useState([]);
    const [actividadSeleccionada, setActividadSeleccionada] = useState("");



    const [proyectos, setProyectos] = useState([]);
    const [accionSeleccionada, setAccionSeleccionada] = useState([]);
    const [acciones, setAcciones] = useState([]);
    const [detalleAccion, setDetalleAccion] = useState(null);
    const [buscador, setBuscador] = useState("");

    const proyecto = proyectos.length ? proyectos.find((proj) => proj.proyectoid === parseInt(id)) : null;


    const registrosFiltrados = acciones.filter((registro) => registro.proyectoid === parseInt(id));

    const novedades = registrosFiltrados.filter((registro) => registro.etiquetaid === 4);


    // Estado para paginación
    const [paginaActual, setPaginaActual] = useState(1);
    const registrosPorPagina = 20
        ;

    useEffect(() => {


        // Definir una función para actualizar los datos
        const actualizarDatos = () => {
            fetchProyectos().then((data) => setProyectos(data[0]));
            fetchData(fechaDesde, fechaHasta, parseInt(id)).then((data) => setAcciones(data));
            fetchActividades(id).then((data) => setActividades(data[0]));
        };

        // Llamar a la función inmediatamente al cargar el componente
        actualizarDatos();

        // Configurar el intervalo para actualizar los datos cada X milisegundos
        const intervalo = setInterval(actualizarDatos, 5000); // Actualiza cada 5 segundos

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalo);
    }, [fechaDesde, fechaHasta, id]);




    //Filtrado
    // Primero filtramos los datos
    const accionesFiltradas = novedades.filter((accion) => {
        const busqueda = buscador.toLowerCase();
        const coincideActividad = actividadSeleccionada ? accion.actividadnombre === actividadSeleccionada : true;
        return (
            (accion.roldescripcion.toLowerCase().includes(busqueda) ||
                accion.usuario_apellidoynombre.toLowerCase().includes(busqueda) ||
                accion.etiquetanombre.toLowerCase().includes(busqueda)) &&
            coincideActividad
        );
    });


    // Luego ordenamos los resultados filtrados
    const accionesFiltradasOrdenadas = accionesFiltradas.sort((a, b) => {

        return new Date(b.fechayhoraregsitroctrl) - new Date(a.fechayhoraregsitroctrl);
    });


    accionesFiltradasOrdenadas.forEach((accion) => {
        accion.fechaSolo = new Date(accion.fechayhoraregsitroctrl).toLocaleDateString();
    });

    // Cálculo de las acciones a mostrar basado en la paginación
    const indiceUltimoRegistro = paginaActual * registrosPorPagina;
    const indicePrimerRegistro = indiceUltimoRegistro - registrosPorPagina;
    const accionesPaginadas = accionesFiltradasOrdenadas.slice(indicePrimerRegistro, indiceUltimoRegistro)

    // Función para cambiar la página
    const cambiarPagina = (numeroPagina) => {
        setPaginaActual(numeroPagina);
    };

    // Cálculo del número total de páginas
    const totalPaginas = Math.ceil(accionesFiltradas.length / registrosPorPagina);



    const handleSelect = (accionId) => {
        const accion = registrosFiltrados.find(a => a.idctrl === accionId); // Buscar la acción seleccionada
        setAccionSeleccionada(accion); // Guardar el objeto de la acción en el estado
        setDetalleAccion(accion); // También actualizar el estado del detalle de la acción
    };




    const urlImagenBanner = `/imagenes/${id}.jpg`;






    return (
        <>

            <div>
                <div className="banner-container  " style={{ position: 'relative' }}>


                    <>
                        <img
                            src={urlImagenBanner}
                            alt="Banner"
                            className="img-fluid w-100"
                            style={{ maxHeight: '200px', objectFit: 'cover' }}
                        />
                        <h1 className="texto-banner">{proyecto ? proyecto.proyectonombre : 'Nombre del Proyecto'}</h1>

                    </>


                </div>
                <div className="container mt-5">

       
                    <div className="container ">
                    <strong><h2>Novedades</h2></strong>
                    <hr></hr>
                        <div className="row justify-content-center align-items-center mb-3">

                          
                            {/* Columna de Fecha */}
                            <div className="col-md-3 col-12 d-flex  align-items-center justify-content-center ">
                                <h4 className="titulo m-2">Fecha desde:</h4>

                                <input
                                    type="date"
                                    id="fechaDesde"
                                    className="form-control m-2"
                                    style={{ maxWidth: '150px' }}
                                    value={fechaDesde}
                                    onChange={(e) => setFechaDesde(e.target.value)}
                                />
                            </div>
                            <div className="col-md-3 col-12 d-flex  align-items-center justify-content-center">
                                <h4 className="titulo m-2">Fecha hasta:</h4>
                                <input
                                    type="date"
                                    id="fechaHasta"
                                    className="form-control m-2"
                                    style={{ maxWidth: '150px' }}
                                    value={fechaHasta}
                                    onChange={(e) => setFechaHasta(e.target.value)}
                                />

                            </div>

                            <div className="col-md-3 col-12 d-flex  align-items-center justify-content-center ">
                                <h4 className='text-start m-2 titulo'>Actividad</h4>
                                <select
                                    className="form-control"
                                    value={actividadSeleccionada}
                                    onChange={(e) => {
                                        setActividadSeleccionada(e.target.value);
                                        setAccionSeleccionada(null);
                                        setDetalleAccion(null)
                                    }}
                                >
                                    <option value="">Todas</option>
                                    {actividades.map((actividad) => (

                                        <option key={actividad.id} value={actividad.actividadnombre}>
                                            {actividad.actividadnombre}
                                        </option>

                                    ))}
                                </select>
                            </div>



                            {/* Columna de Buscar */}
                            <div className="col-md-2 col-6 ">
                              
                                <input
                                    title="Puedes buscar por usuario, rol o etiqueta"
                                    type="text"
                                    className="form-control buscar"
                                    id="buscador-actividades"
                                    placeholder="Buscar..."
                                    value={buscador}
                                    onChange={(e) => setBuscador(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">

                        <div className="col-md-4">

                            <ul className="list-group" id="acciones-list">

                                {/* Primer elemento fijo con la acción seleccionada */}
                                {!accionSeleccionada && (
                                    <li className="list-group-item pt-4  fixed-item">
                                        <div className="d-flex  justify-content-between">

                                            <p><strong>Actividad:</strong> .......</p>
                                            <p><strong>Fecha:</strong> .......</p>
                                        </div>
                                        <div className="d-flex  justify-content-between">
                                            <p><strong>Usuario:</strong> .......</p>
                                            <p><strong>Rol:</strong> .......</p>
                                        </div>
                                    </li>
                                )}


                                {accionSeleccionada && (
                                    <li className="list-group-item fixed-item">
                                        <div className="d-flex justify-content-between">
                                            <span><strong>{accionSeleccionada.etiquetanombre}</strong></span>
                                            <span><strong>{new Date(accionSeleccionada.fechayhoraregsitroctrl).toLocaleDateString()}</strong></span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p><strong>Usuario:</strong> {accionSeleccionada.usuario_apellidoynombre}</p>
                                            <p><strong>Rol:</strong> {accionSeleccionada.roldescripcion}</p>
                                        </div>
                                    </li>
                                )}



                                {/* Lista de acciones paginadas */}
                                <div className="scrollable-list">
                                    {accionesPaginadas.length > 0 ? accionesPaginadas.map((accion) => (
                                        <li
                                            key={accion.idctrl}
                                            onClick={() => handleSelect(accion.idctrl)}
                                            className='list-group-item'
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: accionSeleccionada && accionSeleccionada.idctrl === accion.idctrl ? 'white' : 'transparent',
                                                transition: 'background-color 0.3s'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!accionSeleccionada || accionSeleccionada.idctrl !== accion.idctrl) {
                                                    e.currentTarget.style.backgroundColor = '#71b171';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!accionSeleccionada || accionSeleccionada.idctrl !== accion.idctrl) {
                                                    e.currentTarget.style.backgroundColor = 'transparent';
                                                }
                                            }}
                                        >
                                            <div className="d-flex justify-content-between">
                                                <span><strong>{accion.etiquetanombre}</strong></span>
                                                <span><strong>{new Date(accion.fechayhoraregsitroctrl).toLocaleDateString()}</strong></span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p><strong>Usuario:</strong> {accion.usuario_apellidoynombre}</p>
                                                <p><strong>Rol:</strong> {accion.roldescripcion}</p>
                                            </div>

                                            <div className="detalle-movil">
                                                {detalleAccion && accion.idctrl === detalleAccion.idctrl && (
                                                    <div className="mt-3">
                                                        <Actividad detalle={detalleAccion} />
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    )) : <h4 className='m-2'>No se encontraron registros</h4>
                                    }
                                </div>
                            </ul>



                            {/* Paginación */}
                            {/*  <nav aria-label="Page navigation" className="mt-3">
                            <ul className="pagination">
                                {[...Array(totalPaginas)].map((_, index) => (
                                    <li key={index} className={`page-item ${paginaActual === index + 1 ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => cambiarPagina(index + 1)}>
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav> */}
                        </div>

                        <div className="col-md-8 detalle-escritorio">
                            <Actividad detalle={detalleAccion} />
                        </div>
                    </div>


                </div>
                <Footer />
            </div>
        </>
    );
};

export default DetalleProyectoNov;
