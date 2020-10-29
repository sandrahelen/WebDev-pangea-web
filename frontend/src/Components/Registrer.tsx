import React, {useState} from "react";
import { Mutation } from "@apollo/client/react/components";
import {gql, useMutation, useQuery} from '@apollo/client';
import {Table} from "react-bootstrap";

const NEW_USER = gql`
    mutation signUp($username: String!) {
        signUp(username: $username) {
            username
        }
    }
`;

const Registrer = () => {
    function Registrer() {
        sessionStorage.setItem('status', 'innlogget');
    }

    let input:any;
    const [addUser, {data, error}] = useMutation(NEW_USER);
    if (error) return <p>Error! ${error.message}</p>
    //var inputValue = (<HTMLInputElement>document.getElementById(elementId)</HTMLInputElement>).value;


        return (
            <>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        addUser({ variables: { username: input.value } });
                        input.value = '';
                        sessionStorage.setItem('status', 'innlogget');
                        window.location.reload();
                    }}
                >
                    <h1>Registrer ny bruker</h1>
                    <p>Brukernavn:</p>
                    <input
                        id={"elementId"}
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