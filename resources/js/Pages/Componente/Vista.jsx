import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import './../../../css/app.css';


const Vista = ({ auth, componentes }) => {
    return (

        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className='d-flex justify-content-between'>
                    <h2 className="">Componentes</h2>
                    <a href={route('componente.create')}>
                        <button className='btn btn-primary'>Nuevo Componente</button>
                    </a>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="tabla-index">
                <div className="table-responsive overflow-visible">
                    <table className="table table-striped table-hover align-middle">
                        <thead className="sticky-top">
                            <tr>
                            <th scope="col">
                                    ID
                                </th>
                                <th scope="col">
                                    Nombre
                                </th>
                                <th scope="col">
                                    Descipción
                                </th>
                                <th scope="col">
                                    URL
                                </th>
                                <th scope="col">
                                    Activo
                                </th>
                                <th scope="col">
                                    Opciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {componentes?.map((componente) => (
                                <tr key={componente.id} className="">
                                    <th scope="row" className="px-6 py-4 ">
                                        {componente.id}
                                    </th>
                                    <td scope="row" className="px-6 py-4 ">
                                        {componente.nombre}
                                    </td>
                                    <td className="px-6 py-4">
                                        {componente.descripcion}
                                    </td>
                                    <td className="px-6 py-4">
                                        {componente.url}
                                    </td>
                                    <td className="px-6 py-4">
                                        {componente.sn_activo === 1 ? 'Si' : 'No'}
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary" type="button" id="dropdownMenu2"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path
                                                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                                </svg>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">

                                                <a className="dropdown-item" href={route('componente.edit', [componente])} >Editar</a>
                                                <a className="dropdown-item" href={route('componente.cambiarEstado', [componente])}>
                                                    {componente.sn_activo === 1 ? 'Desactivar' : 'Activar'}
                                                </a>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout >
    )
}

export default Vista