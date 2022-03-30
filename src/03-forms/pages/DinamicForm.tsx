import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import formJson from '../data/custom-form.json';
import { MyCustomSelect, MyTextInput } from '../components';
import { type } from 'os';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;
    if (!input.validations) continue;
    let schema = Yup.string();
    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required(rule.message);
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value, rule.message);
        }
        if (rule.type === 'maxLength') {
            schema = schema.max((rule as any).value, rule.message);
        }
        if (rule.type === 'email') {
            schema = schema.email(rule.message);
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object(requiredFields);

export const DinamicForm = () => {
    return (
        <div>
            <h1>DinamicForm</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={validationSchema}
            >
                {({ handleReset }) => (
                    <Form noValidate>
                        {formJson.map(
                            ({ type, name, placeholder, label, options }) => {
                                if (
                                    type === 'input' ||
                                    type === 'text' ||
                                    type === 'email'
                                ) {
                                    return (
                                        <MyTextInput
                                            key={name}
                                            label={label}
                                            name={name}
                                            type={type as any}
                                            placeholder={placeholder}
                                        />
                                    );
                                } else if (type === 'select') {
                                    return (
                                        <MyCustomSelect
                                            key={name}
                                            label={label}
                                            name={name}
                                        >
                                            <option>Select a option</option>
                                            {options?.map(({ id, label }) => (
                                                <option key={id} value={id}>
                                                    {label}
                                                </option>
                                            ))}
                                        </MyCustomSelect>
                                    );
                                }
                                throw new Error(`Type ${type} not supported`);
                            }
                        )}
                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleReset}>
                            Reset
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
