import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';

import './../test.css';

import ActividadGralNov from './ActGraNov';

const API_URL = 'http://23.29.121.35:3027/apiv1/regweb';
const API_URL_proyectos = 'http://23.29.121.35:3026/apiv1/pryetqweb';

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

function ProyectoNovedades() {
  const { props } = usePage();
  const { id } = props;
  const [proyectos, setProyectos] = useState([]);
  const [registros, setRegistros] = useState([]);
  const [fechaDesde, setFechaDesde] = useState(getFechaDesdeInicial());
  const [fechaHasta, setFechaHasta] = useState(new Date().toISOString().split('T')[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRegistro, setSelectedRegistro] = useState(null);
  const [buscador, setBuscador] = useState("");



  useEffect(() => {

    const actualizarDatos = () => {
      // Cargar lista de proyectos
      fetchProyectos().then((data) => setProyectos(data[0]));

      // Cargar registros filtrados por proyecto y fechas
      fetchData(fechaDesde, fechaHasta, parseInt(id)).then((data) => setRegistros(data));
    };

    // Llamar a la función inmediatamente al cargar el componente
    actualizarDatos();

    // Configurar el intervalo para actualizar los datos cada X milisegundos
    const intervalo = setInterval(actualizarDatos, 5000); // Actualiza cada 5 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);

  }, [fechaDesde, fechaHasta, id]); // Incluir `id` como dependencia

  // Encuentra el proyecto actual basado en `id` y luego segun etiqueta "con novedad id=4"
  const proyecto = proyectos.find((proj) => proj.proyectoid === parseInt(id));
  const registrosF = registros.filter((registro) => registro.proyectoid === parseInt(id));
  const registrosFiltrados = registrosF.filter((registro) => registro.etiquetaid === 4);




  const handleOpenModal = (registro) => {
    setSelectedRegistro(registro);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedRegistro(null);
  };

  const urlImagenBanner = `/storage/${id}.jpg`;

  const novedades = registrosFiltrados.filter((accion) => {
    const busqueda = buscador.toLowerCase();

    return Object.values(accion).some((valor) =>
      valor && valor.toString().toLowerCase().includes(busqueda)
    );
  });



  return (
    <>
      <div className="banner-container  " style={{ position: 'relative' }}>



        <img
          src={urlImagenBanner}
          alt="Banner"
          className="img-fluid w-100"
          style={{ maxHeight: '200px', objectFit: 'cover' }}
        />
        <h1 className="texto-banner">{proyecto ? proyecto.proyectonombre : 'Nombre del Proyecto'}</h1>




      </div>
      <div className="m-3">

        <br></br>

        <div className='row'>
          <div className='col-6 '>
            <h1><strong>Novedades</strong></h1>
          </div>
          <div className="col-3">
            <Link href={`/imibio/novedades-detalle/${id}`} target="_blank" className="btn btn-dark w-50">Detalle</Link>
          </div>
          <div className="col-3">
            <Link href={`/imibio/map-novedades-proyecto/${id}/${fechaDesde}/${fechaHasta}`} target="_blank" className="btn btn-dark w-50">Mapa</Link>
          </div>



        </div>





        <div className="row justify-content-center align-items-center mb-3">

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

          <div className="col-md-2 col-6 ">

            <input
              title=""
              type="text"
              className="form-control buscar"
              id="buscador-actividades"
              placeholder="Buscar..."
              value={buscador}
              onChange={(e) => setBuscador(e.target.value)}
            />
          </div>



        </div>
        <hr />

        <div className="row justify-content-center">
          <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <table className="table table-striped">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Fecha</th>
                  <th scope="col">Registro </th>



                  <th scope="col">Usuario</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Actividad</th>
                  <th scope="col">Productor</th>
                  <th scope="col">Etiqueta</th>
                  <th scope="col">Referencia</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {novedades.length > 0 ? (
                  novedades.map((registro) => (
                    <tr key={registro.idctrl}>

                      <td>{new Date(registro.fecharegistroapps).toISOString().split('T')[0]}</td>
                      <td>#{registro.idctrl}</td>


                      <td>{registro.usuario_apellidoynombre}</td>
                      <td>{registro.roldescripcion}</td>
                      <td>{registro.actividadnombre}</td>
                      <td>{registro.productor_apellidoynombre}</td>
                      <td>{registro.etiquetanombre}</td>
                      <td>{registro.referencia}</td>
                      <td>
                        <button
                          className="btn btn-success"
                          style={{ height: '25px', width: '80px', fontSize: '10px', marginLeft: '20px' }}
                          onClick={() => handleOpenModal(registro)}
                        >
                          Ver Más
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center">No hay registros disponibles para este proyecto.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {modalVisible && (
          <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header bg-success">
                  <h5 className="modal-title text-black">Detalle de Registro</h5>
                  <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                </div>
                <div className="modal-body">
                  <ActividadGralNov detalle={selectedRegistro} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-success" onClick={handleCloseModal}>Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

   
    </>
  );
}

export default ProyectoNovedades;
