import { React, useState } from 'react'
import { Head } from '@inertiajs/react';
import './../../../css/app.css';
import Modal from 'react-modal';
Modal.setAppElement('#app');


const Index = ({ auth, categorias }) => {

    const [isVerModalOpen, setIsVerModalOpen] = useState(false);
    const [selectedCategoria, setSelectedCategoria] = useState(null);

    const openVerModal = (categoria) => {
        setSelectedCategoria(categoria);
        setIsVerModalOpen(true);
    }

    const closeVerModal = () => {
        setIsVerModalOpen(false);
        setSelectedCategoria(null);
    }

    return (

        <        >
            <div className='d-flex justify-content-between my-5'>
                <h2 className="">Categorias</h2>
                <a href={route('categoria.create')}>
                    <button className='btn btn-primary'>Nueva Categorias</button>
                </a>
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
                                    Descripción
                                </th>
                                <th scope="col">
                                    Abreviatura
                                </th>
                                <th scope="col">
                                    Registro en Sistema
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
                            {categorias?.map((categoria) => (
                                <tr key={categoria.id} className="">
                                    <th scope="row" className="px-6 py-4 ">
                                        {categoria.id}
                                    </th>
                                    <td scope="row" className="px-6 py-4 ">
                                        {categoria.descripcion}
                                    </td>
                                    <td className="px-6 py-4">
                                        {categoria.abreviatura}
                                    </td>
                                    <td className="px-6 py-4">
                                        {categoria.sn_registrosistema === 1 ? 'Si' : 'No'}
                                    </td>
                                    <td className="px-6 py-4">
                                        {categoria.sn_activo === 1 ? 'Si' : 'No'}
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

                                                <a className="dropdown-item" href={route('categoria.edit', [categoria])} >Editar</a>
                                                <a className='dropdown-item' onClick={() => openVerModal(categoria)}>Ver</a>
                                                <a className="dropdown-item" href={route('categoria.cambiarEstado', [categoria])}>
                                                    {categoria.sn_activo === 1 ? 'Desactivar' : 'Activar'}
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
                        maxHeight: '70vh'
                    }
                }}
                overlayClassName="modal-overlay"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content h-100">
                        <div className="modal-header d-flex justify-content-between">
                            <h5 className="modal-title mb-3">
                                {selectedCategoria && (
                                    <p>Ver Categoria - {selectedCategoria.id}</p>

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
                                        {selectedCategoria && (
                                            <>
                                                <p>ID: <span className="text-muted">{selectedCategoria.id}</span></p>
                                                <div className="row">
                                                    <p className="col-6">Descripción: <span className="text-muted">{selectedCategoria.descripcion}</span></p>
                                                    <p className="col-6">Abreviatura: <span className="text-muted">{selectedCategoria.abreviatura}</span></p>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <p className="col-6">Registro en Sistema: <span className="text-muted">{selectedCategoria.sn_registrosistema == 1 ? "Si" : "No"}</span></p>
                                                </div>
                                                <hr />
                                                <p>Activo: <span className="text-muted">{selectedCategoria.sn_activo === 1 ? 'Si' : 'No'}</span></p>
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