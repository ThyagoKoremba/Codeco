import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Necesario para crear un ícono personalizado
import 'leaflet/dist/leaflet.css'; // Estilos de Leaflet
import Header from '../header/header';
import { useParams } from 'react-router-dom';
import Footer from '../footer/footer';



const MapCap = () => {




    const { fechaDesde, fechaHasta } = useParams();
    const [location, setLocations] = useState([]);

   


    const API_URL = 'http://23.29.121.35:3027/apiv1/regweb';

    const fetchData = async (fechaDesde, fechaHasta, proyectoid) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fecha_desde: fechaDesde,
                    fecha_hasta: fechaHasta,
                    proyectoid: proyectoid
                })
            });

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

    useEffect(() => {

        const actualizarDatos = () => {
            const proyectoid = 0;  // Para obtener todos los proyectos

            fetchData(fechaDesde, fechaHasta, proyectoid).then((data) => {
                setLocations(data.query);
            });
    
          };
      
          // Llamar a la función inmediatamente al cargar el componente
          actualizarDatos();
      
          // Configurar el intervalo para actualizar los datos cada X milisegundos
          const intervalo = setInterval(actualizarDatos, 5000); // Actualiza cada 5 segundos
      
          // Limpiar el intervalo cuando el componente se desmonte
          return () => clearInterval(intervalo);
        
    },[]);



    const locations = location.filter((registro) => registro.actividadid === 5);


    return (
        <>
             {/*  <div className="banner-container  " style={{ position: 'relative' }}>


<>
     <img
         src={"/imagenes/20240724_141219.jpg"}
        alt="Banner"
        className="img-fluid w-100"
        style={{ maxHeight: '200px', objectFit: 'cover' }}
    /> 
  

</>


</div> */}
<Header></Header>
            <br></br>

            <div className='container'>
                <h2>Capacitaciones</h2>
                <hr></hr>
                <MapContainer center={[-27.3627, -55.9000]} zoom={8} style={{ height: "500px", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {locations.map(location => (

                     
                        <Marker
                            key={location.idctrl}
                            position={[location.latitud, location.longitud]}
                     
                            eventHandlers={{
                                mouseover: (e) => {
                                    e.target.openPopup();
                                }, mouseout: (e) => {
                                    setTimeout(() => {
                                        e.target.closePopup();
                                    }, 1500);
                                }
                            }}
                            
                        >

                            <Popup>
                                <div className="text-start ">
                                    {/*  <img
                        id="foto-actividad"
                      
                        src={location.foto}
                        className="img-fluid zoom-img"
                        style={{ objectFit: 'fill', height: "150px", width: "150px", padding: '10px', border: "0px", cursor:"pointer" }}
                        alt="Foto actividad"
                    /> */}
                                    <p><strong>Descripción:</strong> {location.descripcion}</p>
                                    <p><strong>Etiqueta:</strong> {location.etiquetanombre}</p>
                                    <p><strong>Referencia:</strong> {location.referencia}</p>

                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

<Footer></Footer>

        </>
    );
};

export default MapCap;
