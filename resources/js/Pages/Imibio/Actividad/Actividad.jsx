
import "./actividad.css"
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; 

// Solucionar iconos que no aparecen correctamente
 import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
 
let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconAnchor: [12, 41] // Corrige el desplazamiento del icono
});
L.Marker.prototype.options.icon = DefaultIcon; 

const Actividad = ({ detalle }) => {



    const openImage = (src) => (event) => {
        event.preventDefault();
        window.open(src, '_blank');
    };
    if (!detalle) return (
    
    <div>
        <div className="row">
            <div id="marco" className="col-md-5">
                {/* Icono de imagen no encontrada */}
                <span className="material-icons" style={{ fontSize: "180px", color: '#ccc' }}>
                   
                </span>
            </div>
            <div className="col-md-7">
                {/* Icono de GPS no encontrado */}
                <span className="material-icons" style={{ fontSize: "180px", color: '#ccc' }}>
                    
                </span>
            </div>
        </div>


    </div>)

    return (
        <div className="container">
            <div className="row">
                <div id="marco" className="col-md-5 ">

                <img
                        id="foto-actividad"
                        onDoubleClick={openImage(`http://23.29.121.35/imibio/images/igbm/${detalle.identificadorproyecto}/${detalle.imagennombre}`)} // Cambiado para usar correctamente la función
                        src={`http://23.29.121.35/imibio/images/igbm/${detalle.identificadorproyecto}/${detalle.imagennombre}`}
                        className="img-fluid zoom-img"
                        style={{ objectFit: 'cover', height: "220px", width: "100%", padding: '10px', border: "0px", cursor: "pointer" }}
                        alt="Foto actividad"
                    />
                </div>

              <div className="col-md-7">


                {detalle.latitud && detalle.longitud !== 0 ?
                        <MapContainer
                            center={[detalle.latitud, detalle.longitud]}
                            zoom={6}
                            style={{ height: "220px", width: "100%", padding: '10px' }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[detalle.latitud, detalle.longitud]}>
                                <Popup>
                                    {detalle.etiquetanombre}
                                </Popup>
                            </Marker>
                        </MapContainer>
                        :
                        <span className="material-icons" style={{ fontSize: "180px", color: '#ccc' }}>
                        location_off
                    </span>}


                </div> 
            </div>
            <br></br>
            <div className="row ">
                <div className="col-md-12 ">
                    <div className="text-start">
                        <p><strong>Descripción:</strong> {detalle.descripcion}</p>
                        <p><strong>Etiqueta:</strong> {detalle.etiquetanombre}</p>
                        <p><strong>Referencia:</strong> {detalle.referencia}</p>
                    </div>

                </div>


            </div>

            <div className="container botones">
                <div className="row m-2 p-2">
                    <div className="col">
                        <button id="boton" className="btn disabled boton">Comentar</button>
                    </div>
                    <div  className="col">
                        <button id="boton" className="btn disabled boton">Exportar a Dataset</button>
                    </div>
                </div>
            </div>

            
        </div>

    );
};

export default Actividad;
