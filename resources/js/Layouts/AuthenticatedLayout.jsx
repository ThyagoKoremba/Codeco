import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-vh-100 bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <ApplicationLogo className="d-inline-block align-top" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${showingNavigationDropdown ? 'show' : ''}`}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLink className="nav-link" href={route('dashboard')} active={route().current('dashboard')}>
                                Inicio
                            </NavLink>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {user.name}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <Dropdown.Link className="dropdown-item" href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <Dropdown.Link className="dropdown-item" href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow-sm">
                    <div className="container py-3">{header}</div>
                </header>
            )}

            <main className="container my-4">{children}</main>
        </div>
    );
}
