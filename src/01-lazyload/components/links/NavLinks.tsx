import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes/routes';

export const NavLinks = () => {
    return (
        <>
            {routes.map(({to,name}) => (
                <li key={to}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'nav-active' : ''
                        }
                        to={to}
                    >
                        {name}
                    </NavLink>
                </li>
            ))}
        </>
    );
};
