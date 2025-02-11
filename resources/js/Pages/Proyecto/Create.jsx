import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';


const Create = ({ auth }) => {

    const initialValues={
        proyectonombre:"",
        proyectoabreviatura: "",
        fechainicio: "",
        fechafinalizacion: "",
        activosn:true,
        productoressn:true,
        proyectodescripcion:"",
    }

    const {data, errors, setData, post}=useForm(initialValues)

    const submit = (e) =>{
        e.preventDefault();
        post(route('proyecto.store'))
        console.log(data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className=' flex justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Proyecto</h2>
                    <Link href={route('categoria.index')}>
                        Proyectos
                    </Link>
                </div>
            }
        >
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
                    <div className='mb-3'>
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
                    <div className='mb-3'>
                        <label htmlFor="proyectoabreviatura" >Abreviatura</label>

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

                    <div className='row m-3'>
                    <div className='col-6'>
                        <label htmlFor="fechainicio" value="Fecha de Inicio">Fecha Inicio</label>
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
                    <div className='col-6'>
                        <label htmlFor="fechafinalizacion">Fecha de Finalización</label>

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
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="productoressn" >Productores</label>

                        <input
                            id="productoressn"
                            type="checkbox"
                            name="productoressn"
                            checked={data.productoressn}
                            className="checkbox"
                            onChange={(e) => setData('productoressn', e.target.checked)}
                        />

                        <InputError message={errors.productoressn} className="mt-2" />
                    </div>
                    <div className='mb-3'>
                    <label htmlFor="proyectodescripcion" >Descripción</label>

                        <textarea
                            id="proyectodescripcion"
                            type="text"
                            name="proyectodescripcion"
                            checked={data.proyectodescripcion}
                            className="form-control"
                            onChange={(e) => setData('proyectodescripcion', e.target.value)}
                        />

                        <InputError message={errors.proyectodescripcion} className="mt-2" />
                    </div>

                    <PrimaryButton>
                        Crear Categoria
                    </PrimaryButton>
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