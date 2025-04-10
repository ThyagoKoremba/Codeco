import React, { useState, useEffect } from 'react';
import './../test.css';
import { Link } from '@inertiajs/react';
import Modal from 'react-modal';

import ActividadGralNov from './ActGraNov';


const API_URL = 'http://23.29.121.35:3027/apiv1/regweb';

const fetchData = async (fechaDesde, fechaHasta, proyectoid) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fecha_desde: fechaDesde,
        fecha_hasta: fechaHasta,
        proyectoid: proyectoid,
      }),
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud de datos');
    }

    const data = await response.json();

    // Retornar data solo si data.query no es nulo o vacío
    return data && data.query ? data : { query: [] };

  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return { query: [] }; // Retorna un array vacío si hay un error
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

function NovedadesGeneral() {
  const [registros, setRegistros] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRegistro, setSelectedRegistro] = useState(null);
  const [fechaDesde, setFechaDesde] = useState(getFechaDesdeInicial());
  const [fechaHasta, setFechaHasta] = useState(new Date().toISOString().split('T')[0]);
  const [buscador, setBuscador] = useState("");




  useEffect(() => {

    const proyectoid = 0;  // Para obtener todos los proyectos

    const actualizarDatos = () => {
      fetchData(fechaDesde, fechaHasta, proyectoid).then((data) => {
        setRegistros(data.query);
      });
    };

    // Llamar a la función inmediatamente al cargar el componente
    actualizarDatos();

    // Configurar el intervalo para actualizar los datos cada X milisegundos
    const intervalo = setInterval(actualizarDatos, 5000); // Actualiza cada 5 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);



  }, [fechaDesde, fechaHasta]);


  const handleOpenModal = (registro) => {
    setSelectedRegistro(registro);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedRegistro(null);
  };

  const novedades = registros.filter((registro) => registro.etiquetaid === 4);

  const registrosFiltrados = novedades.filter((accion) => {
    const busqueda = buscador.toLowerCase();

    return Object.values(accion).some((valor) =>
      valor && valor.toString().toLowerCase().includes(busqueda)
    );
  });

  return (
    <>
      <div className="banner-container  " style={{ position: 'relative' }}>


        <>
          <img
            src={"/storage/20240724_141219.jpg"}
            alt="Banner"
            className="img-fluid w-100"
            style={{ maxHeight: '200px', objectFit: 'cover' }}
          />
          <a className="texto-banner text-decoration-none" target="_blank" href='http://imibio.osconsultores.com.ar/' >
            Instituto Misionero de Biodiversidad
          </a>

        </>


      </div>
      <div className="container mt-4">

        <div className="row justify-content-center align-items-center mb-3">

          <div className="col-md-8 col-12 d-flex flex-wrap align-items-center justify-content-center">
            <h3>Monitor General de Novedades</h3>
          </div>
          <div className="col-md-2 col-12 d-flex flex-wrap align-items-center justify-content-center">
            <Link
              href={`/imibio/map-nov/${fechaDesde}/${fechaHasta}`}
              target='_blank'
              className='btn btn-dark'
            >
              Mapa General
            </Link>
          </div>
        </div>



        <br></br>
        <div className="row justify-content-center align-items-center mb-3">
          {/* Columna de Fecha */}
          <div className="col-md-4 col-12 d-flex flex-wrap align-items-center justify-content-center">
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
          <div className="col-md-4 col-12 d-flex flex-wrap align-items-center justify-content-center">
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

          <div className="col-md-3 col-12 ">

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


        <hr />
        <div className="row justify-content-center">
          <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <table className="table table-striped">
              <thead className='table-dark'>
                <tr>
                  <th scope="col">Fecha</th>
                  <th scope="col">Registro </th>

                  <th scope="col">Proyecto</th>

                  <th scope="col">Usuario</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Actividad</th>
                  <th scope="col">Productor</th>
                  <th scope="col">Referecia</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>

                {registrosFiltrados && registrosFiltrados.length > 0 ? (
                  registrosFiltrados.map((registro) => (
                    <tr key={registro.idctrl}>
                      <td>{new Date(registro.fecharegistroapps).toISOString().split('T')[0]}</td>
                      <td> #{registro.idctrl}</td>

                      <td>{registro.proyectonombre}</td>

                      <td>{registro.usuario_apellidoynombre}</td>
                      <td>{registro.roldescripcion}</td>
                      <td>{registro.actividadnombre}</td>
                      <td>{registro.productor_apellidoynombre}</td>
                      <td>{registro.referencia}</td>
                      <td>
                        <button
                          className="btn btn-success"
                          style={{
                            height: '20px',
                            width: '80px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '10px',
                            marginLeft: '20px',
                          }}
                          onClick={() => handleOpenModal(registro)}
                        >
                          Ver Más
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center">
                      <h4 className="titulo m-2">No se encontraron datos</h4>
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>


          <Modal
            isOpen={modalVisible}
            onRequestClose={handleCloseModal}
            contentLabel="Detalle del Registro"
            className="modal"
            overlayClassName="modal-overlay"
           
          >
         
           
                <div className="modal-header bg-success">
                  <h5 className="modal-title text-black">Detalle de Registro</h5>
                  <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                </div>
                <div className="modal-body">
                  <ActividadGralNov detalle={selectedRegistro} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-success" onClick={handleCloseModal}>
                    Cerrar
                  </button>
                </div>
          
          
          </Modal>

         
        </div>
      </div>

    </>
  );
}


export default NovedadesGeneral;
