import React, { useState, useEffect } from 'react';
import AsignarCategoria from './AsignarCategoria'; // Importa el componente AsignarCategoria

const CategoriaContacto = ({ userId }) => {
    const [categorias, setCategorias] = useState([]);
    const [showAssignModal, setShowAssignModal] = useState(false);

    useEffect(() => {
        if (userId) {
            fetch(`/categoria/getCategoriasByUserId/${userId}`)
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
            {showAssignModal && <AsignarCategoria onClose={closeAssignModal} userId={userId} />}
        </div>
    );
};

export default CategoriaContacto;