import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light pt-6">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20" />
                </Link>
            </div>

            <div className="w-100" style={{ maxWidth: '400px' }}>
                <div className="mt-6 p-4 bg-white shadow-sm rounded">
                    {children}
                </div>
            </div>
        </div>
    );
}
