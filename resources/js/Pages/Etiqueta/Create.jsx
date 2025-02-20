import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';


const Create = ({ auth }) => {

    const initialValues = {
        etiquetanombre: "",
        etiquetaabreviatura: "",
        isdefaultvalue: false,
        activosn: true,
    }

    const { data, errors, setData, post } = useForm(initialValues)

    const submit = (e) => {
        e.preventDefault();
        post(route('etiqueta.store'))
        console.log(data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className=' d-flex justify-content-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Etiqueta</h2>
                    <a href={route('etiqueta.index')}>
                        <button className='btn btn-primary'>Etiquetas</button>
                    </a>
                </div>
            }
        >
            <Head title="Dashboard" />
            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="mb-3">Nueva Etiqueta</h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={submit}>
                                                <div className='mb-3'>
                                                    <label htmlFor="etiquetanombre" className='form-label'>Nombre</label>

                                                    <input
                                                        id="etiquetanombre"
                                                        type="text"
                                                        name="etiquetanombre"
                                                        value={data.etiquetanombre}
                                                        className="form-control"
                                                        onChange={(e) => setData('etiquetanombre', e.target.value)}
                                                    />

                                                    <InputError message={errors.etiquetanombre} className="mt-2" />
                                                </div>
                                                <div className='mb-3'>
                                                    <label htmlFor="etiquetaabreviatura" className='form-label'>Abreviatura</label>

                                                    <input
                                                        id="etiquetaabreviatura"
                                                        type="text"
                                                        name="etiquetaabreviatura"
                                                        value={data.etiquetaabreviatura}
                                                        className="form-control"
                                                        onChange={(e) => setData('etiquetaabreviatura', e.target.value)}
                                                    />

                                                    <InputError message={errors.etiquetaabreviatura} className="mt-2" />
                                                </div>
                                                <div className='mb-3'>
                                                    <label htmlFor="isdefaultvalue" className='form-label'>Valor predeterminado</label>

                                                    <input
                                                        id="isdefaultvalue"
                                                        type="checkbox"
                                                        name="isdefaultvalue"
                                                        checked={data.isdefaultvalue}
                                                        className="form-check-input mx-2"
                                                        onChange={(e) => setData('isdefaultvalue', e.target.checked)}
                                                    />

                                                    <InputError message={errors.isdefaultvalue} className="mt-2" />
                                                </div>
                                                <div className='mb-3'>
                                                    <label htmlFor="activosn" className='form-label'>Activo</label>

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

        </AuthenticatedLayout>
    )
}

export default Create;