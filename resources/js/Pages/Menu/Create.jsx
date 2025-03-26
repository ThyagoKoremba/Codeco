import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';

const Create = ({ auth, componentes }) => {
    const initialValues = {
        nombre: "",
        descripcion: "",
        abreviatura: "",
        informacion: "",
        sn_activo: true,
        componentes: [],
    };

    const { data, errors, setData, post, reset } = useForm(initialValues);

    const [search, setSearch] = useState(''); // Estado para el texto de búsqueda

    const handleCheckboxChange = (componentId) => {
        const updatedComponents = data.componentes.includes(componentId)
            ? data.componentes.filter((id) => id !== componentId)
            : [...data.componentes, componentId];

        setData('componentes', updatedComponents);
    };

    const filteredComponents = componentes.filter((componente) =>
        componente.nombre.toLowerCase().includes(search.toLowerCase())
    ); // Filtrar componentes según el texto de búsqueda

    const submit = (e) => {
        e.preventDefault();
        post(route('menu.store'));
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
            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="mb-3">Nuevo Menú</h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={submit}>
                                                <div className="mb-3 row">
                                                    <div className="col-6">
                                                        <label htmlFor="nombre" className="form-label">Nombre</label>
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
                                                    <div className="col-6">
                                                        <label htmlFor="abreviatura" className="form-label">Abreviatura</label>
                                                        <input
                                                            id="abreviatura"
                                                            type="text"
                                                            name="abreviatura"
                                                            value={data.abreviatura}
                                                            className="form-control"
                                                            onChange={(e) => setData('abreviatura', e.target.value)}
                                                        />
                                                        <InputError message={errors.abreviatura} className="mt-2" />
                                                    </div>
                                                    <div className="col-6 my-3">
                                                        <label htmlFor="informacion" className="form-label">Información</label>
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
                                                {/* Input de búsqueda */}
                                                <h2 className='mb-3'>Seleccionar Componentes</h2>
                                                <div className="mb-3 col-3">
                                                    <input
                                                        id="search"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Buscar componentes..."
                                                        value={search}
                                                        onChange={(e) => setSearch(e.target.value)}
                                                    />
                                                </div>
                                                {/* Checkboxes para componentes */}
                                                <div className="mb-3">
                                                    <h4 className='mb-3'>Componentes</h4>
                                                    <div className="row">
                                                        {filteredComponents.map((componente) => (
                                                            <div className="col-4" key={componente.id}>
                                                                <div className="form-check">
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`component-${componente.id}`}
                                                                        className="form-check-input"
                                                                        checked={data.componentes.includes(componente.id)}
                                                                        onChange={() => handleCheckboxChange(componente.id)}
                                                                    />
                                                                    <label
                                                                        htmlFor={`component-${componente.id}`}
                                                                        className="form-check-label"
                                                                    >
                                                                        {componente.nombre}
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <InputError message={errors.componentes} className="mt-2" />
                                                </div>
                                                <hr />
                                                <div className="mb-3">
                                                    <label htmlFor="sn_activo" className="form-label">Activo</label>
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
                                                    <div className="col-6">
                                                        <button type="button" className="btn btn-secondary" onClick={() => reset()}>Limpiar</button>
                                                    </div>
                                                    <div className="col-6 d-flex justify-content-end">
                                                        <button type="submit" className="btn btn-primary">Guardar</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;