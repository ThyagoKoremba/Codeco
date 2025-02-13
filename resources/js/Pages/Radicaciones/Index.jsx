import React, { useState } from 'react';

import { Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/Sidebar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import Swal from 'sweetalert2';

import { Dropdown } from 'react-bootstrap';
const RadicacionesIndex = ({ auth, radicaciones, nombre, apellido }) => {

    

    const [searchTerm, setSearchTerm] = useState('');
    const [contacts, setContacts] = useState();

   console.log(radicaciones, nombre, apellido)

    const deleteContact = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedContacts = contacts.filter(contact => contact.id_contacto !== id);
                setContacts(updatedContacts);
                
                Inertia.delete(`/contacto/${id}`);
                Swal.fire('Eliminado', 'El contacto ha sido eliminado.', 'success');
            }
        });
    };


   

    return (
        <>
            <DashboardLayout>
                <AuthenticatedLayout user={auth.user} header={<h2>Radicaciones de  {apellido} , {nombre} </h2>}>
                    <div className="container mt-4">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    placeholder="Buscar contacto"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-md-6 text-right">
                                <Link href="/contacto/create" className="btn btn-dark">
                                    Crear 
                                </Link>
                            </div>
                        </div>
                        <div className="table-responsive" style={{ maxHeight: '500px', minHeight:'300px', overflowY: 'auto' }}>
                            <table className="table table-striped">
                                <thead className="thead-dark" style={{ position: 'sticky', top: 0 }}>
                                    <tr>
                                        <th>Pais</th>
                                        <th>Región</th>
                                        <th>Localidad</th>
                                        <th>Email</th>
                                        <th>Dirección</th>
                                        <th>Código Postal</th>
                                     
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {radicaciones?.map(contact => (
                                        <tr key={contact.id}>
                                            <td>{contact.pais}</td>
                                            <td>{contact.provincia}</td>
                                            <td>{contact.localidad}</td>
                                           
                                            <td>{contact.mail}</td>
                                            <td>{contact.direccion}</td>
                                            <td>{contact.codigo_postal}</td>
                                           
                                            <td>

                                                <Dropdown>
                                                    <Dropdown.Toggle  variant="dark " size="sm" className="w-100  ">
                                                   
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu >
                                                        <Dropdown.Item as={Link} href={`/contacto/${contact.id_contacto}/edit`}><button className="btn btn-info w-100">Editar</button></Dropdown.Item>
                                                          
                                                        <Dropdown.Item onClick={() => deleteContact(contact.id_contacto)}>
                                                        <button className="btn btn-danger w-100">Eliminar</button>
                                                        </Dropdown.Item>
                                                       
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </AuthenticatedLayout>
            </DashboardLayout>
        </>
    );

}

export default RadicacionesIndex;