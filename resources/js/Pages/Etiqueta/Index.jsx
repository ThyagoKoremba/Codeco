import { React, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import './../../../css/app.css';
import Modal from 'react-modal';
Modal.setAppElement('#app');


const Index = ({ auth, etiquetas }) => {

    const [isVerModalOpen, setIsVerModalOpen] = useState(false);
    const [selectedEtiqueta, setSelectedEtiqueta] = useState(null);

    const openVerModal = (etiqueta) => {
        setSelectedEtiqueta(etiqueta);
        setIsVerModalOpen(true);
    }

    const closeVerModal = () => {
        setIsVerModalOpen(false);
        setSelectedEtiqueta(null);
    }

    return (

        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className='d-flex justify-content-between'>
                    <h2 className="">Etiquetas</h2>
                    <a href={route('etiqueta.create')}>
                        <button className='btn btn-primary'>Nueva Etiqueta</button>
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
                                <th scope="col">
                                    ID
                                </th>
                                <th scope="col">
                                    Nombre
                                </th>
                                <th scope="col">
                                    Abreviatura
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
                            {etiquetas?.map((etiqueta) => (
                                <tr key={etiqueta.id} className="">
                                    <th scope="row" className="px-6 py-4 ">
                                        {etiqueta.id}
                                    </th>
                                    <td scope="row" className="px-6 py-4 ">
                                        {etiqueta.etiquetanombre}
                                    </td>
                                    <td className="px-6 py-4">
                                        {etiqueta.etiquetaabreviatura}
                                    </td>
                                    <td className="px-6 py-4">
                                        {etiqueta.activosn === 1 ? 'Si' : 'No'}
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

                                                <a className="dropdown-item" href={route('etiqueta.edit', [etiqueta])} >Editar</a>
                                                <a className='dropdown-item' onClick={() => openVerModal(etiqueta)}>Ver</a>
                                                <a className="dropdown-item" href={route('etiqueta.cambiarEstado', [etiqueta])}>
                                                    {etiqueta.activosn === 1 ? 'Desactivar' : 'Activar'}
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
                                    maxHeight: "65vh",
                                    margin: '0 auto',
                                }
                            }}
                            overlayClassName="modal-overlay"
                        >
                            <div className="modal-dialog modal-lg h-100">
                                <div className="modal-content h-100">
                                    <div className="modal-header d-flex justify-content-between">
                                        <h5 className="modal-title mb-3">
                                            {selectedEtiqueta && (
                                                <p>Ver Etiqueta - {selectedEtiqueta.id}</p>
            
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
                                                    {selectedEtiqueta && (
                                                        <>
                                                            <p>ID: <span className="text-muted">{selectedEtiqueta.id}</span></p>
                                                            <div className="row">
                                                            <p className="col-6">Nombre: <span className="text-muted">{selectedEtiqueta.etiquetanombre}</span></p>
                                                            <p className="col-6">Abreviatura: <span className="text-muted">{selectedEtiqueta.etiquetaabreviatura}</span></p>
                                                            </div>
                                                            <hr />   
                                                            <p>Predeterminado: <span className="text-muted">{selectedEtiqueta.isdefaultvalue === 1 ? 'Si' : 'No'}</span></p> 
                                                            <hr />        
                                                            <p>Activo: <span className="text-muted">{selectedEtiqueta.activosn === 1 ? 'Si' : 'No'}</span></p>
            
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