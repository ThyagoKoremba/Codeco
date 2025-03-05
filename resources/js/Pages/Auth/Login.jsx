import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Iniciar Sesion" />

            {status && <div className="mb-4 font-medium text-sm text-success">{status}</div>}



            <form onSubmit={submit}>
                <div className="container w-75 mb-3">
                    <label htmlFor="email" className='form-label text-md-start'>Email</label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="form-control"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2 text-danger" />
                </div>

                <div className="container w-75 mb-3">
                    <label htmlFor="password" className='form-label text-md-start'>Contraseña</label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="form-control"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2 text-danger" />
                </div>
                <div className=' container w-75 mb-3'>
                    <div className="d-flex justify-content-start">
                        <input
                            type='checkbox'
                            name="remember"
                            checked={data.remember}
                            className="form-check-input mx-2"
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <label className="form-check-label">
                            Recordarme
                        </label>
                    </div>
                </div>


                <div className='mb-0 container w-75'>
                    <button className="btn btn-primary w-100" disabled={processing}>
                        Ingresar
                    </button>
                </div>


            </form>



        </GuestLayout>
    );
}
