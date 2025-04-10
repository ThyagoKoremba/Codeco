
/* import "./actividad.css" */
import React from 'react';
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

const ActividadGral = ({ detalle }) => {

console.log(detalle);

    const openImage = (src) => (event) => {
        event.preventDefault();
        window.open(src, '_blank');
    };
    if (!detalle) return (

        <div>
            <div className="row">
                <div id="marco" className="col-md-5">
                    {/* Icono de imagen no encontrada */}
                  
                </div>
                <div className="col-md-7">
                    {/* Icono de GPS no encontrado */}
                   
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
                                          " "}

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



        </div>

    );
};

export default ActividadGral;
