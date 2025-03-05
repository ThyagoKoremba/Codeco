import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import "./../../css/app.css";

export default function Guest({ children }) {
    return (
        <div className="py-4">
            <div>



                <div className="container position-relative">
                    <div className='row justify-content-center'>
                        <div className='col-md-6'>
                            <div className='card'>
                                <div className='card-header'>Iniciar Sesión</div>

                                <div className='card-body'>
                                <img src="img/Imibio cosas-02.png" className="logo-img img-fluid mx-auto d-block mb-4" alt="Logo" />
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
