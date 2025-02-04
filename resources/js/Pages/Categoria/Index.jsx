import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';


const Index = ({ auth, categorias }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className='d-flex justify-content-between'>
                    <h2 className="">Categorias</h2>
                    <a href={route('categoria.create')}>
                        <button className='btn btn-primary'>Categorias</button>
                    </a>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="pt-5 p-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">


                            <div className="table-responsive overflow-visible">
                                <table className="table table-striped table-hover align-middle">
                                    <thead className="sticky-top">
                                        <tr>
                                            <th scope="col">
                                                Descripción
                                            </th>
                                            <th scope="col">
                                                Abreviatura
                                            </th>
                                            <th scope="col">
                                                Registro en Sistema
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
                                        {categorias?.map((categoria) => (
                                            <tr key={categoria.id} className="">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {categoria.descripcion}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {categoria.abreviatura}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {categoria.sn_registrosistema === 1 ? 'Si' : 'No'}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {categoria.sn_activo === 1 ? 'Si' : 'No'}
                                                </td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button class="btn btn-secondary" type="button" id="dropdownMenu2"
                                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                                            </svg>
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">

                                                            <a class="dropdown-item" href={route('categoria.edit', [categoria])} >Editar</a>
                                                            <a class="dropdown-item" href={route('categoria.cambiarEstado', [categoria])}>
                                                            {categoria.sn_activo === 1 ? 'Desactivar' : 'Activar'}
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
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index