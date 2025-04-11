import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import DashboardLayout from '@/Layouts/Sidebar';

const Edit = ({ auth, proyecto }) => {

    const initialValues = {
        proyectonombre: proyecto.proyectonombre,
        proyectoabreviatura: proyecto.proyectoabreviatura,
        fechainicio: proyecto.fechainicio,
        fechafinalizacion: proyecto.fechafinalizacion,
        productoressn: proyecto.productoressn,
        proyectodescripcion: proyecto.proyectodescripcion,
    }

    const { data, errors, setData, put } = useForm(initialValues)

    const submit = (e) => {
        e.preventDefault();
        put(route('proyecto.update', proyecto))
        console.log(data);
    }

    return (
        <DashboardLayout>
   
                <div className=' d-flex justify-content-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Proyecto</h2>
                    <a href={route('proyecto.index')}>
                    <button className='btn btn-primary'>Proyectos</button>
                    </a>
                </div>

            <div className="py-5">
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="mb-3">Editar Proyecto</h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={submit}>
                                                <div className='mb-3'>
                                                    <label htmlFor="proyectonombre" className='form-label'>Nombre</label>

                                                    <input
                                                        id="proyectonombre"
                                                        type="text"
                                                        name="proyectonombre"
                                                        value={data.proyectonombre}
                                                        className="form-control"
                                                        onChange={(e) => setData('proyectonombre', e.target.value)}
                                                    />

                                                    <InputError message={errors.proyectonombre} className="mt-2" />
                                                </div>
                                                <div className='mb-3'>
                                                    <label htmlFor="proyectoabreviatura" >Abreviatura</label>

                                                    <input
                                                        id="proyectoabreviatura"
                                                        type="text"
                                                        name="proyectoabreviatura"
                                                        value={data.proyectoabreviatura}
                                                        className="form-control"
                                                        onChange={(e) => setData('proyectoabreviatura', e.target.value)}
                                                    />

                                                    <InputError message={errors.proyectoabreviatura} className="mt-2" />
                                                </div>

                                                <div className='row m-3'>
                                                    <div className='col-6'>
                                                        <label htmlFor="fechainicio" value="Fecha de Inicio">Fecha Inicio</label>
                                                        <input
                                                            id="fechainicio"
                                                            type="date"
                                                            name="fechainicio"
                                                            value={data.fechainicio}
                                                            className="form-control"
                                                            onChange={(e) => setData('fechainicio', e.target.value)}
                                                        />

                                                        <InputError message={errors.fechainicio} className="mt-2" />
                                                    </div>
                                                    <div className='col-6'>
                                                        <label htmlFor="fechafinalizacion">Fecha de Finalización</label>

                                                        <input
                                                            id="fechafinalizacion"
                                                            type="date"
                                                            name="fechafinalizacion"
                                                            value={data.fechafinalizacion}
                                                            className="form-control"
                                                            onChange={(e) => setData('fechafinalizacion', e.target.value)}
                                                        />

                                                        <InputError message={errors.fechafinalizacion} className="mt-2" />
                                                    </div>
                                                </div>

                                                <div className='mb-3'>
                                                    <label htmlFor="productoressn" >Productores</label>

                                                    <input
                                                        id="productoressn"
                                                        type="checkbox"
                                                        name="productoressn"
                                                        checked={data.productoressn}
                                                        className="checkbox"
                                                        onChange={(e) => setData('productoressn', e.target.checked)}
                                                    />

                                                    <InputError message={errors.productoressn} className="mt-2" />
                                                </div>
                                                <div className='mb-3'>
                                                    <label htmlFor="proyectodescripcion" >Descripción</label>

                                                    <textarea
                                                        id="proyectodescripcion"
                                                        name="proyectodescripcion"
                                                        value={data.proyectodescripcion}
                                                        className="form-control"
                                                        onChange={(e) => setData('proyectodescripcion', e.target.value)}
                                                    />

                                                    <InputError message={errors.proyectodescripcion} className="mt-2" />
                                                </div>
                                                <div className="mb-3">
                                                    <button type="submit" className="btn btn-primary">Guardar</button>
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
            </DashboardLayout>
   
    )
}

export default Edit;