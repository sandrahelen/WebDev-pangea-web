import React from "react";

const Login = () => {
    function Logginn() {
        sessionStorage.setItem('status', 'innlogget');
    }
    return (
        <>
            <form onSubmit={Logginn}>
                <h1>Logg inn med eksisterende bruker</h1>
                <p>Brukernavn:</p>
                <input type='text'/>
                <input type='submit' value="logg inn"/>
            </form>

        </>
        );
};
export default Login;