import { Link, Head } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-light">
                <div className="text-end p-3">
                    {auth.user ? (
                        <Link href={route('dashboard')} className="btn btn-primary">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="btn btn-primary me-2">
                                Log in
                            </Link>
                            <Link href={route('register')} className="btn btn-secondary">
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="text-center">
                    <h1>Welcome to Laravel</h1>
                    <p className="lead">Laravel v{laravelVersion} (PHP v{phpVersion})</p>
                </div>
            </div>
        </>
    );
}
