import React from "react";
import {gql, useMutation} from "@apollo/client";

const LOGIN_USER = gql`
    mutation signIn($username: String!) {
        signIn(username: $username) {
            username
        }
    }
`;

const Login = () => {
    let input:any;

    const [loginUser, {error}] = useMutation(LOGIN_USER);
    if (error) return <p>Error! ${error.message}</p>

    return (
        <>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    loginUser({ variables: { username: input.value } });
                    if (!error) {
                    sessionStorage.setItem('status', 'innlogget');
                    sessionStorage.setItem('username', input.value);
                    input.value = '';
                    window.location.reload();
                    }

                }}
                >
                <h1>Logg inn med eksisterende bruker</h1>
                <p>Brukernavn:</p>
                <input
                    ref={node => {
                        input = node;
                    }}
                    type={"text"}
                    name={"username"}
                    placeholder={"Skriv her"}
                />
                <input type='submit' value="Logg inn"/>
            </form>
        </>
        );
};
export default Login;