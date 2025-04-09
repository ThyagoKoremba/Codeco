import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';


const CreateComponente = ({ closeModal }) => {

    const initialValues = {
        nombre: "",
        descripcion: "",
        informacion: "",
        url: "",
        sn_activo: true,
    }

    const { data, errors, setData, post, reset } = useForm(initialValues)

    const submit = (e) => {
        e.preventDefault();
        post(route('componente.store'), {
            onSuccess: () => {
                closeModal();
            },
        });
    }

    return (

            <div className="py-3">
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
                                                <hr />
                                                <div className='mb-3'>
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
    )
}

export default CreateComponente;