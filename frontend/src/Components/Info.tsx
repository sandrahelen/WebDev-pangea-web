import react from "react";
import {gql, useQuery} from "@apollo/client";
import React from "react";
import {Table} from "react-bootstrap";

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
        </tr>
        </thead>
        <tbody>

        {data.countries.map((countryData: { country: React.ReactNode; city: React.ReactNode; continent: React.ReactNode; dish: React.ReactNode; }) => (
                <tr>
                    <td>{countryData.country}</td>
                    <td></td>
                    </td>
                    <td>{countryData.continent}</td>

                    </tr>
            ))}

        </tbody>
        </Table>

    )
        </>
    );
}