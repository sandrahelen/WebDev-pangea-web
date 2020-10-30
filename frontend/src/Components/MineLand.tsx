import React from "react";
import { gql, useQuery, useMutation } from '@apollo/client';
import {Table} from "react-bootstrap";

const GET_VISITED = gql`
    query getVisitedCountries ($username: String!) {
        getVisitedCountries (username: $username){
            country
        }
    }
`;

const ADD_VISITOR = gql`
    mutation addVisitor ($username: String!, $country: String!) {
        addVisitor (username: $username, country: $country){
            country
        }
    }
`;

const MineLand = () => {

    const { data, error, loading } = useQuery(GET_VISITED, {variables: { username: sessionStorage.getItem('username')}},);
    const [addCountry] = useMutation(ADD_VISITOR);
    let input:any;
    if (error) return <p>Error! ${error}</p>

    return (
        <>
            <h1>Mine land</h1>
            <form
                    onSubmit={e => {
                        e.preventDefault();
                        addCountry({ variables: { username: sessionStorage.getItem('username'), country: input.value } });
                        input.value = '';
                        window.location.reload();
                    }}
                >
                    <input
                        id={"elementId"}
                        ref={node => {
                            input = node;
                        }}
                        type={"text"}
                        name={"username"}
                        placeholder={"Skriv her"}
                    />
                    <input type='submit' value="Legg til land"/>
                </form>

            {error ? <p>Oh no! {error}</p> : null}
            {loading ? (<p>Loading ...</p>) : (
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Land</th>
                </tr>
                </thead>
                <tbody>

                {data.getVisitedCountries.map((countryData: { country: React.ReactNode; }) => (
                    <tr>
                        <td>{countryData.country}</td>
                    </tr>
                ))}

                </tbody>
            </Table>
            )}
        </>
        );
};
export default MineLand;
