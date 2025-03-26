import NavLink from '@/Components/NavLink';

export default function Authenticated({ user }) {
    
    
    return (
        <>
      
            <div>
                <h4>{user.name}</h4>
                <ul className="list-unstyled ">
                    <li> <NavLink className='btn btn-success ' href={route('profile.edit')}>Perfil</NavLink></li>
                    <li> <NavLink  className='btn btn-success ' href={route('logout')} method="post" as="button">
                    Cerrar Sesión
                </NavLink></li>
                </ul>
               
               
            </div>

        </>
    );
}
