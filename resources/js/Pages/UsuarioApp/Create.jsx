import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';


const Create = ({ auth }) => {

    const initialValues = {
        dnicuit: "",
        nombres: "",
        apellido: "",
        usuario: "",
        clave: "",
        email: "",
        telefono: "",
        observaciones: "",
        activosn: true,
    }

    const { data, errors, setData, post, reset } = useForm(initialValues)

    const submit = (e) => {
        e.preventDefault();
        post(route('usuarioapp.store'))
        console.log(data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className=' d-flex justify-content-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Usuario App</h2>
                    <a href={route('usuarioapp.index')}>
                        <button className='btn btn-primary'>Usuarios App</button>
                    </a>
                </div>
            }
        >
            <Head title="Dashboard" />
            
            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="mb-3">Nuevo Usuario App</h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={submit}>


                                                <div className='card'>
                                                    <div className='card-header'>
                                                        <h5>Datos personales</h5>
                                                    </div>
                                                    <div className='m-3 row'>
                                                        <div className='col-6'>
                                                            <label htmlFor="apellido">Apellido</label>
                                                            <input
                                                                id="apellido"
                                                                type="text"
                                                                name="apellido"
                                                                value={data.apellido}
                                                                className="form-control"
                                                                onChange={(e) => setData('apellido', e.target.value)}
                                                            />

                                                            <InputError message={errors.apellido} className="mt-2" />
                                                        </div>

                                                        <div className='col-6'>
                                                            <label htmlFor="nombres">Nombres</label>
                                                            <input
                                                                id="nombres"
                                                                type="text"
                                                                name="nombres"
                                                                value={data.nombres}
                                                                className="form-control"
                                                                onChange={(e) => setData('nombres', e.target.value)}
                                                            />
                                                            <InputError message={errors.nombres} className="mt-2" />
                                                        </div>
                                                    </div>
                                                    <div className='row mx-3 mb-3'>
                                                        <div className='col-6'>
                                                            <label htmlFor="dnicuit">DNI / CUIT</label>
                                                            <input
                                                                id="dnicuit"
                                                                type="text"
                                                                name="dnicuit"
                                                                value={data.dnicuit}
                                                                className="form-control"
                                                                onChange={(e) => setData('dnicuit', e.target.value)}
                                                            />
                                                            <InputError message={errors.dnicuit} className="mt-2" />
                                                        </div>
                                                    </div>
                                                    <div className='mb-3 mx-3 row'>
                                                        <div className='col-6'>
                                                            <label htmlFor="mail">Email</label>
                                                            <input
                                                                id="mail"
                                                                type="text"
                                                                name="mail"
                                                                value={data.mail}
                                                                className="form-control"
                                                                onChange={(e) => setData('mail', e.target.value)}
                                                            />

                                                            <InputError message={errors.mail} className="mt-2" />
                                                        </div>

                                                        <div className='col-6'>
                                                            <label htmlFor="telefono">Teléfono</label>
                                                            <input
                                                                id="telefono"
                                                                type="text"
                                                                name="telefono"
                                                                value={data.telefono}
                                                                className="form-control"
                                                                onChange={(e) => setData('telefono', e.target.value)}
                                                            />
                                                            <InputError message={errors.telefono} className="mt-2" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='card mt-3'>
                                                    <div className='card-header'>
                                                        <h5>Datos usuario</h5>
                                                    </div>
                                                    <div className='m-3 row'>
                                                        <div className='col-6'>
                                                            <label htmlFor="usuario">Usuario</label>
                                                            <input
                                                                id="usuario"
                                                                type="text"
                                                                name="usuario"
                                                                value={data.usuario}
                                                                className="form-control"
                                                                onChange={(e) => setData('usuario', e.target.value)}
                                                            />

                                                            <InputError message={errors.usuario} className="mt-2" />
                                                        </div>

                                                        <div className='col-6'>
                                                            <label htmlFor="clave">Clave</label>
                                                            <input
                                                                id="clave"
                                                                type="text"
                                                                name="clave"
                                                                value={data.clave}
                                                                className="form-control"
                                                                onChange={(e) => setData('clave', e.target.value)}
                                                            />
                                                            <InputError message={errors.clave} className="mt-2" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='m-3'>
                                                    <label htmlFor="observaciones" >Observaciones</label>

                                                    <textarea
                                                        id="observaciones"
                                                        type="text"
                                                        name="observaciones"
                                                        value={data.observaciones}
                                                        className="form-control"
                                                        onChange={(e) => setData('observaciones', e.target.value)}
                                                    />

                                                    <InputError message={errors.observaciones} className="mt-2" />
                                                </div>
                                                <div className='m-3'>
                                                    <label htmlFor="activosn">Activo</label>

                                                    <input
                                                        id="activosn"
                                                        type="checkbox"
                                                        name="activosn"
                                                        checked={data.activosn}
                                                        className="form-check-input mx-2"
                                                        onChange={(e) => setData('activosn', e.target.checked)}
                                                    />

                                                    <InputError message={errors.activosn} className="mt-2" />
                                                </div>
                                                <div className="mt-4 row">
                                                    <div className='col-6'>
                                                        <button type="button" className="btn btn-secondary" onClick={() => reset()}>Limpiar</button>
                                                    </div>
                                                    <div className='col-6 d-flex justify-content-end'>
                                                        <button type="submit" className="btn btn-primary">Guardar</button>
                                                    </div>
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
        </AuthenticatedLayout>
    )
}

export default Create;