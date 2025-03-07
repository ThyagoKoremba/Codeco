




import React, { useState, useEffect } from 'react';

import { Link, usePage } from '@inertiajs/react';
import './test.css';

const fetchData = async (fechaDesde, fechaHasta, proyectoid) => {
  try {
    const params = new URLSearchParams({
      fecha_desde: fechaDesde,
      fecha_hasta: fechaHasta,
      proyectoid: proyectoid,
    });

    const response = await fetch(`/registros/data?${params.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud de datos');
    }

    const data = await response.json();
    return data && data.query ? data : { query: [] };
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return { query: [] };
  }
};

const getFechaArgentina = () => {
  const ahora = new Date();
  const opciones = { timeZone: "America/Argentina/Buenos_Aires", year: "numeric", month: "2-digit", day: "2-digit" };
  const fechaArgentina = new Intl.DateTimeFormat("es-AR", opciones).format(ahora);
  return fechaArgentina.split('/').reverse().join('-');
};

const getFechaDesdeInicial = () => {
  const fechaInicial = new Date('2022-10-01');
  return fechaInicial.toISOString().split('T')[0];
};

function MonitorGeneral() {
  const { props } = usePage();
  const [registros, setRegistros] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRegistro, setSelectedRegistro] = useState(null);
  const [fechaDesde, setFechaDesde] = useState(getFechaDesdeInicial());
  const [fechaHasta, setFechaHasta] = useState(getFechaArgentina());
  const [buscador, setBuscador] = useState("");

  useEffect(() => {
    const proyectoid = 0;

    const actualizarDatos = () => {
      fetchData(fechaDesde, fechaHasta, proyectoid).then((data) => {
        setRegistros(data.query);
      });
    };

    actualizarDatos();
    const intervalo = setInterval(actualizarDatos, 5000);

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

  const registrosFiltrados = registros.filter((accion) => {
    const busqueda = buscador.toLowerCase();
    return Object.values(accion).some((valor) =>
      valor && valor.toString().toLowerCase().includes(busqueda)
    );
  });

  return (
    <>
      <div className="banner-container" style={{ position: 'relative' }}>
        <img
          src={"/imagenes/20240724_141219.jpg"}
          alt="Banner"
          className="img-fluid w-100"
          style={{ maxHeight: '200px', objectFit: 'cover' }}
        />
        <a className="texto-banner" target="_blank" href='http://imibio.osconsultores.com.ar/'>
          Instituto Misionero de Biodiversidad
        </a>
      </div>

      <div className="container mt-4">
        <div className="row justify-content-center align-items-center mb-3">
          <div className="col-md-8 col-12 d-flex flex-wrap align-items-center justify-content-center">
            <h3>Monitor General de Registros</h3>
          </div>
          <div className="col-md-2 col-12 d-flex flex-wrap align-items-center justify-content-center">
            <Link
              href={`/map/${fechaDesde}/${fechaHasta}`}
              target='_blank'
              className='btn btn-dark'
            >
              Mapa General
            </Link>
          </div>
        </div>

        <br />
        <div className="row justify-content-center align-items-center mb-3">
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
          <div className="col-md-3 col-12">
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
                  <th scope="col">Registro</th>
                  <th scope="col">Proyecto</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Actividad</th>
                  <th scope="col">Productor</th>
                  <th scope="col">Etiqueta</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {registrosFiltrados.length > 0 ? (registrosFiltrados.map((registro) => (
                  <tr key={registro.idctrl}>
                    <td>{new Date(registro.fecharegistroapps).toISOString().split('T')[0]}</td>
                    <td>#{registro.idctrl}</td>
                    <td>{registro.proyectonombre}</td>
                    <td>{registro.usuario_apellidoynombre}</td>
                    <td>{registro.roldescripcion}</td>
                    <td>{registro.actividadnombre}</td>
                    <td>{registro.productor_apellidoynombre}</td>
                    <td>{registro.etiquetanombre}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        style={{
                          height: '20px',
                          width: '80px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontSize: '13px',
                          marginLeft: '20px'
                        }}
                        onClick={() => handleOpenModal(registro)}
                      >
                        Ver Más
                      </button>
                    </td>
                  </tr>
                ))) : (
                  <tr>
                    <td colSpan="9" className="text-center">
                      No se encontraron registros
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {modalVisible && selectedRegistro && (
            <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header bg-success">
                    <h5 className="modal-title text-black">Detalle de Registro</h5>
                    <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                  </div>
                  <div className="modal-body">
                    <ActividadGral detalle={selectedRegistro} />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-success" onClick={handleCloseModal}>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MonitorGeneral;
