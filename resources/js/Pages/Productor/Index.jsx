import { React, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import './../../../css/app.css';
import Modal from 'react-modal';
Modal.setAppElement('#app');



const Index = ({ auth, productores }) => {

    const [isVerModalOpen, setIsVerModalOpen] = useState(false);
    const [selectedProductor, setSelectedProductor] = useState(null);

    const openVerModal = (productor) => {
        setSelectedProductor(productor);
        setIsVerModalOpen(true);
    }

    const closeVerModal = () => {
        setIsVerModalOpen(false);
        setSelectedProductor(null);
    }

    return (

        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className='d-flex justify-content-between'>
                    <h2 className="">Productor</h2>
                    <a href={route('productor.create')}>
                        <button className='btn btn-primary'>Nuevo Productor</button>
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
                                    Nombres y Apellido
                                </th>
                                <th scope="col">
                                    Email
                                </th>
                                <th scope="col">
                                    Telefono
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
                            {productores?.map((productor) => (
                                <tr key={productor.id} className="">
                                    <th scope='row' className='px6 py-4'>
                                        {productor.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {productor.nombres + ' ' + productor.apellido}
                                    </td>
                                    <td className="px-6 py-4">
                                        {productor.mail}
                                    </td>
                                    <td className="px-6 py-4">
                                        {productor.telefono}
                                    </td>
                                    <td className="px-6 py-4">
                                        {productor.activosn === 1 ? 'Si' : 'No'}
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

                                                <a className="dropdown-item" href={route('productor.edit', [productor])} >Editar</a>
                                                <a className='dropdown-item' onClick={() => openVerModal(productor)}>Ver</a>
                                                <a className="dropdown-item" href={route('productor.cambiarEstado', [productor])}>
                                                    {productor.activosn === 1 ? 'Desactivar' : 'Activar'}
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
                        maxHeight: "76vh",
                        margin: '0 auto',
                    }
                }}
                overlayClassName="modal-overlay"
            >
                <div className="modal-dialog modal-lg h-100">
                    <div className="modal-content h-100">
                        <div className="modal-header d-flex justify-content-between">
                            <h5 className="modal-title mb-3">
                                {selectedProductor && (
                                    <p>Ver Productor - {selectedProductor.id}</p>

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
                                        {selectedProductor && (
                                            <>
                                                <p>ID: <span className="text-muted">{selectedProductor.id}</span></p>
                                                <div className="row">
                                                <p className="col-6">Nombre: <span className="text-muted">{selectedProductor.nombres}</span></p>
                                                <p className="col-6">Apellido: <span className="text-muted">{selectedProductor.apellido}</span></p>
                                                <p className="col-6">DNI / CUIT: <span className="text-muted">{selectedProductor.dnicuit}</span></p>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                <p className="col-6">Email: <span className="text-muted">{selectedProductor.mail}</span></p>
                                                <p className="col-6">Teléfono: <span className="text-muted">{selectedProductor.telefono}</span></p>
                                                </div>
                                                <hr />
                                                <p>Activo: <span className="text-muted">{selectedProductor.activosn === 1 ? 'Si' : 'No'}</span></p>

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