import React, { useEffect, useState } from 'react';

import { Link } from '@inertiajs/react';
import './registros.css';




const API_URL = 'http://23.29.121.35:3026/apiv1/pryetqweb';

const fetchData = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Error en la solicitud de datos');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return null;
  }
};



function MonitorProyecto() {

  const [proyectos, setProyecto] = useState([]);

  useEffect(() => {



    fetchData().then((data) => {
      setProyecto(data[0]);
    });

  });


  /* const urlImagenBanner = `/imagenes/${}.jpg`; */

  return (
    <>
      <div className="container proyectos mt-4">
        <h3>Proyectos</h3>
        <hr></hr>
        <div className="row">
          {proyectos.map((proyecto) => (
            <div className="col-md-4" key={proyecto.proyectoid}>
              <Link
                href={`/imibio/proyecto/${proyecto.proyectoid}`}
                className="text-decoration-none"
              >
                <div className="card mb-4">
                  <br />
                  <h5 className="card-title">{proyecto.proyectonombre}</h5>
                  <img
                    src={`/storage/${proyecto.proyectoid}.jpg`}
                    className="card-img-top img-fluid card-img-custom"
                    alt={proyecto.proyectonombre}
                  />

                  <div className="card-body">
                    <p className="card-title ">{proyecto.proyectodescripcion}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MonitorProyecto;
