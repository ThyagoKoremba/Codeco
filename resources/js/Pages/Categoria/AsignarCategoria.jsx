import React, { useState, useEffect } from 'react';

const AsignarCategoria = ({ onClose }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [contacts, setContacts] = useState([]);
    const [selectedContactId, setSelectedContactId] = useState('');
    const [searchError, setSearchError] = useState('');

    useEffect(() => {
        // Fetch categories
        fetch('/categoria/list')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        setContacts([]); // Clear previous results
        setSelectedContactId(''); // Clear selected contact
        setSearchError('');

        if (term.length >= 5) {
            fetch(`/contacto/search?term=${term}`) // Replace with your actual API endpoint for searching contacts
                .then((response) => response.json())
                .then((data) => {
                    if (data.length > 0) {
                        setContacts(data);
                    } else {
                        setSearchError('No se encontraron contactos con ese término.');
                    }
                })
                .catch((error) => {
                    console.error('Error searching contacts:', error);
                    setSearchError('Error al buscar contactos.');
                });
        } else if (term.length > 0) {
            setSearchError('Ingrese al menos 5 caracteres para buscar.');
        }
    };

    const handleContactSelect = (contactId) => {
        setSelectedContactId(contactId);
        setContacts([]); // Hide the search results after selection
        setSearchTerm(''); // Clear the search term
        setSearchError('');
    };

    const handleAssign = () => {
        if (!selectedContactId) {
            alert('Por favor, seleccione un contacto.');
            return;
        }

        if (!selectedCategory) {
            alert('Por favor, seleccione una categoría.');
            return;
        }

        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        fetch(`/categoria/assignCategoryToUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify({ userId: selectedContactId, category: selectedCategory }), // Use selectedContactId
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Categoría asignada:', data);
                onClose();
            })
            .catch((error) => {
                console.error('Error asignando categoría:', error);
            });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h4>Asignar Categoría a Contacto</h4>

                <div className="mb-3">
                    <label htmlFor="contactSearch" className="form-label">Buscar Contacto:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactSearch"
                        placeholder="Ingrese al menos 5 caracteres"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    {searchError && <div className="form-text text-danger">{searchError}</div>}
                    {contacts.length > 0 && (
                        <ul className="list-group mt-2">
                            {contacts.map((contact) => (
                                <li
                                    key={contact.id}
                                    className={`list-group-item list-group-item-action ${selectedContactId === contact.id ? 'active' : ''}`}
                                    onClick={() => handleContactSelect(contact.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {contact.apellidorazonsocial || contact.car || `ID: ${contact.id}`} {/* Adjust based on your contact data */}
                                </li>
                            ))}
                        </ul>
                    )}
                    {selectedContactId && (
                        <div className="form-text text-success mt-2">Contacto seleccionado: {contacts.find(c => c.id === selectedContactId)?.apellidorazonsocial || `ID: ${selectedContactId}`}</div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="categorySelect" className="form-label">Seleccionar Categoría:</label>
                    <select
                        className="form-control"
                        id="categorySelect"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Seleccione una categoría</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.descripcion}
                            </option>
                        ))}
                    </select>
                </div>

                <button className="btn btn-success mt-3" onClick={handleAssign} disabled={!selectedContactId || !selectedCategory}>
                    Asignar
                </button>
                <button className="btn btn-secondary mt-3" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default AsignarCategoria;