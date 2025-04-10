
import "./actividad.css"
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';




const ActividadCapacitacion = ({ detalle }) => {

    const [verMapa, setVerMapa] = useState(false);

    const handleMapa = () => {

        setVerMapa(!verMapa);
    }


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
            <div className="row ">
                <div className="col-md-12 text-start ">
                    <p><strong>{`Capacitación / ${detalle.etiquetanombre}`}</strong></p>



                </div>


            </div>
            <div className="row">
                <div id="marco" className="col-md-7 ">
                    <img
                        id="foto-actividad"
                        onDoubleClick={openImage(`http://23.29.121.35/imibio/images/igbm/${detalle.identificadorproyecto}/${detalle.imagennombre}`)} // Cambiado para usar correctamente la función
                        src={`http://23.29.121.35/imibio/images/igbm/${detalle.identificadorproyecto}/${detalle.imagennombre}`}
                        className="img-fluid zoom-img"
                        style={{ objectFit: 'cover', height: "220px", width: "100%", padding: '10px', border: "0px", cursor: "pointer" }}
                        alt="Foto actividad"
                    />

                    <p className="m-2">{detalle.referencia}</p>
                </div>

                <div className="col-md-5">

                    <div className="text-start">
                        <p><strong>Descripción:</strong> {detalle.descripcion}</p>

                    </div>




                </div>
            </div>
            <br></br>

            {verMapa && detalle.latitud && detalle.longitud !== 0 ?
                <MapContainer
                    center={[detalle.latitud, detalle.longitud]}
                    zoom={6}
                    style={{ height: "150px", width: "100%", padding: '10px' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[detalle.latitud, detalle.longitud]}>
                        <Popup>
                            {detalle.etiqueta}
                        </Popup>
                    </Marker>
                </MapContainer>
                : ""}

{detalle.latitud && detalle.longitud !== 0 ?
            <div className="container">
                <button className="btn btn-success m-2 float-start" onClick={handleMapa}>
                    Ubicación
                </button>
            </div> : ""}




        </div>

    );
};

export default ActividadCapacitacion;
