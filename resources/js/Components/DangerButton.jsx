export default function DangerButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `d-inline-flex align-items-center px-4 py-2 bg-danger border border-transparent rounded-circle font-semibold text-xs text-white uppercase tracking-widest hover:bg-danger hover:bg-opacity-75 active:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-danger focus:ring-opacity-50 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
