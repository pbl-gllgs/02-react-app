import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

import { MyCustomCheckbox, MyCustomSelect, MyTextInput } from '../components';

// const jobs = [
//     { name: 'Senior', id: '1' },
//     { name: 'Full Time', id: '2' },
//     { name: 'Part Time', id: '3' },
//     { name: 'Contract', id: '4' },
//     { name: 'Internship', id: '5' },
// ];

export const FormikAbstract = () => {
    return (
        <div>
            <h1>Formik Abstract</h1>
            <Formik
                initialValues={{
                    firstName: 'Pablo',
                    lastName: 'Gallegos',
                    email: 'pbl.gllgs@gmail.com',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Format invalid')
                        .required('Required'),
                    terms: Yup.boolean().oneOf(
                        [true],
                        'You must accept the terms and conditions'
                    ),
                    jobType: Yup.string()
                        .required('Required')
                        .notOneOf(
                            ['Internship'],
                            'Please select a different job type'
                        ),
                })}
            >
                {(formik) => (
                    <Form noValidate>
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            placeholder="First Name"
                        />
                        <MyTextInput
                            label="Last Name"
                            name="lastName"
                            placeholder="Last Name"
                        />

                        <MyTextInput
                            label="Email"
                            name="email"
                            placeholder="email@email.com"
                        />

                        <MyCustomSelect label="Job Type" name="jobType">
                            {/* {
                                types.map((type) => (
                                    <option key={type.id} value={type.name}>{type.name}</option>
                                ))
                            } */}
                            <option value="">Select</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                        </MyCustomSelect>

                        <MyCustomCheckbox
                            label="Terms and Conditions"
                            name="terms"
                        />

                        <button type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
