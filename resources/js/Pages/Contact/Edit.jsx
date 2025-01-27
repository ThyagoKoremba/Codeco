import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';


const Edit = ({ auth, contact }) => {

    const initialValues={
        name: contact.name,
        avatar: null,
        phone: contact.phone,
        visibility: contact.visibility,
    }

    const {data, errors, setData, put}=useForm(initialValues)

    const submit = (e) =>{
        e.preventDefault();
        put(route('contact.update',contact))
        console.log(data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}

            header={
                <div className=' flex justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Contacto</h2>
                    <Link href={route('contact.index')}>
                        Contactos
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
                                    <InputLabel htmlFor="name" value="Nombre" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value = {data.name}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('name', e.target.value)}
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="phone" value="Telefono" />

                                    <TextInput
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        value={data.phone}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('phone', e.target.value)}
                                    />

                                    <InputError message={errors.phone} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="avatar" value="Avatar" />

                                    <TextInput
                                        id="avatar"
                                        type="file"
                                        name="avatar"
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('avatar', e.target.files[0])}
                                    />

                                    <InputError message={errors.avatar} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="visibility" value="Visibility" />
                                    <select 
                                    name='visibility'
                                    id='visibility'
                                    defaultValue={contact.visibility}
                                    onChange={(e)=>{
                                        setData("visibility",e.target.value);
                                    }}>
                                        <option value="public">Publico</option>
                                        <option value="private">Privado</option>
                                    </select>

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <PrimaryButton>
                                    Actualizar Contacto
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