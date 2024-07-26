import {useState } from "react";
import PropTypes from 'prop-types';

const MainPage = ({inputs})=> {

    const {name, lastName, email, password, confirmPassword} = inputs;

    return (
    <div>
        <h4>Your from data</h4>
        <div>
            <p>First Name: {name}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Password Confirm: {confirmPassword}</p>                    
        </div>
    </div>
    );
}
MainPage.propTypes = {
    inputs:PropTypes.object.isRequired
};
export default MainPage