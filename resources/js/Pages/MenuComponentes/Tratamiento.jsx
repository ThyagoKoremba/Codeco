import {React,  useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

const Create = ({ auth,menus,componentes }) => {
    const initialValues = {
        id_menu:'',
        id_componente:'',
        sn_activo:'',
        orden:[],
        componentes:[],
    };

    const { data, errors, setData, post, reset } = useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();
        post(route('menucomponentes.store'));
        console.log(data);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="d-flex justify-content-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Menú</h2>
                    <a href={route('menu.vista')}>
                        <button className="btn btn-primary">Menús</button>
                    </a>
                </div>
            }
        >
            <Head title="Dashboard" />
            
        </AuthenticatedLayout>
    );
};

export default Create;