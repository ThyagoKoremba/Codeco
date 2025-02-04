import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';


const Index = ({ auth, categorias, roles}) => {

    return (

        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className=' flex justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Rol</h2>
                    <Link href={route('rol.create')}>
                        Crear Rol
                    </Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">


                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Descripción
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Abreviatura
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Valor predeterminado
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Activo
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Opciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {roles?.map((roles)=>(                                        
                                            <tr key={roles.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {roles.roldescripcion}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {roles.rolabreviatura}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {roles.isdefaultvalue === 1 ? 'Si' : 'No'}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {roles.activosn === 1 ? 'Si' : 'No'}
                                                </td>
                                                <td>
                                                    <div className='space-x-5'>
                                                        <Link href={route('rol.edit',[roles])}>
                                                        Editar
                                                        </Link>
                                                        <Link href={route('rol.cambiarEstado',[roles])}>
                                                        {roles.sn_activo === 1 ? 'Desactivar' : 'Activar'}
                                                        </Link>
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