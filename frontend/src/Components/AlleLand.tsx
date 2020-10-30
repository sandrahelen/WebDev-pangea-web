import React from "react";
import {Table} from "react-bootstrap";
import {gql, useQuery} from "@apollo/client";
//import { useQuery } from 'react-apollo-hooks';


const GET_COUNTRIES = gql`
    query countries ($filter: String!) {
        countries (filter: $filter){
            country
            continent
            city
            dish
        }
    }
`;

const AlleLand = () => {

    function filterContinent(continent:string) {
        sessionStorage.setItem('continent', continent);
        window.location.reload();
    }
    /*function sortContinent() {
        if (sessionStorage.getItem('sort') === 'false') {
            sessionStorage.setItem('sort', "true");
        }
        else {
            sessionStorage.setItem('sort', 'false');
        }
        console.log(sessionStorage.getItem('sort'))
        window.location.reload();
    }*/
    function search(searchtext:string) {
        sessionStorage.setItem('search', searchtext);
        window.location.reload();
    }

let input:any;
    const { data, error, loading } = useQuery(GET_COUNTRIES,
        {variables: { filter: sessionStorage.getItem('continent') || " ",
                search: sessionStorage.getItem('search') || " "}},);
    if (error) return <p>Error! ${error}</p>
    return (
        <>
            <h1>Alle land</h1>
            <button className={"Knapp"} onClick={() => filterContinent(" ")}>Alle land</button>
            <button className={"Knapp"} onClick={() => filterContinent("Asia")}>Asia</button>
            <button className={"Knapp"} onClick={() => filterContinent("Europe")}>Europe</button>
            <button className={"Knapp"} onClick={() => filterContinent("Africa")}>Africa</button>
            <button className={"Knapp"} onClick={() => filterContinent("Oceania")}>Oceania</button>
            <button className={"Knapp"} onClick={() => filterContinent("North America")}>North America</button>
            <button className={"Knapp"} onClick={() => filterContinent("South America")}>South America</button>
            <button className={"Knapp"} onClick={() => filterContinent("Antarctica")}>Antactica</button>
            <button className={"Knapp"} onClick={() => search("B")}>B</button>
            <button className={"Knapp"} onClick={() => search("Mi")}>Mi</button>


            <form
                onSubmit={e => {
                    e.preventDefault();
                    console.log(input.value)
                    sessionStorage.setItem('search', input.value);
                    console.log(sessionStorage.getItem('search'))
                    window.location.reload();
                }}
                >
                    <input
                        ref={node => {
                            input = node;
                        }}
                        type={"text"}
                        name={"search"}
                        placeholder={"Skriv her"}
                    />
                    <input type='submit' value="Søk land"/>
                </form>


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

                {data.countries.map((countryData: { country: React.ReactNode; city: React.ReactNode; continent: React.ReactNode; dish: React.ReactNode; }) => (
                    <tr>
                        <td>{countryData.country}</td>
                        <td>{countryData.city}</td>
                        <td>{countryData.continent}</td>
                        <td>{countryData.dish}</td>
                    </tr>
                ))}

                </tbody>
            </Table>
            )}
        </>
        );
};
export default AlleLand;

//       <SearchField placeholder="Search..." classNames="search"/>

/*const GET_COUNTRY = gql`
    query country($country: String!) {
        country(country: $country) {
            country
            city
            continent
            dish
        }
    }
`;*/

/*
<th>Hovedsted</th>
                  <th>Kontinent</th>
                  <th>Nasjonalrett</th>

const { loading, error, data } = useQuery<CountriesData>(GET_COUNTRIES, );
    if (error) return <p>Error! ${error}</p>
    {data && data.countriesData && data.countriesData.map(countryData => (
                    <tr>
                        <td>{countryData.country}</td>
                        <td>{countryData.city}</td>
                        <td>{countryData.continent}</td>
                        <td>{countryData.dish}</td>
                    </tr>
                ))}
 */

/*
const { loading, error, data } = useQuery(GET_COUNTRY, {variables: { country: 'Norway' },});
<tr>
                    <td>{data.country.country}</td>
                    <td>{data.country.city}</td>
                    <td>{data.country.continent}</td>
                    <td>{data.country.dish}</td>
                </tr>
 */