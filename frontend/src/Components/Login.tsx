import React from "react";

const Login = () => {
    let input:any;
    function Logginn() {
        sessionStorage.setItem('status', 'innlogget');
        sessionStorage.setItem('username', input.value);
        console.log(sessionStorage.getItem('username'))
    }
    return (
        <>
            <form onSubmit={Logginn}>
                <h1>Logg inn med eksisterende bruker</h1>
                <p>Brukernavn:</p>
                <input
                    ref={node => {
                        input = node;
                    }}
                    type={"text"}
                    name={"username"}
                    placeholder={"Skriv her"}/>
                <input type='submit' value="logg inn"/>
            </form>

        </>
        );
};
export default Login;