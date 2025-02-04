import React, { useState } from 'react'; // Asegúrate de importar useState desde React
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

const CreateContact = ({ auth, fisicojuridico, pais, identidades, condicionestributarias }) => {
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
        telefonoMovil: '',
        email: '',
        codigoPostal: '',
        id_personal_dato: '',
        id_identidadtributaria_dato: '',
    };

    const { data, errors, setData, post, reset } = useForm(initialValues);

    // Definir los estados nombre, apellido y segundo
    const [nombre, setNombre] = useState('Nombre');
    const [apellido, setApellido] = useState('Apellido');
    const [segundo, setSegundo] = useState('1');

    const submit = (e) => {
        e.preventDefault();
        post(route('contacto.store'));
    };

    console.log(fisicojuridico);

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
                                        {fisicojuridico.map((condicion) => (
                                            <option key={condicion.id} value={condicion.id}>
                                                {condicion.descripcion}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.id_fisicojuridico && <div className="text-danger mt-1">{errors.id_fisicojuridico}</div>}
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
                                    <label htmlFor="apellido" className="form-label">{apellido}</label>
                                    <input
                                        id="apellido"
                                        type="text"
                                        name="apellido"
                                        value={data.apellido}
                                        className="form-control"
                                        onChange={(e) => setData('apellido', e.target.value)}
                                    />
                                    {errors.apellido && <div className="text-danger mt-1">{errors.apellido}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="foto" className="form-label">Foto</label>
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
                                    <select
                                        id="pais"
                                        name="pais"
                                        value={data.pais}
                                        onChange={(e) => setData('pais', e.target.value)}
                                        className="form-select"
                                    >
                                        <option value="">Seleccionar</option>
                                        <option value="argentina">Argentina</option>
                                    </select>
                                    {errors.pais && <div className="text-danger mt-1">{errors.pais}</div>}
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
                                    <label htmlFor="identidadTributaria" className="form-label">Identidad Tributaria</label>
                                    <select
                                        id="identidadTributaria"
                                        name="identidadTributaria"
                                        value={data.id_identidadtributaria}
                                        onChange={(e) => {
                                            const selectedId = e.target.value;
                                            setData('id_identidadtributaria', selectedId);

                                            const selectedIdentidad = identidades.find(identidad => identidad.id === selectedId);
                                            if (selectedIdentidad) {
                                                setData('id_identidadtributaria_dato', selectedIdentidad.dato_default || '');
                                            }
                                        }}
                                        className="form-select"
                                    >
                                        <option value="">Seleccionar</option>
                                        {identidades.map((identidad) => (
                                            <option key={identidad.id} value={identidad.id}>
                                                {identidad.descripcion}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.id_identidadtributaria && <div className="text-danger mt-1">{errors.id_identidadtributaria}</div>}
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
                                    <label htmlFor="provincia" className="form-label">Provincia</label>
                                    <input
                                        id="provincia"
                                        type="text"
                                        name="provincia"
                                        value={data.provincia}
                                        className="form-control"
                                        onChange={(e) => setData('provincia', e.target.value)}
                                    />
                                    {errors.provincia && <div className="text-danger mt-1">{errors.provincia}</div>}
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

                                <div className="col-md-6">
                                    <label htmlFor="telefonoFijo" className="form-label">Teléfono Fijo</label>
                                    <input
                                        id="telefonoFijo"
                                        type="text"
                                        name="telefonoFijo"
                                        value={data.telefonoFijo}
                                        className="form-control"
                                        onChange={(e) => setData('telefonoFijo', e.target.value)}
                                    />
                                    {errors.telefonoFijo && <div className="text-danger mt-1">{errors.telefonoFijo}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="telefonoMovil" className="form-label">Teléfono Móvil</label>
                                    <input
                                        id="telefonoMovil"
                                        type="text"
                                        name="telefonoMovil"
                                        value={data.telefonoMovil}
                                        className="form-control"
                                        onChange={(e) => setData('telefonoMovil', e.target.value)}
                                    />
                                    {errors.telefonoMovil && <div className="text-danger mt-1">{errors.telefonoMovil}</div>}
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
        </AuthenticatedLayout>
    );
};



export default CreateContact;
