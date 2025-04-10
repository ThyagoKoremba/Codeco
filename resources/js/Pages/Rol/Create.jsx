import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';


const Create = ({ auth }) => {

    const initialValues = {
        roldescripcion: "",
        rolabreviatura: "",
        isdefaultvalue: false,
        activosn: true,
    }

    const { data, errors, setData, post, reset } = useForm(initialValues)

    const submit = (e) => {
        e.preventDefault();
        post(route('rol.store'))
        console.log(data);
    }

    return (
        <>
                <div className=' d-flex justify-content-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Rol</h2>
                    <a href={route('rol.index')}>
                    <button className='btn btn-primary'>Roles</button>
                    </a>
                </div>

            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="mb-3">Nuevo Rol</h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={submit}>
                                                <div className='mb-3 row'>
                                                    <div className='col-6'>
                                                    <label htmlFor="roldescripcion">Descripción</label>

                                                    <input
                                                        id="roldescripcion"
                                                        type="text"
                                                        name="roldescripcion"
                                                        value={data.roldescripcion}
                                                        className="form-control"
                                                        onChange={(e) => setData('roldescripcion', e.target.value)}
                                                    />

                                                    <InputError message={errors.roldescripcion} className="mt-2" />
                                                </div>

                                                <div className='col-6'>
                                                <label htmlFor="roldabreviatura">Abreviatura</label>

                                                    <input
                                                        id="rolabreviatura"
                                                        type="text"
                                                        name="rolabreviatura"
                                                        value={data.rolabreviatura}
                                                        className="form-control"
                                                        onChange={(e) => setData('rolabreviatura', e.target.value)}
                                                    />

                                                    <InputError message={errors.rolabreviatura} className="mt-2" />
                                                </div>
                                                </div>
                                                <hr />
                                                <div className='mb-3'>
                                                    <label htmlFor="isdefaultvalue">Valor predeterminado</label>  

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
                                                <hr />
                                                <div className='mb-3'>
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
            </>
    )
}

export default Create;