import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head} from '@inertiajs/react';
import './../../../css/app.css';
import DashboardLayout from '@/Layouts/Sidebar';


const Index = ({ auth, proyectos }) => {
    return (

        <DashboardLayout>
   
                <div className='d-flex justify-content-between'>
                    <h2 className="">Proyectos</h2>
                    <a href={route('proyecto.create')}>
                        <button className='btn btn-primary'>Nuevo Proyecto</button>
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
                                    Nombre
                                </th>
                                <th scope="col">
                                    Abreviatura
                                </th>
                                <th scope="col">
                                    Fecha de Inicio
                                </th>
                                <th scope="col">
                                    Fecha de Finalizacion
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
                            {proyectos?.map((proyecto) => (
                                <tr key={proyecto.id} className="">
                                    <th scope='row' className='px6 py-4'>
                                        {proyecto.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {proyecto.proyectonombre}
                                    </td>
                                    <td className="px-6 py-4">
                                        {proyecto.proyectoabreviatura}
                                    </td>
                                    <td className="px-6 py-4">
                                        {proyecto.fechainicio}
                                    </td>
                                    <td className="px-6 py-4">
                                        {!proyecto.fechafinalizacion ? 'No definida' : proyecto.fechafinalizacion}
                                    </td>
                                    <td className="px-6 py-4">
                                        {proyecto.activosn === 1 ? 'Si' : 'No'}
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

                                                <a className="dropdown-item" href={route('proyecto.edit', [proyecto])} >Editar</a>
                                                <a className="dropdown-item" href={route('proyecto.cambiarEstado', [proyecto])}>
                                                    {proyecto.activosn === 1 ? 'Desactivar' : 'Activar'}
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
            </DashboardLayout>
   
    )
}

export default Index