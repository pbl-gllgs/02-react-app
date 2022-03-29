import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
    const {
        formData,
        resetForm,
        email,
        name,
        password,
        passwordConfirm,
        onChange,
        onSubmit,
        isValidEmail,
    } = useForm({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={onSubmit} noValidate>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    name="name"
                    onChange={(event) => onChange(event)}
                    className={name.trim().length <= 0 ? 'has-error' : ''}
                />
                {name.trim().length <= 0 && (
                    <span>Este campo es necesario</span>
                )}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    name="email"
                    onChange={onChange}
                    className={`${isValidEmail(email)} && 'has-error'`}
                />
                {!isValidEmail(email) && <span>No es valido el email</span>}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={onChange}
                />
                {password.trim().length <= 0 && (
                    <span>Este campo es necesario</span>
                )}
                {password.trim().length < 6 && password.trim().length > 0 && (
                    <span>La contraseña tiene que tener 6 letras minimo</span>
                )}
                <input
                    type="password"
                    placeholder="Repeat password"
                    value={passwordConfirm}
                    name="passwordConfirm"
                    onChange={onChange}
                />
                {passwordConfirm.trim().length <= 0 && (
                    <span>Este campo es necesario</span>
                )}
                {password !== passwordConfirm && (
                    <span>Las contraseñas deben ser iguales</span>
                )}
                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>
                    Reset
                </button>
            </form>
        </div>
    );
};
