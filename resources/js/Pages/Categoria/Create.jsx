import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';


const Create = ({ auth }) => {

    const initialValues = {
        descripcion: "",
        abreviatura: "",
        sn_registrosistema: false,
        sn_activo: true,
    }

    const { data, errors, setData, post } = useForm(initialValues)

    const submit = (e) => {
        e.preventDefault();
        post(route('categoria.store'))
        console.log(data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className=' d-flex justify-content-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Categoria</h2>
                    <a href={route('categoria.index')}>
                        <button className='btn btn-primary'>Categorias</button>
                    </a>
                </div>
            }
        >
            <Head title="Dashboard" />
            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="mb-3">Nueva Categoria</h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={submit}>
                                                <div className='mb-3'>
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
                                                <div className='mb-3'>
                                                    <label htmlFor="abreviatura" className='form-label'>Abreviatura</label>

                                                    <input
                                                        id="abreviatura"
                                                        type="text"
                                                        name="abreviatura"
                                                        value={data.abreviatura}
                                                        className="form-control"
                                                        onChange={(e) => setData('abreviatura', e.target.value)}
                                                    />

                                                    <InputError message={errors.abreviatura} className="mt-2" />
                                                </div>
                                                <div>
                                                    <label htmlFor="sn_registrosistema" className='form-label'>Registro en Sistema</label>

                                                    <input
                                                        id="sn_registrosistema"
                                                        type="checkbox"
                                                        name="sn_registrosistema"
                                                        checked={data.sn_registrosistema}
                                                        className="form-check-input mx-2"
                                                        onChange={(e) => setData('sn_registrosistema', e.target.checked)}
                                                    />

                                                    <InputError message={errors.sn_registrosistema} className="mt-2" />
                                                </div>
                                                <div>
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
        </AuthenticatedLayout>
    )
}

export default Create;