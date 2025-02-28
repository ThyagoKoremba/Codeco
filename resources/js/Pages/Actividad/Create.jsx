import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';

import InputError from '@/Components/InputError';


const Create = ({ auth }) => {

    const initialValues = {
        actividadnombre: "",
        actividadabreviatura: "",
        isdefaultvalue: false,
        activosn: true,
        titulosn: false,
        informacionsn: false,
        etiquetasn: false,
        actividaddsc: "",
    }
    const { data, errors, setData, post, reset } = useForm(initialValues)
    const submit = (e) => {
        e.preventDefault();
        post(route('actividad.store'));
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
                                            <div className='row mb-3'>
                                                <div className="col-6">
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

                                                <div className="col-6">
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
                                                </div>
                                                <div className='mb-6'>
                                                        <label htmlFor="actividaddsc" className='form-label'>Descripción</label>
                                                        <textarea 
                                                        id="actividaddsc"
                                                        type="Text"
                                                        name='actividaddsc'
                                                        value={data.actividaddsc}
                                                        className='form-control mb-3'
                                                        onChange={(e)=>setData('actividaddsc', e.target.value)}
                                                        row='5'
                                                        />
                                                    </div>
                                                    <hr />
                                                <div className='row mb-3'>
                                                    <div className='col-2 d-flex justify-content-end'>
                                                        <label htmlFor="isdefaultvalue" className='form-label'>Predeterminado</label>
                                                    </div>
                                                    <div className='col-3'>
                                                        <input
                                                            id='isdefaultvalue'
                                                            type="checkbox"
                                                            name='isdefaultvalue'
                                                            checked={data.isdefaultvalue}
                                                            className='form-check-input'
                                                            onChange={(e) => setData('isdefaultvalue', e.target.checked)}
                                                        />
                                                    <InputError message={errors.isdefaultvalue} className="mt-2" />

                                                    </div>


                                                    <div className='col-2 d-flex justify-content-end'>

                                                        <label htmlFor="titulosn" className='form-label'>Título</label>
                                                    </div>
                                                    <div className='col-3'>
                                                        <input
                                                            id='titulosn'
                                                            type="checkbox"
                                                            name='titulosn'
                                                            checked={data.titulosn}
                                                            className='form-check-input'
                                                            onChange={(e) => setData('titulosn', e.target.checked)}
                                                        />
                                                        <InputError message={errors.titulosn} className="mt-2" />

                                                    </div>
                                                    
                                                </div>
                                                <div className='row mb-3'>
                                                    <div className='col-2 d-flex justify-content-end'>
                                                        <label htmlFor="informacionsn">Información</label>
                                                    </div>
                                                    <div className='col-3'>
                                                        <input 
                                                        id="informacionsn"
                                                        type="checkbox"
                                                        name='informacionsn'
                                                        checked={data.informacionsn}
                                                        className='form-check-input'
                                                        onChange={(e)=>setData('informacionsn', e.target.checked)}
                                                        />
                                                        <InputError message={errors.informacionsn} className="mt-2" />

                                                    </div>
                                                    <div className='col-2 d-flex justify-content-end'>
                                                        <label htmlFor="etiquetasn">Etiqueta</label>
                                                    </div>
                                                    <div className='col-3'>
                                                        <input 
                                                        id="etiquetasn"
                                                        type="checkbox"
                                                        name='etiquetasn'
                                                        className='form-check-input'
                                                        checked={data.etiquetasn}
                                                        onChange={(e)=>setData('etiquetasn', e.target.checked)}
                                                        />
                                                        <InputError message={errors.etiquetasn} className="mt-2" />

                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='col-6'>
                                                        <label htmlFor="etiquetasn">Activo</label>
                                                        <input 
                                                        id="activosn"
                                                        type="checkbox"
                                                        name='activosn'
                                                        className='form-check-input mb-3 mx-2'
                                                        checked={data.activosn}
                                                        onChange={(e)=>setData('activosn', e.target.checked)}
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