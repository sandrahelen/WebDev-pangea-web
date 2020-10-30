import React from "react";
import { gql, useQuery } from '@apollo/client';
import {Table} from "react-bootstrap";
/*
const GET_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            username
        }
    }
`;
const { loading, error, data } = useQuery(GET_USER, {variables: { username: 'test5' },});
    if (loading) return null;
    if (error) return <p>Error! ${error}</p>
    <h1>Hello {data.user.username}!</h1>*/

const GET_VISITED = gql`
    query getVisitedCountries ($username: String!) {
        getVisitedCountries (username: $username){
            country
        }
    }
`;

const MineLand = () => {

    const { data, error, loading } = useQuery(GET_VISITED, {variables: { username: 'ingvild'}},);
    if (error) return <p>Error! ${error}</p>

    return (
        <>
            <h1>Mine land</h1>
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