import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import Modal from 'react-modal';
import './../../../css/app.css';
Modal.setAppElement('#app');

const Create = ({ auth }) => {

    const initialValues = {
        proyectoid: "",
        sn_mail_notificacion: false,
        mail_notificacion: "",
        sn_movil_notificacion: false,
        movil_notificacion: "",
        sn_activo: true,
    }

    const { data, errors, setData, post } = useForm(initialValues)

    const submit = (e) => {
        e.preventDefault();
        post(route('proyectocnfgnotificacion.store'))
        console.log(data);
    }

    const handleMailCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        setData('sn_mail_notificacion', isChecked);
        if (!isChecked) {
            setData('mail_notificacion', '');
        }
    };

    const handleMovilCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        setData('sn_movil_notificacion', isChecked);
        if (!isChecked) {
            setData('movil_notificacion', '');
        }
    };

    const [isProyectoModalOpen, setIsProyectoModalOpen] = useState(false);
    const [proyectoSearchQuery, setProyectoSearchQuery] = useState('');
    const [proyectoSearchResults, setProyectoSearchResults] = useState([]);
    const [proyectoCurrentPage, setProyectoCurrentPage] = useState(1);
    const [proyectoLastPage, setProyectoLastPage] = useState(1);
    const [nombreProyecto, setNombreProyecto] = useState('');

    const openProyectoModal = () => {
        setIsProyectoModalOpen(true);
    };

    const closeModal = () => {
        setIsProyectoModalOpen(false);
        setProyectoSearchResults([]);
        setProyectoSearchQuery('');
    };

    const fetchProyectoSearchResults = async (page = 1) => {
        try {
            const response = await fetch(`/configuracion/proyectos/search-proyecto?query=${proyectoSearchQuery}&page=${page}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProyectoSearchResults(data.data);
            setProyectoCurrentPage(data.current_page);
            setProyectoLastPage(data.last_page);
        } catch (error) {
            console.error('Error fetching project search results:', error);
        }
    };

    const handleProyectoSearchChange = (e) => {
        setProyectoSearchQuery(e.target.value);
        fetchProyectoSearchResults(); // Realiza la búsqueda automáticamente
    };

    const handleSelectProyecto = (proyecto) => {
        setData('proyectoid', proyecto.id); // Actualiza el campo del formulario
        setNombreProyecto(proyecto.proyectonombre);
        closeModal(); // Cierra el modal
    };

    return (
        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className=' d-flex justify-content-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Configuración</h2>
                    <a href={route('proyectocnfgnotificacion.index')}>
                        <button className='btn btn-primary'>Configuraciones</button>
                    </a>
                </div>
            }
        >
            <Head title="Dashboard" />
            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="mb-3">Nueva Notificación</h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={submit}>
                                                <div className="col-md-6">
                                                    <label htmlFor="proyectoid" className="form-label">Proyecto</label>
                                                    <div className="input-group">
                                                        <input
                                                            id="proyectoid"
                                                            type="text"
                                                            name="proyectoid"
                                                            value={nombreProyecto}
                                                            className="form-control"
                                                            readOnly // El campo es de solo lectura
                                                        />
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-secondary"
                                                            onClick={openProyectoModal}
                                                        >
                                                            Buscar
                                                        </button>
                                                    </div>
                                                    {errors.proyectoid && <div className="text-danger mt-1">{errors.proyectoid}</div>}
                                                </div>
                                                <hr></hr>
                                                <div className='mb-3 mt-4'>
                                                    <label htmlFor="sn_mail_notificacion" className='form-label'>Notificación Email</label>

                                                    <input
                                                        id="sn_mail_notificacion"
                                                        type="checkbox"
                                                        name="sn_mail_notificacion"
                                                        checked={data.sn_mail_notificacion}
                                                        className="form-check-input mx-2"
                                                        onChange={handleMailCheckboxChange}
                                                    />

                                                    <InputError message={errors.sn_mail_notificacion} className="mt-2" />
                                                </div>
                                                <div className='mb-3'>
                                                    <label htmlFor="mail_notificacion" className='form-label'>Email</label>

                                                    <input
                                                        id="mail_notificacion"
                                                        type="text"
                                                        name="mail_notificacion"
                                                        value={data.mail_notificacion}
                                                        className="form-control"
                                                        onChange={(e) => setData('mail_notificacion', e.target.value)}
                                                        disabled={!data.sn_mail_notificacion}
                                                    />

                                                    <InputError message={errors.mail_notificacion} className="mt-2" />
                                                </div>
                                                <div className='mb-3'>
                                                    <label htmlFor="sn_movil_notificacion" className='form-label'>Notificación Movil</label>

                                                    <input
                                                        id="sn_movil_notificacion"
                                                        type="checkbox"
                                                        name="sn_movil_notificacion"
                                                        checked={data.sn_movil_notificacion}
                                                        className="form-check-input mx-2"
                                                        onChange={handleMovilCheckboxChange}
                                                    />

                                                    <InputError message={errors.sn_movil_notificacion} className="mt-2" />
                                                </div>
                                                <div className='mb-3'>
                                                    <label htmlFor="movil_notificacion" className='form-label'>Movil</label>

                                                    <input
                                                        id="movil_notificacion"
                                                        type="text"
                                                        name="movil_notificacion"
                                                        value={data.movil_notificacion}
                                                        className="form-control"
                                                        onChange={(e) => setData('movil_notificacion', e.target.value)}
                                                        disabled={!data.sn_movil_notificacion}
                                                    />

                                                    <InputError message={errors.movil_notificacion} className="mt-2" />
                                                </div>

                                                <div className='mb-3'>
                                                    <label htmlFor="sn_activo" className='form-label'>Activo</label>

                                                    <input
                                                        id="sn_activo"
                                                        type="checkbox"
                                                        name="sn_activo"
                                                        checked={data.sn_activo}
                                                        className="form-check-input mx-2"
                                                        onChange={(e) => setData('sn_activo', e.target.checked)}
                                                    />

                                                    <InputError message={errors.sn_activo} className="mt-2" />
                                                </div>

                                                <div className="mb-3">
                                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        <Modal
                            isOpen={isProyectoModalOpen}
                            onRequestClose={closeModal}
                            contentLabel={"Buscar Proyecto"}
                            style={{
                                content: {
                                    backgroundColor: '#ffffff',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    padding: '20px',
                                    maxWidth: '600px',
                                    maxHeight:"70vh",
                                    margin: '0 auto',
                                }
                            }}
                            overlayClassName="modal-overlay"
                        >
                            <div className="modal-dialog modal-lg h-100">
                                <div className="modal-content h-100">
                                    <div className="modal-header d-flex justify-content-between mb-5">
                                        <h5 className="modal-title">
                                            Buscar Proyecto
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            onClick={closeModal}
                                            aria-label="Cerrar"
                                        ></button>
                                    </div>


                                    <div className="modal-body h-100 d-flex flex-column">

                                        <div className='mb-auto'>
                                        <div className="input-group mb-5">
                                            <input
                                                type="text"
                                                value={proyectoSearchQuery}
                                                onChange={(e) => {setProyectoSearchQuery(e.target.value)}}
                                                placeholder={"Buscar por nombre de proyecto"}
                                                className="form-control"
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={() => {fetchProyectoSearchResults()}}
                                            >
                                                Buscar
                                            </button>
                                        </div>
                                        <table className="table table-hover" style={{ cursor: 'pointer' }}>
                                            <thead>
                                                <tr>
                                                    <th>Nombre</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {(proyectoSearchResults).length > 0 ? (
                                                    (proyectoSearchResults).map((item) => (
                                                        <tr key={item.id}>
                                                            <td
                                                                className='table-hover'
                                                                onClick={() => {handleSelectProyecto(item)}}
                                                            >
                                                                {item.proyectonombre}
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="2" className="text-center">No se encontraron resultados</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                        </div>
                                        
                                        {(proyectoSearchResults).length > 0 ? (
                                            <div className="d-flex justify-content-center gap-2 mt-auto">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    onClick={() => {fetchProyectoSearchResults(proyectoCurrentPage - 1)}}
                                                    disabled={proyectoCurrentPage === 1}
                                                >
                                                    <span aria-hidden="true">&laquo;</span>
                                                </button>
                                                <span>
                                                    {proyectoCurrentPage} de{" "} {proyectoLastPage}
                                                </span>
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    onClick={() => {fetchProyectoSearchResults(proyectoCurrentPage + 1)}}
                                                    disabled={proyectoCurrentPage === proyectoLastPage}
                                                >
                                                    <span aria-hidden="true">&raquo;</span>
                                                </button>
                                            </div>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Modal>
        </AuthenticatedLayout>
    )
}

export default Create;