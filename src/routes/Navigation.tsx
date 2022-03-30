import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';

import logo from '../logo.svg';

import {
    FormikAbstract,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterPage,
    RegisterFormikPage,
    DinamicForm
} from '../03-forms/pages';

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
                                to="/register"
                            >
                                Register Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                                to="/formik-basic"
                            >
                                Formik Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                                to="/formik-yup"
                            >
                                Formik Yup Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                                to="/formik-components"
                            >
                                Formik components
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                                to="/formik-abstract"
                            >
                                Formik Abstract
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                                to="/register-formik"
                            >
                                Register Formik Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                                to="/dinamic"
                            >
                                Dinamic Form
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="formik-basic" element={<FormikBasicPage />} />
                    <Route path="formik-yup" element={<FormikYupPage />} />
                    <Route
                        path="formik-components"
                        element={<FormikComponents />}
                    />
                    <Route
                        path="formik-abstract"
                        element={<FormikAbstract />}
                    />
                    <Route
                        path="register-formik"
                        element={<RegisterFormikPage />}
                    />
                    <Route
                        path="dinamic"
                        element={<DinamicForm />}
                    />
                    <Route path="home" element={<h1>Home Page</h1>} />
                    <Route
                        path="/*"
                        element={<Navigate to="/home" replace />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
