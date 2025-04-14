import { Link } from "@inertiajs/react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./styles.css";
import Authenticated from "./AuthenticatedLayout";

export default function DashboardLayout({ children }) {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [activeMenuId, setActiveMenuId] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));

  const [searchTerm, setSearchTerm] = useState(""); 


  const datos = {
    usuarios: [
      {
        id: 1,
        nombre: "Instalador",
        perfiles: [
          {
            nombre: "Configurar",
            menus: [
              {
                id: 80,
                nombre: "Imibio",
                componente: [
                  { nombre: "General", url: "/imibio" },
                  { nombre: "Proyectos", url: "/imibio/proyectos" },
                ],
              },
              {
                id: 90,
                nombre: "Administrar",
                componente: [
                  { nombre: "Usuario", url: "https://dominiocliente/usuarioperfilrelacion" },
                  { nombre: "Perfil", url: "https://dominiocliente/usuarioperfilrelacion" },
                ],
              },
              {
                id: 132410,
                nombre: "test",
                componente: [
                  { nombre: "test", url: "/imibio" },
                  { nombre: "testtt", url: "/imibio/proyectos" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        nombre: "Administrador",
        perfiles: [
          {
            nombre: "Administrar Sistema",
            menus: [
              {
                id: 10,
                nombre: "Contactos",
                componente: [{ nombre: "Contactos", url: "https://dominiocliente/contactos" }],
              },
              {
                id: 20,
                nombre: "Categorias",
                componente: [{ nombre: "Categorias", url: "https://dominiocliente/categorias" }],
              },
            ],
          },
        ],
      },
    ],
  };

  const filteredUser = datos.usuarios.find((usuario) => usuario.id === Number(user?.id));

  const toggleMenu = (menuId) => {
    setActiveMenuId((prevId) => (prevId === menuId ? null : menuId));
  };
  

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
        variants={sidebarVariants}
        animate={sidebarVisible ? 'open' : 'closed'}

        style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}
      >
        <div>
          <button
            className="btn btn-light position-absolute top-0 end-0 m-2"
            style={{ border: "none", background: "none", color: "white", fontSize: "1.5rem" }}
            onClick={() => setSidebarVisible(!sidebarVisible)}
            title={sidebarVisible ? "Cerrar menú" : "Abrir menú"}
          >
            &#9776;
          </button>
          <h4 className="mb-4">CODECO</h4>

         
          <div className="container overflow-auto" style={{ maxHeight: "350px", minWidth: "250px", overflowY: "hidden" }}>
            {/* Buscador */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                style={{ maxWidth:'180px'  }}
              />
            </div>

            <ul className="nav flex-column">
  {filteredUser &&
    filteredUser.perfiles.flatMap((perfil) =>
      perfil.menus
        .filter((menu) =>
          menu.nombre.toLowerCase().includes(searchTerm) ||
          menu.componente.some((c) =>
            c.nombre.toLowerCase().includes(searchTerm)
          )
        )
        .map((menu) => (
          <li key={menu.id} className="nav-item dropdown">
            <button
              className="btn btn-link nav-link  text-white"
              type="button"
              onClick={() => toggleMenu(menu.id)}
              aria-expanded={activeMenuId === menu.id ? "true" : "false"}
            >
              {menu.nombre}
            </button>
            <div className={`collapse ${activeMenuId === menu.id ? "show" : ""}`}>
              <ul className="list-unstyled ps-3">
                {menu.componente
                  .filter((c) =>
                    c.nombre.toLowerCase().includes(searchTerm) ||
                    menu.nombre.toLowerCase().includes(searchTerm)
                  )
                  .map((componente, index) => (
                    <li key={index}>
                      <Link className="dropdown-item" href={componente.url}>
                        <small>{componente.nombre}</small>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
        ))
    )}
</ul>


          </div>
        </div>
          <footer className="bg-success text-white text-center py-3">
            <hr />
            <div className="container">
              <Authenticated user={user} />
              <hr />
              <p style={{ fontSize: "12px" }}>&copy; CODECO 2025</p>
            </div>
          </footer>
      </motion.div>

      {/* Contenido principal */}
      <motion.div className="flex-grow-1 p-4"
        style={{ overflow: 'hidden' }}
        animate={sidebarVisible ? 'open' : 'closed'}
        variants={contentVariants}
      >
        {!sidebarVisible && (
          <button
            className="btn btn-light mb-3"
            style={{ border: "none", background: "none", position: "sticky", top: 0, fontSize: "1.5rem" }}
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
