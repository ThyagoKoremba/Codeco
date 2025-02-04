import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-vh-100 bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <ApplicationLogo className="h-9" />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                        aria-controls="navbarNav"
                        aria-expanded={showingNavigationDropdown}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${showingNavigationDropdown ? 'show' : ''}`} id="navbarNav">
                        <div className="navbar-nav">
                            <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                Dashboard
                            </NavLink>
                        </div>

                        <div className="ms-auto">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        {user.name}
                                    </button>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="container">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
