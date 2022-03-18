import { Route } from 'react-router-dom';
import { routes } from '../../../routes/routes';

export const Rutas = () => {
    return (
        <>
            {routes.map(({to,path,Component}) => (
                <Route
                    key={to}
                    path={path}
                    element={<Component />}
                />
            ))}
        </>
    );
};
