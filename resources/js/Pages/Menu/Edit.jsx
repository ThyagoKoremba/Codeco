import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';

const Edit = ({ auth, menu, componentes }) => {
    const initialValues = {
        nombre: menu.nombre,
        abreviatura: menu.abreviatura,
        informacion: menu.informacion,
        componentes: menu.componentes.map((componente) => componente.id), // IDs de componentes relacionados
    };

    const { data, errors, setData, put, reset } = useForm(initialValues);

    const [search, setSearch] = useState(''); // Estado para el texto de búsqueda

    const handleCheckboxChange = (componentId) => {
        const updatedComponents = data.componentes.includes(componentId)
            ? data.componentes.filter((id) => id !== componentId) // Quitar si ya está seleccionado
            : [...data.componentes, componentId]; // Agregar si no está seleccionado

        setData('componentes', updatedComponents);
    };

    const filteredComponents = componentes.filter((componente) =>
        componente.nombre.toLowerCase().includes(search.toLowerCase())
    ); // Filtrar componentes según el texto de búsqueda

    const submit = (e) => {
        e.preventDefault();
        put(route('menu.update', menu.id)); // Enviar los datos al backend
        console.log(data);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="d-flex justify-content-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Menú</h2>
                    <a href={route('menu.vista')}>
                        <button className="btn btn-primary">Menús</button>
                    </a>
                </div>
            }
        >
            <Head title="Editar Menú" />
            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="mb-3">Editar Menú</h1>
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
                                <div className="col-3 mb-3">
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
                                <div className="row">
                                    <div className="d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Guardar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;