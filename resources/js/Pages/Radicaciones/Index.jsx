import React, { useState, useEffect } from 'react';

import { Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/Sidebar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import Swal from 'sweetalert2';

import { Dropdown } from 'react-bootstrap';
const RadicacionesIndex = ({ auth, contactos }) => {

    

    const [searchTerm, setSearchTerm] = useState('');
    const [contacts, setContacts] = useState();

   

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


    const filteredContacts = contactos?.filter(contact =>
        contact.nombrefantasia.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <DashboardLayout>
                <AuthenticatedLayout user={auth.user} header={<h2>Contactos</h2>}>
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
                                    Crear Contacto
                                </Link>
                            </div>
                        </div>
                        <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                            <table className="table table-striped">
                                <thead className="thead-dark" style={{ position: 'sticky', top: 0 }}>
                                    <tr>
                                        <th>Apellido / Razon Social</th>
                                        <th>Nombre / Nombre Fantasia</th>
                                        <th>Persona</th>
                                        <th>Identificación</th>
                                        <th>Email</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredContacts?.map(contact => (
                                        <tr key={contact.id}>
                                            <td>{contact.apellidorazonsocial}</td>
                                            <td>{contact.nombrefantasia}</td>
                                            <td>{contact.fisicojuridico}</td>
                                            <td>{contact.fisicojuridico == 'JURIDICO' ? (contact.identidad_tributaria + ' ' + contact.id_identidadtributaria_dato) : (contact.identidad_personal + ' ' + contact.id_personal_dato)}</td>
                                            <td>{contact.mail_direccion}</td>
                                            <td>

                                                <Dropdown>
                                                    <Dropdown.Toggle  variant="dark " size="sm" className="w-100  ">
                                                   
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu >
                                                        <Dropdown.Item as={Link} href={`/contacto/${contact.id_contacto}/edit`}><button className="btn btn-info w-100">Editar</button></Dropdown.Item>
                                                          
                                                        <Dropdown.Item onClick={() => deleteContact(contact.id_contacto)}>
                                                        <button className="btn btn-danger w-100">Eliminar</button>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as={Link} href={`/contacto/${contact.id_contacto}/radicaciones`}>
                                                        <button className="btn btn-primary w-100">Radicaciones</button>
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