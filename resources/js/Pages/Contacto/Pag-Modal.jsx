import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Modal from 'react-modal';
import { router } from '@inertiajs/react';


Modal.setAppElement('#app'); 

const CreateContact = ({ auth, fisicojuridico, pais, identidades, condicionestributarias }) => {
   

    
    const { data, errors, setData, post, reset } = useForm({
        id_fisicojuridico: '',
        nombrefantasia: '',
        nombresegundo: '',
        apellidorazonsocial: '',
        foto: null,
        id_pais: '',
        id_personal: '',
        id_identidadtributaria: '',
        car: '',
        observacion: '',
        id_condiciontributaria: '',
        telefonoMovil: '',
        email: '',
        codigoPostal: '',
        id_personal_dato: '',
        id_identidadtributaria_dato: '',
    });

    const [nombre, setNombre] = useState('Nombre');
    const [apellido, setApellido] = useState('Apellido');
    const [segundo, setSegundo] = useState('1');
    const [mascaraTributaria, setMascaraTributaria] = useState('');

    // Estado para el modal de búsqueda de países
    const [isPaisModalOpen, setIsPaisModalOpen] = useState(false);
    const [paisSearchQuery, setPaisSearchQuery] = useState('');
    const [paisSearchResults, setPaisSearchResults] = useState([]);
    const [paisCurrentPage, setPaisCurrentPage] = useState(1);
    const [paisLastPage, setPaisLastPage] = useState(1);

    // Función para abrir el modal de búsqueda de países
    const openPaisModal = () => {
        setIsPaisModalOpen(true);
        fetchPaisSearchResults(); // Cargar resultados iniciales
    };

    // Función para cerrar el modal de búsqueda de países
    const closePaisModal = () => {
        setIsPaisModalOpen(false);
    };

    // Función para realizar la búsqueda de países
    const fetchPaisSearchResults = async (page = 1) => {
        try {
            const response = await fetch(`/contacto/search-paises?query=${paisSearchQuery}&page=${page}`);
            const data = await response.json();
            setPaisSearchResults(data.data);
            setPaisCurrentPage(data.current_page);
            setPaisLastPage(data.last_page);
        } catch (error) {
            console.error('Error fetching country search results:', error);
        }
    };

    // Función para manejar cambios en el campo de búsqueda de países
    const handlePaisSearchChange = (e) => {
        setPaisSearchQuery(e.target.value);
        fetchPaisSearchResults(); // Realiza la búsqueda automáticamente
    };

    // Función para seleccionar un país
    const handleSelectPais = (pais) => {
        setData('id_pais', pais.id); // Actualiza el campo del formulario
        closePaisModal(); // Cierra el modal
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('contacto.store'));
    };

    debugger
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="font-weight-bold">Crear Contacto</h2>
                    <Link href={route('contacto.index')} className="btn btn-primary">Contactos</Link>
                </div>
            }
        >
            <Head title="Crear Contacto" />

            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <form onSubmit={submit} className="row g-3">
                                {/* Información Personal */}
                                <h4 className="mb-3">Información Personal</h4>

                                {/* Campo de País con botón de búsqueda */}
                                <div className="col-md-6">
                                    <label htmlFor="pais" className="form-label">País</label>
                                    <div className="input-group">
                                        <input
                                            id="pais"
                                            type="text"
                                            name="pais"
                                            value={data.id_pais}
                                            className="form-control"
                                            readOnly // El campo es de solo lectura
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={openPaisModal}
                                        >
                                            Buscar
                                        </button>
                                    </div>
                                    {errors.id_pais && <div className="text-danger mt-1">{errors.id_pais}</div>}
                                </div>

                                {/* Resto del formulario */}
                                {/* ... */}

                                {/* Botones */}
                                <div className="col-12 d-flex justify-content-between mt-4">
                                    <button type="submit" className="btn btn-success">Guardar</button>
                                    <button type="button" className="btn btn-secondary" onClick={() => reset()}>Limpiar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de búsqueda de países */}
            <Modal
                isOpen={isPaisModalOpen}
                onRequestClose={closePaisModal}
                contentLabel="Buscar País"
                className="modal-dialog modal-lg"
                overlayClassName="modal-overlay"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Buscar País</h5>
                        <button type="button" className="btn-close" onClick={closePaisModal}></button>
                    </div>
                    <div className="modal-body">
                        <input
                            type="text"
                            value={paisSearchQuery}
                            onChange={handlePaisSearchChange}
                            placeholder="Buscar por nombre de país"
                            className="form-control mb-3"
                        />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paisSearchResults.map((pais) => (
                                    <tr key={pais.id}>
                                        <td>{pais.id}</td>
                                        <td>{pais.nombre}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm"
                                                onClick={() => handleSelectPais(pais)}
                                            >
                                                Seleccionar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-between">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => fetchPaisSearchResults(paisCurrentPage - 1)}
                                disabled={paisCurrentPage === 1}
                            >
                                Anterior
                            </button>
                            <span>Página {paisCurrentPage} de {paisLastPage}</span>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => fetchPaisSearchResults(paisCurrentPage + 1)}
                                disabled={paisCurrentPage === paisLastPage}
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
};

export default CreateContact;