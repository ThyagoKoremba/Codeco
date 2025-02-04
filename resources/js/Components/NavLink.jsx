import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo border-3 text-dark focus:border-indigo '
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-400 focus:text-gray-800 focus:border-gray-400 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
