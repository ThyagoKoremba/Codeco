import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';


const Edit = ({ auth, categoria }) => {

    const initialValues={
        descripcion:categoria.descripcion,
        abreviatura: categoria.abreviatura,
        sn_registrosistema:categoria.sn_registrosistema,
        sn_activo:categoria.sn_activo,
    }

    const {data, errors, setData, put}=useForm(initialValues)

    const submit = (e) =>{
        e.preventDefault();
        put(route('categoria.update',categoria))
        console.log(data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className=' flex justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Contacto</h2>
                    <Link href={route('categoria.index')}>
                        Categoria
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
                                    <InputLabel htmlFor="descripcion" value="Descripcion" />

                                    <TextInput
                                        id="descripcion"
                                        type="text"
                                        name="descripcion"
                                        value={data.descripcion}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('descripcion', e.target.value)}
                                    />

                                    <InputError message={errors.descripcion} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="abreviatura" value="Abreviatura" />

                                    <TextInput
                                        id="abreviatura"
                                        type="text"
                                        name="abreviatura"
                                        value={data.abreviatura}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('abreviatura', e.target.value)}
                                    />

                                    <InputError message={errors.abreviatura} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="sn_registrosistema" value="Registro en Sistema" />

                                    <input
                                        id="sn_registrosistema"
                                        type="checkbox"
                                        name="sn_registrosistema"
                                        checked={data.sn_registrosistema}
                                        className="mt-1"
                                        onChange={(e) => setData('sn_registrosistema', e.target.checked)}
                                    />

                                    <InputError message={errors.sn_registrosistema} className="mt-2" />
                                </div>

                                <PrimaryButton>
                                    Actualizar Categoria
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Edit;