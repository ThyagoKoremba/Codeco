import React, { useState, useEffect } from 'react';

const API_URL = 'http://23.29.121.35:3027/apiv1/regweb';

const fetchData = async ( fechaDesde, fechaHasta, proyectoid ) => {
  try {
    const response = await fetch(API_URL , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fecha_desde: fechaDesde,
        fecha_hasta: fechaHasta,
        proyectoid: proyectoid
      })
    } );
    
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

const Api = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fechaDesde = '2024-02-27';
    const fechaHasta = '2024-11-06';
    const proyectoid = 0
    ;  // Para obtener todos los proyectos

    fetchData( fechaDesde, fechaHasta, proyectoid ).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <h1>Datos del API</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default Api;
