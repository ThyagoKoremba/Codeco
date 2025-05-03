import React, { useState, useEffect } from 'react';

const CategoriaContacto = ({ userId }) => {
    const [categorias, setCategorias] = useState([]);
    const [showAssignModal, setShowAssignModal] = useState(false);

    useEffect(() => {
        if (userId) {
            fetch(`/api/getCategoriasByUserId/${userId}`)
                .then((response) => response.json())
                .then((data) => {
                    setCategorias(data);
                })
                .catch((error) => {
                    console.error('Error fetching categories:', error);
                });
        }
    }, [userId]);

    const handleAssignCategory = () => {
        setShowAssignModal(true);
    };

    const closeAssignModal = () => {
        setShowAssignModal(false);
    };

    return (
        <div className="container mt-4">
            <div className="row mb-3">
                <div className="col-md-9">
            <h3>Categorías</h3> 
                </div>
                <div className="col-md-3 text-right">
            <button className="btn btn-primary mb-3" onClick={handleAssignCategory}>
                Asignar Categorías
            </button>   
                </div>
            </div>
            {categorias.length === 0 ? (
                <p>No posee categorías asignadas.</p>
            ) : (
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map((categoria) => (
                            <tr key={categoria.id}>
                                <td>{categoria.categoria_descripcion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {showAssignModal && <AssignCategoryModal onClose={closeAssignModal} userId={userId} />}
        </div>
    );
};

const AssignCategoryModal = ({ onClose, userId }) => {
    const [newCategory, setNewCategory] = useState('');

    const handleAssign = () => {
        // Lógica para asignar la categoría al usuario
        fetch(`/api/assignCategoryToUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, category: newCategory }),
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
                <h4>Asignar Categoría</h4>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nueva categoría"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                />
                <button className="btn btn-success mt-3" onClick={handleAssign}>
                    Asignar
                </button>
                <button className="btn btn-secondary mt-3" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default CategoriaContacto;