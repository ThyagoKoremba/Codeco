import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { usePage } from '@inertiajs/react'; // Importar el hook de Inertia
import L from 'leaflet'; // Necesario para crear un ícono personalizado
import 'leaflet/dist/leaflet.css'; // Estilos de Leaflet

const MapComponent = () => {
    const { props } = usePage(); // Obtener los props enviados desde Laravel
    const { fechaDesde, fechaHasta } = props; // Extraer los parámetros necesarios
    const [locations, setLocations] = useState([]);

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
            const proyectoid = 0; // Para obtener todos los proyectos

            fetchData(fechaDesde, fechaHasta, proyectoid).then((data) => {
                if (data && data.query) {
                    setLocations(data.query);
                }
            });
        };

        // Llamar a la función inmediatamente al cargar el componente
        actualizarDatos();

        // Configurar el intervalo para actualizar los datos cada X milisegundos
        const intervalo = setInterval(actualizarDatos, 5000); // Actualiza cada 5 segundos

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalo);
    }, [fechaDesde, fechaHasta]); // Dependencias actualizadas

    return (
        <>
           
            <br></br>

            <div className='container'>
                <h2>Registros</h2>
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
                                },
                                mouseout: (e) => {
                                    setTimeout(() => {
                                        e.target.closePopup();
                                    }, 1500);
                                }
                            }}
                        >
                            <Popup>
                                <div className="text-start">
                                    <p><strong>Descripción:</strong> {location.descripcion}</p>
                                    <p><strong>Etiqueta:</strong> {location.etiquetanombre}</p>
                                    <p><strong>Referencia:</strong> {location.referencia}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

          
        </>
    );
};

export default MapComponent;
