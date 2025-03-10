import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import DashboardLayout from '@/Layouts/SideBar';

export default function Dashboard({ auth }) {const { permissionsJson } = usePage().props;
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
    return (

        <DashboardLayout>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
        </DashboardLayout>
    );
}
