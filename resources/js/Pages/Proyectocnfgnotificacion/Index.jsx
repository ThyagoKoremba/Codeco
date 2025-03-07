import {React, useState} from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import './../../../css/app.css';
import Modal from 'react-modal';
Modal.setAppElement('#app');



const Index = ({ auth, proyectosnotif, proyectos }) => {

    const [isVerModalOpen, setIsVerModalOpen] = useState(false);
    const [selectedProyectoNotif, setSelectedProyectoNotif] = useState(null);

    const openVerModal = (proyectonotif) => {
        setSelectedProyectoNotif(proyectonotif);
        setIsVerModalOpen(true);
    }

    const closeVerModal = () => {
        setIsVerModalOpen(false);
        setSelectedProyectoNotif(null);
    }

    return (

        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className='d-flex justify-content-between'>
                    <h2 className="">Configuración Notificación</h2>
                    <a href={route('proyectocnfgnotificacion.create')}>
                        <button className='btn btn-primary'>Nueva Configuración</button>
                    </a>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="tabla-index">
                <div className="table-responsive overflow-visible">
                    <table className="table table-striped table-hover align-middle">
                        <thead className="sticky-top">
                            <tr>
                                <th scope='col'>
                                    ID
                                </th>
                                <th scope="col">
                                    Proyecto
                                </th>
                                <th scope="col">
                                    Movil
                                </th>
                                <th scope="col">
                                    Email
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
                            {proyectosnotif?.map((proyectonotif) => (
                                <tr key={proyectonotif.id} className="">
                                    <th scope='row' className='px6 py-4'>
                                        {proyectonotif.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {proyectos?.map((proyecto) => {
                                            return (
                                                <div key={proyecto.id}>
                                                    {proyecto.id === proyectonotif.proyectoid ? proyecto.proyectonombre : null}
                                                </div>
                                            );
                                        })}
                                    </td>
                                    <td className="px-6 py-4">
                                        {proyectonotif.movil_notificacion || 'Sin Datos'}
                                    </td>
                                    <td className="px-6 py-4">
                                        {proyectonotif.mail_notificacion || 'Sin Datos'}
                                    </td>
                                    <td className="px-6 py-4">
                                        {proyectonotif.sn_activo === 1 ? 'Si' : 'No'}
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

                                                <a className="dropdown-item" href={route('proyectocnfgnotificacion.edit', [proyectonotif])} >Editar</a>
                                                <a className='dropdown-item' onClick={() => openVerModal(proyectonotif)}>Ver</a>
                                                <a className="dropdown-item" href={route('proyectocnfgnotificacion.cambiarEstado', [proyectonotif])}>
                                                    {proyectonotif.sn_activo === 1 ? 'Desactivar' : 'Activar'}
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
                        margin: '0 auto',
                        maxHeight: '80vh'
                    }
                }}
                overlayClassName="modal-overlay"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content h-100">
                        <div className="modal-header d-flex justify-content-between">
                            <h5 className="modal-title mb-3">
                            {selectedProyectoNotif && (
                                    <p>Ver Configuración de Notificación - {selectedProyectoNotif.id}</p>

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
                                    {selectedProyectoNotif && (
                                            <>
                                                <p>ID: <span className="text-muted">{selectedProyectoNotif.id}</span></p>
                                                <p>Proyecto: <span className="text-muted">
                                                    {proyectos?.map((proyecto) => {
                                                        return (
                                                            <span key={proyecto.id}>
                                                                {proyecto.id === selectedProyectoNotif.proyectoid ? proyecto.proyectonombre : null}
                                                            </span>
                                                        );
                                                    })}
                                                </span></p>
                                                <hr />
                                                <div className="row">
                                                <p className="col-6">Notif. Movil: <span className="text-muted">{selectedProyectoNotif.sn_movil_notificacion === 1 ? 'Si' : 'No'}</span></p>
                                                <p className="col-6">Notif. Email: <span className="text-muted">{selectedProyectoNotif.sn_mail_notificacion === 1 ? 'Si' : 'No'}</span></p>
                                                <p className="col-6">Movil Notificación: <span className="text-muted">{selectedProyectoNotif.movil_notificacion || 'Sin Datos'}</span></p>
                                                <p className="col-6">Email Notificación: <span className="text-muted">{selectedProyectoNotif.mail_notificacion || 'Sin Datos'}</span></p>
                                                </div>
                                                <hr />
                                                <p>Activo: <span className="text-muted">{selectedProyectoNotif.sn_activo === 1 ? 'Si' : 'No'}</span></p>
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
        </AuthenticatedLayout >
    )
}

export default Index