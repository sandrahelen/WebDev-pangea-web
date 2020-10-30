import React from "react";
import {gql, useMutation} from '@apollo/client';

const NEW_USER = gql`
    mutation signUp($username: String!) {
        signUp(username: $username) {
            username
        }
    }
`;

const Registrer = () => {

    let input:any;
    const [addUser, {error}] = useMutation(NEW_USER);
    if (error) return <p>Error! ${error.message}</p>

        return (
            <>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        addUser({ variables: { username: input.value } });
                        if (!error) {
                            sessionStorage.setItem('status', 'innlogget');
                            sessionStorage.setItem('username', input.value);
                            input.value = '';
                            window.location.reload();
                        }
                    }}
                >
                    <h1>Registrer ny bruker</h1>
                    <p>Brukernavn:</p>
                    <input
                        ref={node => {
                            input = node;
                        }}
                        type={"text"}
                        name={"username"}
                        placeholder={"Skriv her"}
                    />
                    <input type='submit' value="Registrer"/>
                </form>
            </>
        );

};
export default Registrer;