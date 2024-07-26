import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const FormPage = ({ inputs, setInputs }) => {

    const [errors, setErrors] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const validate = (name, value) => {
        let error = "";
        if (name === "name" || name === "lastName") {
            error = value.length < 2 ? "Debe tener al menos 2 caracteres" : "";
        } else if (name === "email") {
            error = value.length < 5 ? "Debe tener al 5 caracteres" : "";
        } else if (name === "password") {
            error = value.length < 8 ? "Debe tener al menos 8 caracteres" : "";
        } else if (name === "confirmPassword") {
            error = value !== inputs.password ? "Las contraseñas no coinciden" : "";
        }
        return error;
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));

        const error = validate(name, value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
    };

    useEffect(() => {
        const passwordError = inputs.confirmPassword !== inputs.password ? "Las contraseñas no coinciden" : "";
        setErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: passwordError,
        }));
    }, [inputs.password, inputs.confirmPassword]);

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" onChange={handleChange} />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="lastName">Apellido</label>
                <input type="text" name="lastName" onChange={handleChange} />
                {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={handleChange} />
                {errors.confirmPassword && (
                    <p style={{ color: "red" }}>{errors.confirmPassword}</p>
                )}
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
}
FormPage.propTypes = {
    inputs: PropTypes.object.isRequired,
    setInputs: PropTypes.func.isRequired
};
export default FormPage;
