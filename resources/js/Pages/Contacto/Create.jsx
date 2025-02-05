import React, { useState } from 'react'; // Asegúrate de importar useState desde React
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Modal from 'react-modal';
import './styles.css';
Modal.setAppElement('#app');

const CreateContact = ({ auth, fisicojuridico, identidades, condicionestributarias }) => {



    const initialValues = {
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
        telefono_sn_movil: '',
        telefono_numero: '',
        email: '',
        codigoPostal: '',
        id_personal_dato: '',
        id_identidadtributaria_dato: '',
        id_region: '',
        id_region: '',


    };

    const { data, errors, setData, post, reset } = useForm(initialValues);

    // Definir los estados nombre, apellido y segundo
    const [nombre, setNombre] = useState('Nombre');
    const [apellido, setApellido] = useState('Apellido');
    const [segundo, setSegundo] = useState('1');
    const [mascaraTributaria, setMascaraTributaria] = useState('');

    const submit = (e) => {
        e.preventDefault();
        post(route('contacto.store'));
    };

    // Estado para el modal de búsqueda de países
    const [isPaisModalOpen, setIsPaisModalOpen] = useState(false);
    const [paisSearchQuery, setPaisSearchQuery] = useState('');
    const [paisSearchResults, setPaisSearchResults] = useState([]);
    const [paisCurrentPage, setPaisCurrentPage] = useState(1);
    const [paisLastPage, setPaisLastPage] = useState(1);
    const [nombrePais, setNombrePais] = useState(''); // Estado para el nombre del país

    // Estado para el modal de búsqueda de regiones
    const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
    const [regionSearchQuery, setRegionSearchQuery] = useState('');
    const [regionSearchResults, setRegionSearchResults] = useState([]);
    const [regionCurrentPage, setRegionCurrentPage] = useState(1);
    const [regionLastPage, setRegionLastPage] = useState(1);
    const [nombreRegion, setNombreRegion] = useState(''); // Estado para el nombre de la región

    // Función para abrir el modal de búsqueda de países
    const openPaisModal = () => {
        setIsPaisModalOpen(true);
    };



    // Función para abrir el modal de búsqueda de regiones
    const openRegionModal = () => {
        setIsRegionModalOpen(true);

    };

    // Función para cerrar el modal de búsqueda de regiones
    const closeModal = () => {
        setIsRegionModalOpen(false);
        setRegionSearchResults([]); // Limpia los resultados de la búsqueda
        setRegionSearchQuery(''); // Limpia los resultados de la búsqueda
        setIsPaisModalOpen(false);
        setPaisSearchResults([]);
        setPaisSearchQuery(''); // Limpia los resultados de la búsqueda
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

    // Función para realizar la búsqueda de regiones
    const fetchRegionSearchResults = async (page = 1) => {
        try {
            const response = await fetch(`/contacto/search-regiones?query=${regionSearchQuery}&page=${page}`);
            const data = await response.json();

            setRegionSearchResults(data.data);
            setRegionCurrentPage(data.current_page);
            setRegionLastPage(data.last_page);
        } catch (error) {
            console.error('Error fetching region search results:', error);
        }
    };

    // Función para manejar cambios en el campo de búsqueda de países
    const handlePaisSearchChange = (e) => {
        setPaisSearchQuery(e.target.value);
        fetchPaisSearchResults(); // Realiza la búsqueda automáticamente
    };

    // Función para manejar cambios en el campo de búsqueda de regiones
    const handleRegionSearchChange = (e) => {
        setRegionSearchQuery(e.target.value);
        fetchRegionSearchResults(); // Realiza la búsqueda automáticamente
    };

    // Función para seleccionar un país
    const handleSelectPais = (pais) => {
        data.id_pais = pais.id; // Actualiza el campo del formulario
        setNombrePais(pais.nombre);
        closeModal(); // Cierra el modal
    };

    // Función para seleccionar una región
    const handleSelectRegion = (region) => {
        data.id_region = region.id; // Actualiza el campo del formulario
        setNombreRegion(region.descripcion);
        closeModal(); // Cierra el modal
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
                                {/*  Información Personal  */}
                                <h4 className="mb-3">Información Contacto</h4>

                                <div className="col-md-6">
                                    <label htmlFor="persona" className="form-label">Persona</label>
                                    <select
                                        id="persona"
                                        name="persona"
                                        value={data.id_fisicojuridico}
                                        onChange={(e) => {
                                            const selectedId = e.target.value;
                                            setData('id_fisicojuridico', selectedId);

                                            const selectedPersona = fisicojuridico.find(persona => persona.id == selectedId);
                                          console.log(selectedPersona);
                                            if (selectedPersona) {
                                                setNombre(selectedPersona.texto_nombre);
                                                setApellido(selectedPersona.texto_apellido);
                                                setSegundo(selectedPersona.sn_segundonombre);  // Asigna el valor de segundo nombre
                                                // Otros campos si son necesarios
                                            }
                                        }}
                                        className="form-select"
                                    >
                                        <option value="">Seleccionar</option>
                                        {fisicojuridico.slice(1).map((condicion) => (
                                            <option key={condicion.id} value={condicion.id}>
                                                {condicion.descripcion}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.id_fisicojuridico && <div className="text-danger mt-1">{errors.id_fisicojuridico}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="apellido" className="form-label">{apellido}</label>
                                    <input
                                        id="apellido"
                                        type="text"
                                        name="apellido"
                                        value={data.apellidorazonsocial}
                                        className="form-control"
                                        onChange={(e) => setData('apellidorazonsocial', e.target.value)}
                                    />
                                    {errors.apellido && <div className="text-danger mt-1">{errors.apellido}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="nombre" className="form-label">{nombre}</label>
                                    <input
                                        id="nombre"
                                        type="text"
                                        name="nombre"
                                        value={data.nombrefantasia}
                                        className="form-control"
                                        onChange={(e) => setData('nombrefantasia', e.target.value)}
                                    />
                                    {errors.nombre && <div className="text-danger mt-1">{errors.nombre}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="segundoNombre" className="form-label">Segundo Nombre</label>
                                    <input
                                        id="segundoNombre"
                                        type="text"
                                        name="segundoNombre"
                                        value={data.nombresegundo}
                                        className="form-control"
                                        disabled={segundo === 0}  // Deshabilita si "segundo" es igual a "0"
                                        onChange={(e) => setData('nombresegundo', e.target.value)}
                                    />
                                    {errors.segundoNombre && <div className="text-danger mt-1">{errors.segundoNombre}</div>}
                                </div>
                              

                                <div className="col-md-6">
                                    <label htmlFor="foto" className="form-label">Foto  </label>
                                    <input
                                        id="foto"
                                        type="file"
                                        name="foto"
                                        className="form-control"
                                        onChange={(e) => setData('foto', e.target.files[0])}
                                    />
                                    {errors.foto && <div className="text-danger mt-1">{errors.foto}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="pais" className="form-label">País</label>
                                    <div className="input-group">
                                        <input
                                            id="pais"
                                            type="text"
                                            name="pais"
                                            value={nombrePais}
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

                                <hr></hr>
                                {/* 
                                Condición Tributaria  */}
                                <h4 className="mt-4 mb-3">Información Tributaria</h4>

                                <div className="col-md-8">
                                    <label htmlFor="condicionTributaria" className="form-label">Condición </label>
                                    <select
                                        id="condicionTributaria"
                                        name="condicionTributaria"
                                        value={data.id_condiciontributaria}
                                        onChange={(e) => setData('id_condiciontributaria', e.target.value)}
                                        className="form-select"
                                    >
                                        <option value="">Seleccionar</option>
                                        {condicionestributarias.map((condicion) => (
                                            <option key={condicion.id} value={condicion.id}>
                                                {condicion.descripcion}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.id_condiciontributaria && <div className="text-danger mt-1">{errors.id_condiciontributaria}</div>}
                                </div>

                               


                                <div className="col-md-6">
                                    <p>El código de acceso rápido es un número rápido e identificatorio para el contacto. Se recomienda usar los dos primeros y los tres últimos dígitos del CUIT. Por ejemplo: 20-12345678-9 = 12789</p>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="valorIdTributaria" className="form-label">Valor</label>
                                    <input
                                        id="valorIdTributaria"
                                        type="text"
                                        maxLength={data.id_identidadtributaria === "3" ? 8 : 11} // Limita a 8 caracteres si el ID es 1
                                        name="valorIdTributaria"
                                        value={data.id_identidadtributaria_dato}
                                        className="form-control"
                                        onChange={(e) => setData('id_identidadtributaria_dato', e.target.value)}
                                        disabled={data.id_identidadtributaria === "1"} // Deshabilita si el ID es 1
                                    />
                                    {errors.id_identidadtributaria_dato && <div className="text-danger mt-1">{errors.id_identidadtributaria_dato}</div>}
                                </div>

                                <hr></hr>
                          
                                <h4 className="mt-4 mb-3">Información Personal</h4>

                                <div className="col-md-6">
                                    <label htmlFor="identidadPersonal" className="form-label">Identidad Personal</label>
                                    <input
                                        id="identidadPersonal"
                                        type="text"
                                        name="identidadPersonal"
                                        value={data.id_personal}
                                        className="form-control"
                                        onChange={(e) => setData('id_personal', e.target.value)}
                                        disabled={data.id_fisicojuridico == '2'} // Deshabilita si el ID es 1
                                    />
                                    {errors.id_personal && <div className="text-danger mt-1">{errors.id_personal}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="valorIdPersona" className="form-label">Valor</label>
                                    <input
                                        id="valorIdPersona"
                                        type="text"
                                        name="valorIdPersona"
                                        value={data.id_personal_dato}
                                        className="form-control"
                                        onChange={(e) => setData('id_personal_dato', e.target.value)}
                                        disabled={data.id_fisicojuridico == '2'} 
                                    />
                                    {errors.id_personal_dato && <div className="text-danger mt-1">{errors.id_personal_dato}</div>}
                                </div>

                               
                                <div className="col-md-6">
                                <p>El código de acceso rápido es un número rápido e identificatorio para el contacto. Se recomienda usar los dos primeros y los tres últimos dígitos del CUIT. Por ejemplo: 20-12345678-9 = 12789</p>
</div>

<div className="col-md-4">
                                    <label htmlFor="codigoAccesoRapido" className="form-label">Código de Acceso Rápido</label>
                                    <input
                                        id="codigoAccesoRapido"
                                        type="text"
                                        name="codigoAccesoRapido"
                                        value={data.car}
                                        className="form-control"
                                        onChange={(e) => setData('car', e.target.value)}
                                    />
                                    {errors.car && <div className="text-danger mt-1">{errors.car}</div>}

                                   
                                </div>
                                <hr />
                                <h4 className="mt-4 mb-3">Domicilio</h4>
                                <div className="col-md-6">
                                    <label htmlFor="provincia" className="form-label">Provincia</label>
                                    <div className="input-group">
                                        <input
                                            id="provincia"
                                            type="text"
                                            name="region"
                                            value={nombreRegion}
                                            className="form-control"
                                            readOnly
                                        // El campo es de solo lectura
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={openRegionModal}
                                        >
                                            Buscar
                                        </button>
                                    </div>
                                    {errors.id_region && <div className="text-danger mt-1">{errors.id_region}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="region" className="form-label">Región</label>
                                    <div className="input-group">
                                        <input
                                            id="region"
                                            type="text"
                                            name="region"
                                            value={nombreRegion}
                                            className="form-control"
                                            readOnly
                                        // El campo es de solo lectura
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={openRegionModal}
                                        >
                                            Buscar
                                        </button>
                                    </div>
                                    {errors.id_region && <div className="text-danger mt-1">{errors.id_region}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="domicilio" className="form-label">Domicilio</label>
                                    <input
                                        id="domicilio"
                                        type="text"
                                        name="domicilio"
                                        value={data.domicilio}
                                        className="form-control"
                                        onChange={(e) => setData('domicilio', e.target.value)}
                                    />
                                    {errors.domicilio && <div className="text-danger mt-1">{errors.domicilio}</div>}
                                </div>

                                

                                <div className="col-md-6">
                                    <label htmlFor="codigoPostal" className="form-label">Código Postal</label>
                                    <input
                                        id="codigoPostal"
                                        type="text"
                                        name="codigoPostal"
                                        value={data.codigoPostal}
                                        className="form-control"
                                        onChange={(e) => setData('codigoPostal', e.target.value)}
                                    />
                                    {errors.codigoPostal && <div className="text-danger mt-1">{errors.codigoPostal}</div>}
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="telefono_numero" className="form-label">Teléfono </label>
                                    <input
                                        id="telefono_numero"
                                        type="text"
                                        name="telefono_numero"
                                        value={data.telefono_numero}
                                        className="form-control"
                                        onChange={(e) => setData('telefono_numero', e.target.value)}
                                    />
                                    {errors.telefono_numero && <div className="text-danger mt-1">{errors.telefono_numero}</div>}
                                </div>

                                <div className="col-md-3 mt-5">
                                    
                                    <div className="form-check">
                                        <input
                                            id="telefono_sn_movil"
                                            type="checkbox"
                                            name="telefono_sn_movil"
                                            className="form-check-input"
                                            checked={data.telefono_sn_movil}
                                            onChange={(e) => setData('telefono_sn_movil', e.target.checked)}
                                        />
                                        <label className="form-check-label" htmlFor="telefono_sn_movil">
                                            Es móvil
                                        </label>
                                    </div>
                                    {errors.telefono_sn_movil && <div className="text-danger mt-1">{errors.telefono_sn_movil}</div>}
                                </div>

                             

                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="form-control"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
                                </div>
                                <hr></hr>
                                <div className="col-md-12">
                                    <label htmlFor="observacion" className="form-label"><h4>Observación</h4></label>
                                    <textarea
                                        id="observacion"
                                        name="observacion"
                                        value={data.observacion}
                                        className="form-control"
                                        onChange={(e) => setData('observacion', e.target.value)}
                                    />
                                    {errors.observacion && <div className="text-danger mt-1">{errors.observacion}</div>}
                                </div>

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

            {/* Modal de búsqueda de países y regiones */}
            <Modal
                isOpen={isPaisModalOpen || isRegionModalOpen}
                onRequestClose={closeModal}
                contentLabel={isPaisModalOpen ? "Buscar País" : "Buscar Región"}
                className="modal"
                style={{
                    content: {
                        backgroundColor: '#ffffff',
                        borderRadius: '10px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        maxWidth: '600px',
                        margin: '0 auto',
                    }
                }}
                overlayClassName="modal-overlay"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{isPaisModalOpen ? "Buscar País" : "Buscar Región"}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={closeModal}
                                aria-label="Cerrar"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    value={isPaisModalOpen ? paisSearchQuery : regionSearchQuery}
                                    onChange={isPaisModalOpen ? (e) => setPaisSearchQuery(e.target.value) : (e) => setRegionSearchQuery(e.target.value)}
                                    placeholder={isPaisModalOpen ? "Buscar por nombre de país" : "Buscar por nombre de región"}
                                    className="form-control"

                                />
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={isPaisModalOpen ? () => fetchPaisSearchResults() : () => fetchRegionSearchResults()}
                                >
                                    Buscar
                                </button>
                            </div>
                            <table className="table table-hover " style={{ cursor: 'pointer' }}>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                     
                                    </tr>
                                </thead>
                                <tbody>
                                    {(isPaisModalOpen ? paisSearchResults : regionSearchResults).length > 0 ? (
                                        (isPaisModalOpen ? paisSearchResults : regionSearchResults).map((item) => (
                                            <tr key={item.id}>
                                                <td className=' table-hover' onClick={() => isPaisModalOpen ? handleSelectPais(item) : handleSelectRegion(item) } >{isPaisModalOpen ? item.nombre : item.descripcion}</td>
                                              
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="2" className="text-center">No se encontraron resultados</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {(isPaisModalOpen ? paisSearchResults : regionSearchResults).length > 0 ? (
                                <div className="d-flex justify-content-between">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => isPaisModalOpen ? fetchPaisSearchResults(paisCurrentPage - 1) : fetchRegionSearchResults(regionCurrentPage - 1)}
                                        disabled={isPaisModalOpen ? paisCurrentPage === 1 : regionCurrentPage === 1}
                                    >
                                        Anterior
                                    </button>
                                    <span>Página {isPaisModalOpen ? paisCurrentPage : regionCurrentPage} de {isPaisModalOpen ? paisLastPage : regionLastPage}</span>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => isPaisModalOpen ? fetchPaisSearchResults(paisCurrentPage + 1) : fetchRegionSearchResults(regionCurrentPage + 1)}
                                        disabled={isPaisModalOpen ? paisCurrentPage === paisLastPage : regionCurrentPage === regionLastPage}
                                    >
                                        Siguiente
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
    );
};



export default CreateContact;
