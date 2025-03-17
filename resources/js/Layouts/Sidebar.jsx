
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import './styles.css';
import Authenticated from './AuthenticatedLayout';

export default function DashboardLayout({ children}) {const { permissionsJson } = usePage().props;
const [abilities, setAbilities] = useState([]);

useEffect(() => {
    fetch('/session-data')
        .then(response => response.json())
        .then(data => {
            setAbilities(data.abilities);
        })
        .catch(error => {
            console.error('Error fetching session data:', error);
        });
}, []);
console.log(abilities);


    const [sidebarVisible, setSidebarVisible] = useState(true);
    const user = JSON.parse(localStorage.getItem('user'));

    const sidebarVariants = {
        open: { width: '250px', opacity: 1, x: 0, transition: { duration: 0.3 } },
        closed: { width: '0px', opacity: 0, x: -250, transition: { duration: 0.3 } },
    };

    const contentVariants = {
        open: { transition: { duration: 0.3 } },
        closed: { marginLeft: '0px', transition: { duration: 0.3 } },
    };

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
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="/dashboard">Inicio</Link>
                        </li>
                        {abilities.map((ability, index) => (
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="/contacto/index">Contactos</Link>
                        </li>
                        ))}
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="/imibio/proyectos">Proyectos</Link>
                        </li>
                    </ul>

                </div>
                <footer className="bg-success text-white text-center py-3">

                    <hr></hr>
                    <div className="container ">
                        <Authenticated user={user} />
                        <p style={{ fontSize: '12px' }} >&copy; CODECO 2025</p>
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
