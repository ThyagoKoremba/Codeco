import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import './test.css';

const API_URL = 'http://23.29.121.35:3027/apiv1/regweb';
const API_URL_PROYECTOS = 'http://23.29.121.35:3026/apiv1/pryetqweb';

const getFechaDesdeInicial = () => {
  return new Date('2022-10-01').toISOString().split('T')[0]; // Fecha fija
};

const ProyectoGral = () => {
  const { props } = usePage();
  const id = props.id; // Se obtiene el ID desde Inertia props

  const [proyectos, setProyectos] = useState([]);
  const [registros, setRegistros] = useState([]);
  const [fechaDesde, setFechaDesde] = useState(getFechaDesdeInicial());
  const [fechaHasta, setFechaHasta] = useState(new Date().toISOString().split('T')[0]);
  const [buscador, setBuscador] = useState('');

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await fetch(API_URL_PROYECTOS);
        if (!response.ok) throw new Error('Error en la solicitud de proyectos');
        const data = await response.json();
        setProyectos(data);
      } catch (error) {
        console.error('Error al obtener los proyectos:', error);
      }
    };

    const fetchRegistros = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fecha_desde: fechaDesde, fecha_hasta: fechaHasta, proyectoid: parseInt(id) }),
        });
        if (!response.ok) throw new Error('Error en la solicitud de registros');
        const data = await response.json();
        setRegistros(data.query || []);
      } catch (error) {
        console.error('Error al obtener los registros:', error);
      }
    };

    fetchProyectos();
    fetchRegistros();

    const intervalo = setInterval(fetchRegistros, 5000);
    return () => clearInterval(intervalo);
  }, [fechaDesde, fechaHasta, id]);

  const proyecto = proyectos.find((p) => p.proyectoid === parseInt(id));
  const registrosFiltrados = registros.filter((r) => r.proyectoid === parseInt(id)).filter((r) =>
    Object.values(r).some((v) => v && v.toString().toLowerCase().includes(buscador.toLowerCase()))
  );

  return (
    <>
     <div className="banner-container" style={{ position: 'relative' }}>
        <img src={`/imagenes/${id}.jpg`} alt="Banner" className="img-fluid w-100" style={{ maxHeight: '200px', objectFit: 'cover' }} />
        <h1 className="texto-banner">{proyecto ? proyecto.proyectonombre : 'Nombre del Proyecto'}</h1>
      </div>
 
      <div className="m-3">
        <div className="row">
          <div className="col-6">
            <h1><strong>Registros</strong></h1>
          </div>
          <div className="col-3">
            <Link href={`/imibio/proyectoDetalle/${id}`} target="_blank" className="btn btn-dark w-50">Detalle</Link>
          </div>
          <div className="col-3">
            <Link href={`/map-proyecto/${id}/${fechaDesde}/${fechaHasta}`} target="_blank" className="btn btn-dark w-50">Mapa</Link>
          </div>
        </div>

        <div className="row justify-content-center align-items-center mb-3">
          <div className="col-md-3 col-12 d-flex align-items-center justify-content-center">
            <h4 className="titulo m-2">Fecha desde:</h4>
            <input type="date" className="form-control m-2" style={{ maxWidth: '150px' }} value={fechaDesde} onChange={(e) => setFechaDesde(e.target.value)} />
          </div>
          <div className="col-md-3 col-12 d-flex align-items-center justify-content-center">
            <h4 className="titulo m-2">Fecha hasta:</h4>
            <input type="date" className="form-control m-2" style={{ maxWidth: '150px' }} value={fechaHasta} onChange={(e) => setFechaHasta(e.target.value)} />
          </div>
          <div className="col-md-2 col-6">
            <input type="text" className="form-control buscar" placeholder="Buscar..." value={buscador} onChange={(e) => setBuscador(e.target.value)} />
          </div>
        </div>

        <hr />

        <div className="row justify-content-center">
          <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <table className="table table-striped">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Fecha</th>
                  <th scope="col">Registro</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Actividad</th>
                  <th scope="col">Productor</th>
                  <th scope="col">Etiqueta</th>
                  <th scope="col">Referencia</th>
                </tr>
              </thead>
              <tbody>
                {registrosFiltrados.length > 0 ? (
                  registrosFiltrados.map((registro) => (
                    <tr key={registro.idctrl}>
                      <td>{new Date(registro.fecharegistroapps).toISOString().split('T')[0]}</td>
                      <td>#{registro.idctrl}</td>
                      <td>{registro.usuario_apellidoynombre}</td>
                      <td>{registro.roldescripcion}</td>
                      <td>{registro.actividadnombre}</td>
                      <td>{registro.productor_apellidoynombre}</td>
                      <td>{registro.etiquetanombre}</td>
                      <td>{registro.referencia}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">No hay registros disponibles para este proyecto.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProyectoGral;
