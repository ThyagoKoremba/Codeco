import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import DashboardLayout from '@/Layouts/Sidebar';


const Create = ({ auth }) => {

    const initialValues = {
        apellido: "",
        nombres: "",
        dnicuit: "",
        mail: "",
        telefono: "",
        activosn: true,
    }
    const { data, errors, setData, post, reset} = useForm(initialValues)
    const submit = (e) => {
        e.preventDefault();
        post(route('productor.store'));
        console.log(data);
    }

    return (
        <DashboardLayout>
   
                <div className=' d-flex justify-content-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Productor</h2>
                    <a href={route('productor.index')}>
                        <button className='btn btn-primary'>
                            Productores
                        </button>
                    </a>
                </div>


            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="mb-3">Nuevo Productor</h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={submit}>

                                                <div className='row mb-3'>
                                                    <div className="col-4">
                                                        <label htmlFor="apellido" className="form-label">Apellido</label>
                                                        <input
                                                            id='apellido'
                                                            type='text'
                                                            name='apellido'
                                                            value={data.apellido}
                                                            className='form-control'
                                                            onChange={(e) => setData('apellido', e.target.value)}
                                                        />
                                                        <InputError message={errors.apellido} className="mt-2" />
                                                    </div>

                                                    <div className="col-4">
                                                        <label htmlFor="nombres" className="form-label">Nombres</label>
                                                        <input
                                                            id='nombres'
                                                            type='text'
                                                            name='nombres'
                                                            value={data.nombres}
                                                            className='form-control'
                                                            onChange={(e) => setData('nombres', e.target.value)}
                                                        />
                                                        <InputError message={errors.nombres} className="mt-2" />
                                                    </div>
                                                </div>
                                                <div className='row mb-3'>
                                                    <div className="col-2">
                                                        <label htmlFor="dnicuit" className="form-label">DNI - CUIT</label>
                                                        <input
                                                            id='dnicuit'
                                                            type='text'
                                                            name='dnicuit'
                                                            value={data.dnicuit}
                                                            className='form-control'
                                                            onChange={(e) => setData('dnicuit', e.target.value)}
                                                        />
                                                        <InputError message={errors.dnicuit} className="mt-2" />
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='row mb-3'>
                                                    <div className="col-3">
                                                        <label htmlFor="mail" className="form-label">Email</label>
                                                        <input
                                                            id='mail'
                                                            type='text'
                                                            name='mail'
                                                            value={data.mail}
                                                            className='form-control'
                                                            onChange={(e) => setData('mail', e.target.value)}
                                                        />
                                                        <InputError message={errors.mail} className="mt-2" />
                                                    </div>
                                                    <div className="col-2">
                                                        <label htmlFor="telefono" className="form-label">telefono</label>
                                                        <input
                                                            id='telefono'
                                                            type='text'
                                                            name='telefono'
                                                            value={data.telefono}
                                                            className='form-control'
                                                            onChange={(e) => setData('telefono', e.target.value)}
                                                        />
                                                        <InputError message={errors.telefono} className="mt-2" />
                                                    </div>
                                                </div>

                                                <hr />
                                                <div className='row mb-3'>
                                                    <div className='col-6'>
                                                        <label htmlFor="activosn" className='form-label'>Activo</label>
                                                        <input
                                                            id='activosn'
                                                            type="checkbox"
                                                            name='activosn'
                                                            checked={data.activosn}
                                                            className='form-check-input mx-2'
                                                            onChange={(e) => setData('activosn', e.target.checked)}
                                                        />
                                                        <InputError message={errors.activosn} className="mt-2" />

                                                    </div>
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
            </DashboardLayout>
   
    )
}

export default Create;