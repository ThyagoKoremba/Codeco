import { React, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import './../../../css/app.css';
import Modal from 'react-modal';
import CreatePerfil from './Create';
import EditPerfil from './Edit';
Modal.setAppElement('#app');


const Vista = ({ auth, perfiles }) => {


    const [isVerModalOpen, setIsVerModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openVerModal = (item) => {
        setSelectedItem(item);
        setIsVerModalOpen(true);
    }

    const closeVerModal = () => {
        setIsVerModalOpen(false);
        setSelectedItem(null);
    }

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    
    const openEditModal = (perfil) => {
        setSelectedItem(perfil); // Establece el menú seleccionado
        setIsEditModalOpen(true); // Abre el modal de edición
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setSelectedItem(null); // Limpia el menú seleccionado
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    //Modal Crear
    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (

        <DashboardLayout>
   
                <div className='d-flex justify-content-between'>
                    <h2 className="">Perfiles</h2>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={openModal}
                    >
                        Agregar Perfil
                    </button>
                </div>

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
                            {perfiles?.map((perfil) => (
                                <tr key={perfil.id} className="">
                                    <th scope="row" className="px-6 py-4 ">
                                        {perfil.id}
                                    </th>
                                    <td scope="row" className="px-6 py-4 ">
                                        {perfil.nombre}
                                    </td>
                                    <td className="px-6 py-4">
                                        {perfil.abreviatura}
                                    </td>
                                    <td className="px-6 py-4">
                                        {perfil.sn_activo === 1 ? 'Si' : 'No'}
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

                                            <a
                                                    className="dropdown-item"
                                                    onClick={() =>
                                                        openEditModal(perfil)
                                                    }
                                                >
                                                    Editar
                                                </a>
                                                <a className='dropdown-item' onClick={() => openVerModal(perfil)}>Ver</a>
                                                <a className="dropdown-item" href={route('perfil.cambiarEstado', [perfil])}>
                                                    {perfil.sn_activo === 1 ? 'Desactivar' : 'Activar'}
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
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel={"Crear"}
                style={{
                    content: {
                        backgroundColor: '#ffffff',
                        borderRadius: '10px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        maxWidth: '600px',
                        margin: '0 auto',
                        width: 'auto',
                        overflow: 'auto',
                        inset: 'unset',
                    },
                }}
                overlayClassName="modal-overlay"
            >
                <div className="modal-header d-flex justify-content-between">
                    <h3 className="modal-title">Nuevo Perfil</h3>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={closeModal}
                        aria-label="Cerrar"
                    ></button>
                </div>

                <div className="mb-auto">
                    <CreatePerfil closeModal={closeModal}/>
                </div>
            </Modal>
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
                        width: 'auto',
                        overflow: 'auto',
                        inset: 'unset',
                    }
                }}
                overlayClassName="modal-overlay"
            >
                <div className="modal-dialog modal-lg h-100">
                    <div className="modal-content h-100">
                        <div className="modal-header d-flex justify-content-between">
                            <h5 className="modal-title mb-3">
                                {selectedItem && (
                                    <span>Ver Menú - {selectedItem.id}</span>
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
                                        {selectedItem && (
                                            <>
                                                <div className="row">
                                                    <p className="col-6">Nombre: <span className="text-muted">{selectedItem.nombre}</span></p>
                                                    <p className="col-6">Abreviatura: <span className="text-muted">{selectedItem.abreviatura}</span></p>
                                                    <p className="col-6">Información: <span className="text-muted">{selectedItem.informacion}</span></p>

                                                </div>
                                                <hr />
                                                <p>Activo: <span className="text-muted">{selectedItem.sn_activo === 1 ? 'Si' : 'No'}</span></p>
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
            <Modal
                isOpen={isEditModalOpen}
                onRequestClose={closeEditModal}
                contentLabel={'Editar'}
                style={{
                    content: {
                        backgroundColor: '#ffffff',
                        borderRadius: '10px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        maxWidth: '600px',
                        margin: '0 auto',
                        width: 'auto',
                        overflow: 'auto',
                        inset:'unset',
                    },
                }}
                overlayClassName="modal-overlay"
            >
                <div className="modal-header d-flex justify-content-between">
                    <h3 className="modal-title">Editar Perfil</h3>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={closeEditModal}
                        aria-label="Cerrar"
                    ></button>
                </div>

                <div className="mb-auto">
                    <EditPerfil
                        closeModal={closeEditModal}
                        perfil={selectedItem}
                    />
                </div>
            </Modal>
            </DashboardLayout>
   
    )
}

export default Vista
