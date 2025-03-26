import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';


const Edit = ({ auth, componente }) => {

    const initialValues = {
        nombre: componente.nombre,
        descripcion: componente.descripcion,
        informacion: componente.informacion,
        url: componente.url,

    }

    const { data, errors, setData, put, reset } = useForm(initialValues)

    const submit = (e) => {
        e.preventDefault();
        put(route('componente.update', componente));
        console.log(data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className=' d-flex justify-content-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Componente</h2>
                    <a href={route('componente.vista')}>
                        <button className='btn btn-primary'>Componentes</button>
                    </a>
                </div>
            }
        >
            <Head title="Dashboard" />
            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="mb-3">Editar Componente</h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={submit}>
                                                <div className='mb-3 row'>
                                                    <div className='col-6'>
                                                        <label htmlFor="nombre" className='form-label'>Nombre</label>

                                                        <input
                                                            id="nombre"
                                                            type="text"
                                                            name="nombre"
                                                            value={data.nombre}
                                                            className="form-control"
                                                            onChange={(e) => setData('nombre', e.target.value)}
                                                        />

                                                        <InputError message={errors.nombre} className="mt-2" />
                                                    </div>
                                                    <div className='col-6'>
                                                        <label htmlFor="descripcion" className='form-label'>Descripción</label>

                                                        <input
                                                            id="descripcion"
                                                            type="text"
                                                            name="descripcion"
                                                            value={data.descripcion}
                                                            className="form-control"
                                                            onChange={(e) => setData('descripcion', e.target.value)}
                                                        />

                                                        <InputError message={errors.descripcion} className="mt-2" />
                                                    </div>

                                                    <div className='col-6 my-3'>
                                                        <label htmlFor="informacion" className='form-label'>Información</label>

                                                        <input
                                                            id="informacion"
                                                            type="text"
                                                            name="informacion"
                                                            value={data.informacion}
                                                            className="form-control"
                                                            onChange={(e) => setData('informacion', e.target.value)}
                                                        />

                                                        <InputError message={errors.informacion} className="mt-2" />
                                                    </div>
                                                </div>
                                                <hr />
                                                <div>
                                                    <label htmlFor="url" className='form-label'>URL</label>

                                                    <input
                                                        id="url"
                                                        type="text"
                                                        name="url"
                                                        value={data.url}
                                                        className="form-control"
                                                        onChange={(e) => setData('url', e.target.value)}
                                                    />

                                                    <InputError message={errors.url} className="mt-2" />
                                                </div>

                                                <div className="mt-4 row">
                                                    <div className='d-flex justify-content-end'>
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

export default Edit;