import react from "react";
import {gql, useQuery} from "@apollo/client";
import React from "react";
import {Table} from "react-bootstrap";
import Header from "./Header";

const GET_COUNTRY = gql`
    query country ($country: String){
        country (country: $country){
            country
            continent
            city
            dish
        }
    }
`;
const Info = () => {


    const {data, error, loading} = useQuery(GET_COUNTRY,
        {
            variables: {
                country: sessionStorage.getItem("country")
            }
        },);
    if (error) return <p>Error! ${error} </p>

    return (
        <>
            {error ? <p>Oh no! {error}</p> : null}
                {loading ? (<p>Loading ...</p>) : (
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Land</th>
                        <th>Hovedsted</th>
                        <th>Kontinent</th>
                        <th>Nasjonalrett</th>

                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.country.country}</td>
                            <td>{data.country.city}</td>
                            <td>{data.country.continent}</td>
                            <td>{data.country.dish}</td>
                        </tr>

                    </tbody>
                </Table>

                )}
        </>
    )
};

export default Info;