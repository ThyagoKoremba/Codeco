import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';


const Create = ({ auth }) => {

    const initialValues={
        roldescripcion:"",
        rolabreviatura: "",
        isdefaultvalue:false,
        activosn:false,
    }

    const {data, errors, setData, post}=useForm({initialValues})

    const submit = (e) =>{
        e.preventDefault();
        post(route('rol.store'))
        console.log(data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className=' flex justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Rol</h2>
                    <Link href={route('rol.index')}>
                        Roles
                    </Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="roldescripcion" value="Descripcion" />

                                    <TextInput
                                        id="roldescripcion"
                                        type="text"
                                        name="roldescripcion"
                                        value={data.roldescripcion}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('roldescripcion', e.target.value)}
                                    />

                                    <InputError message={errors.roldescripcion} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="rolabreviatura" value="Abreviatura" />

                                    <TextInput
                                        id="rolabreviatura"
                                        type="text"
                                        name="rolabreviatura"
                                        value={data.rolabreviatura}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('rolabreviatura', e.target.value)}
                                    />

                                    <InputError message={errors.rolabreviatura} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="isdefaultvalue" value="Valor predeterminado" />

                                    <input
                                        id="isdefaultvalue"
                                        type="checkbox"
                                        name="isdefaultvalue"
                                        checked={data.isdefaultvalue || false}
                                        className="mt-1"
                                        onChange={(e) => setData('isdefaultvalue', e.target.checked)}
                                    />

                                    <InputError message={errors.isdefaultvalue} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="activosn" value="Activo" />

                                    <input
                                        id="activosn"
                                        type="checkbox"
                                        name="activosn"
                                        checked={data.activosn || false}
                                        className="mt-1"
                                        onChange={(e) => setData('activosn', e.target.checked)}
                                    />

                                    <InputError message={errors.activosn} className="mt-2" />
                                </div>

                                <PrimaryButton>
                                    Crear Categoria
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Create;