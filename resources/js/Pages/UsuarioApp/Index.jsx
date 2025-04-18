import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head} from '@inertiajs/react';
import './../../../css/app.css';


const Index = ({ auth, usuariosapp }) => {
    return (

        <>
                <div className='d-flex justify-content-between'>
                    <h2 className="">Usuarios App</h2>
                    <a href={route('usuarioapp.create')}>
                        <button className='btn btn-primary'>Nuevo Usuario</button>
                    </a>
                </div>

            <div className="tabla-index">
                <div className="table-responsive overflow-visible">
                    <table className="table table-striped table-hover align-middle">
                        <thead className="sticky-top">
                            <tr>
                                <th scope='col'>
                                    ID
                                </th>
                                <th scope="col">
                                    Nombres y Apellido
                                </th>
                                <th scope="col">
                                    Usuario
                                </th>
                                <th scope="col">
                                    Email
                                </th>
                                <th scope="col">
                                    Telefono
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
                            {usuariosapp?.map((usuarioapp) => (
                                <tr key={usuarioapp.id} className="">
                                    <th scope='row' className='px6 py-4'>
                                        {usuarioapp.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {usuarioapp.nombres + ' ' + usuarioapp.apellido}
                                    </td>
                                    <td className="px-6 py-4">
                                        {usuarioapp.usuario}
                                    </td>
                                    <td className="px-6 py-4">
                                        {usuarioapp.mail}
                                    </td>
                                    <td className="px-6 py-4">
                                        {usuarioapp.telefono}
                                    </td>
                                    <td className="px-6 py-4">
                                        {usuarioapp.activosn === 1 ? 'Si' : 'No'}
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

                                                <a className="dropdown-item" href={route('usuarioapp.edit', [usuarioapp])} >Editar</a>
                                                <a className="dropdown-item" href={route('usuarioapp.cambiarEstado', [usuarioapp])}>
                                                    {usuarioapp.activosn === 1 ? 'Desactivar' : 'Activar'}
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
            </>
    )
}

export default Index