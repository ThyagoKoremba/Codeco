
import { Link} from '@inertiajs/react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import './styles.css';
import Authenticated from './AuthenticatedLayout';



export default function DashboardLayout({ children}) {

   
    
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.id);

   const datos= {
    "usuarios": [
      {
        "id": 1,
        "nombre": "Instalador",
        "perfiles": [
          {
            "nombre": "Configurar",
            "menus": [
              {
                "id": 80,
                "nombre": "Usuario -> Perfiles",
                "componente": {
                  "nombre": "UsuarioPerfilRelacion",
                  "url": "https://dominiocliente/usuarioperfilrelacion"
                }
              },
              {
                "id": 90,
                "nombre": "Usuario Comp. Excep.",
                "componente": {
                  "nombre": "UsuarioComponenteExcepcion",
                  "url": "https://dominiocliente/usuariocomponenteexcepcion"
                }
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "nombre": "Administrador",
        "perfiles": [
          {
            "nombre": "Administrar Sistema",
            "menus": [
              {
                "id": 10,
                "nombre": "Contactos",
                "componente": {
                  "nombre": "Contactos",
                  "url": "https://dominiocliente/contactos"
                }
              },
              {
                "id": 20,
                "nombre": "Categorias",
                "componente": {
                  "nombre": "Categorias",
                  "url": "https://dominiocliente/categorias"
                }
              }
            ]
          }
        ]
      }
    ]
  }
  

    const sidebarVariants = {
        open: { width: '250px', opacity: 1, x: 0, transition: { duration: 0.3 } },
        closed: { width: '0px', opacity: 0, x: -250, transition: { duration: 0.3 } },
    };

    const contentVariants = {
        open: { transition: { duration: 0.3 } },
        closed: { marginLeft: '0px', transition: { duration: 0.3 } },
    };

    const filteredUser = datos.usuarios.find((usuario) => usuario.id === Number(user?.id));


    

    return (
        <div className="d-flex">
            <motion.div
            className="bg-success text-white p-3 d-flex flex-column justify-content-between"
            style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
            variants={sidebarVariants}
            animate={sidebarVisible ? 'open' : 'closed'}
            >
            <div>
                <button
                className="btn btn-light position-absolute top-0 end-0 m-2"
                style={{ border: 'none', background: 'none', color: 'white', fontSize: '1.5rem' }}
                onClick={() => setSidebarVisible(!sidebarVisible)}
                title={sidebarVisible ? "Cerrar menú" : "Abrir menú"}
                >
                &#9776;
                </button>
                <h4 className="mb-4">CODECO</h4>

                <div className='container overflow-auto ' style={{ maxHeight: '350px', minWidth: '250px', overflowY: 'hidden' }}>
                <ul className="nav flex-column">
                    {filteredUser && (
                    <li key={filteredUser.id} className="nav-item">
                      
                        {filteredUser.perfiles.map((perfil) => (
                        <ul key={perfil.nombre} className="nav flex-column ms-3">
                            <li className="nav-item">
                               
                            {perfil.menus.map((menu) => (
                                
                                <ul key={menu.id} className="nav flex-column ms-3">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href={menu.componente.url}>{menu.nombre}</Link>
                                    <ul className="nav flex-column ms-3">
                                    <li className="nav-item">
                                        <span className="text-white">Componente: {menu.componente.nombre}</span>
                                    </li>
                                    </ul>
                                </li>
                                </ul>
                            ))}
                            </li>
                        </ul>
                        ))}
                    </li>
                    )}
                </ul>
                </div>
            </div>
            <footer className="bg-success text-white text-center py-3">
                <hr></hr>
                <div className="container">
                <Authenticated user={user} />
                <hr></hr>
                <p style={{ fontSize: '12px' }}>&copy; CODECO 2025</p>
                </div>
            </footer>
            </motion.div>
            <motion.div
            className="flex-grow-1 p-4"
            style={{ overflow: 'hidden' }}
            animate={sidebarVisible ? 'open' : 'closed'}
            variants={contentVariants}
            >
            {!sidebarVisible && (
                <button
                className="btn btn-light mb-3"
                style={{ border: 'none', background: 'none', position: 'sticky', top: 0, fontSize: '1.5rem' }}
                onClick={() => setSidebarVisible(!sidebarVisible)}
                title={sidebarVisible ? "Cerrar menú" : "Abrir menú"}
                >
                &#9776;
                </button>
            )}
            {children}
            </motion.div>
        </div>
        );
}
