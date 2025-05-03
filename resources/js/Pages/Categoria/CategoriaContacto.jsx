import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const CategoriaContacto = ({ userId }) => {
    const [categorias, setCategorias] = useState([]);
    const [newCategoria, setNewCategoria] = useState('');
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        if (userId) {
            fetch(`/api/categorias/${userId}`)
                .then((response) => response.json())
                .then((data) => {
                    setCategorias(data.categorias || []);
                })
                .catch((error) => {
                    console.error('Error fetching categories:', error);
                });
        }
    }, [userId]);

console.log(userId);

    const handleCreateCategoria = () => {
        fetch(route('contacto.store'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            },
            body: JSON.stringify({ nombre: newCategoria }),
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((data) => {
                        throw data;
                    });
                }
                return response.json();
            })
            .then(() => {
                Swal.fire({
                    title: 'Categoría Creada',
                    text: 'La categoría ha sido creada exitosamente.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                setNewCategoria('');
                // Refetch categories
                return fetch(`/api/categorias/${userId}`)
                    .then((response) => response.json())
                    .then((data) => setCategorias(data.categorias || []));
            })
            .catch((error) => {
                setErrors(error);
                console.error('Error creating category:', error);
            });
    };

    return (
        <div>
            <h2>Categorías del Usuario</h2>
            {errors && <div className="text-red-500">{errors.message || 'Error al crear la categoría'}</div>}
            <ul>
                {categorias.map((categoria) => (
                    <li key={categoria.id}>{categoria.nombre}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newCategoria}
                    onChange={(e) => setNewCategoria(e.target.value)}
                    placeholder="Nueva Categoría"
                />
                <button onClick={handleCreateCategoria}>Crear Categoría</button>
            </div>
        </div>
    );
};

export default CategoriaContacto;