import React, { useState, useEffect} from 'react';

import { Head, Link, useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/Sidebar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Index = ({ auth, contactos }) => {
  

  
    const [searchTerm, setSearchTerm] = useState('');
    const [contacts, setContacts] = useState();
  
useEffect(() => {

 fetch('https://api.argentinadatos.com/v1/feriados/2024')
 .then(response => response.json())
 .then(data => setContacts(data));
}, []);
   
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
            const updatedContacts = contacts.filter(contact => contact.id !== id);
            setContacts(updatedContacts);
            Inertia.delete(`/contacto/${id}`);
            Swal.fire('Eliminado', 'El contacto ha sido eliminado.', 'success');
        }
    });
};

  
    const filteredContacts = contacts?.filter(contact =>
        contact.nombre.toLowerCase().includes(searchTerm.toLowerCase())
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
                                        <th>Nombre</th>
                                        <th>Tipo</th>
                                        <th>Fecha</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredContacts?.map(contact => (
                                        <tr key={contact.id}>
                                            <td>{contact.nombre}</td>
                                            <td>{contact.tipo}</td>
                                            <td>{contact.fecha}</td>
                                            <td>
                                                <Link href={`/contacto/${contact.id}/edit`} className="btn btn-sm btn-primary" style={{ marginRight: '6px' }}>
                                                    Edit
                                                </Link>
                                                <button onClick={() => deleteContact(contact.id)} className="btn btn-sm btn-danger">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </AuthenticatedLayout>
            </DashboardLayout>
            <ToastContainer />
        </>
    );
    
}

export default Index;