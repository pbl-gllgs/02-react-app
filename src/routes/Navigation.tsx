import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                                to="/home"
                            >
                                Shopping Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                                to="/users"
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="about" element={<h1>About Page</h1>} />
                    <Route path="users" element={<h1>User Page</h1>} />
                    <Route path="home" element={<ShoppingPage />} />
                    <Route
                        path="/*"
                        element={<Navigate to="/home" replace />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
