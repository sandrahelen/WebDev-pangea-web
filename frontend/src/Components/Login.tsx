import React from "react";

const Login = () => {
    return (
        <>
            <form>
                <h1>Logg inn med eksisterende bruker</h1>
                <p>Brukernavn:</p>
                <input type='text'/>
                <input type='submit' value="logg inn"/>
            </form>

        </>
        );
};
export default Login;