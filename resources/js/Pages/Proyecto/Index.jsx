import {React, useState} from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head} from '@inertiajs/react';
import './../../../css/app.css';
import Modal from 'react-modal';
Modal.setAppElement('#app');


const Index = ({ auth, proyectos }) => {

    const [isVerModalOpen, setIsVerModalOpen] = useState(false);
        const [selectedProyecto, setSelectedProyecto] = useState(null);
    
        const openVerModal = (proyecto) => {
            setSelectedProyecto(proyecto);
            setIsVerModalOpen(true);
        }
    
        const closeVerModal = () => {
            setIsVerModalOpen(false);
            setSelectedProyecto(null);
        }

    return (

        <>
                <div className='d-flex justify-content-between'>
                    <h2 className="">Proyectos</h2>
                    <a href={route('proyecto.create')}>
                        <button className='btn btn-primary'>Nuevo Proyecto</button>
                    </a>
                </div>

            <div className="tabla-index">
                <div className="table-responsive overflow-visible">
                    <table className="table table-striped table-hover align-middle">
                        <thead className="sticky-top">
                            <tr>
                                <th scope='col'>
                                    ID
                                </th>
                                <th scope="col">
                                    Nombre
                                </th>
                                <th scope="col">
                                    Abreviatura
                                </th>
                                <th scope="col">
                                    Fecha de Inicio
                                </th>
                                <th scope="col">
                                    Fecha de Finalizacion
                                </th>
                                <th scope="col">
                                    Activo
                                </th>
                                <th scope="col">
                                    Opciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {proyectos?.map((proyecto) => (
                                <tr key={proyecto.id} className="">
                                    <th scope='row' className='px6 py-4'>
                                        {proyecto.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {proyecto.proyectonombre}
                                    </td>
                                    <td className="px-6 py-4">
                                        {proyecto.proyectoabreviatura}
                                    </td>
                                    <td className="px-6 py-4">
                                        {proyecto.fechainicio}
                                    </td>
                                    <td className="px-6 py-4">
                                        {!proyecto.fechafinalizacion ? 'No definida' : proyecto.fechafinalizacion}
                                    </td>
                                    <td className="px-6 py-4">
                                        {proyecto.activosn === 1 ? 'Si' : 'No'}
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary" type="button" id="dropdownMenu2"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path
                                                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                                </svg>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">

                                                <a className="dropdown-item" href={route('proyecto.edit', [proyecto])} >Editar</a>
                                                <a className='dropdown-item' onClick={() => openVerModal(proyecto)}>Ver</a>
                                                <a className="dropdown-item" href={route('proyecto.cambiarEstado', [proyecto])}>
                                                    {proyecto.activosn === 1 ? 'Desactivar' : 'Activar'}
                                                </a>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
                        <Modal
                            isOpen={isVerModalOpen}
                            onRequestClose={closeVerModal}
                            contentLabel={"Ver"}
                            style={{
                                content: {
                                    backgroundColor: '#ffffff',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    padding: '20px',
                                    maxWidth: '600px',
                                    maxHeight: "85vh",
                                    margin: '0 auto',
                                }
                            }}
                            overlayClassName="modal-overlay"
                        >
                            <div className="modal-dialog modal-lg h-100">
                                <div className="modal-content h-100">
                                    <div className="modal-header d-flex justify-content-between">
                                        <h5 className="modal-title mb-3">
                                        {selectedProyecto && (
                                                <p>Ver Proyecto - {selectedProyecto.id}</p>
            
                                            )}
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            onClick={closeVerModal}
                                            aria-label="Cerrar"
                                        ></button>
                                    </div>
                                    <div className="modal-body h-100 d-flex flex-column">
                                        <div className='mb-auto'>
                                            <div className="card">
                                                <div className="card-body">
                                                {selectedProyecto && (
                                                        <>
                                                            <p>ID: <span className="text-muted">{selectedProyecto.id}</span></p>
                                                            <div className="row">
                                                            <p className="col-6">Nombre: <span className="text-muted">{selectedProyecto.proyectonombre}</span></p>
                                                            <p className="col-6">Abreviatura: <span className="text-muted">{selectedProyecto.proyectoabreviatura}</span></p>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-6">
                                                                <p>Fecha Inicio: <span className="text-muted">{selectedProyecto.fechainicio}</span></p>
                                                                </div>
                                                                <div className="col-6">
                                                                <p>Fecha Finalización: <span className="text-muted">{selectedProyecto.fechafinalizacion || 'Sin Datos'}</span></p>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <p>Productores: <span className="text-muted">{selectedProyecto.productoressn === 1 ? 'Si' : 'No'}</span></p>
                                                            <hr />
                                                            <p>Descripción: <span className="text-muted">{selectedProyecto.proyectodescripcion}</span></p>
                                                            <p>Activo: <span className="text-muted">{selectedProyecto.activosn === 1 ? 'Si' : 'No'}</span></p>
                                                            

                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                            <button onClick={closeVerModal} className="btn btn-secondary mt-3">Cerrar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>    
                        </>
    )
}

export default Index