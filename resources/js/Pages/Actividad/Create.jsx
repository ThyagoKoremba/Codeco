import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';


const Create = ({ auth }) => {

    const initialValues = {
        actividadnombre: "",
        actividadabreviatura: "",
        isdefaultvalue: false,
        activosn: false,
        titulosn: false,
        informacionsn: false,
        etiquetasn: false,
        actividaddsc: "",
    }

    const { data, errors, setData, post } = useForm({ initialValues })

    const submit = (e) => {
        e.preventDefault();
        post(route('actividad.store'))
        console.log(data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className=' d-flex justify-content-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Actividad</h2>
                    <a href={route('actividad.index')}>
                        <button className='btn btn-primary'>
                            Actividades
                        </button>
                    </a>
                </div>
            }
        >

            <Head title="Crear Actividad" />

            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="mb-3">Nueva Actividad</h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={submit}>

                                                <div className="mb-3">
                                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                                    <input
                                                        id='nombre'
                                                        type='text'
                                                        name='nombre'
                                                        value={data.actividadnombre}
                                                        className='form-control'
                                                        onChange={(e) => setData('actividadnombre', e.target.value)}
                                                    />
                                                    <InputError message={errors.actividadnombre} className="mt-2" />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="abreviatura" className="form-label">Abreviatura</label>
                                                    <input
                                                        id='abreviatura'
                                                        type='text'
                                                        name='abreviatura'
                                                        value={data.actividadabreviatura}
                                                        className='form-control'
                                                        onChange={(e) => setData('actividadabreviatura', e.target.value)}
                                                    />
                                                    <InputError message={errors.actividadabreviatura} className="mt-2" />
                                                </div>
                                                <div className='row mb-3'>
                                                    <div className='col-6'>
                                                        <label htmlFor="isdefaultvalue" className='form-label'>Valor predeterminado</label>
                                                        <input
                                                            id='isdefaultvalue'
                                                            type="checkbox"
                                                            name='isdefaultvalue'
                                                            value={data.isdefaultvalue}
                                                            className='form-check-input'
                                                            onChange={(e) => setData('isdefaultvalue', e.target.checked)}
                                                        />
                                                    </div>

                                                    <div className='col-6'>

                                                        <label htmlFor="titulosn" className='form-label'>Titulo</label>
                                                        <input
                                                            id='titulosn'
                                                            type="checkbox"
                                                            name='titulosn'
                                                            value={data.titulosn}
                                                            className='form-check-input'
                                                            onChange={(e) => setData('titulosn', e.target.checked)}
                                                        />
                                                    </div>
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