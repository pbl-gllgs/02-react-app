import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {
    const validate = (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.trim().length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }
        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.trim().length > 20) {
            errors.lastName = 'Must be 20 characters or less';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    };
    const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate,
    });
    return (
        <div>
            <h1>Formik tutorial</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firtName">first name</label>
                <input
                    type="text"
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                />
                {touched.firstName && errors.firstName && (
                    <span>{errors.firstName}</span>
                )}
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && (
                    <span>{errors.lastName}</span>
                )}
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};
