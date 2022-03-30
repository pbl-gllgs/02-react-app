import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Formik Abstract</h1>
            <Formik
                initialValues={{
                    name: 'Pablo',
                    email: 'pbl.gllgs@gmail.com',
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .min(2, 'Must be at least 2 characters')
                        .required('Required'),
                    email: Yup.string()
                        .email('Format invalid')
                        .min(6, 'Must be at least 5 characters')
                        .required('Required'),
                    password: Yup.string()
                        .required('Required')
                        .min(6, 'Must be at least 6 characters'),
                    confirmPassword: Yup.string()
                        .required('Required')
                        .min(6, 'Must be at least 6 characters')
                        .oneOf(
                            [Yup.ref('password'), null],
                            "Passwords don't match!"
                        ),
                })}
            >
                {({handleReset}) => (
                    <Form noValidate>
                        <MyTextInput
                            label="Name"
                            name="name"
                            type="text"
                            placeholder="Name"
                        />
                        <MyTextInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="email@email.com"
                        />
                        <MyTextInput
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                        <MyTextInput
                            label="Repeat password"
                            name="confirmPassword"
                            type="password"
                            placeholder="confirm password"
                        />
                        <button type="submit">Enviar</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
