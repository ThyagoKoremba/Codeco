import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand text-white" href="/">
                        <ApplicationLogo className="d-inline-block align-top" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="container  ">
    <ul className="list-group ">
        <li className="list-group-item fw-bold">
            {user.name}
        </li>
        <li className="list-group-item">
            <NavLink className="text-decoration-none" href={route('profile.edit')}>
                Profile
            </NavLink>
        </li>
        <li className="list-group-item">
            <NavLink className="text-decoration-none btn  btn-sm px-3" 
                href={route('logout')} 
                method="post" 
                as="button">
                Log Out
            </NavLink>
        </li>
    </ul>
</div>

                </div>
            </nav>
            <main className="container my-4">{children}</main>
        </>
    );
}
