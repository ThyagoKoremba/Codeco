import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';

const Create = ({ auth }) => {

    const initialValues = {
        proyectonombre: "",
        proyectoabreviatura: "",
        fechainicio: "",
        fechafinalizacion: "",
        activosn: true,
        productoressn: true,
        proyectodescripcion: "",
    }

    const { data, errors, setData, post } = useForm(initialValues)

    const submit = (e) => {
        e.preventDefault();
        post(route('proyecto.store'))
        console.log(data);
    }

    return (
        <>
                <div className=' d-flex justify-content-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Proyecto</h2>
                    <a href={route('proyecto.index')}>
                        <button className='btn btn-primary'>Proyectos</button>
                    </a>
                </div>

            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="mb-3">Nuevo Proyecto</h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={submit}>
                                                <div className='row mb-3'>
                                                    <div className='col-6'>
                                                        <label htmlFor="proyectonombre" className='form-label'>Nombre</label>
                                                        <input
                                                            id="proyectonombre"
                                                            type="text"
                                                            name="proyectonombre"
                                                            value={data.proyectonombre}
                                                            className="form-control"
                                                            onChange={(e) => setData('proyectonombre', e.target.value)}
                                                        />
                                                        <InputError message={errors.proyectonombre} className="mt-2" />
                                                    </div>

                                                    <div className='col-6'>
                                                        <label htmlFor="proyectoabreviatura" className='form-label'>Abreviatura</label>

                                                        <input
                                                            id="proyectoabreviatura"
                                                            type="text"
                                                            name="proyectoabreviatura"
                                                            value={data.proyectoabreviatura}
                                                            className="form-control"
                                                            onChange={(e) => setData('proyectoabreviatura', e.target.value)}
                                                        />

                                                        <InputError message={errors.proyectoabreviatura} className="mt-2" />
                                                    </div>
                                                </div>
                                                <div className='row mb-3'>
                                                    <div className='col-3 d-flex align-items-center justify-content-center'>
                                                        <label htmlFor="fechainicio" className='me-2'>Inicio</label>
                                                        <input
                                                            id="fechainicio"
                                                            type="date"
                                                            name="fechainicio"
                                                            value={data.fechainicio}
                                                            className="form-control"
                                                            onChange={(e) => setData('fechainicio', e.target.value)}
                                                        />

                                                        <InputError message={errors.fechainicio} className="mt-2" />
                                                    </div>
                                                    <div className='col-3 d-flex align-items-center justify-content-center'>
                                                        <label htmlFor="fechafinalizacion" className='me-2'>Finalización</label>

                                                        <input
                                                            id="fechafinalizacion"
                                                            type="date"
                                                            name="fechafinalizacion"
                                                            value={data.fechafinalizacion}
                                                            className="form-control"
                                                            onChange={(e) => setData('fechafinalizacion', e.target.value)}
                                                        />

                                                        <InputError message={errors.fechafinalizacion} className="mt-2" />
                                                    </div>
                                                    <div className="col-4 start d-flex align-items-center ">
                                                        <label htmlFor="productoressn" className="form-label mb-0 me-2">Productores</label>
                                                        <input
                                                            id="productoressn"
                                                            type="checkbox"
                                                            name="productoressn"
                                                            checked={data.productoressn}
                                                            className="form-check-input"
                                                            onChange={(e) => setData('productoressn', e.target.checked)}
                                                        />
                                                        <InputError message={errors.productoressn} className="mt-2" />
                                                    </div>

                                                </div>


                                                <div className='mb-3'>
                                                    <label htmlFor="proyectodescripcion" >Descripción</label>

                                                    <textarea
                                                        id="proyectodescripcion"
                                                        type="text"
                                                        name="proyectodescripcion"
                                                        value={data.proyectodescripcion}
                                                        className="form-control"
                                                        onChange={(e) => setData('proyectodescripcion', e.target.value)}
                                                    />

                                                    <InputError message={errors.proyectodescripcion} className="mt-2" />
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
            </>
    )
}

export default Create;